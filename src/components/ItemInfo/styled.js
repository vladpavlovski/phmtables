import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  position: absolute;
  width: 26rem;
  height: auto;
`

export const Preview = styled.img`
  width: 23rem;
  height: 23rem;
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
  margin-top: 5rem;
`

export const Value = styled.div`
  font-size: 10rem;
  text-align: center;
  line-height: 10rem;
`
