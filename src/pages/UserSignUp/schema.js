import { object, string, date, number, boolean } from 'yup'

export const schema = object().shape({
  email: string().email('Email is not valid').required('Email is required'),
  password: string().required('Password is required'),
  firstName: string().required('First Name is required'),
  lastName: string().required('Last Name is required'),
  phone: string().required('Phone is required'),
  birthday: date().nullable(),
  country: string(),
  city: string(),
  position: string(),
  stick: string(),
  height: string(),
  weight: string(),
  jersey: number()
    .typeError('Jersey must be a number')
    .positive('Jersey must be greater than zero')
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? null : value
    ),
  isAgree: boolean()
    .oneOf([true], 'Required terms of use')
    .required('Agreement is required'),
})
