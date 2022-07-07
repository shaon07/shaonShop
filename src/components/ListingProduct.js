/* eslint-disable eqeqeq */
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addToCart } from "./redux/actions/storeAction";

const ListingProduct = ({ sort }) => {
  const datas = useSelector((state) => state.storeReducer);
  const dispatch = useDispatch()

  const filterItem = datas.data.filter((item) => item.category === sort);
  
  const cartData = useSelector((state) => state.cartReducer);
  const cartID = cartData.cart.map((item) => item.id);

  const newLocal = !datas.data.length == 0;

  const handleAddToCart = (data) => {
    const cartData = datas.data.filter((item) => item.id == data);
    const newdata = {
      qty: 1,
      id: cartData[0].id,
      title: cartData[0].title,
      price: cartData[0].price,
      category: cartData[0].category,
      description: cartData[0].description,
      image: cartData[0].image,
      rating: cartData[0].rating,
    };

    dispatch(addToCart(newdata));
  }
  return (
    <div className="row">
      {newLocal ? (
        <>
          {sort === "all" ? (
            <>
              {datas.data.map((item, ind) => {
                return (
                  <div className="col-lg-4 col-sm-6" key={ind}>
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white bg-"></div>
                        <Link className="d-block" to={`/detail/${item.id}`}>
                          <img
                            className="img-fluid producImg "
                            src={item.image}
                            alt="..."
                          />
                        </Link>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0">
                              <a
                                className="btn btn-sm btn-outline-dark"
                                href="#!"
                              >
                                <i className="far fa-heart"></i>
                              </a>
                            </li>
                            <li className="list-inline-item m-0 p-0">
                            {cartID.includes(item.id) ? (
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
                                    onClick={() => handleAddToCart(item.id)}
                                  >
                                    Add to cart
                                  </button>
                                </>
                              )}
                            </li>
                            <li className="list-inline-item mr-0">
                              <Link
                                className="btn btn-sm btn-outline-dark"
                                to={`/detail/${item.id}`}
                              >
                                <i className="fas fa-expand"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h6>
                        {" "}
                        <a className="reset-anchor" href="detail.html">
                          {item.title.slice(0, 10)}
                        </a>
                      </h6>
                      <p className="small text-muted">${item.price}</p>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {filterItem.map((item, ind) => {
                return (
                  <div className="col-lg-4 col-sm-6" key={ind}>
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white bg-"></div>
                        <Link className="d-block" to={`/detail/${item.id}`}>
                          <img
                            className="img-fluid producImg "
                            src={item.image}
                            alt="..."
                          />
                        </Link>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0">
                              <a
                                className="btn btn-sm btn-outline-dark"
                                href="#!"
                              >
                                <i className="far fa-heart"></i>
                              </a>
                            </li>
                            <li className="list-inline-item m-0 p-0">
                            {cartID.includes(item.id) ? (
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
                                    onClick={() => handleAddToCart(item.id)}
                                  >
                                    Add to cart
                                  </button>
                                </>
                              )}
                            </li>
                            <li className="list-inline-item mr-0">
                              <Link
                                className="btn btn-sm btn-outline-dark"
                                to={`/detail/${item.id}`}
                              >
                                <i className="fas fa-expand"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h6>
                        {" "}
                        <a className="reset-anchor" href="detail.html">
                          {item.title.slice(0, 10)}
                        </a>
                      </h6>
                      <p className="small text-muted">${item.price}</p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
};

export default ListingProduct;
