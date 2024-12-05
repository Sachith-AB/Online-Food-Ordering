import React from 'react'

export default function InputField({
    label,
    type,
    id,
    placeholder,
    value,
    setFormData,
    error}) {
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value.trim(),
        }));
    };
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
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300 focus:outline-none"
                style={{
                    borderColor: error ? "red" : "", // Conditional border color
                }}
            />
            {
                error && error !=''(
                    <p className='text-red-600 font-semibold'>{error}</p>
                )
            }
        </div>
    )
}
