import "./styles.css";
import { loadHomePage }  from './home-page.js';
import { loadMenuPage } from "./menu-page";
import { loadAboutPage } from "./about-page";

document.addEventListener('DOMContentLoaded', () => {
    // Intial Rendering
    loadHomePage();
    // Create tab references
    const homeBtn = document.querySelector('.home-btn')
    const menuBtn = document.querySelector('.menu-btn')
    const aboutBtn = document.querySelector('.about-btn')
    // Clears page content
    function clearContent() {
        const contentLocation = document.querySelector('#content')
        while (contentLocation.firstChild) {
            contentLocation.removeChild(contentLocation.firstChild)
        }
    }
    // Loads correct page
    function loadPage(page) {
        clearContent();
    
        switch (page) {
            case 'home':
                import('./home-page.css').then(() => loadHomePage());
                break;
            case 'menu':
                import('./menu-page.css').then(() => loadMenuPage());
                break;
            case 'about':
                import('./about-page.css').then(() => loadAboutPage());
                break;
            default:
                console.error('Page not found');
        }
    }
    // Tab click listeners
    homeBtn.addEventListener('click', () => loadPage('home'))
    menuBtn.addEventListener('click', () => loadPage('menu'))
    aboutBtn.addEventListener('click', () => loadPage('about'))
    

})