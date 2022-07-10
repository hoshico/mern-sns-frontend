import React from 'react'

export default function Topbar() {
  return (
    <div className='topbarcontainer'>
      <div className="topbarLeft">
        <span className='logo'>Real SNS</span>
      </div>
      <div className="searchbar">
        <input type="text" className='searchInput' placeholder='探し物はなんですか?'/>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">
          1
        </div>
        <div className="topbarIconItem">
          2
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
  )
}
