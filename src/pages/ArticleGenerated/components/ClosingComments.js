import React from 'react'

export const ClosingComments = props => {
  const { closingNotes } = props.data
  return (
    <section
      className="u-align-center u-clearfix u-section-5"
      id="carousel_11a8"
    >
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-1">
          {closingNotes}
        </p>
      </div>
    </section>
  )
}
