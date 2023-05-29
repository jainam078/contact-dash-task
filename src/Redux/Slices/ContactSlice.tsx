import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ContactFormIProps } from '../../Pages/Contact/ContactInterface'
import ContactList from '../../Pages/Contact/ContactList'

interface ContactStateIProps {
    contactList: ContactFormIProps[],
    contact?: ContactFormIProps | undefined
}

const initialState = { 
    contactList: [], 
} as ContactStateIProps

const contactSlice = createSlice({
    name: 'CONTACT_SLICE',
    initialState,
    reducers: {
        createContact(state, action) {
            const list = state.contactList;
            list.push(action.payload);
            state.contactList = list
        },
        updateContact(state, action) {
            const list = [...state.contactList];
            list.forEach((item)=>{
                if(item.id===action.payload.id){
                    item.firstName = action.payload.firstName;
                    item.lastName = action.payload.lastName
                    item.status = action.payload.status
                }
            })
            state.contactList = [...list]
        },
        getContact(state, action){
            const list = state.contactList;
            const data = list.find((item)=>item.id===action.payload)
            state.contact = data
        },
        deleteContact(state, action) {
            const list = state.contactList;
            list.splice(action.payload, 1);
            state.contactList = list
        },
    },
})

export const { createContact, updateContact, deleteContact, getContact } = contactSlice.actions
export default contactSlice.reducer