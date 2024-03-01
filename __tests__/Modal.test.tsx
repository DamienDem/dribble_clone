import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "@/components/Modal";
import mockRouter from "next-router-mock";

// Mock useRouter to simulate routing
jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

describe("Modal Component", () => {
  mockRouter.push("/create-project");
  test("the modal closes when clicking on the close button", () => {
    const { getByAltText, queryByTestId } = render(
      <Modal>
        <div>Modal Content</div>
      </Modal>
    );
    fireEvent.click(getByAltText("close"));
    expect(queryByTestId("modal-wrapper")).toBeNull();
  });

  test("the modal closes when clicking outside the modal area", () => {
    const { getByTestId, queryByTestId } = render(
      <div data-testid="outside">
        <Modal>
          <div>Modal Content</div>
        </Modal>
      </div>
    );
    fireEvent.click(getByTestId("outside"));
    expect(queryByTestId("modal-wrapper")).toBeNull();
  });

  test("the modal does not close when clicking inside the modal area", () => {
    const { getByTestId, getByText } = render(
      <Modal>
        <div data-testid="inside">Modal Content</div>
      </Modal>
    );
    fireEvent.click(getByTestId("inside"));
    expect(getByText("Modal Content")).toBeInTheDocument();
  });

  test("routing to the home page occurs when the modal closes", () => {
    const { getByAltText } = render(
      <Modal>
        <div>Modal Content</div>
      </Modal>
    );
    fireEvent.click(getByAltText("close"));
    expect(mockRouter).toMatchObject({ pathname: "/" });
  });
});
