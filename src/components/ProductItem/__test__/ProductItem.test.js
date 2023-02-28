const { render, screen } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
import ProductItem from "../ProductItem";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

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
});
