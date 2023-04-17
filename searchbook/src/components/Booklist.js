import React from "react";
/* 
  title
  author
  publisher
  imageLinks
  description

*/

//startIndex, maxResult, totalItems

//currentPage, itemsPerPage, totalPage
//itemsPerPage = maxResult
//totalPage = Math.ceil(totalItems / maxResult) , 15, 10, 2
//currentPage = startIndex / maxResult
const Booklist = ({ list = [], onClickBook , onClickPrev, onClickNext, currentPage, totalPages }) => {
    return (
        <div className="booklist">
            <ul>
                {list.length === 0 ? <span>Nothing here</span> : list.map((item) => {
                    const {
                        title,
                        author,
                        publisher,
                        description,
                        imageLinks: { thumbnail }={},
                    } = item.volumeInfo;
                    return (
                        <li key={item.id} className="list-item" onClick={e=>onClickBook(item)}>
                            <div>
                              <img alt={title??"thumbnail"} src={thumbnail??""}/>
                            </div>
                            <div>
                                <div><strong>title: </strong><span>{title??"N/A"}</span></div>
                                <div><strong>author: </strong><span>{author??"N/A"}</span></div>
                                <div><strong>publisher: </strong><span>{publisher??"N/A"}</span></div>
                                <div><strong>description: </strong><span>{description??"N/A"}</span></div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div><button onClick={onClickPrev}>prev</button>{currentPage}/{totalPages}<button onClick={onClickNext}>next</button></div>
        </div>
    );
};

export default Booklist;
