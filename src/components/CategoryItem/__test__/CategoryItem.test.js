import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import CategoryItem from "../CategoryItem";

const item = {
  img: "./assets/images/casual-dress.jpg",
  imgMobile: "./assets/images/casual-dress-mobile.jpg",
  title: "Casual Outfit",
  category: "casual",
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<CategoryItem />);
});

it("renders categoryItem correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <CategoryItem item={item} />
    </MemoryRouter>
  );

  expect(getByTestId("itemTitle")).toHaveTextContent("Casual Outfit");
});

it("snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <CategoryItem item={item} />
      </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
