import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/FirebaseConfig";
import FormMessage from "./FormMessage";

const initialState = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  city: "",
  address: "",
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseId, setPurchaseId] = useState("");

  const d = new Date();
  let date = `${d.getDate()}/${1 + d.getMonth()}/${d.getFullYear()}`;

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const docRef = await addDoc(collection(db, "purchases"), {
      buyer: values,
      date: date,
    });
    console.log("Document written with ID: ", docRef.id);
    setPurchaseId(docRef.id);
    setValues(initialState);
  };

  return (
    <div className="form">
      <h3>Llene el formulario</h3>
      <fieldset className="container">
        <form onSubmit={onSubmit}>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                value={values.name}
                placeholder="Nombre"
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                placeholder="Apellidos"
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <input
                type="number"
                name="phone"
                value={values.phone}
                placeholder="Teléfono"
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <input
                type="email"
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <input
                type="text"
                name="city"
                value={values.city}
                placeholder="Ciudad"
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <input
                type="text"
                name="address"
                value={values.address}
                placeholder="Dirección"
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </fieldset>
      {purchaseId && <FormMessage purchaseId={purchaseId} />}
    </div>
  );
};

export default Form;
