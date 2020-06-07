import React from 'react'

export const GameGoalkeepers = props => {
  const {
    gameData: {
      teamOneGoalieAvatar,
      teamOneGoalieName,
      teamOneGoalieWins,
      teamOneGoalieSaves,
      teamOneGoaliePerc,
      teamTwoGoalieAvatar,
      teamTwoGoalieName,
      teamTwoGoalieWins,
      teamTwoGoalieSaves,
      teamTwoGoaliePerc,
    },
  } = props.data

  return (
    <section
      className="u-align-center u-clearfix u-section-13"
      id="carousel_58b8"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-text u-text-default u-text-1">BRANKAŘI zápasu</h2>
        <div className="u-container-style u-group u-group-1">
          <div className="u-container-layout u-valign-bottom u-container-layout-1">
            <div
              className="u-align-center u-container-style u-group u-image u-shading u-image-1"
              data-image-width={1600}
              data-image-height={1067}
            >
              <div className="u-container-layout u-container-layout-2">
                <div className="u-container-style u-grey-90 u-group u-opacity u-opacity-70 u-group-3">
                  <div className="u-container-layout u-container-layout-3">
                    <h2 className="u-align-center u-custom-font u-text u-text-default u-text-2">
                      GOLMAN
                    </h2>
                    {teamOneGoalieAvatar && (
                      <img
                        src={teamOneGoalieAvatar}
                        alt={teamOneGoalieName}
                        className="u-image u-image-default u-image-2"
                        data-image-width={1122}
                        data-image-height={936}
                      />
                    )}
                  </div>
                </div>
                <h4 className="u-custom-font u-text u-text-default u-text-3">
                  Zákroků: 35 (no data)
                  <br />
                  {`Ob.gólů: ${teamOneGoalieSaves}`}
                  <br />
                  {`% úspěš.: ${
                    Math.round((teamOneGoaliePerc + Number.EPSILON) * 100) / 100
                  }%`}
                  <br />
                  {`Vítězství: ${teamOneGoalieWins}`}
                </h4>
                <h4 className="u-custom-font u-text u-text-4">
                  {teamOneGoalieName.toUpperCase()}
                </h4>
              </div>
            </div>
            <div
              className="u-container-style u-group u-image u-shading u-image-3"
              data-image-width={1600}
              data-image-height={1067}
            >
              <div className="u-container-layout u-container-layout-4">
                <div className="u-align-center u-container-style u-grey-90 u-group u-opacity u-opacity-70 u-group-5">
                  <div className="u-container-layout u-container-layout-5">
                    <h2 className="u-align-center u-custom-font u-text u-text-5">
                      GOLMAN
                    </h2>
                    {teamTwoGoalieAvatar && (
                      <img
                        src={teamTwoGoalieAvatar}
                        alt={teamTwoGoalieName}
                        className="u-image u-image-default u-image-4"
                        data-image-width={1122}
                        data-image-height={936}
                      />
                    )}
                  </div>
                </div>
                <h4 className="u-align-center u-custom-font u-text u-text-default u-text-6">
                  Zákroků: 35
                  <br />
                  {`Ob.gólů: ${teamTwoGoalieSaves}`}
                  <br />
                  {`% úspěš.: ${teamTwoGoaliePerc}%`}
                  <br />
                  {`Vítězství: ${teamTwoGoalieWins}`}
                </h4>
                <h4 className="u-align-center u-custom-font u-text u-text-default u-text-7">
                  {teamTwoGoalieName.toUpperCase()}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
