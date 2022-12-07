import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../pages/header";

describe("Home", () => {
  it("renders the header", () => {
    render(<Header />);

    const text = screen.getByText(/Movies/i);

    expect(text).toBeInTheDocument();
  });
});
