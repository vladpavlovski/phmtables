import React from 'react'

export const Perex = props => {
  const { perex } = props.data
  return (
    <section className="u-align-center u-clearfix u-section-3" id="sec-ca04">
      <div className="u-clearfix u-sheet u-sheet-1">
        <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-1">
          {perex}
        </p>
      </div>
    </section>
  )
}
