import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

const ShoppingLayout = () => {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* common header */}
            <ShoppingHeader></ShoppingHeader>
            <div className="flex flex-col w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ShoppingLayout;