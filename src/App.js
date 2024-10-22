import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./custom-bootstrap.scss";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerSignUp from "features/Auth/SignUp/CustomerSignUp";
import SignUpSuccess from "features/Auth/SignUp/Success";
import CustomerLogin from "features/Auth/Login/CustomerLogin";
import LoginOverview from "features/Auth/Login/Overview";
import CheckoutPage from "features/Checkout/CheckoutPage";
import ShoppingCart from "features/Cart/ShoppingCart";
import CheckoutSuccess from "features/Checkout/Success";
import CustomerDashBoard from "features/Customer/Dashboard";
import CustomerOrderHistory from "features/Customer/OrderHistory";
import CustomerOrderDetails from "features/Customer/OrderDetails";
import CustomerAccountSettings from "features/Customer/AccountSettings";
import ProductList from "features/Products/ProductList";
import ProductDetail from "features/Products/ProductDetail";
import WishList from "features/Wishlist/WishList";
import HomePage from "pages/Home/HomePage";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import Header from "shared/layout/Header/Header";
import Footer from "shared/layout/Footer/Footer";
import CustomerLayout from "features/Customer/layout/CustomerLayout";
import SignUpOverview from "features/Auth/SignUp/Overview";
import MerchantLogin from "features/Auth/Login/MerchantLogin";
import EmailVerification from "features/Auth/SignUp/EmailVerification";
import MerchantSignUp from "features/Auth/SignUp/MerchantSignUp";
import PasswordResetOverview from "features/Auth/PasswordReset/Overview";
import PasswordResetVerification from "features/Auth/PasswordReset/PasswordResetVerification";
import PasswordResetSuccess from "features/Auth/PasswordReset/Success";
import PasswordResetNewPassword from "features/Auth/PasswordReset/PasswordResetNewPassword";
import { EmailProvider } from "shared/context/EmailContext";
import { AuthProvider } from "shared/context/AuthContext";
import { ProductCategoryProvider } from "shared/context/ProductCategoryContext";
import AxiosSetup from "shared/api/apiClient";
import MerchantLayout from "features/Merchant/layout/MerchantLayout";
import Merchant from "features/Merchant/pages/Dashboard";
import MerchantProductList from "features/Merchant/pages/Products/ProductList";
import ProductCreate from "features/Merchant/pages/Products/ProductCreate";
import MerchantOrderList from "features/Merchant/pages/Orders/OrderList";
import MerchantOrderDetails from "features/Merchant/pages/Orders/OrderDetails";
import CustomerPayment from "features/Merchant/pages/Payments";
import { MerchantProductProvider } from "shared/context/MerchantProductContext";
import ProductDetails from "features/Merchant/pages/Products/ProductDetails";
import ProductUpdate from "features/Merchant/pages/Products/ProductUpdate";
import { NotificationProvider } from "shared/context/NotificationContext";
import { ProductProvider } from "shared/context/ProductContext";
import { CartProvider } from "shared/context/CartContext";
import { WishlistProvider } from "shared/context/WishListContext";
import PaymentForm from "features/Checkout/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { CustomerOrderProvider } from "features/Customer/context/OrderContext";
import { DashboardStatProvider } from "features/Merchant/context/DashboardStatContext";
import { MerchantOrderProvider } from "features/Merchant/context/MerchantOrderContext";
import { PaymentProvider } from "features/Merchant/context/PaymentContext";
import Contact from "pages/Contact/Contact";
import ResendEmailVerify from "features/Auth/Login/ResendEmailVerify";
import MerchantAccountSettings from "features/Merchant/pages/AccountSettings";

const stripePK = process.env.REACT_APP_STRIPE_PK;
// console.log("Stripe key:", stripePK);
const stripePromise = loadStripe(stripePK);

function App() {
    return (
        <AuthProvider>
            <EmailProvider>
                <ProductCategoryProvider>
                    <MerchantProductProvider>
                        <NotificationProvider>
                            <ProductProvider>
                                <CartProvider>
                                    <WishlistProvider>
                                        <CustomerOrderProvider>
                                            <DashboardStatProvider>
                                                <MerchantOrderProvider>
                                                    <PaymentProvider>
                                                        <BrowserRouter>
                                                            <AxiosSetup />
                                                            <Header />
                                                            <Routes>
                                                                <Route
                                                                    path="signup"
                                                                    element={
                                                                        <SignUpOverview />
                                                                    }
                                                                />
                                                                <Route
                                                                    path="signup/customer"
                                                                    element={
                                                                        <CustomerSignUp />
                                                                    }
                                                                />
                                                                <Route
                                                                    path="signup/merchant"
                                                                    element={
                                                                        <MerchantSignUp />
                                                                    }
                                                                />
                                                                <Route
                                                                    path="signup/success"
                                                                    element={
                                                                        <SignUpSuccess />
                                                                    }
                                                                />
                                                                <Route
                                                                    path="signup/verify_email"
                                                                    element={
                                                                        <EmailVerification />
                                                                    }
                                                                />
                                                                <Route
                                                                    path="resend-otp"
                                                                    element={
                                                                        <ResendEmailVerify />
                                                                    }
                                                                />
                                                                <Route
                                                                    path="login"
                                                                    element={
                                                                        <LoginOverview />
                                                                    }
                                                                />
                                                                <Route
                                                                    path="login/customer"
                                                                    element={
                                                                        <CustomerLogin />
                                                                    }
                                                                />
                                                                <Route
                                                                    path="login/merchant"
                                                                    element={
                                                                        <MerchantLogin />
                                                                    }
                                                                />

                                                                <Route
                                                                    path="reset_password"
                                                                    element={
                                                                        <PasswordResetOverview />
                                                                    }
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
                                                                    element={
                                                                        <PasswordResetSuccess />
                                                                    }
                                                                />

                                                                <Route
                                                                    element={
                                                                        <Footer />
                                                                    }>
                                                                    <Route
                                                                        path="/"
                                                                        element={
                                                                            <HomePage />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="checkout"
                                                                        element={
                                                                            <CheckoutPage />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="contact"
                                                                        element={
                                                                            <Contact />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="shopping_cart"
                                                                        element={
                                                                            <ShoppingCart />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="checkout/payment"
                                                                        element={
                                                                            <PaymentForm
                                                                                stripePromise={
                                                                                    stripePromise
                                                                                }
                                                                            />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="checkout/success"
                                                                        element={
                                                                            <CheckoutSuccess />
                                                                        }
                                                                    />
                                                                    {/* Customer Dashboard */}
                                                                    <Route
                                                                        path="customer"
                                                                        element={
                                                                            <CustomerLayout />
                                                                        }>
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
                                                                    {/* Products features */}
                                                                    <Route
                                                                        path="products"
                                                                        element={
                                                                            <ProductList />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="products/:productId"
                                                                        element={
                                                                            <ProductDetail />
                                                                        }
                                                                    />
                                                                    {/* WishList Page */}
                                                                    <Route
                                                                        path="wishlist"
                                                                        element={
                                                                            <WishList />
                                                                        }
                                                                    />
                                                                </Route>
                                                                {/* 404 Page */}
                                                                <Route
                                                                    path="*"
                                                                    element={
                                                                        <NotFoundPage />
                                                                    }
                                                                />

                                                                <Route
                                                                    path="merchant"
                                                                    element={
                                                                        <MerchantLayout />
                                                                    }>
                                                                    <Route
                                                                        index
                                                                        element={
                                                                            <Merchant />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="products"
                                                                        element={
                                                                            <MerchantProductList />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="products/add"
                                                                        element={
                                                                            <ProductCreate />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="products/:productId"
                                                                        element={
                                                                            <ProductDetails />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="products/:productId/edit"
                                                                        element={
                                                                            <ProductUpdate />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="orders"
                                                                        element={
                                                                            <MerchantOrderList />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="orders/:orderId"
                                                                        element={
                                                                            <MerchantOrderDetails />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="payments"
                                                                        element={
                                                                            <CustomerPayment />
                                                                        }
                                                                    />
                                                                    <Route
                                                                        path="account_settings"
                                                                        element={
                                                                            <MerchantAccountSettings />
                                                                        }
                                                                    />
                                                                </Route>
                                                            </Routes>
                                                        </BrowserRouter>
                                                    </PaymentProvider>
                                                </MerchantOrderProvider>
                                            </DashboardStatProvider>
                                        </CustomerOrderProvider>
                                    </WishlistProvider>
                                </CartProvider>
                            </ProductProvider>
                        </NotificationProvider>
                    </MerchantProductProvider>
                </ProductCategoryProvider>
            </EmailProvider>
        </AuthProvider>
    );
}

export default App;
