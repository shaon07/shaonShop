/* eslint-disable eqeqeq */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./redux/actions/storeAction";

const TrendingProducts = () => {
  const datas = useSelector((state) => state.storeReducer);
  const cartData = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const cartID = cartData.cart.map((item) => item.id);

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
  };

  return (
    <>
      <section className="py-5">
        <header>
          <p className="small text-muted small text-uppercase mb-1">
            Made the hard way
          </p>
          <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </header>
        <div className="row">
          {/* <!-- PRODUCT--> */}

          {datas.loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {datas.data.map((item, ind) => {
                return (
                  <div className="col-xl-3 col-lg-4 col-sm-6" key={ind}>
                    <div className="product text-center">
                      <div className="position-relative mb-3">
                        <div className="badge text-white bg-">{item.badge}</div>
                        <Link className="d-block" to={`/detail/${item.id}`}>
                          <img
                            className="img-fluid  producImg"
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
                            <li className="list-inline-item me-0">
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
                        <Link className="reset-anchor" to="/detail">
                          {item.title}
                        </Link>
                      </h6>
                      <p
                        className="small text-muted "
                        style={{ fontWeight: "bold" }}
                      >
                        ${item.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
