import { makeStyles } from '@material-ui/core/styles'

import resultPreviewBg from './images/result_preview_bg.jpg'
import subtitlePreviewBg from './images/subtitle_preview_bg.jpg'
import gameStatisticsBg from './images/game_statistics_bg.jpg'
import bauerSponsorLogo from './images/bauer_logo_sponsor.png'

const useStyles = makeStyles(theme => ({
  article: {
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  resultPreview: {
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4),
    },
    width: '100%',
    backgroundImage: `url(${resultPreviewBg})`,
    backgroundPosition: '50% 50%',
    overflow: 'visible',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundBlendMode: 'color',
    borderRadius: '4px',
  },
  resultCard: {
    display: 'flex',
  },
  resultCardDetails: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  resultCardMedia: {
    objectFit: 'cover',
    verticalAlign: 'middle',
    backgroundSize: 'contain',
    backgroundPosition: '50% 50%',
    // transform: 'scale(1.1)',

    borderRadius: '50%',
    [theme.breakpoints.up('xs')]: {
      width: '25vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '14rem',
      height: '14rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '14rem',
      height: '14rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '16rem',
      height: '16rem',
    },
  },
  resultTeamName: {
    [theme.breakpoints.up('xs')]: {
      width: '32vw',
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      width: '18rem',
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '18rem',
      fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '24rem',
      fontSize: '4rem',
    },
  },
  resultTeamGoalsWrap: {
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '20vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '14rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '16rem',
    },
  },
  resultTeamGoals: {
    fontFamily: 'Bungee Shade',
    fontSize: '6.4rem',
  },
  resultChipList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(1),
    margin: 0,
    marginBlockStart: 0,
    marginBlockEnd: 0,
    paddingInlineStart: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  resultChip: {
    margin: theme.spacing(0.5),
  },
  perex: {
    [theme.breakpoints.up('xs')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(4),
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(5),
      marginLeft: theme.spacing(7),
      marginRight: theme.spacing(7),
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(6),
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
    },
  },
  subTitleWrapper: {
    height: '27.5rem',
    width: '100%',
    backgroundImage: `url(${subtitlePreviewBg})`,
    backgroundPosition: '50% 50%',
    overflow: 'visible',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundBlendMode: 'color',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4),
    },
  },
  subTitle: {
    fontSize: '3.75rem',
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1),
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      fontSize: '3.4rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4),
      fontSize: '3.75rem',
    },
  },
  gsWrapper: {
    width: '100%',
    backgroundImage: `url(${gameStatisticsBg})`,
    backgroundPosition: '50% 50%',
    overflow: 'visible',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,0.8)',
    backgroundBlendMode: 'color',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
    },
  },
  gsTitle: {
    textAlign: 'center',
    color: theme.palette.common.white,
    padding: theme.spacing(4),
  },
  gsResult: {
    width: '80vw',
    [theme.breakpoints.up('md')]: {
      width: '80rem',
    },
    backgroundImage: `url(${resultPreviewBg})`,
    backgroundPosition: '50% 50%',
    overflow: 'visible',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundBlendMode: 'color',
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    border: '0.1rem solid #404040',
  },
  gsScore: {
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: `'Roboto Condensed', sans-serif !important`,
    color: theme.palette.common.white,
    fontSize: '1.9rem',
  },
  gsMinutes: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '20$',
    },
  },
  gsTeamLogo: {
    width: '100%',
    height: '3rem',
    objectFit: 'cover',
    position: 'relative',
    flex: '1 1',
    maxWidth: '100%',
  },
  gsSituation: {
    height: '3rem',
    position: 'relative',
    display: 'flex',
    backgroundClip: 'padding-box',
    backgroundOrigin: 'padding-box',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    fontFamily: `'Roboto Condensed', sans-serif !important`,
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.6rem',
    },
  },
  gsInfo: {
    color: theme.palette.common.white,
    fontFamily: `'Roboto Condensed', sans-serif !important`,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.6rem',
    },
  },
  reportWrapper: {
    width: '100%',
    overflow: 'visible',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,0.8)',
    backgroundBlendMode: 'color',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
    },
  },
  reportTitle: {
    textAlign: 'center',
    padding: theme.spacing(4),
  },
  reportPlayerText: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightLight,
    fontFamily: `'Roboto Condensed', sans-serif !important`,

    [theme.breakpoints.up('xs')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem',
    },
  },
  reportPlayerPoints: {
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
    justifyContent: 'center',

    backgroundColor: theme.palette.success.dark,
    color: theme.palette.common.white,
    fontFamily: `'Roboto Condensed', sans-serif !important`,
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.1rem',
      width: '4rem',
      height: '4rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4rem',
      width: '5rem',
      height: '5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
      width: '6rem',
      height: '6rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
      width: '8rem',
      height: '8rem',
    },
  },
  reportPlayerAvatar: {
    [theme.breakpoints.up('xs')]: {
      width: '6rem',
    },
    [theme.breakpoints.up('sm')]: {
      width: '8rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '10rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '12rem',
    },
  },
  reportCenterize: {
    display: 'flex',
    justifyContent: 'center',
  },
  gameStarSponsor1: {
    backgroundImage: `url(${bauerSponsorLogo})`,
    width: '25rem',
    height: '2.9rem',
    overflow: 'visible',
    objectFit: 'cover',
    backgroundSize: 'cover',
  },
  gameStarWrapper: {
    padding: theme.spacing(4),
    width: '100%',
    backgroundImage: `url(${resultPreviewBg})`,
    backgroundPosition: '50% 50%',
    overflow: 'visible',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundBlendMode: 'color',
    borderRadius: '4px',
  },
  gameStarTitle: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: `'Roboto Condensed', sans-serif !important`,
  },
  gameStarAvatar: {
    [theme.breakpoints.up('xs')]: {
      width: '20rem',
      height: '20rem',
    },
    [theme.breakpoints.up('sm')]: {
      width: '22rem',
      height: '22rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '24rem',
      height: '24rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '28rem',
      height: '28rem',
    },
  },
  gameStarStatistics: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: `'Roboto Condensed', sans-serif !important`,
    [theme.breakpoints.up('xs')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.8rem',
    },
  },
  gameStarIcon: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '7rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '8rem',
    },

    color: '#f1c50e',
  },
}))

export { useStyles }
