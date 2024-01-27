import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { MetDisplay } from "../components/MetDisplay/MetDisplay";
import { European } from "../components/European/European";
import { African } from "../components/African/African";
import { Photography } from "../components/Photography/Photography";
import { GreekRoman } from "../components/GreekRoman/GreekRoman";
import { Asian } from "../components/Asian/Asian";
import { Medieval } from "../components/Medieval/Medieval";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/artworks" element={<MetDisplay />} />
    <Route path="/european" element={<European />} />
    <Route path="/african" element={<African />} />
    <Route path="/photography" element={<Photography />} />
    <Route path="/greekroman" element={<GreekRoman />} />
    <Route path="/asian" element={<Asian />} />
    <Route path="/medieval" element={<Medieval />} />
  </>
);

export default routes;
