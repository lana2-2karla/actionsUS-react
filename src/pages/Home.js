import React, { useEffect } from 'react'
import axios from 'axios'
import ActionCard from '../components/ActionCard'

function Home () {
  // const [coins, setCoins] = useState([])

  const url = 'https://api.finage.co.uk/last/stocks/?symbols=AAPL,TSLA,GOGL,AMZN,NVDA,META,NU&apikey=API_KEY62QY4RI0VTOJ7IL0SE1K1VGHO7NNBULI'

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <ActionCard />
  )
}

export default Home
