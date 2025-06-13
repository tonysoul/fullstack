import { facebook, instagram, twitter } from "../assets/icons";
import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <section id="Footer" className="bg-black text-slate-300">
      <div className="max-container">
        <div className="p-16 py-24 max-sm:p-8">
          <div className="flex flex-col gap-20 lg:flex-row">
            <div>
              <a href="/">
                <img width={150} height={46} src={footerLogo} alt="logo" />
              </a>
              <p className="mt-6 max-w-sm text-base">
                Get shoes ready for the new term at your nearest Nike store.
                Find Your perfect Size In Store. Get Rewards
              </p>
              <div className="mt-10 flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <img src={facebook} alt="" width={24} height={24} />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <img src={twitter} alt="" width={24} height={24} />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <img src={instagram} alt="" width={24} height={24} />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
              <div>
                <h4 className="font-montserrat mb-6 text-2xl font-medium text-white">
                  Products
                </h4>
                <ul className="space-y-2">
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">Air Force 1</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">Air Max 1</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">Air Jordan 1</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">Air Force 2</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">Nike Waffle Racer</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">Nike Cortez</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-montserrat mb-6 text-2xl font-medium text-white">
                  Help
                </h4>

                <ul className="space-y-2">
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">About us</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">FAQs</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">How it works</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">Privacy policy</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="/">Payment policy</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-montserrat mb-6 text-2xl font-medium text-white">
                  Get in touch
                </h4>
                <ul className="space-y-2">
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="mailto:customer@nike.com">customer@nike.com</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-100">
                    <a href="tel:+92554862354">+92554862354</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col justify-between text-center sm:flex-row">
            <div>&copy; Copyright. All rights reserved.</div>
            <div>Terms & Conditions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
