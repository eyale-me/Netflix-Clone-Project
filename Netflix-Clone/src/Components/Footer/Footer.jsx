import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

function Footer () {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <TwitterIcon/>
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notices</li>
              <li>Do Not Sell Or Share My Personal Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Netflix Shop</li>
              <li>Cookie Preferences</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy-write">&copy;1997-2025 Netflix, Inc.</div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
