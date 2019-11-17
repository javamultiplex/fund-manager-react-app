const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
export const EventFormFormProps = {
  initialValues : {
    name: '',
    dob: '',
    email: '',
    phone: '',
},
validateOnBlur: true,
ValidateSchema: values => {
    let errors = {};
    if (values.name === "") {
      errors.name = "Name is required";
    }
    if (values.dob === "") {
      errors.dob = "Date Of Birth is required";
    }
    if (values.phone === "") {
      errors.phone = "Phone Number is required";
    }
    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!emailTest.test(values.email)) {
      errors.email = "Invalid email address format";
    }
    return errors;
  }
};
