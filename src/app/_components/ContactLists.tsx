import React from 'react'
import { ContactType } from '../_types/contact'

const ContactLists = ({ contacts }: { contacts: ContactType[] }) => {
    return (
        <div className='space-y-4'>{contacts.map((contact) => (
            <div key={contact.id} className='p-4 border rounded-lg'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h2 className='text-lg font-semibold'>{contact.name}</h2>
                        <p>{contact.email}</p>
                    </div>
                </div>
            </div>
        ))}</div>
    )
}

export default ContactLists