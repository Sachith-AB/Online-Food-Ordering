import React from 'react';

import { MdPayments } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { FaHeart, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { Link , useLocation} from 'react-router-dom';

import colors from '../theme/colorPalate.js';

export default function SideBar() {

    const location = useLocation();
    const menuItem = [
        { name: "Profile", icon: <FaUser />, link: "/profile" },
        { name: "Orders", icon: <IoBagCheck />, link: "/" },
        { name: "Favorite", icon: <FaHeart />, link: "/favorite" },
        { name: "Address", icon: <FaLocationDot />, link: "/address" },
        { name: "Payment", icon: <MdPayments />, link: "/payment" },
        { name: "Sign Out", icon: <FaSignOutAlt />, link: "/payment" },
        
    ];

    return (
        <div
        className="w-full flex flex-col p-4"
        style={{
            backgroundColor: colors.primary.white,
            transition: "background-color 0.3s ease",
        }}
        >
        <nav>
            <ul className="space-y-4">
            {menuItem.map((item, index) => (
                <li key={index}>
                    <Link
                        to={item.link}
                        className="flex items-center gap-3 p-3 rounded-lg transition-all"
                        style={{
                            backgroundColor: location.pathname === item.link ? colors.primary.green : colors.primary.white,
                            color: location.pathname === item.link ? colors.primary.white : colors.primary.green,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.primary.green;
                                e.currentTarget.style.color = colors.primary.white;
                            }}
                            onMouseLeave={(e) => {
                                if (location.pathname === item.link) {
                                    e.currentTarget.style.backgroundColor = colors.primary.green; // Keep active styles on hover leave
                                    e.currentTarget.style.color = colors.primary.white;
                                    } else {
                                    e.currentTarget.style.backgroundColor = colors.primary.white;
                                    e.currentTarget.style.color = colors.primary.green;
                                }
                            }}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
        </div>
    );
}
