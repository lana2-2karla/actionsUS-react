/* eslint-disable react/prop-types */
import React from 'react'

const ActionCard = ({ actionsUS }) => {
  return (
    actionsUS.map((action, index) => (
        <div key={index}>
            <div>
                <p>{action.symbol}</p>
            </div>
            <p>Abertura ${action.ask}</p>
            <p>Baixa ${action.bid}</p>
        </div>

    ))
  )
}

export default ActionCard
