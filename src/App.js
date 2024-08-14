import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./custom-bootstrap.scss"
import CategoryForm from "pages/AdminDashboard/Categories/CategoryForm";
import Header from "components/layout/Header/Header.js";
import AdminDashboard from "pages/AdminDashboard/Overview/Overview";
import HomePage from "pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminCategoryList from "pages/AdminDashboard/Categories/CategoryList";
import CustomerList from "pages/AdminDashboard/Customer/CustomerList";
import CustomerDetail from "pages/AdminDashboard/Customer/CustomerDetail";
import OrderList from "pages/AdminDashboard/Orders/OrderList";
import OrderDetail from "pages/AdminDashboard/Orders/OrderDetail";
import ProductForm from "pages/AdminDashboard/Products/ProductForm";
import AdminProductList from "pages/AdminDashboard/Products/ProductList";
import CustomerSignUp from "pages/Auth/CustomerSignUp/SignUpForm";
import SignUpSuccess from "pages/Auth/CustomerSignUp/Success";
import LoginForm from "pages/Auth/Login/LoginForm";
import LoginOverview from "pages/Auth/Login/Overview";
import CheckoutPage from "pages/Checkout/CheckoutPage";
import ShoppingCart from "pages/Checkout/ShoppingCart";
import CheckoutSuccess from "pages/Checkout/Success";
import CustomerDashBoard from "pages/CustomerDashboard/Dashboard";
import CustomerOrderHistory from "pages/CustomerDashboard/OrderHistory";
import CustomerOrderProgress from "pages/CustomerDashboard/OrderProgress";
import CustomerAccountSettings from "pages/CustomerDashboard/AccountSettings";
import ProductList from "pages/Products/ProductList";
import ProductDetail from "pages/Products/ProductDetail";
import WishList from "pages/Wishlist/WishList";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Homepage */}
                <Route path="/" element={<HomePage />} />

                {/* Admin Pages */}
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="category_form" element={<CategoryForm />} />
                <Route
                    path="admin_category_list"
                    element={<AdminCategoryList />}
                />
                <Route path="customer_list" element={<CustomerList />} />
                <Route path="customer_detail" element={<CustomerDetail />} />
                <Route path="admin_order_list" element={<OrderList />} />
                <Route path="admin_order_detail" element={<OrderDetail />} />
                <Route path="product_form" element={<ProductForm />} />
                <Route
                    path="admin_product_list"
                    element={<AdminProductList />}
                />

                {/* Authentication Pages */}
                <Route path="customer_signup" element={<CustomerSignUp />} />
                <Route
                    path="customer_signup_success"
                    element={<SignUpSuccess />}
                />
                <Route path="login" element={<LoginForm />} />
                <Route path="login_overview" element={<LoginOverview />} />

                {/* Checkout Pages */}
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="shopping_cart" element={<ShoppingCart />} />
                <Route path="checkout_success" element={<CheckoutSuccess />} />

                {/* Customer Dashboard */}
                <Route
                    path="customer_dashboard"
                    element={<CustomerDashBoard />}
                />
                <Route
                    path="customer_order_history"
                    element={<CustomerOrderHistory />}
                />
                <Route
                    path="customer_order_progress"
                    element={<CustomerOrderProgress />}
                />
                <Route
                    path="customer_account_settings"
                    element={<CustomerAccountSettings />}
                />

                {/* Products Pages */}
                <Route path="product_list" element={<ProductList />} />
                <Route path="product_detail" element={<ProductDetail />} />

                {/* WishList Page */}
                <Route path="wishlist" element={<WishList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
