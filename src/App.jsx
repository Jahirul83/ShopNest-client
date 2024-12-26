import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminFeatures from "./pages/admin-view/features"
import AdminOrders from "./pages/admin-view/orders"
import AdminProducts from "./pages/admin-view/products"
import ShoppingLayout from "./components/shopping-view/layout"

function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}
      <h1>header component</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />}></Route>
          <Route path="register" element={<AuthRegister />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard/>}></Route>
          <Route path="features" element={<AdminFeatures />}></Route>
          <Route path="orders" element={<AdminOrders></AdminOrders>}></Route>
          <Route path="products" element={<AdminProducts></AdminProducts>}></Route>
        </Route>
        <Route path="/shop" element={<ShoppingLayout></ShoppingLayout>}></Route>
        <Route path="*" element={<ShoppingLayout></ShoppingLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App
