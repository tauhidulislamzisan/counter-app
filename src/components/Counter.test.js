import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments and decrements the count", () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText("Increment");
  const decrementButton = getByText("Decrement");

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);

  const countElement = getByText("Current Count: 1");
  expect(countElement).toBeInTheDocument();
});
