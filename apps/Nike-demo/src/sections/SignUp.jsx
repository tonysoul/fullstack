import { Button } from "../components";

const SignUp = () => {
  return (
    <section id="SignUp">
      <div className="max-container">
        <div className="flex flex-col items-center justify-between gap-10 px-16 py-24 max-sm:px-8 lg:flex-row">
          <div>
            <h3 className="font-palanquin text-4xl leading-[1.5] font-bold text-balance lg:max-w-sm">
              Sign Up for <span className="text-coral-red">Updates</span> &
              Newsletter
            </h3>
          </div>
          <div className="flex rounded-full border p-2 max-lg:w-full max-sm:flex-col max-sm:gap-5 max-sm:border-0">
            <input
              className="min-w-[280px] border-0 pl-2 text-slate-500 outline-0 max-lg:flex-1 max-sm:rounded-full max-sm:border max-sm:p-[20px]"
              type="text"
              placeholder="subscribe@nike.com"
            />
            <div className="flex items-center max-sm:w-full max-sm:justify-end">
              <Button label="Sign Up" fullWidth="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
