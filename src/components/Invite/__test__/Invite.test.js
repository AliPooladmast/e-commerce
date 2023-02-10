import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Invite from "../Invite";
import "@testing-library/jest-dom";

it("check if the link element contains register path", async () => {
  render(<Invite />, { wrapper: BrowserRouter });

  expect(screen.getByTestId("register-link").href).toMatch(/register/i);
});
