import styled, { css } from 'styled-components'
import media from '../../../styles/media'
import theme from '../../../styles/theme'
import { TabList } from 'react-tabs'

export const phmStyles = {
  option: provided => ({
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

export const PhmTabList = styled(TabList)`
  display: block;
  position: fixed;
  width: 100vw;
  height: 4rem;
  z-index: 10;
  background: ${theme.color.white};

  ul {
    margin: 0;
    padding: 0;
    list-style-type: disc;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }
`

export const TableStyles = styled.div`
  ${media.sm`
    margin-left: 24rem;
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
      :last-child {
        border-right: 0;
      }
    }
  }
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
  ${media.sm`
    width: 24rem;
    height: 100vh;
    position: fixed;
  `}
`

export const TabInsider = styled.div`
  padding-top: 4rem;
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
export const PlayerPhoto = styled.img`
  width: 6rem;
  height: 5rem;
  ${media.xxs`
  width: 6rem;
  height: 5rem;
`}

  object-fit: cover;
`

export const PlayerCellWrapper = styled.div`
  display: block;
  position: relative;
`

export const ZoomWrapper = styled.div`
  position: absolute;
  left: 7rem;
  background: ${theme.color.white};
  width: 24rem;
  height: 22rem;
  border-radius: ${theme.radius.basic};
  box-shadow: ${theme.shadow.basic};
  padding: 1rem;
`

export const PlayerPhotoZoomed = styled.img`
  width: 22rem;
  height: 20rem;
  ${media.xxs`
    width: 22rem;
    height: 20rem;
  `}
`

export const PlayerName = styled.div`
  text-align: left;
  font-size: ${theme.fontSize.large};
  font-weight: bold;
  line-height: ${theme.lineHeight.basic};
`

export const TeamName = styled.div`
  text-align: left;
  font-size: ${theme.fontSize.small};
  line-height: ${theme.lineHeight.basic};
`

export const CellValue = styled.div`
  text-align: right;
  width: max-content;
  padding: 0.2rem 0.5rem;
`

export const Goals = styled(CellValue)`
  color: green;
`

export const Assistance = styled(CellValue)`
  color: green;
`

export const Points = styled(CellValue)`
  color: green;
  font-weight: bold;
`

export const Pim = styled(CellValue)`
  color: red;
`
export const Star = styled(CellValue)`
  color: orange;
`
