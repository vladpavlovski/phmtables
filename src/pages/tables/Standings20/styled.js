import styled, { css } from 'styled-components'
import media from '../../../styles/media'
import theme from '../../../styles/theme'

export const phmStyles = {
  option: (provided, state) => ({
    ...provided,
    color: theme.color.bigStone,
    fontWeight: 'bold',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: theme.color.bigStone,
  }),
  input: provided => ({
    ...provided,
    color: theme.color.bigStone,
  }),
  placeholder: provided => ({
    ...provided,
    color: theme.color.bigStone,
  }),
}

export const TableStyles = styled.div`
  ${media.md`
    margin-left: 26rem;
`}
  padding: 0;
  font-size: ${theme.fontSize.medium};
  line-height: 1.5rem;
  font-weight: normal;

  table {
    border-spacing: 0;
    min-width: 36rem;
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
      border: 1px solid ${theme.color.solitude};
      border-top: 0;
      border-bottom: 0;
    }
  }
`

export const AllFilters = styled.div`
  padding-top: 6.5rem;
  ${media.md`
    padding-top: 0;
  `};
`

export const TeamLogo = styled.img`
  width: 8rem;
  height: 3rem;
  ${media.xxs`
  width: 10rem;
  height: 4rem;
`}
  object-fit: cover;
`

export const AvatarLogo = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
`

export const Wrapper = styled.div`
  background: #272727;
  padding: 1rem;
  z-index: 1;
  ${media.xxxs`
    display: block;
    position: fixed;
    width: 100%;
    ${props =>
      props.showFilters &&
      css`
        height: 100vh;
      `};
  `}
  ${media.md`
    width: 24rem;
    height: 100vh;
    position: fixed;
  `}
`

export const FilterButton = styled.div`
  font-size: 2rem;
  width: 20rem;
  text-align: center;
  padding: 2px;
  margin: 0 auto;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  min-height: 3.8rem;
  line-height: 3.8rem;
  position: relative;
  transition: all 100ms;
  box-sizing: border-box;
`

export const TeamName = styled.div`
  ${media.xxxs`
    font-size: ${theme.fontSize.small};
  `}
  ${media.xxs`
    font-size: ${theme.fontSize.normal};
  `}
  ${media.xs`
    font-size: ${theme.fontSize.medium};
  `}
  ${media.sm`
    font-size: ${theme.fontSize.medium};
  `}

  font-weight: bold;
  line-height: ${theme.lineHeight.basic};
  color: ${theme.color.bigStone};
`

export const TeamNameSmall = styled.div`
  font-size: ${theme.fontSize.xSmall};
  color: ${theme.color.bigStone};
`

export const Rank = styled.div`
  font-size: ${theme.fontSize.large};
  font-weight: bold;
  width: max-content;
`

export const CellValue = styled.div`
  text-align: right;
  ${props =>
    props.left &&
    css`
      text-align: left;
    `};
  padding: 0.2rem 0.5rem;
  width: max-content;
`

export const Wins = styled(CellValue)`
  color: green;
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `};
`

export const Draws = styled(CellValue)`
  color: orange;
`

export const Loss = styled(CellValue)`
  color: red;
`

export const Points = styled(CellValue)`
  color: black;
`

export const HeaderValue = styled.span`
  text-align: center;
`

export const HeaderWins = styled(CellValue)`
  color: green;
`
export const HeaderDraws = styled(CellValue)`
  color: orange;
`

export const HeaderLoss = styled(CellValue)`
  color: red;
`

export const HeaderPoints = styled(CellValue)`
  color: black;
`
