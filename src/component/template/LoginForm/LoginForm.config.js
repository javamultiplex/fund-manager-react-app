const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
export const LoginFormProps = {
  initialValues : {
    password:'',
    email: '',
},
validateOnBlur: true,
Validate: values => {
    let errors = {};
    if (values.password === "") {
      errors.password = "password is required";
    }
    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!emailTest.test(values.email)) {
      errors.email = "Invalid email address format";
    }
    return errors;
  }
};
