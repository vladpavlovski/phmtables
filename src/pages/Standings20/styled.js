import styled, { css } from 'styled-components'
import media from '../../styles/media'
import theme from '../../styles/theme'

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
    min-width: 63rem;
    tr {
      padding: 0.2rem 0;
      vertical-align: middle;
    }

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

export const AllFilters = styled.div`
  padding-top: 6.5rem;
  ${media.md`
    padding-top: 0;
  `};
`

export const TeamLogo = styled.img`
  ${media.xxxs`
    width: 10rem;
    height: 2rem;
  `}
  ${media.xxs`
    width: 10rem;
    height: 2rem;
  `}
  ${media.xs`
    width: 11rem;
    height: 2.5rem;
  `}
  ${media.sm`
    width: 11rem;
    height: 2.5rem;
  `}
  ${media.md`
    width: 11.5rem;
    height: 3.5rem;
  `}
  ${media.lg`
    width: 12rem;
    height: 3rem;
  `}
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

export const Rank = styled.div`
  font-size: ${theme.fontSize.large};
  font-weight: bold;
`

export const Wins = styled.div`
  color: green;
`

export const Draws = styled.div`
  color: orange;
`

export const Loss = styled.div`
  color: red;
`

export const Points = styled.div`
  color: black;
`
