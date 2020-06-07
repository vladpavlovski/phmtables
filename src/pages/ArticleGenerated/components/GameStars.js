import React from 'react'
import bauerLogoWhite from '../images/Bauer_Logo_White.png'
import StarIcon from '@material-ui/icons/Star'

export const GameStars = props => {
  const {
    gameData: {
      teamOneStarName,
      teamOneStarAvatar,
      teamOneStarGoals,
      teamOneStarAssists,
      teamOneStarPoints,
      teamTwoStarName,
      teamTwoStarAvatar,
      teamTwoStarGoals,
      teamTwoStarAssists,
      teamTwoStarPoints,
    },
  } = props.data

  return (
    <section className="u-align-center u-clearfix u-section-12" id="sec-3d28">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-text u-text-default u-text-1">Hvězdy zápasu</h2>
        <div className="u-container-style u-group u-group-1">
          <div className="u-container-layout u-valign-bottom-xs u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-1">
            <div
              className="u-container-style u-group u-image u-shading u-image-1"
              data-image-width={1600}
              data-image-height={1067}
            >
              <div className="u-container-layout u-valign-bottom u-container-layout-2">
                <div className="u-align-center u-container-style u-grey-90 u-group u-opacity u-opacity-70 u-group-3">
                  <div className="u-container-layout u-container-layout-3">
                    <img
                      src={bauerLogoWhite}
                      alt="Bauer"
                      className="u-image u-image-default u-image-2"
                      data-image-width={1600}
                      data-image-height={191}
                    />
                    <h2 className="u-custom-font u-text u-text-default u-text-2">
                      HVĚZDA UTKÁNÍ
                    </h2>
                    {teamOneStarAvatar && (
                      <img
                        src={teamOneStarAvatar}
                        alt={teamOneStarName}
                        className="u-image u-image-default u-image-3"
                        data-image-width={1122}
                        data-image-height={936}
                      />
                    )}
                  </div>
                </div>
                <h4 className="u-align-center u-custom-font u-text u-text-default u-text-3">
                  {`G:${teamOneStarGoals} A:${teamOneStarAssists} B:${teamOneStarPoints} TR:0`}
                </h4>
                <span className="u-icon u-icon-circle u-spacing-0 u-text-palette-3-base u-icon-1">
                  <StarIcon style={{ fontSize: '5rem' }} />
                </span>
                <h4 className="u-align-center u-custom-font u-text u-text-4">
                  {teamOneStarName.toUpperCase()}
                </h4>
              </div>
            </div>
            <div
              className="u-container-style u-group u-image u-shading u-image-4"
              data-image-width={1600}
              data-image-height={1067}
            >
              <div className="u-container-layout u-valign-bottom u-container-layout-4">
                <div className="u-align-center u-container-style u-grey-90 u-group u-opacity u-opacity-70 u-group-5">
                  <div className="u-container-layout u-container-layout-5">
                    <img
                      src={bauerLogoWhite}
                      alt="Bauer"
                      className="u-image u-image-default u-image-5"
                      data-image-width={1600}
                      data-image-height={191}
                    />
                    <h2 className="u-custom-font u-text u-text-5">
                      HVĚZDA UTKÁNÍ
                    </h2>
                    {teamTwoStarAvatar && (
                      <img
                        src={teamTwoStarAvatar}
                        alt={teamTwoStarName}
                        className="u-image u-image-default u-image-6"
                        data-image-width={1122}
                        data-image-height={936}
                      />
                    )}
                  </div>
                </div>
                <h4 className="u-align-center u-custom-font u-text u-text-default u-text-6">
                  {`G:${teamTwoStarGoals} A:${teamTwoStarAssists} B:${teamTwoStarPoints} TR:0`}
                </h4>
                <span className="u-icon u-icon-circle u-spacing-0 u-text-palette-3-base u-icon-3">
                  <StarIcon style={{ fontSize: '5rem' }} />
                </span>
                <h4 className="u-align-center u-custom-font u-text u-text-default u-text-7">
                  {teamTwoStarName.toUpperCase()}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="u-container-style u-group u-image u-image-7"
          data-image-width={2592}
          data-image-height={1728}
        >
          <div className="u-container-layout u-container-layout-6" />
        </div>
        <div className="u-container-style u-expanded-width-xs u-group u-image u-image-8">
          <div className="u-container-layout u-container-layout-7" />
        </div>
      </div>
    </section>
  )
}
