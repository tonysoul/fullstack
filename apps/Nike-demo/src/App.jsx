import { Nav } from "./components";
import { Hero, PopularProducts, Services, SuperQuality } from "./sections";

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
  </main>
);

export default App;
