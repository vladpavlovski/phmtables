import React, { useState, useCallback, useEffect, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { object, string } from 'yup'
import { Button, TextField, Grid, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { useStyles } from '../styled'
import { COMPOSE_ARTICLE } from '../../../graphql/requests'

import DashboardContext from '../../../contexts/dashboard'

const schema = object().shape({
  articleSingleLink: string().url().required('Link is required'),
})

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />

const CreateSingleArticle = () => {
  const classes = useStyles()

  const { setNewArticleCreated } = useContext(DashboardContext)

  const [composeArticle, { data }] = useMutation(COMPOSE_ARTICLE)
  const { handleSubmit, errors, control, setValue } = useForm({
    validationSchema: schema,
  })
  const [isSubmitting, setSubmitting] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false)
  }, [])

  useEffect(() => {
    if (data && data.composeArticle && data.composeArticle.id) {
      setValue('articleSingleLink', '')
      setOpenSnackbar(true)
      setNewArticleCreated(true)
      setSubmitting(false)
      // console.log('composeArticle', data)
    }
  }, [data, setNewArticleCreated, setValue])

  const onSubmit = useCallback(
    dataToSubmit => {
      try {
        const { articleSingleLink } = dataToSubmit
        composeArticle({ variables: { url: articleSingleLink } })
      } catch (error) {
        console.error(error)
      }
    },
    [composeArticle]
  )

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
        noValidate
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              as={TextField}
              control={control}
              required
              fullWidth
              id="articleSingleLink"
              label="Google Sheet Link"
              name="articleSingleLink"
              defaultValue=""
              error={Boolean(errors.articleSingleLink)}
              helperText={
                errors.articleSingleLink && errors.articleSingleLink.message
              }
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => {
            setSubmitting(true)
          }}
        >
          {isSubmitting ? 'Composing...' : 'Compose Article'}
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Article successfully created!
        </Alert>
      </Snackbar>
    </>
  )
}

export { CreateSingleArticle }
