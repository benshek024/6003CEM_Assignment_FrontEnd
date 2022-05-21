import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
      </div>
      
      <a href="https://www.freepik.com/vectors/watercolor-dog">Watercolor dog vector created by rawpixel.com - www.freepik.com</a>
      <a href="https://www.jamiesale-cartoonist.com/free-cartoon-dog-vector-clip-art/">Dog vector created by Jamie Sale</a>
    </div>
  );
}

export default Footer;