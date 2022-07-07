/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { addToCart } from "./redux/actions/storeAction";

const Details = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const mainID = parseInt(productID);
  const datas = useSelector((state) => state.storeReducer);
  const selectedProduct = datas.data.filter((item) => item.id === mainID);

  const cartData = useSelector((state) => state.cartReducer);
  const cartID = cartData.cart.map((item) => item.id);
 
  const handleAddToCart = (data) => {
    // console.log(object)
    const newdata = {
      qty: 1,
      id: selectedProduct[0].id,
      title: selectedProduct[0].title,
      price: selectedProduct[0].price,
      category: selectedProduct[0].category,
      description: selectedProduct[0].description,
      image: selectedProduct[0].image,
      rating: selectedProduct[0].rating,
    };
    dispatch(addToCart(newdata))
  };

  return (
    <>
      <Navbar />
      <div className="page-holder bg-light">
        <div
          className="modal "
          id="productView"
          style={{ display: "flex", position: "relative" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            {selectedProduct.length === 0 ? (
              <h1>Loading...</h1>
            ) : (
              <>
                {
                  <div className="modal-content overflow-hidden border-0">
                    <div className="modal-body p-0">
                      <div className="row align-items-stretch">
                        <div className="col-lg-6 p-lg-0 d-flex justify-content-center align-items-center">
                          <img
                            src={selectedProduct[0].image}
                            alt="img"
                            className="img-fluid"
                            style={{width:"80%"}}
                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="p-4 my-md-4">
                            <ul className="list-inline mb-2">
                              <li className="list-inline-item m-0">
                                <i className="fas fa-star small text-warning"></i>
                              </li>
                              <li className="list-inline-item m-0 1">
                                <i className="fas fa-star small text-warning"></i>
                              </li>
                              <li className="list-inline-item m-0 2">
                                <i className="fas fa-star small text-warning"></i>
                              </li>
                              <li className="list-inline-item m-0 3">
                                <i className="fas fa-star small text-warning"></i>
                              </li>
                              <li className="list-inline-item m-0 4">
                                <i className="fas fa-star small text-warning"></i>
                              </li>
                            </ul>
                            <h2 className="h4">{selectedProduct[0].title}</h2>
                            <p className="text-muted">
                              ${selectedProduct[0].price}
                            </p>
                            <p className="text-sm mb-4">
                              {selectedProduct[0].description}
                            </p>
                            <div className="row align-items-stretch mb-4 gx-0">
                              
                              <div className="col-sm-5">
                              {cartID.includes(selectedProduct[0].id) ? (
                                <>
                                  <Link
                                    className="btn btn-sm btn-dark"
                                    to="/cart"
                                  >
                                    Goto cart
                                  </Link>
                                </>
                              ) : (
                                <>
                                  <button
                                    className="btn btn-sm btn-dark"
                                    onClick={() => handleAddToCart(selectedProduct[0].id)}
                                  >
                                    Add to cart
                                  </button>
                                </>
                              )}
                              </div>
                            </div>
                            <a
                              className="btn btn-link text-dark text-decoration-none p-0"
                              href="#!"
                            >
                              <i className="far fa-heart me-2"></i>Add to wish
                              list
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
