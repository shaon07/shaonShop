import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListingProduct from "./ListingProduct";

const ShopListing = ({ sort }) => {
  const filterCata = useSelector((state) => state.cataReducer);
  let navigate = useNavigate();

  const handleSort = (data) => {
    navigate(`/shop/${data}`);
  };

  return filterCata ? (
    <>
      {" "}
      {
        <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
          <div className="row mb-3 align-items-center">
            <div className="col-lg-6 mb-2 mb-lg-0">
              <p className="text-sm text-muted mb-0">
                Showing 1–12 of 53 results
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                <li className="list-inline-item text-muted me-3">
                  <a className="reset-anchor p-0" href="#!">
                    <i className="fas fa-th-large"></i>
                  </a>
                </li>
                <li className="list-inline-item text-muted me-3">
                  <a className="reset-anchor p-0" href="#!">
                    <i className="fas fa-th"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <select
                    className="selectpicker"
                    onChange={(e) => handleSort(e.target.value)}
                  >
                    <option>Sort By </option>
                    {filterCata.catagory.map((item, ind) => {
                      return (
                        <option value={item} key={ind}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </li>
              </ul>
            </div>
          </div>

          <ListingProduct sort={sort} />
        </div>
      }
    </>
  ) : (
    <>
      <h1>Loading...</h1>
    </>
  );
};

export default ShopListing;
