import { useAuth0, Auth0ContextInterface, User } from "@auth0/auth0-react";
import { unmountComponentAtNode } from "react-dom";
import { wait } from "@testing-library/user-event/dist/utils";
import TestRenderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import Layout from "../Layout";

const user = {
  email: "johndoe@me.com",
  sub: "google-oauth2|12345678901234",
};

// Setup mocks
jest.mock("@auth0/auth0-react");
jest.mock("../../Home/Home", () => () => <div data-test-id="home">Home</div>);
jest.mock("../../../components/Navbar/Navbar", () => () => (
  <div data-test-id="navbar">NavBar</div>
));

const mockedUseAuth0 = jest.mocked(useAuth0, true);

describe("Layout Container", () => {
  it("Should display navbar and unauthenticated view", async () => {
    // mockedUseAuth0.mockReturnValue({
    //   isAuthenticated: false,
    //   user,
    //   isLoading: false,
    //   logout: jest.fn(),
    //   loginWithRedirect: jest.fn(),
    //   getAccessTokenSilently: jest.fn(),
    //   getIdTokenClaims: jest.fn(),
    //   loginWithPopup: jest.fn(),
    //   buildAuthorizeUrl: jest.fn(),
    //   buildLogoutUrl: jest.fn(),
    //   getAccessTokenWithPopup: jest.fn(),
    //   handleRedirectCallback: jest.fn(),
    // });
    // const component = TestRenderer.create(<Layout />);
    // await act(async () => await wait(100));
    // expect(
    //   component.root.findByProps({ "data-test-id": "navbar" })
    // ).not.toBeNull();
    // expect(
    //   component.root.findByProps({ "data-test-id": "unauthorized-view" })
    // ).not.toBeNull();
  });

  it("Should display navbar and a loader while authenticating", async () => {
    // mockedUseAuth0.mockReturnValue({
    //   isAuthenticated: false,
    //   user,
    //   isLoading: true,
    //   logout: jest.fn(),
    //   loginWithRedirect: jest.fn(),
    //   getAccessTokenSilently: jest.fn(),
    //   getIdTokenClaims: jest.fn(),
    //   loginWithPopup: jest.fn(),
    //   buildAuthorizeUrl: jest.fn(),
    //   buildLogoutUrl: jest.fn(),
    //   getAccessTokenWithPopup: jest.fn(),
    //   handleRedirectCallback: jest.fn(),
    // });
    // const component = TestRenderer.create(<Layout />);
    // await act(async () => await wait(100));
    // expect(
    //   component.root.findByProps({ "data-test-id": "navbar" })
    // ).not.toBeNull();
    // expect(
    //   component.root.findByProps({ "data-test-id": "loader" })
    // ).not.toBeNull();
  });

  it("Should display the home screen if authenticated", async () => {
    // mockedUseAuth0.mockReturnValue({
    //   isAuthenticated: true,
    //   user,
    //   isLoading: false,
    //   logout: jest.fn(),
    //   loginWithRedirect: jest.fn(),
    //   getAccessTokenSilently: jest.fn(),
    //   getIdTokenClaims: jest.fn(),
    //   loginWithPopup: jest.fn(),
    //   buildAuthorizeUrl: jest.fn(),
    //   buildLogoutUrl: jest.fn(),
    //   getAccessTokenWithPopup: jest.fn(),
    //   handleRedirectCallback: jest.fn(),
    // });
    // const component = TestRenderer.create(<Layout />);
    // await act(async () => await wait(100));
    // expect(
    //   component.root.findByProps({ "data-test-id": "navbar" })
    // ).not.toBeNull();
    // expect(
    //   component.root.findByProps({ "data-test-id": "home" })
    // ).not.toBeNull();
  });
});
