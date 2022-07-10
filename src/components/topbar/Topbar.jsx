import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarLeft">
        <span className='logo'>Real SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input type="text" className='searchInput' placeholder='探し物はなんですか?'/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">1</span>
        </div>
          <Notifications />
          <span className="topbarIconBadge">2</span>
        </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
  )
}
