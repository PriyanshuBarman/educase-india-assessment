export const validateField = (name, value) => {
  if (!value.trim())
    return `${name?.charAt(0).toUpperCase()}${name?.slice(1)} is required`;

  if (name === "password") {
    if (value.length < 6) return "Password must be at least 6 characters";
  }

  if (name === "phone") {
    if (!/^\d+$/.test(value)) return "Phone number should contain only numbers";
    if (value.length !== 10)
      return "Phone number should be 10 characters long.";
  }

  return ""; // No error
};

export const validateAllFields = (fields, formData) => {
  const errors = {};
  let hasErrors = false;

  fields.forEach((field) => {
    let error = validateField(field.name, formData[field.name]);
    if (error) {
      errors[field.name] = error;
      hasErrors = true;
    }
  });

  return { errors, hasErrors };
};
