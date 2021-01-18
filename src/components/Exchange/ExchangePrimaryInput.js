import React from 'react'
import { StyledInputContainer } from './StyledInputContainer'
import { ExchangeSearch } from './ExchangeSearch'

export const ExchangePrimaryInput = ({
  currencyList,
  primaryInput,
  setPrimaryInput,
  secondaryInput,
  setSecondaryInput,
  validation
}) => {
  // Handlers
  const handleInputChange = e => {
    // Check for float and decimals
    const re = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/
    if (e.target.value === '' || re.test(Number(e.target.value))) {
      setPrimaryInput({
        ...primaryInput,
        value: e.target.value
      })
    }
  }

  // Filter out currency of supplementary input
  const newCurrencyList = currencyList.filter(
    c => c.ticker !== secondaryInput.currency
  )
  return (
    <StyledInputContainer>
      <input
        disabled={validation.errorStatus === 'disabledPair' ? true : false}
        className='amount-input'
        lang='en'
        type='text'
        value={primaryInput.value}
        onChange={handleInputChange}
      />
      <ExchangeSearch
        currentInput={primaryInput}
        setCurrentInput={setPrimaryInput}
        supplementaryInput={secondaryInput}
        setSupplementaryInput={setSecondaryInput}
        currencyList={newCurrencyList}
      />
    </StyledInputContainer>
  )
}
