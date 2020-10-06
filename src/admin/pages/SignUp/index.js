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
import * as ROUTES from '../../../routes'

import { Copyright } from '../../../components/Copyright'
import { SIGN_UP } from '../../../graphql/requests'

import { useStyles } from './styled'
import { schema } from './schema'

const SignUp = () => {
  const history = useHistory()
  const classes = useStyles()
  const [isSubmitting, setSubmitting] = useState(false)
  const [signup, { data }] = useMutation(SIGN_UP)
  const { handleSubmit, errors, control } = useForm({
    validationSchema: schema,
  })

  useEffect(() => {
    if (data && data.signup) {
      history.push(ROUTES.DASHBOARD)
    }
  }, [data, history])

  const onSubmit = useCallback(
    dataToSubmit => {
      try {
        setSubmitting(true)
        const { email, password, name } = dataToSubmit
        signup({ variables: { input: { email, password, name } } })
      } catch (error) {
        console.error(error)
      } finally {
        setSubmitting(false)
      }
    },
    [signup]
  )

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
            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                defaultValue=""
                error={Boolean(errors.name)}
                helperText={errors.name && errors.name.message}
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
              <Link to={ROUTES.SIGN_IN} variant="body2">
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
