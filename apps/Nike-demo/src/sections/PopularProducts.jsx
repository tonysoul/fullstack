import { star } from "../assets/icons";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="PopularProducts">
      <div className="max-container">
        <div className="px-16 py-24 max-sm:px-8">
          <h2 className="mb-10 text-4xl font-bold">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="font-montserrat mb-20 text-slate-500 lg:max-w-lg">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-6 xl:grid-cols-4 xl:gap-10">
            {products.map((product) => (
              <div className="flex flex-col gap-4">
                <img
                  src={product.imgURL}
                  alt=""
                  className="h-[282px] w-[282px]"
                />
                <div className="flex justify-start gap-2">
                  <img src={star} width={24} height={24} alt="" />
                  <p className="font-montserrat text-xl text-slate-500">
                    (4.8)
                  </p>
                </div>
                <h3 className="font-palanquin text-2xl leading-normal font-semibold">
                  {product.name}
                </h3>
                <p className="text-coral-red text-2xl font-semibold">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
