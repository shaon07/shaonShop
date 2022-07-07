/* eslint-disable jsx-a11y/role-supports-aria-props */
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const data = useSelector(state=>state.cartReducer);
  const [show,setShow] = useState(true);
  return (
    <>
      <header className="header bg-white">
        <div className="container px-lg-3">
          <nav className="navbar navbar-expand-md navbar-light py-3 px-lg-0">
            <Link className="navbar-brand" to="/">
              <span className="fw-bold text-uppercase text-dark">
                Shaon Shop
              </span>
            </Link>
            <button
              className="navbar-toggler navbar-toggler-end"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={()=>setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={show ? "collapse navbar-collapse" :" navbar-collapse"}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto shaoncss">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/all">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/detail/1">
                    Product detail
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto shaoncss">
                <div><li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    {" "}
                    <i className="fas fa-dolly-flatbed me-1 text-gray"></i>Cart
                    <small className="text-gray fw-normal">{data.cart.length}</small>
                  </Link>
                </li></div>
                <div><li className="nav-item">
                  <a className="nav-link" href="#!">
                    {" "}
                    <i className="far fa-heart me-1"></i>
                    <small className="text-gray fw-normal"> (0)</small>
                  </a>
                </li></div>
                <div><li className="nav-item">
                  <a className="nav-link" href="#!">
                    {" "}
                    <i className="fas fa-user me-1 text-gray fw-normal"></i>
                    Login
                  </a>
                </li></div>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
