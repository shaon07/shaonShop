import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "../src/App.css";
import "../src/cssfiles/css/style.default.css";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import Details from "./components/Details";
import MainHome from "./components/MainHome";
import {
  getCatagory,
  getDataFunc,
  startFetch
} from "./components/redux/actions/storeAction";
import Shop from "./components/Shop";

function App() {
  const dispatch = useDispatch();

 const [FinalPrice,setFinalPrice] = useState(0);

  const fetchApi = () => {
    return (dispatch) => {
      dispatch(startFetch());
      try {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => dispatch(getDataFunc(json)));

        fetch("https://fakestoreapi.com/products/categories")
          .then((res) => res.json())
          .then((json) => dispatch(getCatagory(json)));
      } catch (e) {
        console.log(e);
      }
    };
  };

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainHome />} />
        <Route exact path="/shop/:sort" element={<Shop />} />
        <Route exact path="/detail/:productID" element={<Details />} />
        <Route exact path="/cart" element={<Cart setFinalPrice={setFinalPrice}/>}/>
        <Route exact path="/checkout" element={<CheckOut finalPrice={FinalPrice}/>}/>
      </Routes>
    </>
  );
}

export default App;
