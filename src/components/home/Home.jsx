import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h3>This is Nested Home page</h3>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
