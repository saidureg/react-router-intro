import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header></Header>
      <h3>This is Nested Home page</h3>
      {navigation.state === "loading" ? "Loading..." : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
