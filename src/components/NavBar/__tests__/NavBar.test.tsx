import { NavBar } from "..";
import TestRenderer, { act } from "react-test-renderer";

describe("NavBar - ", () => {
  it("Should display logout button when user is authenticated", async () => {
    const component = TestRenderer.create(
      <NavBar
        isAuthenticated={true}
        loginWithRedirect={() => {}}
        logout={() => {}}
      />
    );

    const button = component.root.findByProps({
      "data-test-id": "logout-button",
    });
    expect(button).not.toBe(null);
  });

  it("Should display login button when user is not authenticated", async () => {
    const component = TestRenderer.create(
      <NavBar
        isAuthenticated={false}
        loginWithRedirect={() => {}}
        logout={() => {}}
      />
    );

    const button = component.root.findByProps({
      "data-test-id": "login-button",
    });
    expect(button).not.toBe(null);
  });

  it("Should call login function when user logs in", async () => {
    const login = jest.fn(() => {});
    const logout = jest.fn(() => {});

    const component = TestRenderer.create(
      <NavBar
        isAuthenticated={false}
        loginWithRedirect={login}
        logout={logout}
      />
    );

    const button = component.root.findByProps({
      "data-test-id": "login-button",
    });

    act(button.props.onClick);

    expect(login.mock.calls.length).toBe(1);
    expect(logout.mock.calls.length).toBe(0);
  });

  it("Should call logout function when user logs out", async () => {
    const login = jest.fn(() => {});
    const logout = jest.fn(() => {});

    const component = TestRenderer.create(
      <NavBar
        isAuthenticated={true}
        loginWithRedirect={login}
        logout={logout}
      />
    );

    const button = component.root.findByProps({
      "data-test-id": "logout-button",
    });

    act(button.props.onClick);

    expect(logout.mock.calls.length).toBe(1);
    expect(login.mock.calls.length).toBe(0);
  });
});
