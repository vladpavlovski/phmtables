import React from 'react'
import 'react-imported-component/macro'
import { Container, Grid } from '@material-ui/core'

import Load from '../../utils/load'
import { useStyles } from './styled'
import * as ROUTES from '../../routes'

const LinkCard = Load(() => import('./LinkCard'))
const Layout = Load(() => import('../../components/Layout'))

// {
//   title: '',
//   link: ,
//   description: '',
//   backgroundLink: '',
// },

const linkMapData = [
  {
    title: 'Goalies 20 Top',
    link: ROUTES.GOALIES_20_TOP,
    description: 'Goalies 20 Top table',
    backgroundLink: 'https://cdn.wallpapersafari.com/6/49/1dDhUF.jpg',
  },
  {
    title: 'Goalies 20 Klasik',
    link: ROUTES.GOALIES_20_KLASIK,
    description: 'Goalies 20 Klasik table',
    backgroundLink:
      'https://i.pinimg.com/originals/24/23/ee/2423ee115bdf880478bf05b43146d869.jpg',
  },
  {
    title: 'Result TS55 21',
    link: ROUTES.RESULT_TS55_21,
    description: 'Result TS55 21 table',
    backgroundLink:
      'https://s1.1zoom.me/b4453/929/Hockey_Men_Ice_rink_Rays_of_light_Uniform_514784_1920x1080.jpg',
  },
  {
    title: 'Standings TS55 21',
    link: ROUTES.STANDINGS_TS55_21,
    description: 'Standings TS55 21 table',
    backgroundLink:
      'https://wallpaperboat.com/wp-content/uploads/2019/06/ice-hockey-21.jpg',
  },
  {
    title: 'Best 10 Top Points 21',
    link: ROUTES.BEST10TOPPOINTS21,
    description: 'Best 10 Top Points 21 table',
    backgroundLink: 'https://wallpaperaccess.com/full/3171150.jpg',
  },
  {
    title: 'Best 10 Klasik Points 21',
    link: ROUTES.BEST10KLASIKPOINTS21,
    description: 'Best 10 Klasik Points 21 table',
    backgroundLink: 'https://wallpaperaccess.com/full/3171143.jpg',
  },
  {
    title: 'Best 10 Hobby Points 21',
    link: ROUTES.BEST10HOBBYPOINTS21,
    description: 'Best 10 Hobby Points 21 table',
    backgroundLink: 'https://wallpaperaccess.com/full/3171100.jpg',
  },
  {
    title: 'All Players 21',
    link: ROUTES.ALLPLAYERS21,
    description: 'All Players 21 table',
    backgroundLink: 'https://wallpaperaccess.com/full/3171029.jpg',
  },
  {
    title: 'Standings 21',
    link: ROUTES.STANDINGS21,
    description: 'Standings 21 table',
    backgroundLink: 'https://wallpaperaccess.com/full/1744939.jpg',
  },
  {
    title: 'Standings 21 Top',
    link: ROUTES.STANDINGS21TOP,
    description: 'Standings 21 Top table',
    backgroundLink: 'https://wallpaperaccess.com/full/3171049.jpg',
  },
  {
    title: 'Standings 21 Klasik',
    link: ROUTES.STANDINGS21KLASIK,
    description: 'Standings 21 Klasik table',
    backgroundLink: 'https://wallpapercave.com/wp/FXs9JYJ.jpg',
  },
  {
    title: 'Standings 21 Hobby',
    link: ROUTES.STANDINGS21HOBBY,
    description: 'Standings 21 Hobby table',
    backgroundLink: 'https://wallpapercave.com/wp/1Tbv1d3.jpg',
  },
  {
    title: 'Result 21',
    link: ROUTES.RESULT21,
    description: 'Result 21 table',
    backgroundLink:
      'https://nhl.bamcontent.com/images/photos/316579868/raw.png',
  },
  {
    title: 'Result',
    link: ROUTES.RESULT,
    description: 'Result table',
    backgroundLink:
      'https://cdn.shopify.com/s/files/1/1003/7610/products/professional_hockey_players_in_action_Wall_Mural_Wallpaper_a.jpg',
  },
  {
    title: 'Result All Time',
    link: ROUTES.RESULTSALLTIME,
    description: 'Result All Time table',
    backgroundLink: 'https://wallpapercave.com/wp/U2JtjEw.jpg',
  },
  {
    title: 'Standings 20',
    link: ROUTES.STANDINGS20,
    description: 'Standings 20 table',
    backgroundLink:
      'https://cdn.statically.io/img/wallpaperplay.com/walls/full/3/f/7/106665.jpg',
  },
  {
    title: 'Standings 20 Top',
    link: ROUTES.STANDINGS20TOP,
    description: 'Standings 20 Top table',
    backgroundLink:
      'https://www.medicinehatcubs.com/wp-content/uploads/2020/06/NHL-19-1080P-Wallpaper-1.jpg',
  },
  {
    title: 'Standings 20 Klasik',
    link: ROUTES.STANDINGS20KLASIK,
    description: 'Standings 20 Klasik table',
    backgroundLink:
      'https://cdn.shopify.com/s/files/1/1003/7610/products/Ice_hockey_in_Open_stadium_Wall_Mural_Wallpaper_a.jpg',
  },
  {
    title: 'All Players',
    link: ROUTES.ALLPLAYERS,
    description: 'All Players table',
    backgroundLink:
      'https://i.pinimg.com/736x/9f/26/17/9f26170ba4d2408d5f50dc304bfa4d76.jpg',
  },
  {
    title: 'Best 10 Top Points',
    link: ROUTES.BEST10TOPPOINTS,
    description: 'Best 10 Top Points table',
    backgroundLink:
      'https://swall.teahub.io/photos/small/259-2590908_nhl-wallpaper-data-src-download-free-ice-hockey.jpg',
  },
  {
    title: 'Best 10 Klasik Points',
    link: ROUTES.BEST10KLASIKPOINTS,
    description: 'Best 10 Klasik Points table',
    backgroundLink:
      'https://cutewallpaper.org/21/icehockey-wallpaper/Most-viewed-Ice-Hockey-wallpapers-4K-Wallpapers.jpg',
  },
  {
    title: 'All Players 19',
    link: ROUTES.ALLPLAYERS19,
    description: 'All Players 19 table',
    backgroundLink: 'https://vistapointe.net/images/hockey-wallpaper-1.jpg',
  },
  {
    title: 'All Players Years',
    link: ROUTES.ALLPLAYERSYEARS,
    description: 'All Players Years table',
    backgroundLink:
      'https://www.wallpaperup.com/uploads/wallpapers/2014/04/28/345232/9b8a078d432b8e806c1bfe5fd1b2e723-700.jpg',
  },
]

const LinkMap = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
          {linkMapData.map(data => (
            <LinkCard key={data.link} data={data} />
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export { LinkMap as default }
