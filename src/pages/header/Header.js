/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "../../assets/image/icon.ico";
import NavMenu from "../../components/NavMenu";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Animation = () => {
  /*Show Menu*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*Menu Show*/
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-menu')
})
}

/*Menu Hidden*/
/* Validate if constant exists */
if(navClose){
navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
})
}
/*==================*/

/*Remove menu mobile*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
const navMenu = document.getElementById('nav-menu')
// When we click on each nav__link, we remove the show-menu class
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Change Background header*/
function scrollHeader(){
const header = document.getElementById('header')
// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Scroll sections active link 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
const scrollY = window.pageYOffset

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
  }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}
window.addEventListener('scroll', scrollActive)
}

const Header = () => {
  return (
    <header onClick={Animation} className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={Image} alt="" className="nav__logo-img"></img>
          Tea and Bread
        </a>
        <NavMenu></NavMenu>
        <div className="nav__toggle" id="nav-toggle">
          <i>
            <BiMenuAltRight></BiMenuAltRight>
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
