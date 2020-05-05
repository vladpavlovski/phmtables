import React from 'react'
import MUIDataTable from 'mui-datatables'

const DataTable = props => {
  const { columns, data, options } = props
  return (
    <MUIDataTable
      title={'Articles List'}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

export { DataTable }
