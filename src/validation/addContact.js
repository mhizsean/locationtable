import * as Yup from "yup";

export const contactSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required("Please enter full name"),
    phoneNumber: Yup.string()
      .min(11, "Phone number must be at least 11 characters")
      .required("Please enter phone number"),
    email: Yup.string()
      .email("Please input a valid email address")
      .required("Please input a correct email address"),
    address: Yup.string().required("Enter atleast one address"),
    longitude: Yup.string().required("this field is required"),
    latitude: Yup.string().required("this field is required"),
  });
};
