import React from 'react'
import PageLink from './PageLink'
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <PageLink groupName= "menu-list" itemName="menu-item" />
      </div>
      <div className="footer-icon-menu">
        <SocialLink />
      </div>
      <p>Copyright &copy; <span id="date"></span> All Rights Reserved</p>
    </footer>
  )
}

export default Footer