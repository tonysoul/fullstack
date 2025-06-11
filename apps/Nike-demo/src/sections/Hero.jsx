import { arrowRight } from "../assets/icons";
import {
  bigShoe1,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";
import { Button } from "../components";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section id="hero">
      <div className="max-container">
        <div className="flex min-h-screen flex-col justify-between px-6 xl:lg:flex-row">
          <div className="flex flex-col pt-28 lg:w-full xl:w-1/2">
            <p className="text-coral-red font-montserrat mb-10 text-xl">
              Our Summer collections
            </p>
            <h1 className="mb-6 text-8xl leading-[1.2] font-bold">
              <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
                The New Arrival
              </span>
              <br />
              <span className="text-coral-red">Nike</span> Shoes
            </h1>
            <p className="font-montserrat mb-14 text-lg leading-[1.5] text-slate-500 sm:max-w-sm">
              Discover stylish Nike arrivals, quality comfort, and innovation
              for your active life.
            </p>
            <div>
              <Button label="Shop now" iconUrl={arrowRight} />
            </div>
            <div className="mt-20 flex items-start justify-start gap-16">
              {statistics.map((item) => (
                <div key={item.label}>
                  <p className="text-4xl font-bold">{item.value}</p>
                  <p className="font-montserrat leading-7 text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-hero flex flex-1 flex-col items-center justify-center space-y-5 bg-purple-50 bg-cover bg-center">
            <img
              className="relative object-contain"
              src={bigShoe1}
              width={610}
              height={502}
              alt=""
            />
            <div className="flex gap-6">
              <div className="border-coral-red rounded-xl border-2 hover:cursor-pointer">
                <div className="bg-card flex h-40 w-40 items-center justify-center bg-cover bg-center">
                  <img src={thumbnailShoe1} alt="" />
                </div>
              </div>
              <div className="rounded-xl border-2 border-transparent hover:cursor-pointer">
                <div className="bg-card flex h-40 w-40 items-center justify-center bg-cover bg-center">
                  <img src={thumbnailShoe2} alt="" />
                </div>
              </div>
              <div className="rounded-xl border-2 border-transparent hover:cursor-pointer">
                <div className="bg-card flex h-40 w-40 items-center justify-center bg-cover bg-center">
                  <img src={thumbnailShoe3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
