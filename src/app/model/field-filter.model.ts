import { FieldValueType } from './field-value-type.model';

/**
 * Interface representing a field filter.
 */
export interface FieldFilter {
  /**
   * The name of the field to filter.
   */
  field: string;

  /**
   * The type of value for the field filter.
   */
  type: FieldValueType;

  /**
   * The value to filter the field by.
   */
  value: string;
}
