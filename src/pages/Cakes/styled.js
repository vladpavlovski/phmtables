import styled from 'styled-components'
import media from '../../styles/media'
import theme from '../../styles/theme'

export const TableStyles = styled.div`
  ${media.md`
    margin-left: 26rem;
`}
  padding: 0;
  font-size: ${theme.fontSize.medium};
  line-height: ${theme.lineHeight.normal};
  font-weight: normal;

  table {
    border-spacing: 0;

    th,
    td {
      margin: 0;
      padding: 0 0.4rem;

      :last-child {
        border-right: 0;
      }
    }
  }
`
export const YablochnyjPirog = styled.div`
  color: yellow;
  text-transform: uppercase;
`
