import { Nav } from "./components";
import {
  Customers,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SignUp,
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

    {/* Customers */}
    <Customers />

    {/* Sign Up */}
    <SignUp />

    {/* Footer */}
    <Footer />
  </main>
);

export default App;
