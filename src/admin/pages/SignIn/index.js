import React, { useState, useEffect, useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
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
import { Copyright } from '../../../components/Copyright'

import * as ROUTES from '../../../routes'
import { useStyles } from './styled'
import { schema } from './schema'
import { SIGN_IN } from '../../../graphql/requests'

const SignIn = () => {
  const history = useHistory()
  const classes = useStyles()
  const [login, { data }] = useMutation(SIGN_IN)
  const { handleSubmit, errors, control } = useForm({
    validationSchema: schema,
  })
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (data && data.login) {
      history.push(ROUTES.DASHBOARD)
    }
  }, [data, history])

  const onSubmit = useCallback(
    dataToSubmit => {
      try {
        setSubmitting(true)
        const { email, password } = dataToSubmit
        login({ variables: { input: { email, password } } })
      } catch (error) {
        console.error(error)
      } finally {
        setSubmitting(false)
      }
    },
    [login]
  )

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
                defaultValue=""
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
              <Link to={ROUTES.SIGN_UP}>
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

export { SignIn as default }
