import React from 'react'
import { getSession } from '../_lib/session'
import { getContacts } from '../api/contact'
import ContactLists from '../_components/ContactLists'

const ContactPage = async () => {
    const user = await getSession()

    if (!user) {
        return (
            <div>
                Please {" "}

                <a
                    href="/login"
                    className='text-blue-600 hover:underline'>
                    Login
                </a>{" "}
                to view contacts
            </div>
        )
    }

    const contacts = await getContacts(user?.id)
    console.log(contacts)
    if (!contacts || contacts.length === 0) {
        return (
            <div>
                Please {" "}
                <a
                    href="/contact/new"
                    className='text-blue-600 hover:underline'>
                    Add a Contact
                </a>{" "}
                to your contact lists
            </div>
        )
    }

    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <h1>Your Contacts</h1>
                <a href="/contact/new" className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md'>Add Contact
                </a>
            </div>
            <ContactLists contacts={contacts} />
        </div>
    )
}

export default ContactPage