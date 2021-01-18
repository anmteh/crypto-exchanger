import styled from 'styled-components'

export const StyledInputContainer = styled.div`
  display: flex;
  position: relative;
  input {
    border-right: none;
    width: 65%;
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
  }

  input:active,
  input:focus {
    outline: none;
  }
`
