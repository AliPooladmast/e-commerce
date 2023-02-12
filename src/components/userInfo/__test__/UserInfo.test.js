const { render } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
import UserInfo from "../UserInfo";
import renderer from "react-test-renderer";

const user = {
  username: "username",
  _id: "id",
  isAdmin: "isAdmin",
  token: "token",
  createdAt: "createdAt",
  fullname: "fullname",
  email: "email",
  phone: "phone",
  address: "address",
  img: "img",
  title: "title",
};

it("match the snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <UserInfo user={user} />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
