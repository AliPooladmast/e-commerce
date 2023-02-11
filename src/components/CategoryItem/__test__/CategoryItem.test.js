import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CategoryItem from "../CategoryItem";
import renderer from "react-test-renderer";
import { CategoryRounded } from "@mui/icons-material";

const item = {
  img: "img",
  imgMobile: "imgMobile",
  title: "title",
  category: "category",
};

it("match the snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <CategoryRounded />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("check if the element contain the category path", () => {
  render(
    <BrowserRouter>
      <CategoryItem item={item} />
    </BrowserRouter>
  );

  expect(
    screen.getByTestId("categorty-link").href.includes("/products/category")
  ).toBeTruthy();
});

it("check if the title is correct", () => {
  render(
    <BrowserRouter>
      <CategoryItem item={item} />
    </BrowserRouter>
  );

  expect(
    screen.getByTestId("categorty-link").querySelector("h1").textContent
  ).toMatch("title");
});
