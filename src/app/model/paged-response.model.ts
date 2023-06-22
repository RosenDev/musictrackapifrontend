/**
 * Interface representing a paged response.
 */
export interface PagedResponse<T> {
    /**
     * An array of items representing the result of the paged response.
     */
    result: T[];
  
    /**
     * The current page number.
     */
    page: number;
  
    /**
     * The number of items per page.
     */
    size: number;
  
    /**
     * The total number of records available.
     */
    totalRecords: number;
  }
  