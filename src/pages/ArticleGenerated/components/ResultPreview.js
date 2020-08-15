import React from 'react'
import dayjs from 'dayjs'
import phmCupLogo from '../images/PHMCUP_LOGO.png'

export const ResultPreview = props => {
  const {
    teamOneNameFull,
    teamOneGoals,
    teamOneLogo,
    teamTwoNameFull,
    teamTwoGoals,
    teamTwoLogo,
    date,
    time,
    place,
    phase,
    group,
  } = props.data
  return (
    <section className="u-clearfix u-grey-10 u-section-2" id="sec-59f6">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div
          className="u-container-style u-expanded-width u-group u-image u-shading u-image-1"
          data-image-width={1600}
          data-image-height={1067}
        >
          <div className="u-container-layout u-container-layout-1">
            <div className="u-container-style u-group u-group-2">
              <div className="u-container-layout u-container-layout-2">
                <div className="u-border-1 u-border-grey-75 u-border-radius-26 u-grey-90 u-shape u-shape-round u-shape-1" />
                <img
                  src={teamOneLogo}
                  alt={teamOneNameFull}
                  className="u-image u-image-default u-image-2"
                  data-image-width={280}
                  data-image-height={252}
                  data-animation-name="pulse"
                  data-animation-duration={1000}
                  data-animation-delay={0}
                  data-animation-direction
                />
                <div className="u-container-style u-group u-white u-group-3">
                  <div className="u-container-layout u-valign-middle u-container-layout-3">
                    <p
                      className="u-align-center u-custom-font u-text u-text-custom-color-1 u-text-1"
                      data-animation-name="pulse"
                      data-animation-duration={1000}
                      data-animation-delay={0}
                      data-animation-direction
                    >
                      {teamOneGoals}
                    </p>
                  </div>
                </div>
                <p
                  className="u-align-center u-custom-font u-hidden-md u-hidden-sm u-hidden-xs u-text u-text-2"
                  data-animation-name="pulse"
                  data-animation-duration={1000}
                  data-animation-delay={0}
                  data-animation-direction
                >
                  <u>{teamOneNameFull}</u>
                </p>
              </div>
            </div>
            <div className="u-container-style u-group u-group-4">
              <div className="u-container-layout u-container-layout-4">
                <div className="u-border-1 u-border-grey-75 u-border-radius-26 u-grey-90 u-shape u-shape-round u-shape-2" />
                <img
                  src={teamTwoLogo}
                  alt={teamTwoNameFull}
                  className="u-image u-image-default u-image-3"
                  data-image-width={763}
                  data-image-height={770}
                  data-animation-name="pulse"
                  data-animation-duration={1000}
                  data-animation-delay={0}
                  data-animation-direction
                />
                <div className="u-container-style u-group u-white u-group-5">
                  <div className="u-container-layout u-valign-middle u-container-layout-5">
                    <p
                      className="u-align-center u-custom-font u-text u-text-body-color u-text-3"
                      data-animation-name="pulse"
                      data-animation-duration={1000}
                      data-animation-delay={0}
                      data-animation-direction
                    >
                      {teamTwoGoals}
                    </p>
                  </div>
                </div>
                <p
                  className="u-align-center u-custom-font u-hidden-md u-hidden-sm u-hidden-xs u-text u-text-4"
                  data-animation-name="pulse"
                  data-animation-duration={1000}
                  data-animation-delay={0}
                  data-animation-direction
                >
                  <u>{teamTwoNameFull}</u>
                </p>
              </div>
            </div>
            <div className="u-container-style u-group u-group-6">
              <div className="u-container-layout u-valign-bottom u-container-layout-6">
                <div className="u-border-1 u-border-grey-75 u-border-radius-10 u-grey-90 u-shape u-shape-round u-shape-3" />
                <p className="u-align-center u-custom-font u-font-roboto-condensed u-hidden-xs u-text u-text-default u-text-palette-3-base u-text-5">
                  {phase}
                </p>
                <p className="u-align-center u-custom-font u-font-roboto-condensed u-hidden-xs u-text u-text-default u-text-palette-3-base u-text-6">
                  {group}
                </p>
                <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-palette-3-base u-text-7">
                  {`${dayjs(date).format('L')} ${time}`}
                </p>
                <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-palette-3-base u-text-8">
                  {place}
                </p>
                <img
                  src={phmCupLogo}
                  alt="PHM Cup"
                  className="u-image u-image-default u-image-4"
                  data-image-width={785}
                  data-image-height={907}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
