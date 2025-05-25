import { NavLink } from "react-router";

const Welcome = () => {
  return (
    <div className="flex min-h-screen w-full items-end justify-center p-6 sm:items-center">
      <div className="w-full max-w-sm text-center">
        <h1 className="mb-4 text-3xl font-semibold sm:mb-8 sm:text-4xl">
          Welcome to PopX
        </h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="mt-14 flex flex-col gap-4 sm:mt-18 sm:gap-8">
          <NavLink to="/sign-up">
            <button className="w-full rounded-md bg-violet-600 py-3 font-semibold text-white shadow transition hover:bg-violet-700">
              Create Account
            </button>
          </NavLink>

          <NavLink to="/sign-in">
            <button className="w-full rounded-md bg-violet-100 py-3 font-semibold text-violet-800 shadow transition hover:bg-violet-200">
              Already Registered? Login
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
