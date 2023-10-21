import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MentionInput from "./components/mentionInput/mention"; // Import the MentionInput component

// Define a test suite
describe("MentionInput Component", () => {
  // Define a test case
  it("renders the MentionInput component", () => {
    // Render the MentionInput component
    render(<MentionInput />);

    // Check if the component is rendered
    const inputElement = screen.getByPlaceholderText("Type a message...");
    expect(inputElement).toBeInTheDocument();
  });

  // Define a test case for input text changes
  it("handles input text changes", () => {
    // Render the MentionInput component
    render(<MentionInput />);

    // Get the input element
    const inputElement = screen.getByPlaceholderText("Type a message...");

    // Simulate input text changes
    fireEvent.change(inputElement, { target: { value: "Hello @User" } });

    // Verify that the input text has changed
    expect(inputElement).toHaveValue("Hello @User");
  });
  
});
