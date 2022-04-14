import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import CheackOut from "./Pages/CheackOut/CheackOut";
import Experts from "./Pages/Home/Experts/Experts";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/NotFound/PageNotFound";
import Register from "./Pages/Register/Register";
import Require from "./Pages/RequireAuth/Require";

import ServiceDetail from "./Pages/ServiceDetailsPage/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceID"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/expert" element={<Experts></Experts>}></Route>

        <Route
          path="/cheakout"
          element={
            <Require>
              <CheackOut></CheackOut>
            </Require>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
