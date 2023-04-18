import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../redux/slices/searchSlice";
import wishlistSlice from '../redux/slices/wishlistSlice';
describe("search component", () => {
    test("search input should respond to user key press", () => {
        //mock store
        const mockStore = configureStore({
            reducer: {
              searchSlice,
              wishlistSlice
            },
            preloadedState: {
                searchSlice: {
                    keyword: "",
                    isLoading: false,
                    list: [],
                    totalPages: 1,
                    currentPage: 1,
                    itemsPerPage: 10,
                },
                wishlistSlice: { list: [] },
            },
        });
        render(
            <Provider store={mockStore}>
                <Search />
            </Provider>
        );
        const inputEl = screen.getByRole("textbox");
        expect(inputEl).toBeInTheDocument();
        fireEvent.change(inputEl, {target:{value: "ab"}});
        expect(inputEl).toHaveValue("ab");
    });
});
