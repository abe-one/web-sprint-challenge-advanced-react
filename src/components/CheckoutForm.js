import React, { useState } from "react";
import useForm from "../hooks/useForm";
import useLocalStorage from "../hooks/useLocalStorage";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, handleChanges, resetValues] = useForm(
    "checkoutFormValues",
    initialValue
  );
  const [submittedValues, setSubmittedValues] = useLocalStorage(
    "checkoutSubmission",
    values
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValues(values);
    setShowSuccessMessage(true);
    resetValues();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo!{" "}
            <span role="img" aria-label="a party popper emoji">
              🎉
            </span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {submittedValues.firstName} {submittedValues.lastName}
          </p>
          <p>{submittedValues.address}</p>
          <p>
            {submittedValues.city}, {submittedValues.state}{" "}
            {submittedValues.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
