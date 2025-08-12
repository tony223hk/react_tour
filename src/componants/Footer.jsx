import React from 'react'
import PageLinks from './PageLinks'
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <PageLinks groupName= "menu-list" itemName="menu-item" />
      </div>
      <div className="footer-icon-menu">
        <SocialLink />
      </div>
      <p>Copyright &copy; 
        <span id="date">{new Date().getFullYear()}</span> All Rights Reserved</p>
    </footer>
  )
}

export default Footer
