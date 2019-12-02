import styled from 'styled-components'
import media from '../../styles/media'
import theme from '../../styles/theme'
export const Wrapper = styled.div`
  width: 24rem;
  height: 100vh;
  position: fixed;
  background: #272727;
  padding: 1rem;
`

export const TableStyles = styled.div`
  ${media.md`
    margin-left: 26rem;
`}
  padding: 0;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: bold;

  table {
    border-spacing: 0;
    border: 1px solid black;

    th,
    td {
      margin: 0;
      padding: 0.4rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    ul,
    ol {
      margin: 0;
      padding-left: 1.6rem;
    }
  }
`

export const ScoreLink = styled.a`
  display: grid;
  justify-content: center;
  text-decoration: none;
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
  ${media.xxxs`
    font-size: ${theme.fontSize.normal};
  `}
  ${media.xxs`
    font-size: ${theme.fontSize.medium};
  `}
  ${media.xs`
    font-size: ${theme.fontSize.large};
  `}
  ${media.sm`
    font-size: ${theme.fontSize.xLarge};
  `}
  ${media.md`
    font-size: ${theme.fontSize.xxLarge};
  `}
  ${media.lg`
    font-size: 3.2rem;
  `}

  color: #00e;
  font-weight: bold;
`

export const LogoWrapper = styled.div`
  display: grid;
  justify-items: center;
`

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
    width: 5.5rem;
    height: 5.5rem;
  `}
  ${media.md`
    width: 6rem;
    height: 6rem;
  `}
  ${media.lg`
    width: 7rem;
    height: 7rem;
  `}

`

export const PhotoLink = styled.a`
  text-decoration: none;
`

export const PhotoContent = styled.span`
  font-size: ${theme.fontSize.medium};
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  color: #fff;
  background-color: #ffc107;
  border-radius: 5px;
  text-transform: uppercase;
`
