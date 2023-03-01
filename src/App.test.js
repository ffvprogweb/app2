import { render, screen } from "@testing-library/react";
import Header from "./componentes/Header";

test("renders learn react link", () => {
  render(<Header />);
  const linkElement = screen.getByText(/fatec/i);
  expect(linkElement).toBeInTheDocument();
});
