import React from "react";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = generatePageNumbers(totalPosts, postsPerPage);
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li className={`page-item ${number === currentPage && "active"}`} key={number}>
                        <button className='page-link' onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const generatePageNumbers = (totalPosts, postsPerPage) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
};

export default Pagination;
