import { Nav } from "./components";
import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />

    {/* hero */}
    <Hero />

    {/* Popular Products */}
    <PopularProducts />

    {/* Super Quality */}
    <SuperQuality />

    {/* Services */}
    <Services />

    {/* SpecialOffer */}
    <SpecialOffer />
  </main>
);

export default App;
