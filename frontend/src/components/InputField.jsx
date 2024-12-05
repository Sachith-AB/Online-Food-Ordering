import React from 'react'

export default function InputField({label,type,id,placeholder,value, onChange}) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-semibold mb-1">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300 focus:outline-none"
            />
        </div>
    )
}
