import { useFormik } from "formik";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { contactSchema } from "../validation/addContact";

const AddContact = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    longitude: "",
    latitude: "",
  };

  const handleSubmit = (data) => {
    const oldContact = JSON.parse(localStorage.getItem("contactList")) || [];

    const newContact = [...oldContact, { ...data }];

    localStorage.setItem("contactList", JSON.stringify(newContact));
    console.log(newContact);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: contactSchema,
    validateOnChange: false,
  });

  return (
    <div className="add-cont">
      <div className="title-cont">
        <h3>Add Contact</h3>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="add-form">
          <div className="input-control">
            <Input
              name="name"
              placeholder="Enter full name"
              className=""
              label="Full name"
              onChange={formik.handleChange}
              errorMessage={formik?.errors?.name}
            />
            <Input
              name="phoneNumber"
              placeholder="Enter Phone Number"
              label="Phone Number"
              className="ml"
              onChange={formik.handleChange}
              errorMessage={formik?.errors?.phoneNumber}
            />
            <Input
              name="email"
              placeholder="Enter email address"
              label="Email"
              className="ml"
              onChange={formik.handleChange}
              errorMessage={formik?.errors?.email}
            />
          </div>
          <div className="address">
            <Input
              name="address"
              className="w-full"
              placeholder="Enter address"
              label="Address"
              onChange={formik.handleChange}
              errorMessage={formik?.errors?.address}
            />
            <span>+</span>
          </div>
          <div className="input-control">
            <Input
              name="longitude"
              label="Longitude"
              // disabled
              className="mr"
              onChange={formik.handleChange}
              errorMessage={formik?.errors?.longitude}
            />
            <Input
              name="latitude"
              label="Latitude"
              // disabled
              className="ml"
              onChange={formik.handleChange}
              errorMessage={formik?.errors?.latitude}
            />
          </div>

          <Button text="save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddContact;
