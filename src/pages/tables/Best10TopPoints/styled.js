import styled from 'styled-components'
import media from '../../../styles/media'
import theme from '../../../styles/theme'

export const TableStyles = styled.div`
  margin-left: 18rem;
  ${media.xs`
    margin-left: 26rem;
  `}
  padding: 0;
  font-size: ${theme.fontSize.medium};
  line-height: 1.5rem;
  font-weight: normal;

  table {
    border-spacing: 0;
    min-width: 20rem;
    color: ${theme.color.bigStone};
    tr {
      padding: 0.2rem 0;
      vertical-align: middle;
    }

    tr:nth-child(even) {
      background: ${theme.color.zumthor};
    }

    th,
    td {
      margin: 0;
      :last-child {
        border-right: 0;
      }
    }
  }
`

export const TeamLogo = styled.img`
  width: 3rem;
  height: 3rem;
  ${media.xs`
    width: 5rem;
    height: 5rem;
  `}
`

export const CellValue = styled.div`
  text-align: right;
  width: max-content;
  padding: 0.2rem 0.5rem;
  ${media.xxxs`
    font-size: ${theme.fontSize.xSmall};
  `}
`
