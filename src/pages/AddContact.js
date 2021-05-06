import { useFormik } from "formik";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { contactSchema } from "../validation/addContact";
import add from "../components/icon/add.svg";
import remove from "../components/icon/remove.svg";
import { useHistory } from "react-router";
import { usePosition } from "use-position";
import { useEffect, useState } from "react";

const AddContact = () => {
  const history = useHistory();

  const watch = true;
  const { latitude, longitude, error } = usePosition(watch, {
    enableHighAccuracy: true,
  });

  const [addresses, setAddresses] = useState([{ ad: "" }]);
  const [latd, setLatd] = useState("");
  const [long, setLong] = useState("");

  const addAddress = () => {
    setAddresses((prevAddresses) => [...prevAddresses, { ad: "" }]);
  };

  const removeAddress = (id) => {
    const newAddresses = addresses?.filter((address, i) => i !== id);
    setAddresses(newAddresses);
    setFieldValue("address", addresses);
  };

  const handleAddressChange = (e, id) => {
    const value = e.target.value;
    const newAddresses = addresses?.map((address, i) => {
      if (i === id) {
        address.ad = value;
      }
      return address;
    });
    setAddresses(newAddresses);
    setFieldValue("address", newAddresses);
  };

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: [],
    lng: "",
    lat: "",
  };

  const handleSubmit = (data) => {
    const oldContact = JSON.parse(localStorage.getItem("contactList")) || [];
    const newAddresses = data?.address?.filter(
      (address) => address?.ad?.length
    );
    data.address = newAddresses;
    const newContact = [...oldContact, { ...data }];
    localStorage.setItem("contactList", JSON.stringify(newContact));
    // console.log(newContact);
    formik.resetForm({
      name: "",
      email: "",
      phoneNumber: "",
      address: [],
      lng: long,
      lat: latd,
    });
    setAddresses([{ ad: "" }]);
    history.push("/");
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: contactSchema,
    validateOnChange: false,
  });

  const { setFieldValue } = formik;
  useEffect(() => {
    setFieldValue("lng", longitude);
    setFieldValue("lat", latitude);
    setLatd(latitude);
    setLong(longitude);
    console.log(error);
    console.log(longitude, latitude);
  }, [setFieldValue, longitude, latitude, error]);

  const { lng, lat, name, email, phoneNumber } = formik.values;

  return (
    <div className="add-cont">
      <div className="back">
        <span onClick={() => history.goBack()}> &#5130; back</span>
      </div>
      <div className="title-cont">
        <h3>Add Contact</h3>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="add-form">
          <div className="input-control">
            <Input
              name="name"
              placeholder="Enter full name"
              label="Full name"
              value={name}
              onChange={formik.handleChange}
              errorMessage={formik?.errors?.name}
            />
            <Input
              name="phoneNumber"
              placeholder="Enter Phone Number"
              label="Phone Number"
              value={phoneNumber}
              onChange={formik.handleChange}
              errorMessage={formik?.errors?.phoneNumber}
            />
            <Input
              name="email"
              placeholder="Enter email address"
              label="Email"
              value={email}
              onChange={formik.handleChange}
              errorMessage={formik?.errors?.email}
            />
          </div>
          {addresses?.map((address, i) => (
            <div className="address" key={i}>
              <Input
                name={`address${i}`}
                className="w-full"
                placeholder="Enter address"
                label={`Address ${i > 0 ? i + 1 : ""}`}
                value={address?.ad}
                onChange={(e) => handleAddressChange(e, i)}
                errorMessage={formik?.errors?.address}
              />
              <span className="action">
                {i < 4 && i === addresses?.length - 1 ? (
                  <img src={add} alt="add new" onClick={() => addAddress()} />
                ) : null}

                {i > 0 ? (
                  <img
                    src={remove}
                    alt="remove"
                    onClick={() => removeAddress(i)}
                  />
                ) : null}
              </span>
            </div>
          ))}
          <div className="input-control">
            <Input
              name="lng"
              label="Longitude"
              disabled
              // className="mr"
              // onChange={formik.handleChange}
              defaultValue={lng}
              errorMessage={formik?.errors?.lng}
            />
            <Input
              name="lat"
              label="Latitude"
              disabled
              // className="ml"
              // onChange={formik.handleChange}
              defaultValue={lat}
              errorMessage={formik?.errors?.lat}
            />
          </div>

          <Button text="save" type="submit" className="save-btn" />
        </div>
      </form>
    </div>
  );
};

export default AddContact;
