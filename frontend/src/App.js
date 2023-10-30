import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComponent from "./components/PrivateComponent";
import { AuthContextProvider } from "./contexts/context";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <AuthContextProvider>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="" element={<PrivateComponent />}>
              <Route path="/" element={<Products />} />
              <Route path="/add" element={<AddProduct />} />
              <Route
                path="/edit"
                element={<h1 className="text-2xl">Edit Product</h1>}
              />
              <Route
                path="/profile"
                element={<h1 className="text-2xl">Profile</h1>}
              />
              <Route
                path="/logout"
                element={<h1 className="text-2xl">Logout</h1>}
              />
            </Route>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    </AuthContextProvider>
  );
}

export default App;
