import styled from 'styled-components'
import { Palette } from './Palette'

export const Background = styled.div`
  background-color: ${Palette.background};
  width: 100vw;
  height: 100vh;
  z-index: -1;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  position: absolute;
`
export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
