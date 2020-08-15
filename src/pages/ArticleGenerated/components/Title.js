import React from 'react'
import dayjs from 'dayjs'

import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

const Title = props => {
  const { title, date, leagueName } = props.data
  return (
    <section className="u-clearfix u-section-1" id="sec-6e05">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h1 className="u-custom-font u-text u-text-default u-title u-text-1">
          {title}
        </h1>
        <p className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-grey-75 u-text-2">
          {`${dayjs(date).format('L')} - Prague Hockey Masters - ${leagueName}`}
        </p>
      </div>
    </section>
  )
}

export { Title }
