import React from 'react'
import 'react-imported-component/macro'
import { Container, Grid } from '@material-ui/core'

import Load from '../../utils/load'
import { useStyles } from './styled'
import * as ROUTES from '../../routes'

const LinkCard = Load(() => import('./LinkCard'))
const Layout = Load(() => import('../../components/Layout'))

const linkMapData = [
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
