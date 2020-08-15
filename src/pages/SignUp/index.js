import React, { useState, useEffect, useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'

import Container from '@material-ui/core/Container'
import { Copyright } from '../../components/Copyright'

import { useStyles } from './styled'
import { schema } from './schema'

const SignUp = () => {
  const classes = useStyles()
  const { handleSubmit, errors, control } = useForm({
    validationSchema: schema,
  })
  // const [formAsyncError, setFormAsyncError] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  // const [isFinished, setIsFinished] = useState(false)

  // const history = useHistory()

  useEffect(() => {
    return () => {
      // setIsFinished(false)
      // setFormAsyncError('')
    }
  }, [])

  const onSubmit = useCallback(data => {
    try {
      setSubmitting(true)
      // const { email, password, firstName, lastName } = data
      // console.log(data)
      // .then(() => {
      //   history.push(ROUTES.MAIN)
      // })
      // setIsFinished(true)

      // .catch((error) => {
      //   setFormAsyncError(error.message)
      // })
    } catch (error) {
      console.error(error)
      // if (error instanceof AsyncValidationError) {
      //   setFormAsyncError(error.message)
      // }
    } finally {
      setSubmitting(false)
    }
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                control={control}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                defaultValue=""
                error={Boolean(errors.firstName)}
                helperText={errors.firstName && errors.firstName.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                control={control}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                defaultValue=""
                error={Boolean(errors.lastName)}
                helperText={errors.lastName && errors.lastName.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue=""
                error={Boolean(errors.email)}
                helperText={errors.email && errors.email.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={Boolean(errors.password)}
                helperText={errors.password && errors.password.message}
              />
            </Grid>
            {/* s */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

export { SignUp as default }
