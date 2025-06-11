import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section id="SuperQuality">
      <div className="max-container">
        <div className="flex items-center justify-between px-6 py-24">
          <div className="max-lg: max-w-lg">
            <h2 className="text-4xl leading-[1.5] font-bold tracking-wide capitalize">
              We Provide You{" "}
              <span className="text-coral-red">Super Quality</span> Shoes
            </h2>
            <p className="mt-5 text-lg text-slate-500">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>

            <p className="mt-8 text-lg text-slate-500">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className="mt-10">
              <Button label="View details" />
            </div>
          </div>
          <div className="flex justify-end">
            <img src={shoe8} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
