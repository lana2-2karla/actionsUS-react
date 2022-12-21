import axios from 'axios'

const url = 'https://api.finage.co.uk/last/stocks/?symbols=AAPL,TSLA,GOGL,AMZN,NVDA,META,NU,INTC&apikey=API_KEY62QY4RI0VTOJ7IL0SE1K1VGHO7NNBULI'

export const api = axios.create({
  baseURL: url
})
