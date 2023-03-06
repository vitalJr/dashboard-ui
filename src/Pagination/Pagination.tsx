import React from 'react';
// import PropTypes from 'prop-types';

import './Pagination.scss';

export interface PaginationProps {
  pageSize: number;
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageSize,
  currentPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button
        data-testid="pagination-btn-left"
        className="pagination__btn"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <span className="pagination__btn-icon pagination__btn-icon--left" />
      </button>
      <div className="pagination__info">
        Page {currentPage} of {totalPages}
      </div>
      <button
        data-testid="pagination-btn-right"
        className="pagination__btn"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <span className="pagination__btn-icon pagination__btn-icon--right" />
      </button>
    </div>
  );
};

// Pagination.propTypes = {
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   totalItems: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
// };

export default Pagination;
