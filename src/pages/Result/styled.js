import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 24rem;
  height: 100vh;
  position: fixed;
  background: #272727;
  padding: 1rem;
`

export const TableStyles = styled.div`
  padding: 0;
  margin-left: 26rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    /* tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    } */

    th,
    td {
      margin: 0;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
