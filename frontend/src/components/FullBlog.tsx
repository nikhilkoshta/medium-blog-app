import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Appbar />
            <div className="flex justify-center py-10">
                <div className="max-w-screen-xl w-full bg-white rounded-lg shadow-md p-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-8">
                            <div className="text-5xl font-extrabold text-gray-900 mb-4">
                                {blog.title}
                            </div>
                            <div className="text-gray-500 text-sm mb-6">
                                Posted on 2nd December 2023
                            </div>
                            <div className="text-gray-700 leading-relaxed">
                                {blog.content}
                            </div>
                        </div>
                        <div className="md:col-span-4">
                            <div className="text-gray-600 text-lg mb-4">
                                Author
                            </div>
                            <div className="flex items-center">
                                <div className="pr-4 flex flex-col justify-center">
                                    <Avatar size="big" name={blog.author.name || "Anonymous"} />
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-gray-900">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className="pt-2 text-gray-500">
                                        Random catchphrase about the author's ability to grab the user's attention
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
