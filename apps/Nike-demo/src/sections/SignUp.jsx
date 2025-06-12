import { Button } from "../components";

const SignUp = () => {
  return (
    <section id="SignUp">
      <div className="max-container">
        <div className="flex items-center justify-between px-6 py-24">
          <div>
            <h3 className="font-palanquin max-w-sm text-4xl leading-[1.5] font-bold text-balance">
              Sign Up for <span className="text-coral-red">Updates</span> &
              Newsletter
            </h3>
          </div>
          <div className="flex rounded-full border p-2">
            <input
              className="min-w-sm border-0 pl-2 text-slate-500 outline-0"
              type="text"
              placeholder="subscribe@nike.com"
            />
            <Button label="Sign Up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
