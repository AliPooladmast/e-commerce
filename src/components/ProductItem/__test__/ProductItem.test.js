const { render, screen } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
import ProductItem from "../ProductItem";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

const item = {
  title: "dress",
  size: "M",
  color: "blue",
  price: "10",
  _id: "123",
  img: "image",
};

it("match snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <ProductItem item={item} />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

describe("test item title and price", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductItem item={item} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("check the title", () => {
    expect(screen.getByTestId("item-title").textContent).toBe(item.title);
  });

  it("check the price", () => {
    expect(screen.getByTestId("item-price").textContent).toBe("$" + item.price);
  });

  it("check the product page redirect", () => {
    expect(
      screen.getByTestId("item-page-link").href.includes(`/product/${item._id}`)
    ).toBeTruthy();
  });
});
