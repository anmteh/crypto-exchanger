import styled from 'styled-components'
import { Palette } from '../Common/Palette'
export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  height: 2.8rem;
  background-color: white;
  border: 1px solid ${Palette.darkGray};
  border-left-color: ${Palette.lightGray};
  width: 35%;
  border-radius: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;

  .cryptocurrency-choice {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 35%;
      height: 45%;
    }

    .ticker {
      width: 2.1rem;
      padding-left: 0.3rem;
    }
  }
  .cryptocurrency-choice p {
    width: 60%;
  }

  .exchange-form {
    margin-top: 2rem;
    display: flex;
    position: relative;
  }

  .search-input {
    border-right: 1px solid ${Palette.darkGray};
  }

  .search-list {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    z-index: 2;
    input {
      width: 100%;
      border-bottom-left-radius: 0;
      border-top-right-radius: 3px;
    }
    ul {
      border: 1px solid ${Palette.lightGray};
      border-top: none;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      list-style-type: none;
      width: 100%;
      background-color: white;
      height: 6rem;
      overflow-y: scroll;
      scrollbar-width: thin;
      scrollbar-color: rgba(19, 126, 110, 0.2) transparent;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(19, 126, 110, 0.2);
        border-radius: 3px;
        border: transparent;
      }
    }
    li {
      height: 2rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
      div,
      img {
        pointer-events: none;
      }
      &:hover {
        background-color: rgba(19, 126, 110, 0.2);
      }
      img {
        margin-left: 0.5rem;
      }
      .search-list-item-ticker {
        width: 7rem;
        margin: 0 0.5rem;
      }
      .search-list-item-name {
        color: ${Palette.lightGray};
        font-size: 0.6rem;
      }
    }
    .close {
      position: absolute;
      right: 0;
      top: 0;
      width: 2rem;
      height: 2.7rem;
      opacity: 0.3;
      cursor: pointer;
    }
    .close:hover {
      opacity: 1;
    }
    .close:before,
    .close:after {
      top: 0.9rem;
      right: 1rem;
      position: absolute;
      content: ' ';

      height: 1rem;
      width: 0.1rem;
      background-color: ${Palette.darkGray};
    }
    .close:before {
      transform: rotate(45deg);
    }
    .close:after {
      transform: rotate(-45deg);
    }
  }
  .search-active {
    display: block;
  }
`
