import { star } from "../assets/icons";
import { reviews } from "../constants";

const Customers = () => {
  return (
    <section id="Customers" className="bg-purple-50">
      <div className="max-container">
        <div className="px-16 py-24 max-sm:px-8">
          <div className="text-center">
            <h2 className="text-balance">
              What Our <span className="text-coral-red">Customers</span> Say?
            </h2>
            <p className="info-text mx-auto mt-5 max-w-lg">
              Hear genuine stories from our satisfied customers about their
              exceptional experiences with us.
            </p>
          </div>

          <div className="mt-20 flex flex-col justify-evenly gap-10 lg:flex-row">
            {reviews.map((item) => (
              <div className="flex flex-col items-center justify-center">
                <img
                  className="h-[120px] w-[120px] rounded-full"
                  src={item.imgURL}
                  alt=""
                />
                <p className="info-text mt-6 max-w-sm text-center">
                  {item.feedback}
                </p>
                <div className="mt-3 flex">
                  <img src={star} alt="" />
                  <p className="ml-2 text-lg text-slate-500">({item.rating})</p>
                </div>
                <h3 className="mt-1 text-xl font-bold">{item.customerName}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
