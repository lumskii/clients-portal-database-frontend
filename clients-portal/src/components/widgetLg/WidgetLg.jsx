import React from 'react'
import './widgetLg.css'

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">This week's Overview</span>
      <h5 className="subHeading">Clients Added</h5>
      <div className="counterContainer">
        <span className="counter">13</span>
      </div>
      <div className='divider'></div>
      <h5 className="subHeading">Contracts Signed</h5>
      <div className="counterContainer">
        <span className="counter">5</span>
      </div>
    </div>
  )
}

export default WidgetLg