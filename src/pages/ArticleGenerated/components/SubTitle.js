import React from 'react'

export const SubTitle = props => {
  const { subTitle } = props.data
  return (
    <section className="u-clearfix u-valign-top u-section-4" id="sec-0307">
      <div
        className="u-container-style u-expanded-width u-group u-image u-shading u-image-1"
        data-animation-name="fadeIn"
        data-animation-duration={1000}
        data-animation-delay={0}
        data-animation-direction
      >
        <div className="u-container-layout u-container-layout-1">
          <h2 className="u-align-center u-custom-font u-text u-text-default u-text-1">
            {subTitle}
          </h2>
        </div>
      </div>
    </section>
  )
}