import { shieldTick, support, truckFast } from "../assets/icons";
const Services = () => {
  return (
    <section id="Services">
      <div className="max-container">
        <div className="flex justify-between gap-10 px-6 py-24">
          <div className="shadow-3xl rounded-2xl p-14 px-10">
            <div className="bg-coral-red mb-5 inline-block rounded-full p-3">
              <img src={truckFast} alt="" />
            </div>
            <h3 className="mb-5 text-2xl font-semibold">Free shipping</h3>
            <p className="font-montserrat text-slate-500">
              Enjoy seamless shopping with our complimentary shipping service.
            </p>
          </div>

          <div className="shadow-3xl rounded-2xl p-14 px-10">
            <div className="bg-coral-red mb-5 inline-block rounded-full p-3">
              <img src={shieldTick} alt="" />
            </div>
            <h3 className="mb-5 text-2xl font-semibold">Secure Payment</h3>
            <p className="font-montserrat text-slate-500">
              Experience worry-free transactions with our secure payment
              options.
            </p>
          </div>

          <div className="shadow-3xl rounded-2xl p-14 px-10">
            <div className="bg-coral-red mb-5 inline-block rounded-full p-3">
              <img src={support} alt="" />
            </div>
            <h3 className="mb-5 text-2xl font-semibold">Love to help you</h3>
            <p className="font-montserrat text-slate-500">
              Our dedicated team is here to assist you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
