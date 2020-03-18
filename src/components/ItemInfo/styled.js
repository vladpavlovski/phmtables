import styled from 'styled-components'
import media from '../../styles/media'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  margin-top: 1rem;
  width: 18rem;
  ${media.xs`
  width: 26rem;
`}
  position: absolute;
  height: auto;
`

export const Preview = styled.img`
  display: block;
  width: 14rem;
  height: 14rem;
  margin: 0 auto;
`

export const Title = styled.div`
  font-size: ${theme.fontSize.normal};
  font-weight: bold;
  text-align: center;
  color: ${theme.color.bigStone};
`

export const Description = styled.div`
  font-size: ${theme.fontSize.small};
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
  font-size: 5rem;
  line-height: 5rem;
  ${media.xs`
  font-size: 8rem;
  line-height: 8rem;
`}
`
