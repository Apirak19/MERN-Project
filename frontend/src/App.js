import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1 className="text-2xl">Products</h1>} />
          <Route
            path="/add"
            element={<h1 className="text-2xl">Add Product</h1>}
          />
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
          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <h1>something before footer</h1>
      <Footer />
    </div>
  );
}

export default App;
