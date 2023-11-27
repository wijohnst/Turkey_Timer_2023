export type ValidationErrorTypes =
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'pattern'
  | 'min'
  | 'max'
  | 'email'
  | 'url'
  | 'date'
  | 'dateISO'
  | 'number'
  | 'digits'
  | 'creditCard'
  | 'equalTo'
  | 'notEqualTo'
  | 'integer'
  | 'lessThan'
  | 'lessThanOrEqualTo'
  | 'greaterThan'
  | 'greaterThanOrEqualTo'
  | 'remote';

export type ValidationError = {
  type: ValidationErrorTypes;
  message: string;
};
