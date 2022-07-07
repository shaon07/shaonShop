/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Invoice from "./Invoice";
import Navbar from "./Navbar";

const CheckOut = () => {
  const data = useSelector((state) => state.cartReducer);
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceData,setInvoiceData] = useState()
  const [userInput, setUserInput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput({ ...userInput, [name]: value });
  };
  const handleSubmitInfo = (e) => {
    e.preventDefault();
    setShowInvoice(true)
    setInvoiceData([userInput,data.cart]);
  };
  const [FinalPrice, setFinalPrice] = useState(0);
  const showTotalPrice = () => {
    const total = data.cart.map((item) => item.price * item.qty);
    const sumWithInitial = total.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    const newPrice = sumWithInitial - (sumWithInitial * 20) / 100;

    setFinalPrice(parseInt(newPrice));
  };
  useEffect(() => {
    showTotalPrice();
  });
  return (
    <>
      <Navbar />
      <div className="container" style={{display : showInvoice ? "none":"block"}}>
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Checkout</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li className="breadcrumb-item">
                      <a className="text-dark" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-dark" href="cart.html">
                        Cart
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Checkout
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <h2 className="h5 text-uppercase mb-4">Billing details</h2>
          <div className="row">
            <div className="col-lg-8">
              <form onSubmit={handleSubmitInfo}>
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <label
                      className="form-label text-sm text-uppercase"
                      htmlFor="firstName"
                    >
                      First name{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                      value={userInput.fname}
                      onChange={handleInput}
                      name="fname"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label
                      className="form-label text-sm text-uppercase"
                      htmlFor="lastName"
                    >
                      Last name{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                      value={userInput.lname}
                      onChange={handleInput}
                      name="lname"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label
                      className="form-label text-sm text-uppercase"
                      htmlFor="email"
                    >
                      Email address{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      id="email"
                      placeholder="e.g. Jason@example.com"
                      required
                      value={userInput.email}
                      onChange={handleInput}
                      name="email"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label
                      className="form-label text-sm text-uppercase"
                      htmlFor="phone"
                    >
                      Phone number{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="tel"
                      id="phone"
                      placeholder="e.g. +02 245354745"
                      required
                      value={userInput.phone}
                      onChange={handleInput}
                      name="phone"
                    />
                  </div>

                  <div className="col-lg-12">
                    <label
                      className="form-label text-sm text-uppercase"
                      htmlFor="address"
                    >
                      Address line 1{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      id="address"
                      placeholder="House number and street name"
                      required
                      value={userInput.address}
                      onChange={handleInput}
                      name="address"
                    />
                  </div>

                  <div className="col-lg-6">
                    <label
                      className="form-label text-sm text-uppercase"
                      htmlFor="city"
                    >
                      Town/City{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      id="city"
                      required
                      value={userInput.city}
                      onChange={handleInput}
                      name="city"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label
                      className="form-label text-sm text-uppercase"
                      htmlFor="state"
                    >
                      State/County{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      id="state"
                      required
                      value={userInput.country}
                      onChange={handleInput}
                      name="country"
                    />
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-link text-dark p-0 shadow-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#alternateAddress"
                    >
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="alternateAddressCheckbox"
                          type="checkbox"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="alternateAddressCheckbox"
                        >
                          Alternate billing address
                        </label>
                      </div>
                    </button>
                  </div>

                  <div className="col-lg-12 form-group">
                    <button className="btn btn-dark" type="submit">
                      Place order
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Your order</h5>
                  <ul className="list-unstyled mb-0">
                    {data.cart.length == 0 ? (
                      <>
                        <h1>Loading...</h1>
                      </>
                    ) : (
                      <>
                        {data.cart.map((item, ind) => {
                          return (
                            <div key={ind}>
                              <li className="d-flex align-items-center justify-content-between">
                                <strong className="small fw-bold">
                                  {item.title.slice(0, 20)}...
                                </strong>
                                <span className="text-muted small">
                                  ${item.price * item.qty}
                                </span>
                              </li>
                              <li className="border-bottom my-2"></li>
                            </div>
                          );
                        })}
                      </>
                    )}

                    <li className="d-flex align-items-center justify-content-between">
                      <strong className="text-uppercase small fw-bold">
                        Total
                      </strong>
                      <span>${FinalPrice}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {!showInvoice ? null : <Invoice data={invoiceData} FinalPrice={FinalPrice} inv={setShowInvoice} setUserInput={setUserInput}/>}
    </>
  );
};

export default CheckOut;
