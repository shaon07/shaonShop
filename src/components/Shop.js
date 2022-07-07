import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ShopListing from "./ShopListing";
import Sidebar from "./Sidebar";

const Shop = () => {
  const {sort} = useParams();
  const newSort = sort;
  return (
    <>
      <Navbar />
      <div className="container">
        {/* Hero Section  */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li className="breadcrumb-item">
                      <Link className="text-dark" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* 2nd row */}
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              <Sidebar />
              <ShopListing sort={newSort}/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shop;
