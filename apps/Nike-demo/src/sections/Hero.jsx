import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { Button } from "../components";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);

  const handleClick = (item) => {
    if (bigShoe !== item.bigShoe) {
      setBigShoe(item.bigShoe);
    }
  };

  return (
    <section id="hero">
      <div className="max-container">
        <div className="flex flex-col justify-between xl:flex-row">
          <div className="flex flex-col px-16 pt-28 max-sm:px-8 xl:min-h-screen xl:w-1/2">
            <p className="text-coral-red font-montserrat mb-10 text-xl">
              Our Summer collections
            </p>
            <h1 className="mb-6 text-[min(100vw,70px)] leading-[1.2] font-bold">
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
            <div className="mt-20 flex items-start justify-start gap-10 lg:gap-16">
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
          <div className="bg-hero flex flex-1 flex-col items-center justify-center space-y-5 bg-purple-50 bg-cover bg-center max-xl:mt-10 max-xl:space-y-10 max-xl:py-40 xl:min-h-screen">
            <img
              className="relative object-contain"
              src={bigShoe}
              width={610}
              height={502}
              alt=""
            />
            <div className="flex gap-6 max-sm:px-6">
              {shoes.map((item) => (
                <div
                  className={`${bigShoe === item.bigShoe ? "border-coral-red" : "border-transparent"} bg-card rounded-xl border-2 bg-cover bg-center hover:cursor-pointer max-sm:flex-1`}
                >
                  <div className="flex items-center justify-center p-4">
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="object-contain"
                      width={127}
                      height={103.34}
                      onClick={() => {
                        handleClick(item);
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* <div className="bg-card rounded-xl border-2 border-transparent bg-cover bg-center hover:cursor-pointer max-sm:flex-1">
                <div className="flex items-center justify-center p-4">
                  <img
                    src={thumbnailShoe2}
                    alt=""
                    className="object-contain"
                    width={127}
                    height={103.34}
                  />
                </div>
              </div>
              <div className="bg-card rounded-xl border-2 border-transparent bg-cover bg-center hover:cursor-pointer max-sm:flex-1">
                <div className="flex items-center justify-center p-4">
                  <img
                    src={thumbnailShoe3}
                    alt=""
                    className="object-contain"
                    width={127}
                    height={103.34}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
