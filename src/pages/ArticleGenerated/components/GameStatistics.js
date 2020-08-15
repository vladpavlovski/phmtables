import React, { useCallback } from 'react'

export const GameStatistics = props => {
  const {
    teamOneShots,
    teamOneFaceoffs,
    teamOneMinutes,
    teamTwoShots,
    teamTwoFaceoffs,
    teamTwoMinutes,
    gameReport,
  } = props.data
  const generateGameReport = useCallback(
    () =>
      gameReport.map(report => (
        <div key={report.id} className="u-size-17">
          <div className="u-layout-row">
            <div className="u-container-style u-hidden-xs u-image u-layout-cell u-left-cell u-size-6 u-size-60-md">
              {report.teamLogo && (
                <img
                  src={report.teamLogo}
                  alt={report.teamShortcut}
                  style={{
                    height: '3rem',
                    objectFit: 'cover',
                    position: 'relative',
                    flex: '1 1',
                    maxWidth: '100%',
                  }}
                />
              )}
            </div>
            <div
              style={{
                backgroundColor:
                  report.situation.toUpperCase() === 'TREST'
                    ? '#ca1b1b'
                    : '#0a7412',
                position: 'relative',
                display: 'flex',
                backgroundClip: 'padding-box',
                backgroundOrigin: 'padding-box',
              }}
              className="u-align-center u-container-style u-size-6 u-size-60-md u-layout-cell-2"
            >
              <div className="u-container-layout u-valign-middle u-container-layout-6">
                <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-12">
                  {report.situation.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="u-align-left u-container-style u-layout-cell u-size-33 u-size-60-md u-layout-cell-3">
              <div className="u-container-layout u-valign-middle u-container-layout-7">
                <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-13">
                  {`${report.minute}' `}
                  <b>{`${report.teamShortcut} - ${report.playerSurnameOne}`}</b>
                  {report.playerSurnameTwo && ', '}
                  {`${report.playerSurnameTwo}`}
                  {report.playerSurnameThree && ', '}
                  {`${report.playerSurnameThree}`}
                  {report.details && ` (${report.details})`}
                </p>
              </div>
            </div>
            <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-15 u-size-60-md u-layout-cell-4">
              <div className="u-container-layout u-container-layout-8" />
            </div>
          </div>
        </div>
      )),
    [gameReport]
  )

  return (
    <section
      className="u-align-center u-clearfix u-image u-shading u-section-6"
      id="sec-8280"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-heading-font u-subtitle u-text u-text-default u-text-1">
          STATISTIKY ZÁPASU
        </h2>
        <div className="u-align-left u-container-style u-group u-group-1">
          <div className="u-container-layout u-valign-top u-container-layout-1">
            <img
              src="images/LEV_circle.png"
              alt=""
              className="u-image u-image-default u-image-1"
              data-image-width={280}
              data-image-height={252}
            />
            <img
              src="images/WOLFPACK_LOGO.png"
              alt=""
              className="u-image u-image-default u-image-2"
              data-image-width={763}
              data-image-height={770}
            />
          </div>
        </div>
        <div
          className="u-border-1 u-border-grey-75 u-container-style u-group u-image u-shading u-image-3"
          data-image-width={1600}
          data-image-height={1067}
        >
          <div className="u-container-layout u-container-layout-2">
            <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-2">
              Střely
            </p>
            <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-3">
              {teamTwoShots}
            </p>
            <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-4">
              {teamOneShots}
            </p>
          </div>
        </div>
        <div
          className="u-border-1 u-border-grey-75 u-container-style u-group u-image u-shading u-image-4"
          data-image-width={1600}
          data-image-height={1067}
        >
          <div className="u-container-layout u-valign-middle u-container-layout-3">
            <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-5">
              Vhazování
            </p>
            <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-6">
              {teamTwoFaceoffs}
            </p>
            <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-7">
              {teamOneFaceoffs}
            </p>
          </div>
        </div>
        <div
          className="u-border-1 u-border-grey-75 u-container-style u-group u-image u-shading u-image-5"
          data-image-width={1600}
          data-image-height={1067}
        >
          <div className="u-container-layout u-container-layout-4">
            <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-8">
              Tr. Minuty
            </p>
            <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-default u-text-9">
              {teamTwoMinutes}
            </p>
            <p className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-10">
              {teamOneMinutes}
            </p>
          </div>
        </div>
        <h2 className="u-heading-font u-subtitle u-text u-text-default u-text-11">
          VÝVOJ ZÁPASU
        </h2>
        <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-col">{generateGameReport()}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
