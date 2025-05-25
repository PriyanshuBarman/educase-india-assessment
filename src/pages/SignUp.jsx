import { useState } from "react";
import { validateAllFields, validateField } from "../utils/authHelper";
import { useNavigate } from "react-router";
const inputFields = [
  { label: "Full Name", name: "fullName", type: "text" },
  { label: "Phone number", name: "phone", type: "tel" },
  { label: "Email address", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Company name", name: "company", type: "text" },
];

function SignUp() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
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

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, agency: e.target.value }));

    setErrors((prev) => ({ ...prev, agency: "" }));
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
    <div className="flex h-screen w-full items-center justify-center bg-transparent px-6 sm:bg-gray-50">
      <div className="bg-/20 w-lg max-w-lg py-8 sm:rounded-2xl sm:bg-white sm:px-12 sm:shadow">
        <h2 className="text-center text-2xl font-semibold">
          Create Your PopX Account
        </h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="space-y-6 sm:space-y-8">
            {inputFields.map((item) => (
              <div key={item.name} className="relative">
                <fieldset
                  className={`overflow-hidden rounded-lg border transition-all focus-within:border-violet-700 ${
                    errors[item.name] ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <legend className="ml-2 px-2 text-sm  font-medium text-violet-700">
                    {item.label} <span className="text-red-500">*</span>
                  </legend>
                  <input
                    type={item.type}
                    name={item.name}
                    value={formData[item.name]}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder={`Enter ${item.label.toLowerCase()}`}
                    className="w-full pb-2 pl-4  focus:outline-0"
                  />
                </fieldset>
                {errors[item.name] && (
                  <p className="absolute left-2 mt-0.5 text-xs text-red-500">
                    {errors[item.name]}
                  </p>
                )}
              </div>
            ))}

            <div className="radio-btns relative">
              <p>
                Are you an Agency? <span className="text-red-500">*</span>
              </p>
              <div className="mt-2 flex gap-4">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    required
                    checked={formData.agency === "yes"}
                    onChange={handleRadioChange}
                  />
                  Yes
                </label>

                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    required
                    checked={formData.agency === "no"}
                    onChange={handleRadioChange}
                  />
                  No
                </label>
              </div>
              {errors.agency && (
                <p className="absolute left-0 mt-1 text-xs text-red-500">
                  {errors.agency}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-14 w-full rounded-md bg-violet-600 py-3 font-semibold text-white shadow transition hover:bg-violet-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
