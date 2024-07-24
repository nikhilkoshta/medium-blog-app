import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Blog } from "../hooks";
import { Avatar } from "../components/BlogCard";
import { Appbar } from "../components/Appbar"; // Ensure Appbar is imported

export const Dashboard = () => {
    const [name, setName] = useState<string>("");
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
                    }
                });
                setName(response.data.user.name);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        const fetchUserBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/user`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
                    }
                });
                setBlogs(response.data.blogs);
            } catch (error) {
                console.error("Error fetching user blogs:", error);
            }
        };

        fetchUserData();
        fetchUserBlogs();
    }, []);

    const handlePublishNewBlog = () => {
        navigate("/publish");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    return (
        <div className="w-full h-screen flex flex-col">
            <Appbar />
            <div className="w-full flex-1 p-8">
                <div className="flex items-center mb-8">
                    <Avatar size="big" name={name || "A"} />
                    <div className="ml-4 text-2xl font-bold">{name}</div>
                </div>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold">Your Blogs</h2>
                    <button
                        onClick={handlePublishNewBlog}
                        className="text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Publish New Blog
                    </button>
                </div>
                <div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : blogs.length > 0 ? (
                        <div>
                            {blogs.map(blog => (
                                <div key={blog.id} className="p-4 border-b border-slate-200 mb-4">
                                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                                    <p className="text-sm text-slate-500">{blog.content.slice(0, 100) + "..."}</p>
                                    <button
                                        onClick={() => navigate(`/blog/${blog.id}`)}
                                        className="text-blue-600 hover:text-blue-800 mt-2"
                                    >
                                        Read More
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p>You haven't published any blog.</p>
                        </div>
                    )}
                </div>
                <div className="mt-8">
                    <button
                        onClick={handleLogout}
                        className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};
