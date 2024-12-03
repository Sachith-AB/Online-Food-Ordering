import React from 'react'

export default function InputField({label,type,id,placeholder}) {
    return (
        <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-1">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300"
            />
        </div>
    )
}
