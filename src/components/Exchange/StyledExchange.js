import styled from 'styled-components'
import { Palette } from '../Common/Palette'
export const StyledExchange = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    height: 30%;
    width: 60%;
  }
  input {
    height: 2.8rem;
    border-radius: 3px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid ${Palette.darkGray};
    padding-left: 0.5rem;
    font-size: 1rem;
  }
  .amount-input {
    border-right: none;
    width: 65%;
  }

  input:active,
  input:focus {
    outline: none;
  }

  .exchange-error {
    position: absolute;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1rem;
    background-color: rgba(230, 20, 20, 0.8);
    color: #fff;
    top: 0;
    padding: 10px;
    border-radius: 8px;
    z-index: 3;
    transition: all 0.4s ease-out;
    transform: translateY(4rem);
    opacity: 0;
    @media (max-width: 1024px) {
      top: 0;
      transform: translateY(3.8rem);
    }
  }

  .error-active {
    opacity: 1;
  }

  .exchange-form {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .arrows {
    margin: 0 0.7rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (max-width: 1024px) {
      margin: 1rem;
      justify-content: center;
    }
  }

  .wallet-form {
    margin-top: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .wallet-address {
    display: flex;
    flex-direction: column;
    width: 65%;
    @media (max-width: 1024px) {
      margin-bottom: 1rem;
      width: 100%;
    }
  }

  .wallet-address label {
    font-size: 0.9rem;
  }

  .wallet-address input {
    margin-top: 0.3rem;
    border-radius: 3px;
  }

  .wallet-form button {
    width: 30%;
    height: 2.8rem;
    border-radius: 3px;
    border: none;
    background-color: ${Palette.brandColor};
    color: white;
    font-size: 1rem;
    @media (max-width: 1024px) {
      min-width: 40%;
    }
  }

  .input-container {
    display: flex;
  }

  transform: scale(1.5);
  height: 14rem;
  width: 35rem;
`
