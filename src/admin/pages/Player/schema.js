import { object, string, number, date, boolean } from 'yup'

export const schema = object().shape({
  firstName: string().required('First Name is required'),
  lastName: string().required('Last Name is required'),
  playerId: number()
    .typeError('Player Id must be a number')
    .integer('Player Id must be an integer')
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? null : parseInt(value)
    ),
  avatar: string(),
  birthday: date().nullable(),
  startLeagueDate: date().nullable(),
  isActive: boolean().nullable(),
  country: string(),
  city: string(),
  position: string(),
  stick: string(),
  height: string(),
  weight: string(),
  gender: string(),
  jersey: number()
    .typeError('Jersey must be a number')
    .integer('Jersey must be an integer')
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? null : parseInt(value)
    ),
})
