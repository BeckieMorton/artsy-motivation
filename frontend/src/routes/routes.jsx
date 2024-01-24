import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { MetDisplay } from "../components/MetDisplay/MetDisplay";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/artworks" element={<MetDisplay />} />
  </>
);

export default routes;
