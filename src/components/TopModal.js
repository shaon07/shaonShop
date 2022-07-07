import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TrendingProducts from "./TrendingProducts";


/* eslint-disable jsx-a11y/anchor-has-content */
const img5 = require("../img/hero-banner-alt.jpg");

const TopModal = () => {
  const files = { background: `url(${img5})` };
  const datas = useSelector((state) => state.cataReducer);
  
  return (
    <>
      <div className="container">
        <section
          className="hero pb-3 bg-cover bg-center d-flex align-items-center"
          style={files}
        >
          <div className="container py-5">
            <div className="row px-4 px-lg-5">
              <div className="col-lg-6">
                <p className="text-muted small text-uppercase mb-2">
                  New Inspiration 2020
                </p>
                <h1 className="h2 text-uppercase mb-3">
                  20% off on new season
                </h1>
                <Link className="btn btn-dark" to="/shop/all">
                  Browse collections
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- CATEGORIES SECTION--> */}
        <section className="pt-5">
          <header className="text-center">
            <p className="small text-muted small text-uppercase mb-1">
              Carefully created collections
            </p>
            <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
          </header>
          <div className="row">
            {datas.catagory.length === 0 ? (
              <h1>Loading...</h1>
            ) : (
              <>
                {" "}
                <div className="col-md-4">
                  <Link className="category-item" to={`/shop/${datas.catagory[0]}`}>
                    <img
                      className="img-fluid"
                      src={require("../img/cat-img-4.jpg")}
                      alt=""
                    />
                    <strong className="category-item-title">{datas.catagory[0]}</strong>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link className="category-item mb-4" to={`/shop/${datas.catagory[1]}`}>
                    <img
                      className="img-fluid"
                      src={'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'}
                      alt=""
                    />
                    <strong className="category-item-title">{datas.catagory[1]}</strong>
                  </Link>
                  <Link className="category-item" to={`/shop/${datas.catagory[2]}`}>
                    <img
                      className="img-fluid"
                      src={require("../img/product-3.jpg")}
                      alt=""
                    />
                    <strong className="category-item-title">{datas.catagory[2]}</strong>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link className="category-item" to={`/shop/${datas.catagory[3]}`}>
                    <img
                      className="img-fluid"
                      src={require("../img/cat-img-1.jpg")}
                      alt=""
                    />
                    <strong className="category-item-title">{datas.catagory[3]}</strong>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
        <TrendingProducts />
      </div>
    </>
  );
};

export default TopModal;
