import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  test("Header should have a Search and a Wishlist", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const SearchEl = screen.getByText("Search");
    expect(SearchEl).toBeInTheDocument();
    const WishlistEl = screen.getByText("Wishlist");
    expect(WishlistEl).toBeInTheDocument();
  });
});
