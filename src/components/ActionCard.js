/* eslint-disable react/prop-types */
import React from 'react'
import './ActionCard.css'

const ActionCard = ({ actionsUS }) => {
  return (
      <div className='action-container'>
           { actionsUS.map((action, index) => (
            <div key={index} className='action-card'>
                <p>{action.symbol}</p>
            <p>Abertura ${action.ask}</p>
            <p>Baixa ${action.bid}</p>
            </div>
           ))
           }
        </div>

  )
}

export default ActionCard
