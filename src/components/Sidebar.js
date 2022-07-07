import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const filterCata = useSelector((state) => state.cataReducer);

  return filterCata ? (
    <>
      {
        <div className="col-lg-3 order-2 order-lg-1">
          <h5 className="text-uppercase mb-4">Categories</h5>
          <div className="py-2 px-4 bg-dark text-white mb-3">
            <strong className="small text-uppercase fw-bold">
              Fashion &amp; Acc
            </strong>
          </div>
          <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
            {filterCata.catagory.map((item, ind) => {
              return (
                <li className="mb-2" key={ind}>
                  <Link className="reset-anchor" to={`/shop/${item}`}>
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </>
  ) : (
    <>
      <h1>Loading...</h1>
    </>
  );
};

export default Sidebar;
