import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'; // Importación de íconos minimalistas
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialButtons = () => {
  
  return (
    <div className="flex justify-between items-center p-4 rounded-lg bg-gray-100 shadow-lg">
      <a className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center transition-all duration-300 transform hover:translate-y-[-5px] hover:bg-blue-700" 
         href="https://www.facebook.com/samuelhernandez2021" aria-label="Facebook" target='_blank'>
        <FaFacebookF className="text-white" />
      </a>
      <a className="w-10 h-10 bg-pink-500 rounded-full flex justify-center items-center transition-all duration-300 transform hover:translate-y-[-5px] hover:bg-pink-600" 
         href="https://www.instagram.com/hrnndzsamuel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram"  target='_blank'>
        <FaInstagram className="text-white" />
      </a>
      <a className="w-10 h-10 bg-black rounded-full flex justify-center items-center transition-all duration-300 transform hover:translate-y-[-5px] hover:bg-gray-800" 
         href="https://www.tiktok.com/" aria-label="TikTok"  target='_blank'>
        <FaTiktok className="text-white" />
      </a>
      <a className="w-10 h-10 bg-black rounded-full flex justify-center items-center transition-all duration-300 transform hover:translate-y-[-5px] hover:bg-blue-500" 
         href="https://www.twitter.com/" aria-label="Twitter"  target='_blank'>
        <FaSquareXTwitter className="text-white" />
      </a>
    </div>
  );
};

export default SocialButtons;