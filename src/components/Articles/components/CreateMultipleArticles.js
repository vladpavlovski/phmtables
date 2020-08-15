import React, { useState, useCallback } from 'react'
// import { useMutation } from '@apollo/client'
import { Button } from '@material-ui/core'
import { useStyles } from '../styled'

const CreateMultipleArticles = () => {
  const classes = useStyles()
  // const [login, { data }] = useMutation(SIGN_IN)
  const [isSubmitting, setSubmitting] = useState(false)

  const onSubmit = useCallback(() => {
    try {
      setSubmitting(true)

      // login({ variables: { input: { articleSingleLink } } })
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }, [])

  return (
    <>
      <Button
        type="submit"
        variant="contained"
        onClick={onSubmit}
        color="primary"
        className={classes.submit}
      >
        {isSubmitting ? 'Composing...' : 'Compose All Articles'}
      </Button>
    </>
  )
}

export { CreateMultipleArticles }
