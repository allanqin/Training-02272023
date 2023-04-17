import React, { useState } from "react";
import Booklist from "./Booklist";
import { useSelector, useDispatch } from "react-redux";
import {
    searchbook,
    setKeyword,
    switchPage,
} from "../redux/slices/searchSlice";
import { addBook } from "../redux/slices/wishlistSlice";

const Search = () => {
    const keyword = useSelector((state) => state.searchSlice.keyword);
    const isLoading = useSelector((state) => state.searchSlice.isLoading);
    const currentPage = useSelector((state) => state.searchSlice.currentPage);
    const totalPages = useSelector((state) => state.searchSlice.totalPages);
    const dispatch = useDispatch();
    const list = useSelector((state) => state.searchSlice.list);
    const handleChange = (e) => {
        dispatch(setKeyword(e.target.value));
    };
    const handleSubmit = () => {
        dispatch(searchbook());
    };
    const handleClickBook = (item) => {
        dispatch(addBook(item));
    };

    const handleClickPrev = () => {
        if (currentPage <= 1) return;
        dispatch(switchPage(currentPage - 1));
    };
    const handleClickNext = () => {
        if (currentPage >= totalPages) return;
        dispatch(switchPage(currentPage + 1));
    };
    return (
        <div className="search-container">
            <div>
                <input value={keyword} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {isLoading ? (
                <span className="loader"></span>
            ) : (
                <Booklist
                    onClickBook={handleClickBook}
                    list={list}
                    onClickPrev={handleClickPrev}
                    onClickNext={handleClickNext}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            )}
        </div>
    );
};

export default Search;
