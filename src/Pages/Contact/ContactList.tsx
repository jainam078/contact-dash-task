import React, {useEffect, useState} from 'react'
import { CardStyle } from './Contact.Style';
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../../Components/FormElements/Button';
import {useSelector, useDispatch} from 'react-redux';
import { ContactFormIProps } from './ContactInterface';
import { deleteContact } from '../../Redux/Slices/ContactSlice';
import NoRecordFound from '../../Components/NoRecordFound/NoRecordFound';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { AiOutlineUserAdd, AiOutlinePlus } from "react-icons/ai";
import Loader from '../../Components/Loading/Loader';
import { FaPencilAlt, FaTrashAlt, FaPlus } from "react-icons/fa";

const ContactList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<Boolean>(true)
    const [deleteLoading, setDeleteLoading] = useState<any>('')

    const handleNavigate = () => {
        navigate('/contact/form')
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    const {contactList} = useSelector((state:any)=>{
        return{
            contactList: state.contact.contactList
        }
    })

    function handleDelete(contact: ContactFormIProps):void{
        setDeleteLoading(contact.id)
        setTimeout(()=>{
            dispatch(deleteContact(contact.id))
            setDeleteLoading('')
        },1000)
    }

    if(loading){
        return <Loader spinner={loading}/>
    }

    return(
        <>
            <BreadCrumb
                icon={<AiOutlineUserAdd className='h-5 w-5'/>}
                title="Contact"
                subTitle="Manage your contacts"
            />
            <div className='grid grid-cols-1 gap-4'>
                <div className="flex items-center justify-end mb-4">
                    <Button
                        variant='primary'
                        onClick={handleNavigate}
                    >
                        <FaPlus className='mr-2 mt-0.5'/>
                        Create Contact
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                {contactList?.map((contact: ContactFormIProps, index:number)=>{
                    return(
                        <CardStyle status={contact.status==='0' ? 'Inactive' : 'Active'} key={index}>
                            <p>
                                <label>First Name:</label>
                                <span>{contact.firstName}</span>
                            </p>
                            <p>
                                <label>Last Name:</label>
                                <span>{contact.lastName}</span>
                            </p>
                            <p>
                                <label>Status:</label>
                                <span>{contact.status==='0' ? 'Inactive' : 'Active'}</span>
                            </p>
                            <div className='flex'>
                                <Button
                                    type='button'
                                    variant='primary'
                                    onClick={()=>navigate(`/contact/form/${contact.id}`)}
                                >
                                    <FaPencilAlt className='mr-2 mt-0.5'/>
                                    Edit
                                </Button>
                                <Button
                                    type='button'
                                    variant='danger'
                                    disabled={deleteLoading===contact.id}
                                    loading={deleteLoading===contact.id}
                                    onClick={()=>handleDelete(contact)}
                                >
                                    <FaTrashAlt className='mr-2 mt-0.5'/>
                                    Delete
                                </Button>
                            </div>
                        </CardStyle>
                    )
                })}
            </div>
            {!contactList?.length && (
                <NoRecordFound
                    title1="No contact found"
                    title2="Please add contact from create contact button."
                />
            )}
            <Outlet/>
        </>
        
    )
}
export default ContactList;