import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./custom-bootstrap.scss";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "components/layout/AdminLayout";
import CustomerSignUp from "pages/Auth/SignUp/CustomerSignUp";
import SignUpSuccess from "pages/Auth/SignUp/Success";
import CustomerLogin from "pages/Auth/Login/CustomerLogin";
import LoginOverview from "pages/Auth/Login/Overview";
import CheckoutPage from "pages/Checkout/CheckoutPage";
import ShoppingCart from "pages/Checkout/Cart/ShoppingCart";
import CheckoutSuccess from "pages/Checkout/Success";
import CustomerDashBoard from "pages/CustomerDashboard/Dashboard";
import CustomerOrderHistory from "pages/CustomerDashboard/OrderHistory";
import CustomerOrderProgress from "pages/CustomerDashboard/OrderProgress";
import CustomerAccountSettings from "pages/CustomerDashboard/AccountSettings";
import ProductList from "pages/Products/ProductList";
import ProductDetail from "pages/Products/ProductDetail";
import WishList from "pages/Wishlist/WishList";
import HomePage from "pages/Home/HomePage";
import AdminDashboard from "pages/AdminDashboard/Overview/Overview";
import CategoryForm from "pages/AdminDashboard/Categories/CategoryForm";
import AdminCategoryList from "pages/AdminDashboard/Categories/CategoryList";
import CustomerList from "pages/AdminDashboard/Customer/CustomerList";
import CustomerDetail from "pages/AdminDashboard/Customer/CustomerDetail";
import OrderList from "pages/AdminDashboard/Orders/OrderList";
import OrderDetail from "pages/AdminDashboard/Orders/OrderDetail";
import ProductForm from "pages/AdminDashboard/Products/ProductForm";
import AdminProductList from "pages/AdminDashboard/Products/ProductList";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import CustomerLayout from "components/layout/CustomerLayout";
import SignUpOverview from "pages/Auth/SignUp/Overview";
import MerchantLogin from "pages/Auth/Login/MerchantLogin";
import EmailVerification from "pages/Auth/SignUp/EmailVerification";
import MerchantSignUp from "pages/Auth/SignUp/MerchantSignUp";
import PasswordResetOverview from "pages/Auth/PasswordReset/Overview";
import PasswordResetVerification from "pages/Auth/PasswordReset/PasswordResetVerification";
import PasswordResetSuccess from "pages/Auth/PasswordReset/Success";
import PasswordResetNewPassword from "pages/Auth/PasswordReset/PasswordResetNewPassword";
import { EmailProvider } from "context/EmailContext";
import { AuthProvider } from "context/AuthContext";
function App() {
    return (
        <AuthProvider >
            <EmailProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        {/* Public Pages */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="signup" element={<SignUpOverview />} />
                        <Route
                            path="signup/customer"
                            element={<CustomerSignUp />}
                        />
                        <Route
                            path="signup/merchant"
                            element={<MerchantSignUp />}
                        />
                        <Route
                            path="signup/success"
                            element={<SignUpSuccess />}
                        />
                        <Route
                            path="signup/verify_email"
                            element={<EmailVerification />}
                        />
                        <Route path="login" element={<LoginOverview />} />
                        <Route
                            path="login/customer"
                            element={<CustomerLogin />}
                        />
                        <Route
                            path="login/merchant"
                            element={<MerchantLogin />}
                        />

                        <Route
                            path="reset_password"
                            element={<PasswordResetOverview />}
                        />
                        <Route
                            path="reset_password/verification"
                            element={<PasswordResetVerification />}
                        />
                        <Route
                            path="reset_password/newPassword"
                            element={<PasswordResetNewPassword />}
                        />
                        <Route
                            path="reset_password/success"
                            element={<PasswordResetSuccess />}
                        />

                        <Route path="checkout" element={<CheckoutPage />} />
                        <Route
                            path="shopping_cart"
                            element={<ShoppingCart />}
                        />
                        <Route
                            path="checkout_success"
                            element={<CheckoutSuccess />}
                        />

                        {/* Customer Dashboard */}
                        <Route path="customer" element={<CustomerLayout />}>
                            <Route index element={<CustomerDashBoard />} />
                            <Route
                                path="order_history"
                                element={<CustomerOrderHistory />}
                            />
                            <Route
                                path="order_progress"
                                element={<CustomerOrderProgress />}
                            />
                            <Route
                                path="account_settings"
                                element={<CustomerAccountSettings />}
                            />
                        </Route>

                        {/* Products Pages */}
                        <Route path="products" element={<ProductList />} />
                        <Route
                            path="products/:productId"
                            element={<ProductDetail />}
                        />

                        {/* WishList Page */}
                        <Route path="wishlist" element={<WishList />} />

                        {/* Admin Pages */}
                        <Route path="admin" element={<AdminLayout />}>
                            <Route index element={<AdminDashboard />} />
                            <Route
                                path="categories"
                                element={<AdminCategoryList />}
                            />
                            <Route
                                path="categories/new"
                                element={<CategoryForm />}
                            />
                            <Route
                                path="customers"
                                element={<CustomerList />}
                            />
                            <Route
                                path="customers/:customerId"
                                element={<CustomerDetail />}
                            />
                            <Route path="orders" element={<OrderList />} />
                            <Route
                                path="orders/:orderId"
                                element={<OrderDetail />}
                            />
                            <Route
                                path="products"
                                element={<AdminProductList />}
                            />
                            <Route
                                path="products/new"
                                element={<ProductForm />}
                            />
                        </Route>

                        {/* 404 Page */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </EmailProvider>
        </AuthProvider>
    );
}

export default App;
