import { render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

describe("LoginComponent", () => {
  it("renders login button", () => {
    render(<LoginComponent />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
