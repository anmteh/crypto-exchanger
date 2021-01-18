import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { StyledExchange } from './StyledExchange'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { ExchangeHeader } from './ExchangeHeader/ExchangeHeader'
import { ExchangePrimaryInput } from './ExchangePrimaryInput'
import { ExchangeSecondaryInput } from './ExchangeSecondaryInput'

export const Exchange = ({ currencyList }) => {
  // State
  const [primaryInput, setPrimaryInput] = useState({
    value: '',
    currency: currencyList[0]?.ticker || '',
    icon: currencyList[0]?.image || '',
    name: currencyList[0]?.name || '',
    searchStatus: false
  })
  const [secondaryInput, setSecondaryInput] = useState({
    value: '',
    currency: currencyList[1]?.ticker || '',
    icon: currencyList[1]?.image || '',
    name: currencyList[1]?.name || '',
    searchStatus: false
  })

  const [wallet, setWallet] = useState({
    value: secondaryInput.name
  })

  const [validation, setValidation] = useState({
    minValue: Infinity,
    errorStatus: '',
    errorMessage: ''
  })

  // Handlers
  const switchHandler = () => {
    const newSecondaryCurrency = primaryInput
    const newPrimaryCurrency = secondaryInput

    setPrimaryInput({
      ...newPrimaryCurrency
    })
    setSecondaryInput({
      ...newSecondaryCurrency
    })
  }

  const getExchangeAmount = useCallback(
    value => {
      if (value < validation.minValue && validation.minValue !== Infinity) {
        setValidation(v => ({
          ...v,
          errorStatus: 'minValue',
          errorMessage: `Minimum value is ${validation.minValue}`
        }))
      } else {
        setTimeout(async () => {
          const apiLinkEstimated = `https://api.changenow.io/v1/exchange-amount/${value}/${primaryInput.currency}_${secondaryInput.currency}?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`
          const getEstimatedAmount = await axios.get(apiLinkEstimated)
          const estimatedAmount = getEstimatedAmount.data.estimatedAmount
          if (estimatedAmount !== null) {
            setSecondaryInput(i => ({
              ...i,
              value: estimatedAmount
            }))
            setValidation(v => ({
              ...v,
              errorStatus: '',
              errorMessage: ''
            }))
          }
          if (estimatedAmount === null) {
            setValidation(v => ({
              ...v,
              errorStatus: 'disabledPair',
              errorMessage: 'This pair is currently disabled'
            }))
          }
        }, 0)
      }
    },
    [primaryInput.currency, secondaryInput.currency, validation.minValue]
  )

  //useEffects
  useEffect(() => {
    setTimeout(async () => {
      if (!currencyList?.length) return
      const apiLinkAmount = `https://api.changenow.io/v1/min-amount/${primaryInput.currency}_${secondaryInput.currency}?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`
      const getMinAmount = await axios.get(apiLinkAmount)
      const minAmount = getMinAmount.data.minAmount
      if (minAmount === null) {
        setValidation(v => ({
          ...v,
          errorStatus: 'disabledPair',
          errorMessage: 'This pair is currently disabled'
        }))
      } else {
        setPrimaryInput(p => ({ ...p, value: minAmount }))
        setValidation({
          minValue: minAmount,
          errorStatus: '',
          errorMessage: ''
        })
        getExchangeAmount(minAmount)
      }
    }, 0)
  }, [
    primaryInput.currency,
    secondaryInput.currency,
    getExchangeAmount,
    currencyList?.length
  ])

  return (
    <StyledExchange>
      <ExchangeHeader />
      <div
        className={`exchange-error ${
          validation.errorStatus ? 'error-active' : ''
        }`}
      >
        {`${validation.errorMessage}`}
      </div>
      <div className='exchange-form'>
        <ExchangePrimaryInput
          currencyList={currencyList || []}
          primaryInput={primaryInput}
          setPrimaryInput={value => {
            setPrimaryInput(value)
            getExchangeAmount(value.value)
          }}
          secondaryInput={secondaryInput}
          setSecondaryInput={setSecondaryInput}
          validation={validation}
        />
        <div className='arrows' onClick={switchHandler}>
          <FontAwesomeIcon icon={faExchangeAlt} color='#137e6e' />
        </div>
        <ExchangeSecondaryInput
          currencyList={currencyList || []}
          secondaryInput={secondaryInput}
          setSecondaryInput={value => {
            setSecondaryInput(value)
            setWallet(w => ({
              ...w,
              value: value.name
            }))
          }}
          primaryInput={primaryInput}
          setPrimaryInput={value => {
            console.log('setprimary2')
            setPrimaryInput(value)
          }}
          validation={validation}
        />
      </div>
      <div className='wallet-form'>
        <div className='wallet-address'>
          <label>Your {wallet.value} address</label>
          <input type='text' />
        </div>
        <button type='submit'>EXCHANGE</button>
      </div>
    </StyledExchange>
  )
}
