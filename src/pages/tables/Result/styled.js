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

export const TrOver = styled.tr`
  border-top: 1px solid black;
`

export const Tr = styled.tr`
  padding: 0.2rem 0;
  vertical-align: top;
  ${props =>
    props.borders &&
    css`
      border-bottom: 1px solid black;
    `};
`

export const TrUnder = styled.tr`
  border-bottom: 1px solid black;
`

export const ScoreWrapper = styled.div`
  ${media.xxxs`
    min-width: 10rem;
  `}

  ${media.sm`
    min-width: 12rem;
  `}
  display: block;
  height: 5rem;
  text-align: center;
  background-color: #272727;
`

export const ScoreLink = styled.a`
  text-decoration: none;
  text-align: center;
  width: 12rem;
  height: 5rem;
  ${media.xxxs`
    min-width: 3rem;
  `}
  ${media.xxs`
    min-width: 4rem;
  `}
  ${media.xs`
    min-width: 5rem;
  `}
  ${media.sm`
    min-width: 6rem;
  `}
  ${media.md`
    min-width: 7rem;
  `}
  ${media.lg`
    min-width: 8rem;
  `}
`

export const Score = styled.span`
  font-size: 3.5rem;
  height: 5rem;
  line-height: 5rem;
  color: ${theme.color.appBg};
  font-weight: bold;
`

export const Team = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 1rem 0;
`

export const TeamHome = styled(Team)`
  align-items: flex-end;
`

export const LogoWrapper = styled.div``

export const TeamLogo = styled.img`
  ${media.xxxs`
    width: 4rem;
    height: 4rem;
  `}
  ${media.xxs`
    width: 4.5rem;
    height: 4.5rem;
  `}
  ${media.xs`
    width: 5rem;
    height: 5rem;
  `}
  ${media.sm`
    width: 5rem;
    height: 5rem;
  `}
  ${media.md`
    width: 5.5rem;
    height: 5.5rem;
  `}
  ${media.lg`
    width: 6rem;
    height: 6rem;
  `}

`

export const PhotoLink = styled.a`
  text-decoration: none;
  color: #666;
  height: 10rem;
  line-height: 10rem;
`

export const TeamName = styled.span`
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
  text-align: start;
  margin: 0 1rem;
  line-height: ${theme.lineHeight.basic};
  color: ${theme.color.bigStone};
`

export const TeamNameHome = styled(TeamName)`
  text-align: end;
`

export const Info = styled.p`
  color: ${theme.color.bigStone};
  margin: 0;
  line-height: ${theme.lineHeight.basic};
`

export const InfoMobile = styled.p`
  font-size: 1.7rem;
  text-align: center;
  margin: 0.4rem;
`

export const InfoMobileBottom = styled(InfoMobile)`
  font-size: 1.4rem;
`

export const InfoDetails = styled(Info)`
  font-size: ${theme.fontSize.small};
  margin-top: 2rem;
  line-height: 1.8rem;
`

export const Wrapper = styled.div`
  background: #272727;
  padding: 1rem;
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

export const AllFilters = styled.div`
  padding-top: 6.5rem;
  ${media.md`
    padding-top: 0;
  `};
`
