import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOG_OUT } from '../../../graphql/requests'
import * as ROUTES from '../../../routes'

const SignOut = () => {
  const history = useHistory()
  const [logout] = useMutation(LOG_OUT)
  useEffect(() => {
    history.push(ROUTES.SIGN_IN)
    logout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <span>Log out...</span>
}

export { SignOut as default }
