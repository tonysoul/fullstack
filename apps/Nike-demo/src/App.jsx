import { Nav } from "./components";
import { Hero, PopularProducts, SuperQuality } from "./sections";

const App = () => (
  <main className="relative">
    <Nav />

    {/* hero */}
    <Hero />

    {/* Popular Products */}
    <PopularProducts />

    {/* Super Quality */}
    <SuperQuality />
  </main>
);

export default App;
