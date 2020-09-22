import React, { useCallback } from 'react'

import {
  Grid,
  Typography,
  Paper,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Hidden,
} from '@material-ui/core'
import { useStyles } from '../styled'

const PlayersTable = props => {
  const { data } = props
  const classes = useStyles()

  const getColor = useCallback(value => {
    const number = parseInt(value)
    return number === 0 ? '#7a7a7a' : '#000'
  }, [])

  return (
    <TableContainer>
      <Table
        className={classes.reportTable}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="right"
              width="10%"
              className={classes.reportTableHeadCell}
            >
              #
            </TableCell>
            <Hidden only="xs">
              <TableCell
                align="right"
                className={classes.reportTableHeadCell}
              />
            </Hidden>
            <TableCell className={classes.reportTableHeadCell}>Name</TableCell>
            <TableCell align="left" className={classes.reportTableHeadCell}>
              Avatar
            </TableCell>
            <TableCell align="right" className={classes.reportTableHeadCell}>
              G
            </TableCell>
            <TableCell align="right" className={classes.reportTableHeadCell}>
              A
            </TableCell>
            <TableCell align="right" className={classes.reportTableHeadCell}>
              B
            </TableCell>
            <TableCell
              width="16%"
              align="right"
              className={classes.reportTableHeadCell}
            >
              TR.MIN
            </TableCell>
            <Hidden only="xs">
              <TableCell align="left" className={classes.reportTableHeadCell} />
            </Hidden>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.playerId}>
              <TableCell className={classes.reportTableCell} align="right">
                {row.playerNumber}
              </TableCell>
              <Hidden only="xs">
                <TableCell align="right" className={classes.noPadding}>
                  {row.playerIsStar && (
                    <img
                      src={row.playerIsStar}
                      alt={'Star'}
                      className={`${classes.reportPlayerSign}`}
                    />
                  )}
                  {row.playerIsGoalie && (
                    <img
                      src={row.playerIsGoalie}
                      alt={'Goalie'}
                      className={`${classes.reportPlayerSign}`}
                    />
                  )}
                  {row.playerIsCaptain && (
                    <img
                      src={row.playerIsCaptain}
                      alt={'Captain'}
                      className={`${classes.reportPlayerSign}`}
                    />
                  )}
                </TableCell>
              </Hidden>
              <TableCell
                className={classes.reportTableCell}
                component="th"
                scope="row"
              >
                {row.playerName}
              </TableCell>
              <TableCell align="left" className={classes.noPadding}>
                {
                  <img
                    src={row.playerAvatar}
                    alt={row.playerName}
                    className={`${classes.reportPlayerAvatar}`}
                  />
                }
              </TableCell>
              <TableCell
                style={{
                  color: getColor(row.playerGoals),
                }}
                className={classes.reportTableCell}
                align="right"
              >
                {row.playerGoals}
              </TableCell>
              <TableCell
                style={{
                  color: getColor(row.playerAssists),
                }}
                className={classes.reportTableCell}
                align="right"
              >
                {row.playerAssists}
              </TableCell>
              <TableCell
                style={{
                  color: getColor(row.playerPoints),
                }}
                className={classes.reportTableCell}
                align="right"
              >
                {row.playerPoints}
              </TableCell>
              <TableCell
                style={{
                  color: parseInt(row.playerPim) === 0 ? '#7a7a7a' : '#ff0000',
                }}
                className={classes.reportTableCell}
                align="right"
              >
                {row.playerPim}
              </TableCell>
              <Hidden only="xs">
                <TableCell align="left" className={classes.noPadding}>
                  {parseInt(row.playerGoals) === 3 && (
                    <img
                      src={
                        'https://drive.google.com/uc?export=view&id=1rd28NwESkVlwUbyKCO-IJJik4d6uwdcZ'
                      }
                      alt={'Hattrick'}
                      className={`${classes.reportPlayerInfoIcon}`}
                    />
                  )}
                  {row.playerPoints >= 4 && (
                    <img
                      src={
                        'https://drive.google.com/uc?export=view&id=16zdtTz3AAfvDhxx-UlpoSRKYpk5OezKn'
                      }
                      alt={'4+bodů'}
                      className={`${classes.reportPlayerInfoIcon}`}
                    />
                  )}
                </TableCell>
              </Hidden>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export const Reports = props => {
  const {
    playersTeamOne,
    playersTeamTwo,
    teamOneLogo,
    teamTwoLogo,
    teamOneNameFull,
    teamTwoNameFull,
  } = props.data

  const classes = useStyles()

  return (
    <>
      <Typography className={classes.reportTitle} component="h3" variant="h4">
        SESTAVY
      </Typography>
      <Paper
        className={classes.reportWrapper}
        style={{
          backgroundImage: `url(${teamOneLogo})`,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.reportTitle}
              component="h3"
              variant="h4"
            >
              {`Soupiska: ${teamOneNameFull}`}
            </Typography>
          </Grid>
          <Hidden only="xs">
            <Grid item sm={6}>
              <Paper
                className={classes.reportTeamLogo}
                style={{
                  backgroundImage: `url(${teamOneLogo})`,
                }}
              />
            </Grid>
          </Hidden>
          {playersTeamOne && <PlayersTable data={playersTeamOne} />}
        </Grid>
      </Paper>
      <Divider />
      <Paper
        className={classes.reportWrapper}
        style={{
          backgroundImage: `url(${teamTwoLogo})`,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.reportTitle}
              component="h3"
              variant="h4"
            >
              {`Soupiska: ${teamTwoNameFull}`}
            </Typography>
          </Grid>
          <Hidden only="xs">
            <Grid item sm={6}>
              <Paper
                className={classes.reportTeamLogo}
                style={{
                  backgroundImage: `url(${teamTwoLogo})`,
                }}
              />
            </Grid>
          </Hidden>
          {playersTeamTwo && <PlayersTable data={playersTeamTwo} />}
        </Grid>
      </Paper>
    </>
  )
}
