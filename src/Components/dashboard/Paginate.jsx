import React from "react";
import ReactPaginate from "react-paginate";
import "./Paginate.css";

const Paginate = ({ totalCounts, perPage, currentPage, handlePageClick }) => {
  const pageCount = Math.ceil(totalCounts / perPage);
  if (pageCount) {
    return (
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    );
  }
  return false;
};

export default Paginate;
