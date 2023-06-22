/**
 * Interface representing an API response.
 * @template T The type of the result.
 */
export interface ApiResponse<T> {
    /**
     * The status code of the API response.
     */
    status: number;
  
    /**
     * The result data of the API response.
     */
    result: T;
  
    /**
     * The error message of the API response.
     */
    error: string;
  }
  