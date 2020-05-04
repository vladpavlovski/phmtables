import React, { useState, useEffect, useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Copyright } from '../../components/Copyright'

import * as ROUTES from '../../routes'
import { useStyles } from './styled'
import { schema } from './schema'

const SignIn = () => {
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
          Sign in
        </Typography>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to={ROUTES.SIGN_IN}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export { SignIn }
