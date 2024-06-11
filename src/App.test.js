import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Should render initial application", () => {
  test("renders candidatelist", () => {
    render(<App />);
    const linkElement = screen.getByText(/Candidate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
