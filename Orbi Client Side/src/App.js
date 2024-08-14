import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Context from "./context/ContextState";
import { useContext } from "react";
import Invoice from "./pages/Invoice/Invoice";
import UserProfile from "./pages/User Profile/UserProfile";
import OrderDescription from "./pages/Order Summery/OrderDescription";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

function App() {
  const context = useContext(Context);
  const { auth } = context;
  const localAuth = localStorage.getItem('AuthToken');
  const validateIftrue = (local) => !!local; 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path="/" element={<Layout />}>

          {/* ==================== Header Navlink Start here =================== */}

          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/journal" element={<Journal />}></Route>
          {/* ==================== Header Navlink End here ===================== */}

          <Route path="/offer" element={<Offer />}></Route>
          <Route path="/product/:_id" element={<ProductDetails />}></Route>
          <Route path="/order-details" element={<OrderDescription />}></Route>
          <Route path="/paymentSuccessfull" element={<Invoice />}></Route>
          <Route path="/cart" element={validateIftrue(localAuth) ? <Cart /> : <SignIn />}></Route>
          <Route path="/signup" element={validateIftrue(localAuth) ? <Home /> : <SignUp />}></Route>
          <Route path="/signin" element={validateIftrue(localAuth) ? <Home /> : <SignIn />}></Route>
          <Route path="/userProfile" element={validateIftrue(localAuth) ? <UserProfile /> : <SignIn />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
