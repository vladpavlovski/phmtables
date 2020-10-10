import React, { useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { useForm, Controller } from 'react-hook-form'
import 'react-imported-component/macro'
import { Container, Grid, Paper, TextField, Button } from '@material-ui/core'

import { Title } from '../../../components/Title'
import { useStyles } from '../Article/styled'
import { GET_TEAM, UPDATE_TEAM } from '../../../graphql/requests'
import Load from '../../../utils/load'

const Layout = Load(() => import('../../../components/Layout'))

const Article = props => {
  const classes = useStyles()
  const { teamId } = useParams()
  const [isSubmitting, setSubmitting] = useState(false)
  //error,
  const { loading, data } = useQuery(GET_TEAM, {
    variables: { id: teamId },
  })
  const [updateTeam] = useMutation(UPDATE_TEAM)
  //errors,
  const { handleSubmit, control } = useForm()

  const onSubmit = useCallback(
    dataToSubmit => {
      // console.log('dataToSubmit', dataToSubmit)
      try {
        setSubmitting(true)
        updateTeam({ variables: { input: { id: teamId, ...dataToSubmit } } })
      } catch (error) {
        console.error(error)
      } finally {
        setSubmitting(false)
      }
    },
    [teamId, updateTeam]
  )

  return (
    <Layout>
      {!loading && data.team && (
        <Container maxWidth="lg" className={classes.container}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item md={2} lg={2}>
                <Paper className={classes.paper}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {isSubmitting ? 'Saving...' : 'Save'}
                  </Button>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <Title>{data.team.name}</Title>
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.name}
                    required
                    id="name"
                    label="Name"
                    name="name"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.fullName}
                    required
                    id="fullName"
                    label="Full Name"
                    name="fullName"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.nick}
                    required
                    id="nick"
                    label="Nick"
                    name="nick"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.shortcut}
                    required
                    id="shortcut"
                    label="Shortcut"
                    name="shortcut"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.logoRound}
                    fullWidth
                    id="logoRound"
                    label="Logo Round"
                    name="logoRound"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.shortcutLabel}
                    fullWidth
                    id="shortcutLabel"
                    label="Shortcut Label"
                    name="shortcutLabel"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.shortLabel}
                    fullWidth
                    id="shortLabel"
                    label="Short Label"
                    name="shortLabel"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.longLabel}
                    fullWidth
                    id="longLabel"
                    label="Long Label"
                    name="longLabel"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.bigLabel}
                    fullWidth
                    id="bigLabel"
                    label="Big Label"
                    name="bigLabel"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.logoGrey}
                    fullWidth
                    id="logoGrey"
                    label="Logo Grey"
                    name="logoGrey"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.primaryColor}
                    id="primaryColor"
                    label="Primary Color"
                    name="primaryColor"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.secondaryColor}
                    id="secondaryColor"
                    label="Secondary Color"
                    name="secondaryColor"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.jerseyDark}
                    id="jerseyDark"
                    label="Jersey Dark"
                    name="jerseyDark"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    defaultValue={data.team.jerseyLight}
                    id="jerseyLight"
                    label="Jersey Light"
                    name="jerseyLight"
                    // error={Boolean(errors.email)}
                    // helperText={errors.email && errors.email.message}
                  />
                </Paper>
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
    </Layout>
  )
}

Article.propTypes = {}

export { Article as default }
