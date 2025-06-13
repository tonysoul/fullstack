import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

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
                Get shoes ready for1 the new term at your nearest Nike store.
                Find Your perfect Size In Store. Get Rewards
              </p>
              <div className="mt-10 flex gap-4">
                {socialMedia.map((s) => (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <img src={s.src} alt={s.alt} width={24} height={24} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
              {footerLinks.map((link) => (
                <div>
                  <h4 className="font-montserrat mb-6 text-2xl font-medium text-white">
                    {link.title}
                  </h4>
                  <ul className="space-y-2">
                    {link.links.map((item) => (
                      <li className="text-slate-400 hover:text-slate-100">
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
