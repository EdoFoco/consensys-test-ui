import { useCurrentUser } from "../useCurrentUser.hook";
import React from "react";
import { act } from "react-dom/test-utils";
import { MockedProvider } from "@apollo/client/testing";
import TestRenderer from "react-test-renderer";
import { wait } from "@testing-library/user-event/dist/utils";
import { MockedResponse } from "@apollo/client/testing/core/mocking/mockLink";
import { MockUserResponse, userData } from "../../graphql/User/User.mock";
import { GetCurrentUserResponse } from "../../graphql/User";

const MockComponent = React.memo(() => {
  const { userLoading, user, reservation } = useCurrentUser();

  if (userLoading) return <div data-test-id="loader">Loading..</div>;
  return (
    <div>
      <div data-test-id="user-data">{user?.id}</div>
      <div data-test-id="reservation-data">{reservation?.id}</div>
    </div>
  );
});

describe("UseCurrentUser - ", () => {
  it("Should return loading state", async () => {
    const mockedResponse: MockedResponse<GetCurrentUserResponse>[] =
      MockUserResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MockComponent />
      </MockedProvider>
    );

    expect(
      component.root.findByProps({ "data-test-id": "loader" })
    ).not.toBeNull();
  });

  it("Should return user with the first reservation", async () => {
    const mockedResponse: MockedResponse<GetCurrentUserResponse>[] =
      MockUserResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MockComponent />
      </MockedProvider>
    );

    await act(async () => await wait(100));

    const tree = component.toJSON() as any;
    const treeString = JSON.stringify(tree);

    expect(treeString).toContain(userData.getCurrentUser.user.id);
    expect(treeString).toContain(
      userData.getCurrentUser.user.reservations[0].id
    );
  });
});
