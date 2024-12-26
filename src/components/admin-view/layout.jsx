import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSidebar from "./sideBar";


const AdminLayout = () => {
    return (
        <div className="flex min-h-screen w-full">
            {/* admin sideBar  */}
            <AdminSidebar></AdminSidebar>
            <div className="flex flex-1 flex-col">
                {/* admin header */}
                <AdminHeader></AdminHeader>
                <main className="flex flex-1 bg-muted/40 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;