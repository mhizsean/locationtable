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
    lng: Yup.string().required("This field is required"),
    lat: Yup.string().required("This field is required"),
    address: Yup.array()
      .min(1, "Enter at least 1 address")
      .of(
        Yup.object()
          .shape({
            ad: Yup.string(),
          })
          .required("Please enter address")
      ),
  });
};

const adSchema = () => {
  return Yup.object().shape({
    ad: Yup.string().required("Please enter address"),
  });
};
