import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  expect(render(<CheckoutForm />));
});

test("form shows success message on submit with form details", () => {
  /////////////////////  Arrange  /////////////////////
  render(<CheckoutForm />);
  // Selectors
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const checkoutBtn = screen.getByText(/checkout/i, { selector: "button" });

  // Input Values
  const firstNameValue = "Eddward";
  const lastNameValue = "Burke";
  const addressValue = "1234 East 42nd St Apt 321";
  const cityValue = "Midtown";
  const stateValue = "New York";
  const zipValue = "10017";

  /////////////////////  Act  /////////////////////
  userEvent.type(firstNameInput, firstNameValue);
  userEvent.type(lastNameInput, lastNameValue);
  userEvent.type(addressInput, addressValue);
  userEvent.type(cityInput, cityValue);
  userEvent.type(stateInput, stateValue);
  userEvent.type(zipInput, zipValue);
  userEvent.click(checkoutBtn);

  /////////////////////  Assert  /////////////////////
});
