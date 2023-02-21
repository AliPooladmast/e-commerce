const { render, screen } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
import ContactConfirm from "../ContactConfirm";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

const currentUser = { phone: "123", address: "aaa" };
const select = {
  phone: "defaultPhone",
  address: "defaultAddress",
};

describe("check the inputs", () => {
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

describe("snapshot", () => {
  it("match the snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ContactConfirm currentUser={currentUser} select={select} />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
