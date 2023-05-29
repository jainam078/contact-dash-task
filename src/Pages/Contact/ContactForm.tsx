import React, {useEffect, useState} from 'react';
import { ContactFormIProps, StatusOptionsProps } from './ContactInterface';
import Input from '../../Components/FormElements/Input';
import * as Yup from 'yup';
import {
    Formik,
    Form,
  } from 'formik';
import Button from '../../Components/FormElements/Button';
import { Outlet, useNavigate } from 'react-router-dom'
import RadioInput from '../../Components/FormElements/RadioInput';
import {idGenerator} from '../../Utlis/Common'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import { createContact, updateContact, getContact } from '../../Redux/Slices/ContactSlice';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { AiOutlineUserAdd } from "react-icons/ai";
import NoRecordFound from '../../Components/NoRecordFound/NoRecordFound';
import Loader from '../../Components/Loading/Loader';
import { FaCheck, FaAngleLeft } from "react-icons/fa";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    status: Yup.string(),
});

const statusOptions: StatusOptionsProps[] = [
    {text: 'Active', value: '1'},
    {text: 'Inactive', value: '0'},
]

const initialValues: ContactFormIProps = { firstName: '', lastName: '', status: '0' };

function ContactForm(): JSX.Element {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    const [loading, setLoading] = useState<boolean>(false)
    const [saveLoading, setSaveLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)
    const [initialValue, setInitialValue] = useState<ContactFormIProps>(initialValues)

    const {contact} = useSelector((state: any)=>{
        return{
            contact: state?.contact?.contact
        }
    })

    useEffect(()=>{
        if(id){
            setLoading(true)
            dispatch(getContact(id))
            setTimeout(()=>{
                setLoading(false)
            },1000)
        }
    },[id])

    useEffect(()=>{
        if(contact && id){
            setInitialValue(contact)
            setHasError(false)
        }
        if(!contact && id){
            setHasError(true)
        }
    },[contact])
    
    const handleNavigate = () => {
        navigate('/contact')
    }

    if(loading){
        return <Loader spinner={loading}/>
    }

    return(
        <div className='grid grid-cols-1 gap-4'>
            <div className='contact-form'>
                    <BreadCrumb
                        icon={<AiOutlineUserAdd className='h-5 w-5'/>}
                        title="Contact"
                        subTitle="Crate/Update contact"
                    />
                    {hasError && (
                        <NoRecordFound 
                            title1='Error!'
                            title2="Unable to fetch data, data has been deleted or you are trying to hit direct URL."
                        />
                    )}
                    
                    {!hasError && <Formik
                        enableReinitialize
                        initialValues={initialValue}
                        validationSchema={SignupSchema}
                        onSubmit={(values: ContactFormIProps, actions) => {
                            setSaveLoading(true)
                            if(id){
                                dispatch(updateContact({...values, id: id}))
                            }else{
                                dispatch(createContact({...values, id: idGenerator()}))
                            }
                            setTimeout(()=>{
                                handleNavigate()
                            }, 1000)
                            actions.setSubmitting(false);
                        }}
                    >
                        {({ errors, touched, values, handleChange, setFieldValue, isSubmitting }) => (
                            <Form>
                                <Input
                                    type='text'
                                    placeholder="First Name"
                                    id="firstName"
                                    label="First Name"
                                    value={values?.firstName}
                                    onChange={handleChange}
                                    error={errors.firstName && touched.firstName && errors.firstName}
                                />
                                <Input
                                    type='text'
                                    placeholder="Last Name"
                                    id="lastName"
                                    label="Last Name"
                                    value={values?.lastName}
                                    onChange={handleChange}
                                    error={errors.lastName && touched.lastName && errors.lastName}
                                />
                                <div className="flex flex-wrap mt-3 mb-3">
                                    <label className='mb-2 w-full'>Status</label>
                                    {statusOptions?.map((status, index)=>{
                                        return(
                                            <RadioInput
                                                key={index}
                                                label={status.text}
                                                id={`status-${index}`}
                                                name='status'
                                                value={status.value}
                                                onClick={(e:any)=>setFieldValue('status', e.target.value)}
                                                checked={values?.status===status.value}
                                            />
                                        )
                                    })}
                                </div>
                                <div className='flex justify-end md:mt-2 mt-5'>
                                    <Button
                                        type='button'
                                        onClick={handleNavigate}
                                    >
                                        <FaAngleLeft className='mr-2 mt-0.5'/>
                                        Cancel
                                    </Button>
                                    <Button
                                        type='submit'
                                        variant='primary'
                                        loading={isSubmitting || saveLoading}
                                        disabled={isSubmitting || saveLoading}
                                    >
                                        <FaCheck className='mr-2 mt-0.5'/>
                                        {id ? 'Update' : 'Save'}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>}
            </div>
            <Outlet/>
        </div>
    )
}
export default ContactForm;