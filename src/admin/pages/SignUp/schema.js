import { object, string } from 'yup'

export const schema = object().shape({
  email: string().email('Email is not valid').required('Email is required'),
  password: string().required('Password is required'),
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  phone: string().required('Phone is required'),
})
