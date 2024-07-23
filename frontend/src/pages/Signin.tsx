import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signin = () => {
    return (
        <div className="min-h-screen flex">
            <div className="flex-1 flex justify-center items-center bg-gray-100">
                <Auth type="signin" />
            </div>
            <div className="hidden lg:flex flex-1 bg-gray-200">
                <Quote />
            </div>
        </div>
    );
};
