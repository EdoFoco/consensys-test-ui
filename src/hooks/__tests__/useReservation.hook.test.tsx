import React from "react";
import { act } from "react-dom/test-utils";
import { MockedProvider } from "@apollo/client/testing";
import TestRenderer from "react-test-renderer";
import { wait } from "@testing-library/user-event/dist/utils";
import { MockedResponse } from "@apollo/client/testing/core/mocking/mockLink";
import {
  useCreateReservation,
  useDeleteReservation,
} from "../useReservation.hook";
import { MockedCreateReservationResponse } from "../../graphql/Reservation/Reservation.mock";
import { CreateReservationResponse } from "../../graphql/Reservation";

describe("UseReservation - creatReservation()", () => {
  const MockComponent = React.memo(() => {
    const { createReservation, creating } = useCreateReservation();

    if (creating) return <div data-test-id="loader">Loading..</div>;
    return (
      <button onClick={() => createReservation()} data-test-id="create-button">
        Create Button
      </button>
    );
  });

  it("Should return loading state", async () => {
    const mockedResponse: MockedResponse<CreateReservationResponse>[] =
      MockedCreateReservationResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MockComponent />
      </MockedProvider>
    );

    act(() => {
      component.root
        .findByProps({ "data-test-id": "create-button" })
        .props.onClick();
    });

    expect(
      component.root.findByProps({ "data-test-id": "loader" })
    ).not.toBeNull();
  });
});

describe("UseReservation - deleteReservation()", () => {
  const MockComponent = React.memo(() => {
    const { deleteReservation, deleting } = useDeleteReservation();

    if (deleting) return <div data-test-id="loader">Loading..</div>;
    return (
      <button onClick={() => deleteReservation()} data-test-id="delete-button">
        Create Button
      </button>
    );
  });

  it("Should return loading state", async () => {
    const mockedResponse: MockedResponse<CreateReservationResponse>[] =
      MockedCreateReservationResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MockComponent />
      </MockedProvider>
    );

    act(() => {
      component.root
        .findByProps({ "data-test-id": "delete-button" })
        .props.onClick();
    });

    expect(
      component.root.findByProps({ "data-test-id": "loader" })
    ).not.toBeNull();
  });
});
