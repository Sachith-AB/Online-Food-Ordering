import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import PrimaryButton from './PrimaryButton';

export default function FeedbackForm() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center p-5">
            <h2 className="text-xl font-semibold mb-4">Rate Your Experience</h2>
            <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <button
                    key={index}
                    type="button"
                    className="text-2xl"
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                    >
                    <FaStar
                        size={30}
                        className={
                        starValue <= (hover || rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }
                    />
                    </button>
                );
                })}
            </div>
            {rating > 0 && (
                <p className="mt-4 text-lg font-medium">
                You rated: <span className="text-green-600">{rating}</span> out of 5
                </p>
            )}
            <textarea
                placeholder="Tell us more about your experience (optional)"
                className="mt-4 w-full max-w-md p-3 border-none bg-slate-100 rounded-lg focus:ring-0 focus:outline-none focus:border-transparent mb-5"
                rows="4"
            ></textarea>
            <PrimaryButton text={'Submit Feedback'} className=''/>
        </div>
    );
}
