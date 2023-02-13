const { render, screen } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
import Footer from "../Footer";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

describe("links validity", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it("check Home link availability", () => {
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it("check Cart link availability", () => {
    expect(screen.getByText(/cart/i).href).toMatch(/cart/);
  });

  it("check User link availability", () => {
    expect(screen.getByText(/My Account/i).href).toMatch(/user/);
  });

  it("check casual category link availability", () => {
    expect(
      screen.getByText(/casual/i).href.includes("/products/casual")
    ).toBeTruthy();
  });

  it("check formal category link availability", () => {
    expect(
      screen.getByText(/formal/i).href.includes("/products/formal")
    ).toBeTruthy();
  });

  it("check fashion category link availability", () => {
    expect(
      screen.getByText(/fashion/i).href.includes("/products/fashion")
    ).toBeTruthy();
  });
});
