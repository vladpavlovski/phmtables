import React, { useState, useEffect, useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { countries, countryToFlag } from '../../utils/constants/countries'
import { ReactHookFormSelect } from '../../components/RHFSelect'
import { RHFAutocomplete } from '../../components/RHFAutocomplete'
import { RHFDatepicker } from '../../components/RHFDatepicker'
import { RHFCheckbox } from '../../components/RHFCheckbox'
import { Copyright } from '../../components/Copyright'

import { SIGN_UP, CREATE_PLAYER, GET_ALL_TEAMS } from '../../graphql/requests'

import { useStyles } from '../../admin/pages/SignUp/styled'
import { schema } from './schema'

const UserSignUp = () => {
  const classes = useStyles()
  const [isSubmitting, setSubmitting] = useState(false)
  const [signup, { data: signUpData }] = useMutation(SIGN_UP)
  const { handleSubmit, errors, control, getValues } = useForm({
    validationSchema: schema,
  })

  const [createPlayer, { data: createdPlayerData }] = useMutation(CREATE_PLAYER)
  const { loading: teamsLoading, data: teamsData } = useQuery(GET_ALL_TEAMS)
  const [successfullRegistration, setSuccessfullRegistration] = useState(false)

  const createPlayerWithUserId = useCallback(
    id => {
      const {
        country,
        city,
        position,
        stick,
        height,
        weight,
        jersey,
        gender,
        teams,
        firstName,
        lastName,
        birthday,
      } = getValues()
      const selectedTeams = teams.map(teamSelected => {
        const team = teamsData.teams.find(team => teamSelected.id === team.id)

        const { __typename, ...restTeam } = team
        return restTeam
      })
      createPlayer({
        variables: {
          input: {
            userId: id,
            firstName,
            lastName,
            birthday,
            isActive: true,
            country,
            city,
            position,
            stick,
            height,
            weight,
            jersey: jersey ? parseInt(jersey) : null,
            gender,
            teams: selectedTeams,
          },
        },
      })
    },
    [createPlayer, getValues, teamsData]
  )

  const onSubmit = useCallback(
    dataToSubmit => {
      try {
        setSubmitting(true)
        const {
          email,
          password,
          firstName,
          lastName,
          phone,
          birthday,
        } = dataToSubmit
        // console.log('dataToSubmit.teams', dataToSubmit)
        signup({
          variables: {
            input: {
              email,
              password,
              firstName,
              lastName,
              phone,
              birthday,
            },
          },
        })
      } catch (error) {
        console.error(error)
      } finally {
        setSubmitting(false)
      }
    },
    [signup]
  )

  useEffect(() => {
    if (signUpData && signUpData.signup) {
      const newUserId = signUpData.signup.id
      createPlayerWithUserId(newUserId)
    }
  }, [createPlayerWithUserId, signUpData])

  useEffect(() => {
    if (createdPlayerData && createdPlayerData.createPlayer) {
      setSuccessfullRegistration(true)
    }
  }, [createdPlayerData])

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {!teamsLoading && (
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
                  autoComplete="firstName"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  defaultValue=""
                  error={!!errors.firstName}
                  helperText={errors.firstName && errors.firstName.message}
                />
              </Grid>
              <Grid item xs={12}>
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
                  defaultValue=""
                  error={!!errors.lastName}
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
                  error={!!errors.email}
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
                  error={!!errors.phone}
                  helperText={errors.phone && errors.phone.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  as={TextField}
                  inputProps={{
                    autoComplete: 'disabled',
                  }}
                  control={control}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  defaultValue=""
                  error={!!errors.password}
                  helperText={errors.password && errors.password.message}
                />
              </Grid>
              <Grid item xs={12}>
                <RHFDatepicker
                  control={control}
                  variant="inline"
                  inputVariant="outlined"
                  fullWidth
                  name="birthday"
                  label="Birthday"
                  id="birthday"
                  error={!!errors.birthday}
                  helperText={errors.birthday && errors.birthday.message}
                />
              </Grid>
              <Grid item xs={12}>
                <RHFAutocomplete
                  multiple
                  fullWidth
                  id="team-select"
                  options={teamsData.teams}
                  control={control}
                  name="teams"
                  label="Teams"
                  variant="outlined"
                  optionPropertyToCompare="id"
                  optionPropertyToShow="name"
                  renderOption={option => (
                    <>
                      <img
                        style={{
                          width: '3rem',
                          height: '3rem',
                          marginRight: '1rem',
                        }}
                        src={option.logoRound}
                        alt={option.name}
                      />
                      {option.name}
                    </>
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        avatar={
                          <Avatar alt={option.name} src={option.logoRound} />
                        }
                        variant="outlined"
                        label={option.name}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <RHFAutocomplete
                  fullWidth
                  id="country-select"
                  options={countries}
                  control={control}
                  name="country"
                  label="Country"
                  variant="outlined"
                  optionPropertyToCompare="label"
                  optionPropertyToShow="label"
                  defaultValue={'Czech Republic'}
                  renderOption={option => (
                    <>
                      <span>{countryToFlag(option.code)}</span>
                      {option.label} ({option.code})
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  as={TextField}
                  control={control}
                  inputProps={{
                    autoComplete: 'disabled',
                  }}
                  variant="outlined"
                  fullWidth
                  name="city"
                  label="City"
                  id="city"
                  defaultValue=""
                  error={Boolean(errors.city)}
                  helperText={errors.city && errors.city.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  as={TextField}
                  inputProps={{
                    autoComplete: 'disabled',
                  }}
                  control={control}
                  variant="outlined"
                  fullWidth
                  name="position"
                  label="Position"
                  id="position"
                  defaultValue=""
                  error={Boolean(errors.position)}
                  helperText={errors.position && errors.position.message}
                />
              </Grid>
              <Grid item xs={12}>
                <ReactHookFormSelect
                  name="stick"
                  label="Stick"
                  id="stick"
                  control={control}
                  defaultValue={''}
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors.stick)}
                >
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                </ReactHookFormSelect>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  as={TextField}
                  inputProps={{
                    autoComplete: 'disabled',
                  }}
                  control={control}
                  variant="outlined"
                  fullWidth
                  name="height"
                  label="Height"
                  type="height"
                  id="height"
                  error={Boolean(errors.height)}
                  helperText={errors.height && errors.height.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  as={TextField}
                  inputProps={{
                    autoComplete: 'disabled',
                  }}
                  control={control}
                  variant="outlined"
                  fullWidth
                  name="weight"
                  label="Weight"
                  type="weight"
                  id="weight"
                  error={Boolean(errors.weight)}
                  helperText={errors.weight && errors.weight.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  as={TextField}
                  inputProps={{
                    autoComplete: 'disabled',
                  }}
                  control={control}
                  variant="outlined"
                  fullWidth
                  name="jersey"
                  label="Jersey Number"
                  id="jersey"
                  defaultValue={''}
                  error={Boolean(errors.jersey)}
                  helperText={errors.jersey && errors.jersey.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Terms and Conditions for PHM Cup
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <h2>Introduction</h2>

                      <p>
                        These Website Standard Terms and Conditions written on
                        this webpage shall manage your use of our website, PHM
                        Cup accessible at https://phmcup.cz/.
                      </p>

                      <p>
                        These Terms will be applied fully and affect to your use
                        of this Website. By using this Website, you agreed to
                        accept all terms and conditions written in here. You
                        must not use this Website if you disagree with any of
                        these Website Standard Terms and Conditions. These Terms
                        and Conditions have been generated with the help of the{' '}
                        <a href="https://www.termsandcondiitionssample.com">
                          Terms And Conditiions Sample
                        </a>{' '}
                        and the{' '}
                        <a href="https://www.generateprivacypolicy.com">
                          Privacy Policy Generator
                        </a>
                        .
                      </p>

                      <p>
                        Minors or people below 18 years old are not allowed to
                        use this Website.
                      </p>

                      <h2>Intellectual Property Rights</h2>

                      <p>
                        Other than the content you own, under these Terms, PHM
                        Cup and/or its licensors own all the intellectual
                        property rights and materials contained in this Website.
                      </p>

                      <p>
                        You are granted limited license only for purposes of
                        viewing the material contained on this Website.
                      </p>

                      <h2>Restrictions</h2>

                      <p>
                        You are specifically restricted from all of the
                        following:
                      </p>

                      <ul>
                        <li>
                          publishing any Website material in any other media;
                        </li>
                        <li>
                          selling, sublicensing and/or otherwise commercializing
                          any Website material;
                        </li>
                        <li>
                          publicly performing and/or showing any Website
                          material;
                        </li>
                        <li>
                          using this Website in any way that is or may be
                          damaging to this Website;
                        </li>
                        <li>
                          using this Website in any way that impacts user access
                          to this Website;
                        </li>
                        <li>
                          using this Website contrary to applicable laws and
                          regulations, or in any way may cause harm to the
                          Website, or to any person or business entity;
                        </li>
                        <li>
                          engaging in any data mining, data harvesting, data
                          extracting or any other similar activity in relation
                          to this Website;
                        </li>
                        <li>
                          using this Website to engage in any advertising or
                          marketing.
                        </li>
                      </ul>

                      <p>
                        Certain areas of this Website are restricted from being
                        access by you and PHM Cup may further restrict access by
                        you to any areas of this Website, at any time, in
                        absolute discretion. Any user ID and password you may
                        have for this Website are confidential and you must
                        maintain confidentiality as well.
                      </p>

                      <h2>Your Content</h2>

                      <p>
                        In these Website Standard Terms and Conditions, "Your
                        Content" shall mean any audio, video text, images or
                        other material you choose to display on this Website. By
                        displaying Your Content, you grant PHM Cup a
                        non-exclusive, worldwide irrevocable, sub licensable
                        license to use, reproduce, adapt, publish, translate and
                        distribute it in any and all media.
                      </p>

                      <p>
                        Your Content must be your own and must not be invading
                        any third-party’s rights. PHM Cup reserves the right to
                        remove any of Your Content from this Website at any time
                        without notice.
                      </p>

                      <h2>Your Privacy</h2>

                      <p>Please read Privacy Policy.</p>

                      <h2>No warranties</h2>

                      <p>
                        This Website is provided "as is," with all faults, and
                        PHM Cup express no representations or warranties, of any
                        kind related to this Website or the materials contained
                        on this Website. Also, nothing contained on this Website
                        shall be interpreted as advising you.
                      </p>

                      <h2>Limitation of liability</h2>

                      <p>
                        In no event shall PHM Cup, nor any of its officers,
                        directors and employees, shall be held liable for
                        anything arising out of or in any way connected with
                        your use of this Website whether such liability is under
                        contract.  PHM Cup, including its officers, directors
                        and employees shall not be held liable for any indirect,
                        consequential or special liability arising out of or in
                        any way related to your use of this Website.
                      </p>

                      <h2>Indemnification</h2>

                      <p>
                        You hereby indemnify to the fullest extent PHM Cup from
                        and against any and/or all liabilities, costs, demands,
                        causes of action, damages and expenses arising in any
                        way related to your breach of any of the provisions of
                        these Terms.
                      </p>

                      <h2>Severability</h2>

                      <p>
                        If any provision of these Terms is found to be invalid
                        under any applicable law, such provisions shall be
                        deleted without affecting the remaining provisions
                        herein.
                      </p>

                      <h2>Variation of Terms</h2>

                      <p>
                        PHM Cup is permitted to revise these Terms at any time
                        as it sees fit, and by using this Website you are
                        expected to review these Terms on a regular basis.
                      </p>

                      <h2>Assignment</h2>

                      <p>
                        The PHM Cup is allowed to assign, transfer, and
                        subcontract its rights and/or obligations under these
                        Terms without any notification. However, you are not
                        allowed to assign, transfer, or subcontract any of your
                        rights and/or obligations under these Terms.
                      </p>

                      <h2>Entire Agreement</h2>

                      <p>
                        These Terms constitute the entire agreement between PHM
                        Cup and you in relation to your use of this Website, and
                        supersede all prior agreements and understandings.
                      </p>

                      <h2>Governing Law & Jurisdiction</h2>

                      <p>
                        These Terms will be governed by and interpreted in
                        accordance with the laws of the State of cz, and you
                        submit to the non-exclusive jurisdiction of the state
                        and federal courts located in cz for the resolution of
                        any disputes.
                      </p>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>GDPR</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <RHFCheckbox
                  control={control}
                  variant="contained"
                  name="isAgree"
                  label="Agree with terms and conditions"
                  id="isAgree"
                  color="primary"
                  defaultValue={false}
                  required
                  error={errors.isAgree ? errors.isAgree.message : null}
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
            {/* <Grid container justify="flex-end">
            <Grid item>
              <Link to={ROUTES.SIGN_IN} variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid> */}
          </form>
        )}
      </div>
      {successfullRegistration && <div>Registration complete</div>}
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

export { UserSignUp as default }
