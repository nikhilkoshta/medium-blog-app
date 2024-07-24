import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-6 border-b border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer max-w-screen-md mx-auto my-4">
                <div className="flex items-center mb-4">
                    <Avatar name={authorName} />
                    <div className="pl-3">
                        <div className="text-gray-700 font-semibold">{authorName}</div>
                        <div className="text-gray-500 text-sm">{publishedDate}</div>
                    </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{title}</div>
                <div className="text-gray-700 mb-4">{content.slice(0, 100) + "..."}</div>
                <div className="text-gray-500 text-sm">{`${Math.ceil(content.length / 100)} minute(s) read`}</div>
            </div>
        </Link>
    );
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-gray-500 mx-1"></div>;
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-300 rounded-full ${size === "small" ? "w-8 h-8" : "w-12 h-12"}`}>
            <span className={`${size === "small" ? "text-sm" : "text-lg"} font-bold text-gray-700`}>
                {name[0]}
            </span>
        </div>
    );
}
