import React, { useState } from 'react'
import './ActionCard.css'
import PropTypes from 'prop-types'

const ActionCard = ({ actionsUS }) => {
  const [actions, setActions] = useState(actionsUS)

  const handleClick = async () => {
    const actionsAlphabeticalOrder = [...actionsUS].sort((a, b) => a.symbol.localeCompare(b.symbol))
    setActions(actionsAlphabeticalOrder)
  }
  console.log(actions)

  return (
    <>
        <div className='action-container'>
          <h1>Explore o mercado</h1>
          <button
          type='submit'
          onClick={handleClick}
          >A-Z</button>
       </div>
      <div className='action-container'>
           {
           actions.map((action, index) => (
            <div key={index} className='action-card'>
              <p className='white'>{action.symbol}</p>
              <p className='white'>Abertura ${action.ask}</p>
              <p className='white'>Baixa ${action.bid}</p>
            </div>
           ))
           }
        </div>
    </>

  )
}
ActionCard.propTypes = {
  actionsUS: PropTypes.arrayOf(PropTypes.object)
}

export default ActionCard
