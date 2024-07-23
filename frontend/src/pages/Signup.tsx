import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signup = () => {
    return (
        <div className="min-h-screen flex">
            <div className="flex-1 flex justify-center items-center bg-gray-100">
                <Auth type="signup" />
            </div>
            <div className="hidden lg:flex flex-1 bg-gray-200">
                <Quote />
            </div>
        </div>
    );
};
