import { useState } from "react";
import { useNavigate } from "react-router";
import { validateAllFields, validateField } from "../utils/authHelper";
const inputFields = [
  { label: "Email address", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

function SignIn() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors: newErrors, hasErrors } = validateAllFields(
      inputFields,
      formData,
    );

    if (hasErrors) return setErrors(newErrors);
    navigate("/account");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex h-screen items-center justify-center px-6">
      <div className="w-full max-w-lg">
        <h2 className="mb-4 text-2xl font-semibold sm:mb-6 sm:text-3xl">
          Signin to your PopX account
        </h2>
        <p className="mt-2 pr-4 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 sm:mt-18 sm:space-y-8"
        >
          {inputFields.map((item) => (
          <div key={item.name} className="relative">
            <fieldset
              key={item.name}
              className="overflow-hidden rounded-lg border border-gray-300 transition-all focus-within:border-violet-700"
            >
              <legend className="ml-2 px-2 text-sm font-medium text-violet-700">
                {item.label}
              </legend>
              <input
                value={formData[item.name]}
                onChange={handleInputChange}
                onBlur={handleBlur}
                type={item.type}
                name={item.name}
                placeholder={`Enter ${item.label}`}
                className="h-full w-full pb-2 pl-4 focus:outline-0"
              />
            </fieldset>
            {errors[item.name] && (
                <p className="absolute left-2 mt-0.5 text-xs text-red-500">
                  {errors[item.name]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="mt-14 w-full rounded-md bg-violet-600 py-3 font-semibold text-white shadow transition hover:bg-violet-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
