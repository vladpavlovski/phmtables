import React from 'react'

export const Reports = props => {
  const {
    gameData: {
      teamOneStarName,
      // teamOneStarAvatar,
      teamOneStarGoals,
      teamOneStarAssists,
      teamOneStarPoints,
      teamTwoStarName,
      // teamTwoStarAvatar,
      teamTwoStarGoals,
      teamTwoStarAssists,
      teamTwoStarPoints,
    },
    teamOneNameFull,
    teamTwoNameFull,
  } = props.data

  // TODO: avatar for star
  // TODO: background from team logo
  return (
    <>
      <section className="u-align-center u-clearfix u-section-8" id="sec-188e">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">SESTAVY</h2>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-image u-shading u-section-9"
        id="sec-8d4e"
        data-image-width={280}
        data-image-height={252}
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h3 className="u-text u-text-default u-text-1">
            {`Soupiska: ${teamOneNameFull}`}
          </h3>
          <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-col">
                <div className="u-size-35">
                  <div className="u-layout-row">
                    <div className="u-align-center u-container-style u-hidden-xs u-layout-cell u-left-cell u-size-4 u-size-60-md u-layout-cell-1">
                      <div className="u-container-layout u-valign-middle u-container-layout-1">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-2">
                          95 (no data ???)
                        </p>
                      </div>
                    </div>
                    <div className="u-container-style u-custom-color-1 u-layout-cell u-size-6 u-size-60-md u-layout-cell-2">
                      <div className="u-container-layout u-valign-middle u-container-layout-2">
                        <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-3">
                          {`${teamOneStarPoints}+ bodů`}
                        </p>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-layout-cell u-size-13 u-size-60-md u-layout-cell-3">
                      <div className="u-container-layout u-valign-middle u-container-layout-3">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-4">
                          {teamOneStarName}
                        </p>
                      </div>
                    </div>
                    <div
                      className="u-container-style u-image u-image-contain u-layout-cell u-size-9 u-image-1"
                      data-image-width={1122}
                      data-image-height={936}
                    >
                      <div className="u-container-layout u-container-layout-4" />
                    </div>
                    <div className="u-align-center u-container-style u-layout-cell u-size-7 u-layout-cell-5">
                      <div className="u-container-layout u-valign-middle u-container-layout-5">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-5">
                          {`${teamOneStarGoals} (G)`}
                        </p>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-layout-cell u-size-7 u-layout-cell-6">
                      <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-6">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-6">
                          {`${teamOneStarAssists} (A)`}
                        </p>
                      </div>
                    </div>
                    <div className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-container-style u-layout-cell u-size-60-md u-size-7 u-layout-cell-7">
                      <div className="u-container-layout u-valign-middle u-container-layout-7">
                        <p className="u-align-center-xs u-custom-font u-font-roboto-condensed u-text u-text-7">
                          {`${teamOneStarPoints} (B)`}
                        </p>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-layout-cell u-right-cell u-size-7 u-layout-cell-8">
                      <div className="u-container-layout u-valign-middle u-container-layout-8">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-8">
                          10 (MIN) (no data ???)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-25">
                  <div className="u-layout-row">
                    <div className="u-container-style u-layout-cell u-left-cell u-right-cell u-size-60 u-layout-cell-9">
                      <div className="u-container-layout u-container-layout-9" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-image u-shading u-section-10"
        id="carousel_69f6"
        data-image-width={763}
        data-image-height={770}
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h3 className="u-text u-text-default u-text-1">
            {`Soupiska: ${teamTwoNameFull}`}
          </h3>
          <div className="u-clearfix u-expanded-width-xs u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-col">
                <div className="u-size-35">
                  <div className="u-layout-row">
                    <div className="u-align-center u-container-style u-hidden-xs u-layout-cell u-left-cell u-size-4 u-size-60-md u-layout-cell-1">
                      <div className="u-container-layout u-valign-middle u-container-layout-1">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-2">
                          95
                        </p>
                      </div>
                    </div>
                    <div className="u-container-style u-custom-color-1 u-layout-cell u-size-6 u-size-60-md u-layout-cell-2">
                      <div className="u-container-layout u-valign-middle u-container-layout-2">
                        <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-3">
                          {` ${teamTwoStarPoints}+ bodů`}
                        </p>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-layout-cell u-size-13 u-size-60-md u-layout-cell-3">
                      <div className="u-container-layout u-valign-middle u-container-layout-3">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-4">
                          {teamTwoStarName}
                        </p>
                      </div>
                    </div>
                    <div
                      className="u-container-style u-image u-image-contain u-layout-cell u-size-9 u-image-1"
                      data-image-width={1122}
                      data-image-height={936}
                    >
                      <div className="u-container-layout u-container-layout-4" />
                    </div>
                    <div className="u-align-center u-container-style u-layout-cell u-size-7 u-layout-cell-5">
                      <div className="u-container-layout u-valign-middle u-container-layout-5">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-5">
                          {`${teamTwoStarGoals} (G)`}
                        </p>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-layout-cell u-size-7 u-layout-cell-6">
                      <div className="u-container-layout u-valign-middle u-container-layout-6">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-6">
                          {`${teamTwoStarAssists} (A)`}
                        </p>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-layout-cell u-size-60-md u-size-7 u-layout-cell-7">
                      <div className="u-container-layout u-valign-middle u-container-layout-7">
                        <p className="u-custom-font u-font-roboto-condensed u-text u-text-7">
                          {`${teamTwoStarPoints} (B)`}
                        </p>
                      </div>
                    </div>
                    <div className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-container-style u-layout-cell u-right-cell u-size-7 u-layout-cell-8">
                      <div className="u-container-layout u-valign-middle u-container-layout-8">
                        <p className="u-align-center-xs u-custom-font u-font-roboto-condensed u-text u-text-8">
                          10 (MIN) (no data ???)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-25">
                  <div className="u-layout-row">
                    <div className="u-container-style u-layout-cell u-left-cell u-right-cell u-size-60 u-layout-cell-9">
                      <div className="u-container-layout u-container-layout-9" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
