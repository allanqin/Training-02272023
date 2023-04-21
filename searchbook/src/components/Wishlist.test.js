import { Provider } from "react-redux";
import Wishlist from "./Wishlist";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../redux/slices/searchSlice";
import wishlistSlice from "../redux/slices/wishlistSlice";

const createMockStore = (
  preloadedState = {
    searchSlice: {
      keyword: "",
      isLoading: false,
      list: [],
      totalPages: 1,
      currentPage: 1,
      itemsPerPage: 10,
    },
    wishlistSlice: { list: [] },
  }
) => {
  return configureStore({
    reducer: {
      searchSlice,
      wishlistSlice,
    },
    preloadedState,
  });
};

fetch = jest.fn();

describe("Wishlist Component", () => {
  beforeEach(() => {
    fetch.mockImplementation(() => {
      return new Promise((res, rej) =>
        res({
          json: () =>
            new Promise((res, rej) => {
              res({
                items: [
                  {
                    id: 1,
                    volumeInfo: {
                      title: "",
                      authors: "",
                      publisher: "",
                      publishedDate: "",
                      description: "",
                      imageLinks: { thumbnail: "" },
                    },
                  },
                  {
                    id: 2,
                    volumeInfo: {
                      title: "",
                      authors: "",
                      publisher: "",
                      publishedDate: "",
                      description: "",
                      imageLinks: { thumbnail: "" },
                    },
                  },
                ],
                totalItems: 2,
                kind: "",
              });
            }),
        })
      );
    });
  });
  test("empty wishlist page", () => {
    render(
      <Provider store={createMockStore()}>
        <Wishlist />
      </Provider>
    );

    const prev = screen.getByText("prev");
    expect(prev).toBeInTheDocument();

    const next = screen.getByText("next");
    expect(next).toBeInTheDocument();

    const nothing = screen.getByText("Nothing here");
    expect(nothing).toBeInTheDocument();
  });
});
