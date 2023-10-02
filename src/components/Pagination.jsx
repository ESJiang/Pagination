import React from "react";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => (
    <nav>
        <ul className='pagination'>
            {Array.from({ length: Math.ceil(totalPosts / postsPerPage) }, (_, index) => index + 1).map(number => (
                <li className={`page-item ${number === currentPage && "active"}`} key={number}>
                    <button className='page-link' onClick={() => paginate(number)}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    </nav>
);

export default Pagination;
