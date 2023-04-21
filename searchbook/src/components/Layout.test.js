import Layout from "./Layout";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
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

describe("Layout component", () => {
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

  test("Router should route between Search and Wishlist", () => {
    render(
      <Provider store={createMockStore()}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    );

    const LinkEl = screen.getByText("Search");
    expect(LinkEl).toBeInTheDocument();
  });
});
