import React from 'react'

export const ThirdPeriodComments = props => {
  const { thirdPeriodNotes } = props.data
  return (
    <section className="u-align-center u-clearfix u-section-11" id="sec-cbfd">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-1">
          {thirdPeriodNotes}
        </p>
      </div>
    </section>
  )
}
