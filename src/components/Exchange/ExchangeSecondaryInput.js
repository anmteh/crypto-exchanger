import React from 'react'
import { StyledInputContainer } from './StyledInputContainer'
import { ExchangeSearch } from './ExchangeSearch'

export const ExchangeSecondaryInput = ({
  currencyList,
  secondaryInput,
  setSecondaryInput,
  primaryInput,
  setPrimaryInput,
  validation
}) => {
  // Filter out currency of supplementary input
  const newCurrencyList = currencyList.filter(
    c => c.ticker !== primaryInput.currency
  )
  return (
    <StyledInputContainer>
      <input
        disabled={
          validation.errorStatus === 'minValue' ||
          validation.errorStatus === 'disabledPair'
            ? true
            : false
        }
        className='amount-input'
        type='text'
        value={
          validation.errorStatus === 'minValue' ? '—' : secondaryInput.value
        }
        readOnly
      />
      <ExchangeSearch
        currentInput={secondaryInput}
        setCurrentInput={setSecondaryInput}
        supplementaryInput={primaryInput}
        setSupplementaryInput={setPrimaryInput}
        currencyList={newCurrencyList}
      />
    </StyledInputContainer>
  )
}
