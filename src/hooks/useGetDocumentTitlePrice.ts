import { useEffect } from 'react'
import { usePriceCakeBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const cakePriceUsd = usePriceCakeBusd()

  const cakePriceUsdString = cakePriceUsd.eq(0)
    ? ''
    : ` - $${cakePriceUsd.toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`

  useEffect(() => {
    document.title = `DEVIL´s SWAP - Fire of DEVIL´s DRAGON combined with Fuel of Crypto on Binance Smart Chain for Fast & Optimized Swap + Yield Farming`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
