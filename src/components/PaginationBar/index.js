import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const PaginationBar = ({ totalPage, currentPage }) => {
  const renderPageList = (currentPage) => {
    let pageList = [];
    if (currentPage >= 2) {
      for (let index = currentPage - 1; index > currentPage - 3 && index !== 0; index--) {
        pageList = [
          <Link
            key={`go_to_page_${index}`}
            className={`pagination__item pagination__item--${index === parseInt(currentPage, 10) ? 'active' : 'inactive'}`}
            to={{
              pathname: "/listing",
              search: `?page=${index}`
            }}>
            {index}
          </Link>,
          ...pageList];
      }
      for (let index = currentPage; index < currentPage + 3; index++) {
        pageList = [...pageList,
        <Link
          key={`go_to_page_${index}`}
          className={`pagination__item pagination__item--${index === parseInt(currentPage, 10) ? 'active' : 'inactive'}`}
          to={{
            pathname: "/listing",
            search: `?page=${index}`
          }}>
          {index}
        </Link>
        ];
      }
      if (pageList.length < 5) {
        pageList = [...pageList,
        <Link
          key={`go_to_page_${currentPage + 3}`}
          className={`pagination__item pagination__item--${currentPage + 3 === parseInt(currentPage, 10) ? 'active' : 'inactive'}`}
          to={{
            pathname: "/listing",
            search: `?page=${currentPage + 3}`
          }}>
          {currentPage + 3}
        </Link>
        ]
      }
    } else {
      for (let index = currentPage; index < currentPage + 5; index++) {
        pageList = [...pageList,
        <Link
          key={`go_to_page_${index}`}
          className={`pagination__item pagination__item--${index === parseInt(currentPage, 10) ? 'active' : 'inactive'}`}
          to={{
            pathname: "/listing",
            search: `?page=${index}`
          }}>
          {index}
        </Link>
        ];
      }
    };
    return pageList;
  }
  return (
    <div className="pagination">
      {currentPage > 1 && <Link
        key="go_previous_page"
        className="pagination__item"
        to={{
          pathname: "/listing",
          search: `?page=${currentPage - 1}`
        }}>
        &laquo;
      </Link>}
      {renderPageList(currentPage)}
      {totalPage !== currentPage && <Link
        key="go_next_page"
        className="pagination__item"
        to={{
          pathname: "/listing",
          search: `?page=${currentPage + 1}`
        }}>
        &raquo;
      </Link>}
    </div>
  )
}

PaginationBar.propTypes = {
  totalPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default PaginationBar
