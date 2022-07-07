import { useRef } from "react";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import "../Invoice.css";
const Invoice = ({ data, FinalPrice, inv, setUserInput }) => {
  const componentRef = useRef();
  console.log(data);
  return (
    <>
      <div
        className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding"
        ref={componentRef}
      >
        <div className="card">
          <div className="card-header p-4">
            <Link className="pt-2 d-inline-block" to="/" data-abc="true">
              Shaon Shop
            </Link>
            <div className="float-right d-flex justify-content-between align-items-center">
              {" "}
              <div>
                <h3 className="mb-0">Invoice #BBB10234</h3>
                Date: {new Date().toString()}
              </div>
              <div onClick={() => {
                        inv(false);
                        setUserInput({
                          fname: "",
                          lname: "",
                          email: "",
                          phone: "",
                          address: "",
                          city: "",
                          country: "",
                        });
                      }}>
                <ReactToPrint
                  trigger={() => (
                    <button className="btn btn-success mt-2">
                      Download Copy
                    </button>
                  )}
                  content={() => componentRef.current}
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-sm-6">
                <h5 className="mb-3">From:</h5>
                <h3 className="text-dark mb-1">MD SHAON</h3>
                <div>Hili Hakimpur</div>
                <div>Dinajpur Bangladesh</div>
                <div>Email: alishaon078@gmail.com</div>
                <div>Phone: 01840962278</div>
              </div>
              <div className="col-sm-6 ">
                <h5 className="mb-3">To:</h5>
                <h3 className="text-dark mb-1">{`${data[0].fname} ${data[0].lname}`}</h3>

                <div>Address: {data[0].address}</div>
                <div>Email: {data[0].email}</div>
                <div>Phone: {data[0].phone}</div>
              </div>
            </div>
            <div className="table-responsive-sm">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="center">#</th>
                    <th>Item</th>
                    <th>Description</th>
                    <th className="right">Price</th>
                    <th className="center">Qty</th>
                    <th className="right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data[1].map((item, ind) => {
                    return (
                      <tr key={ind}>
                        <td className="center">1</td>
                        <td className="left strong">{item.title}</td>
                        <td className="left">
                          {item.description.slice(0, 20)}
                        </td>
                        <td className="right">${item.price}</td>
                        <td className="center">{item.qty}</td>
                        <td className="right">${item.price * item.qty}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-5"></div>
              <div className="col-lg-4 col-sm-5 ml-auto">
                <table className="table table-clear">
                  <tbody>
                    <tr>
                      <td className="left">
                        <strong className="text-dark">Total</strong>
                      </td>
                      <td className="right">${FinalPrice}</td>
                    </tr>
                    <span> with 20% Discount</span>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white">
            <p className="mb-0">ShaonShop.com - Hili Hakimpur Dinajpur</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
