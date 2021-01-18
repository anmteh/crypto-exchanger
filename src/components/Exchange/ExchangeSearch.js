import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { StyledSearch } from './StyledSearch'
// import { useOutsideClose } from '../hooks/useOutsideClose'

export const ExchangeSearch = ({
  currencyList,
  currentInput,
  setCurrentInput,
  supplementaryInput,
  setSupplementaryInput
}) => {
  // State
  const [searchValue, setSearchValue] = useState('')
  const [searchList, setSearchList] = useState(currencyList)

  // Handlers
  const handleSearchClick = () => {
    setCurrentInput({
      ...currentInput,
      searchStatus: true
    })
    if (supplementaryInput.searchStatus) {
      setSupplementaryInput({
        ...supplementaryInput,
        searchStatus: false
      })
    }
  }

  const searchHandler = e => {
    setSearchValue(e.target.value)
  }

  const handleChoice = e => {
    const currency = e.target.getAttribute('ticker')
    const icon = e.target.getAttribute('icon')
    const name = e.target.getAttribute('currencyname')
    setCurrentInput({
      ...currentInput,
      currency,
      icon,
      name,
      searchStatus: false
    })
  }

  const closeHandler = () => {
    setCurrentInput({
      ...currentInput,
      searchStatus: false
    })
  }

  // useEffects
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchValue !== '') {
        setSearchList(
          currencyList.filter(
            item =>
              item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              item.ticker.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      }
      if (searchValue === '') {
        setSearchList(currencyList)
      }
    }, 100)
    return () => {
      clearTimeout(timeout)
    }
  }, [searchValue, currencyList])

  // Temporary measure for displaying long tickers
  const searchTicker = currentInput.currency.substring(0, 3).toUpperCase()

  return (
    <StyledSearch>
      <div onClick={handleSearchClick} className='cryptocurrency-choice'>
        <img
          className='cryptocurrency-img'
          alt={currentInput.currency}
          src={currentInput.icon}
        />
        <div className='ticker'>{searchTicker}</div>
      </div>
      <div
        className={`search-list ${
          currentInput.searchStatus ? 'search-active' : ''
        }`}
      >
        <div className='close' onClick={closeHandler}></div>
        <input
          className='search-input'
          placeholder='Search'
          type='text'
          value={searchValue}
          onChange={searchHandler}
        />
        <ul>
          {searchList.map(cur => {
            return (
              <li
                ticker={cur.ticker}
                icon={cur.image}
                currencyname={cur.name}
                key={uuidv4()}
                onClick={handleChoice}
              >
                <img src={cur.image} alt={cur.ticker} />
                <div className='search-list-item-ticker'>
                  {cur.ticker.toUpperCase()}
                </div>
                <div className='search-list-item-name'>{cur.name}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </StyledSearch>
  )
}
