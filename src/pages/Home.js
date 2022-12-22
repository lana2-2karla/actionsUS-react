import React, { useState, useEffect } from 'react'
import ActionCard from '../components/ActionCard'
import Header from '../components/Header'
import { api } from '../service/http'

function Home () {
  const [actions, setActions] = useState([])

  useEffect(() => {
    api.get().then((response) => {
      setActions(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
    <Header />
    {actions.length > 0 && <ActionCard actionsUS={actions}/>}
    </>
  )
}

export default Home
