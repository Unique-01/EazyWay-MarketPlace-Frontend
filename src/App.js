import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./custom-bootstrap.scss";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerSignUp from "pages/Auth/SignUp/CustomerSignUp";
import SignUpSuccess from "pages/Auth/SignUp/Success";
import CustomerLogin from "pages/Auth/Login/CustomerLogin";
import LoginOverview from "pages/Auth/Login/Overview";
import CheckoutPage from "pages/Checkout/CheckoutPage";
import ShoppingCart from "pages/Checkout/Cart/ShoppingCart";
import CheckoutSuccess from "pages/Checkout/Success";
import CustomerDashBoard from "pages/CustomerDashboard/Dashboard";
import CustomerOrderHistory from "pages/CustomerDashboard/OrderHistory";
import CustomerOrderDetails from "pages/CustomerDashboard/OrderDetails";
import CustomerAccountSettings from "pages/CustomerDashboard/AccountSettings";
import ProductList from "pages/Products/ProductList";
import ProductDetail from "pages/Products/ProductDetail";
import WishList from "pages/Wishlist/WishList";
import HomePage from "pages/Home/HomePage";
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
import { ProductCategoryProvider } from "context/ProductCategoryContext";
import AxiosSetup from "api/apiClient";
import MerchantLayout from "components/layout/MerchantLayout";
import MerchantDashboard from "pages/MerchantDashboard/Dashboard";
import MerchantProductList from "pages/MerchantDashboard/Products/ProductList";
import ProductCreate from "pages/MerchantDashboard/Products/ProductCreate";
import MerchantOrderList from "pages/MerchantDashboard/Orders/OrderList";
import MerchantOrderDetails from "pages/MerchantDashboard/Orders/OrderDetails";
import CustomerPayment from "pages/MerchantDashboard/Payments";
import { MerchantProductProvider } from "context/MerchantProductContext";
import ProductDetails from "pages/MerchantDashboard/Products/ProductDetails";
import ProductUpdate from "pages/MerchantDashboard/Products/ProductUpdate";
import { NotificationProvider } from "context/NotificationContext";
import { ProductProvider } from "context/ProductContext";

function App() {
    return (
        <AuthProvider>
            <EmailProvider>
                <ProductCategoryProvider>
                    <MerchantProductProvider>
                        <NotificationProvider>
                            <ProductProvider>
                                <BrowserRouter>
                                    <AxiosSetup />
                                    <Header />
                                    <Routes>
                                        <Route
                                            path="signup"
                                            element={<SignUpOverview />}
                                        />
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
                                        <Route
                                            path="login"
                                            element={<LoginOverview />}
                                        />
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
                                            element={
                                                <PasswordResetVerification />
                                            }
                                        />
                                        <Route
                                            path="reset_password/newPassword"
                                            element={
                                                <PasswordResetNewPassword />
                                            }
                                        />
                                        <Route
                                            path="reset_password/success"
                                            element={<PasswordResetSuccess />}
                                        />

                                        <Route element={<Footer />}>
                                            <Route
                                                path="/"
                                                element={<HomePage />}
                                            />
                                            <Route
                                                path="checkout"
                                                element={<CheckoutPage />}
                                            />
                                            <Route
                                                path="shopping_cart"
                                                element={<ShoppingCart />}
                                            />
                                            <Route
                                                path="checkout_success"
                                                element={<CheckoutSuccess />}
                                            />
                                            {/* Customer Dashboard */}
                                            <Route
                                                path="customer"
                                                element={<CustomerLayout />}>
                                                <Route
                                                    index
                                                    element={
                                                        <CustomerDashBoard />
                                                    }
                                                />
                                                <Route
                                                    path="order_history"
                                                    element={
                                                        <CustomerOrderHistory />
                                                    }
                                                />
                                                <Route
                                                    path="order_history/:orderId"
                                                    element={
                                                        <CustomerOrderDetails />
                                                    }
                                                />
                                                <Route
                                                    path="account_settings"
                                                    element={
                                                        <CustomerAccountSettings />
                                                    }
                                                />
                                            </Route>
                                            {/* Products Pages */}
                                            <Route
                                                path="products"
                                                element={<ProductList />}
                                            />
                                            <Route
                                                path="products/:productId"
                                                element={<ProductDetail />}
                                            />
                                            {/* WishList Page */}
                                            <Route
                                                path="wishlist"
                                                element={<WishList />}
                                            />
                                        </Route>
                                        {/* 404 Page */}
                                        <Route
                                            path="*"
                                            element={<NotFoundPage />}
                                        />

                                        <Route
                                            path="merchant"
                                            element={<MerchantLayout />}>
                                            <Route
                                                index
                                                element={<MerchantDashboard />}
                                            />
                                            <Route
                                                path="products"
                                                element={
                                                    <MerchantProductList />
                                                }
                                            />
                                            <Route
                                                path="products/add"
                                                element={<ProductCreate />}
                                            />
                                            <Route
                                                path="products/:productId"
                                                element={<ProductDetails />}
                                            />
                                            <Route
                                                path="products/:productId/edit"
                                                element={<ProductUpdate />}
                                            />
                                            <Route
                                                path="orders"
                                                element={<MerchantOrderList />}
                                            />
                                            <Route
                                                path="orders/:orderId"
                                                element={
                                                    <MerchantOrderDetails />
                                                }
                                            />
                                            <Route
                                                path="payments"
                                                element={<CustomerPayment />}
                                            />
                                        </Route>
                                    </Routes>
                                </BrowserRouter>
                            </ProductProvider>
                        </NotificationProvider>
                    </MerchantProductProvider>
                </ProductCategoryProvider>
            </EmailProvider>
        </AuthProvider>
    );
}

export default App;
