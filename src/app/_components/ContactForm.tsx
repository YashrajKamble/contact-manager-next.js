"use client"

import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact';

type ContactFormProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact?: ContactType;
}


const ContactForm = ({ action, contact }: ContactFormProps) => {
    const [state, formAction] = useActionState(action, null)
    return (
        <form action={formAction} className="space-x-4">
            <div>
                <label htmlFor='name' className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name here"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:right-blue-500 sm:text-sm p-2"
                />
            </div>

            <div className="mt-3">
                <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email Id here"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:right-blue-500 sm:text-sm p-2"
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4">
                Save Contact
            </button>
        </form>
    )
}

export default ContactForm