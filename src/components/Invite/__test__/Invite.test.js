import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Invite from "../Invite";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

it("snapshot of component", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Invite />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("check if the link element contains register path", async () => {
  render(
    <BrowserRouter>
      <Invite />
    </BrowserRouter>
  );

  expect(screen.getByTestId("register-link").href).toMatch(/register/i);
});
