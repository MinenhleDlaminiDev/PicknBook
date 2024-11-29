import { Routes, Route } from "react-router-dom";
import { HomePage, ProductDetail, ProductList, Register, Login, CartPage, OrderPage, DashboardPage, PageNotFound } from "../pages";
import ProtectedRoutes from "./ProtectedRoutes";

const AllRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>  } />
                <Route path="orders" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>  } />
                <Route path="dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>  } />

                <Route path="*" element={<PageNotFound />}/>

            </Routes>
        </>
     );
}
 
export default AllRoutes;