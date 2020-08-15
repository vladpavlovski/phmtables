import React, { useState, useCallback, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { object, string } from 'yup'
import { Button, TextField, Grid } from '@material-ui/core'
import { useStyles } from '../styled'
import { COMPOSE_ARTICLE } from '../../../graphql/requests'
const schema = object().shape({
  articleSingleLink: string().url().required('Link is required'),
})

const CreateSingleArticle = () => {
  const classes = useStyles()
  // const [login, { data }] = useMutation(SIGN_IN)
  const [composeArticle, { data }] = useMutation(COMPOSE_ARTICLE)
  const { handleSubmit, errors, control } = useForm({
    validationSchema: schema,
  })
  const [isSubmitting, setSubmitting] = useState(false)
  useEffect(() => {
    if (data && data.composeArticle && data.composeArticle.id) {
      // console.log('composeArticle', data)
      // TODO: make info popup - ARTICLE WAS CREATED!
    }
  }, [data])
  const onSubmit = useCallback(
    dataToSubmit => {
      try {
        setSubmitting(true)
        const { articleSingleLink } = dataToSubmit
        // console.log('articleSingleLink', articleSingleLink)

        composeArticle({ variables: { url: articleSingleLink } })
      } catch (error) {
        console.error(error)
      } finally {
        setSubmitting(false)
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
        >
          {isSubmitting ? 'Composing...' : 'Compose Article'}
        </Button>
      </form>
    </>
  )
}

export { CreateSingleArticle }
