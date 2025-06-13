import { services } from "../constants";
const Services = () => {
  return (
    <section id="Services">
      <div className="max-container">
        <div className="flex flex-wrap justify-between gap-10 px-16 py-24 max-sm:px-8">
          {services.map((s) => (
            <div className="shadow-3xl min-w-[350px] flex-1 rounded-2xl p-14 px-10">
              <div className="bg-coral-red mb-5 inline-block rounded-full p-3">
                <img src={s.imgURL} alt="" />
              </div>
              <h3 className="mb-5 text-2xl font-semibold">{s.label}</h3>
              <p className="font-montserrat text-slate-500">{s.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
