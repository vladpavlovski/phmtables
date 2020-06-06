import React from 'react'
import { Helmet } from 'react-helmet'
export const PageSetup = () => {
  return (
    <Helmet>
      <meta
        name="keywords"
        content="Life is Good, 15, 52, Lev zvládl zápas proti Wolfpack až v závěru, 27         Střely       2627         Tr. min       2627         Bule       26"
      />
      <meta name="description" content />
      <link
        id="u-theme-google-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
      />
      <link
        id="u-page-google-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Bungee+Shade|Fugaz+One"
      />
    </Helmet>
  )
}
