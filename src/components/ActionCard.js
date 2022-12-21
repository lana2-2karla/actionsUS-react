/* eslint-disable react/prop-types */
import React from 'react'
import './ActionCard.css'

const ActionCard = ({ actionsUS }) => {
  return (
      <div className='action-container'>
           { actionsUS.map((action, index) => (
            <div key={index} className='action-card'>
              <p className='white'>{action.symbol}</p>
              <p className='white'>Abertura ${action.ask}</p>
              <p className='white'>Baixa ${action.bid}</p>
            </div>
           ))
           }
        </div>

  )
}

export default ActionCard
