import React from 'react'

export const SecondPeriodComments = props => {
  const { secondPeriodNotes } = props.data
  return (
    <section className="u-align-center u-clearfix u-section-7" id="sec-906d">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <p className="u-custom-font u-font-roboto-condensed u-text u-text-1">
          {secondPeriodNotes}
        </p>
      </div>
    </section>
  )
}
