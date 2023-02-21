const { render, screen } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
import ContactConfirm from "../ContactConfirm";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("check the inputs", () => {
  const currentUser = { phone: "123", address: "aaa" };
  const select = {
    phone: "defaultPhone",
    address: "defaultAddress",
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContactConfirm currentUser={currentUser} select={select} />
      </BrowserRouter>
    );
  });

  it("check if default cases are selected", () => {
    expect(screen.getByTestId("defaultPhone")).toBeChecked();
    expect(screen.getByTestId("defaultAddress")).toBeChecked();
  });

  it("check if new cases are selected", () => {
    expect(screen.getByTestId("newPhone")).not.toBeChecked();
    expect(screen.getByTestId("newAddress")).not.toBeChecked();
  });

  it("check if phone of current user is shown correctly", () => {
    expect(screen.getByTestId("user-phone").textContent).toBe(
      currentUser.phone
    );
  });

  it("check if address of current user is shown correctly", () => {
    expect(screen.getByTestId("user-address").textContent).toBe(
      currentUser.address
    );
  });
});
