import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section id="SpecialOffer">
      <div className="max-container">
        <div className="flex flex-col-reverse items-center justify-between gap-10 px-16 py-24 max-sm:px-8 xl:flex-row">
          <div className="flex-1">
            <img src={offer} alt="" />
          </div>
          <div className="flex flex-1 flex-col">
            <h2>
              <span className="text-coral-red">Special</span> Offer
            </h2>
            <p className="info-text mt-4">
              Embark on a shopping journey that redefines your experience with
              unbeatable deals. From premier selections to incredible savings,
              we offer unparalleled value that sets us apart.
            </p>
            <p className="info-text mt-6">
              Navigate a realm of possibilities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with
              us is nothing short of exceptional.
            </p>
            <div className="mt-10 flex gap-4">
              <Button label="Shop now" iconUrl={arrowRight} />
              <Button
                label="Learn more"
                backgroundColor="bg-white"
                borderColor="border-slate-500"
                textColor="text-slate-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
