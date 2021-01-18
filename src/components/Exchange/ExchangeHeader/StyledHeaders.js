import styled from 'styled-components'
import { Palette } from '../../Common/Palette'

export const StyledHeaders = styled.div`
  h2 {
    font-size: 1.5rem;
    color: ${Palette.brandColor};
    margin-bottom: 0.5rem;
  }
  h3 {
    color: ${Palette.darkGray};
    font-size: 1.1rem;
    font-weight: 400;
    margin-left: 0.1rem;
  }
`
