import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function InputField({
    label,
    type,
    id,
    placeholder,
    value,
    setFormData,
    error,
    icon
    }) {
    const [visibility,setVisibility] = useState(false);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value.trim(),
        }));
    };

    const toggleVisibility = () => {
        setVisibility(!visibility);
    }
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-semibold mb-1">
                {label}
            </label>
            <div className='relative w-full'>
                <input
                    type={visibility && visibility ? "text":type}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300 focus:outline-none"
                    style={{
                        borderColor: error ? "red" : "", // Conditional border color
                    }}
                />
                {
                    icon && (
                        <div className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                            onClick={toggleVisibility}
                        >
                            {
                                visibility ? <FaRegEyeSlash/>:<FaRegEye/>
                            }
                        </div>
                    )
                }
            </div>
            {
                error && (
                    <p className='text-red-600 font-semibold'>{error}</p>
                )
            }
        </div>
    )
}
