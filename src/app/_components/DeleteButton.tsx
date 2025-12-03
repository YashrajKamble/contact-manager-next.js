"use client"

import React from 'react'
import { ContactType } from '../_types/contact'
import { FiTrash2 } from 'react-icons/fi';

type DeleteButtonProps = {
    contact?: ContactType;
}

const DeleteButton = ({ contact }: DeleteButtonProps) => {
    return <form action="" method='post'>
        <button type='submit' className='flex items-center text-red-600 gap-2 px-3 py-1 border border-red-300 rounded-md hover:border-red-400 hover:bg-red-100 cursor-pointer'
            onClick={(e) => {
                if (!confirm("Are you sure you want to delete this contact?")) {
                    e.preventDefault();
                }
            }}
        >
            <FiTrash2 className='text-red-500 text-lg' />
            Delete
        </button>
    </form>
}

export default DeleteButton