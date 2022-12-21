import React from 'react'
import './ActionCard.css'
import PropTypes from 'prop-types'

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
ActionCard.propTypes = {
  actionsUS: PropTypes.arrayOf(PropTypes.object)
}

export default ActionCard
