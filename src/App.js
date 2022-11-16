import "./App.css";
import "./index.scss";
import RoutesA from "./routes/RoutesA";
import HeaderTop from "./components/HeaderTop";
import HeaderMain from "./components/HeaderMain";

import ProductViewModal from "./components/ProductViewModal";
import ProductViewAr from "./components/ProductViewAr";

function App() {
  return (
    <div>
      <HeaderTop></HeaderTop>
      <HeaderMain></HeaderMain>
      <RoutesA></RoutesA>
      <ProductViewModal></ProductViewModal>
      {/* <ProductViewAr></ProductViewAr> */}
    </div>
  );
}

export default App;
