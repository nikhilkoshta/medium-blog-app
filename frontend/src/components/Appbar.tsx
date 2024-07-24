import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, MouseEvent } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Appbar = () => {
    const [username, setUsername] = useState<string | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const response = await axios.get(`${BACKEND_URL}/api/v1/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUsername(response.data.user.username);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchUserProfile();
    }, []);

    const handleProfileClick = (e: MouseEvent) => {
        e.stopPropagation();
        setDropdownOpen(prev => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    return (
        <div className="border-b flex justify-between px-10 py-4 bg-white shadow-md">
            <Link to={'/blogs'} className="flex items-center text-gray-900 font-bold text-lg">
                Medium
            </Link>
            <div className="relative flex items-center">
                <Link to={`/publish`}>
                    <button
                        type="button"
                        className="mr-4 text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        New
                    </button>
                </Link>
                <button
                    type="button"
                    className="flex items-center"
                    onClick={handleProfileClick}
                >
                    <Avatar size={"big"} name={username ? username[0] : 'U'} />
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        <Link to={`/dashboard`} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                            Profile
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
