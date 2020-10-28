import React, { useState, useCallback } from 'react'
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
  const [signup] = useMutation(SIGN_UP, {
    onCompleted: () => {
      history.push(ROUTES.DASHBOARD)
    },
  })
  const { handleSubmit, errors, control } = useForm({
    validationSchema: schema,
  })

  const onSubmit = useCallback(
    dataToSubmit => {
      try {
        setSubmitting(true)
        signup({ variables: { input: dataToSubmit } })
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
            <Grid item xs={6}>
              <Controller
                as={TextField}
                control={control}
                autoComplete="firstName"
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
            <Grid item xs={6}>
              <Controller
                as={TextField}
                control={control}
                autoComplete="lastName"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoFocus
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
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
                defaultValue=""
                error={Boolean(errors.phone)}
                helperText={errors.phone && errors.phone.message}
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
