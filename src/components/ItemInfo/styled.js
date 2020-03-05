import styled from 'styled-components'
import media from '../../styles/media'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  margin-top: 1rem;
  width: 20rem;
  ${media.xs`
  width: 26rem;
`}
  position: absolute;
  height: auto;
`

export const Preview = styled.img`
  display: block;
  width: 15rem;
  height: 15rem;
  margin: 0 auto;
`

export const Title = styled.div`
  font-size: ${theme.fontSize.medium};
  font-weight: bold;
  text-align: center;
  color: ${theme.color.bigStone};
`

export const Description = styled.div`
  font-size: ${theme.fontSize.normal};
  text-align: center;
  color: ${theme.color.bigStone};
`

export const Key = styled.div`
  text-align: center;
  width: 100%;
  border-bottom: 1px solid grey;
  margin-top: 3rem;
  ${media.xs`
  margin-top: 5rem;
`}
`

export const Value = styled.div`
  text-align: center;
  font-size: 6rem;
  line-height: 6rem;
  ${media.xs`
  font-size: 10rem;
  line-height: 10rem;
`}
`
