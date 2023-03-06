import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination component', () => {
  const pageSize = 10;
  const totalItems = 100;
  const onPageChange = jest.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  test('renders the correct page information', () => {
    const currentPage = 2;

    render(
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    );

    const pageInfo = screen.getByText(`Page ${currentPage} of 10`);
    expect(pageInfo).toBeInTheDocument();
  });

  test('disables the previous button on the first page', () => {
    const currentPage = 1;

    render(
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    );

    const prevButton = screen.getByTestId('pagination-btn-left');
    expect(prevButton).toBeDisabled();
  });

  test('disables the next button on the last page', () => {
    const currentPage = 10;

    render(
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    );

    const nextButton = screen.getByTestId('pagination-btn-right');
    expect(nextButton).toBeDisabled();
  });

  test('calls the onPageChange callback with the correct page when clicking the previous button', () => {
    const currentPage = 2;

    render(
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    );

    const prevButton = screen.getByTestId('pagination-btn-left');
    fireEvent.click(prevButton);

    expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);
  });

  test('calls the onPageChange callback with the correct page when clicking the next button', () => {
    const currentPage = 2;

    render(
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    );

    const nextButton = screen.getByTestId('pagination-btn-right');
    fireEvent.click(nextButton);

    expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);
  });
});
