import { FieldValueType } from "./field-value-type.model";


export interface FieldFilter {
    field: string;
    type: FieldValueType;
    value: string;
}
