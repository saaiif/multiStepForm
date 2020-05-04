import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Names from "./Names";
import Address from "./Address";
import Contact from "./Contact";
import Review from "./Review";
import Submit from "./Submit";

import "../App.css";

const steps = [
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" }
];

const defaultData = {
  firstName: "Saif",
  lastName: "Mujawar",
  nickName: "Sam",
  address: "200 XYZ New Street",
  city: "Bangalore",
  state: "karnataka",
  zip: "560010",
  email: "email@domain.com",
  phone: "+91 2111115111"
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
