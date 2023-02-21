const { render, screen, waitFor } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
import Slider from "../Slider";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

it("check if sliding works", async () => {
  render(
    <BrowserRouter>
      <Slider />
    </BrowserRouter>
  );

  const user = userEvent.setup();
  user.click(screen.getByTestId("arrow-right"));

  await waitFor(() => {
    expect(screen.getByTestId("slider-wrapper")).toHaveStyle(
      "transform: translateX(-100vw)"
    );
  });
});

it("check if shop link is correct", () => {
  render(
    <BrowserRouter>
      <Slider />
    </BrowserRouter>
  );

  expect(
    screen
      .getAllByTestId("shop-link")
      .every((item) => item.href.includes("products"))
  ).toBeTruthy();
});

it("match snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Slider />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
