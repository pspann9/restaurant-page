import menuImage from './restraunt-home-page-pic.jpeg'

const loadMenuPage = () => {
    const contentLocation = document.querySelector('#content')

    // Headline
    const menuHeadline = document.createElement('div')
    menuHeadline.className = 'menu-headline'
    menuHeadline.textContent = 'This is our menu'
    contentLocation.appendChild(menuHeadline)
    // Home Image
    const mainMenuImage = document.createElement('img')
    mainMenuImage.className = 'menuImage'
    mainMenuImage.src = menuImage
    contentLocation.appendChild(mainMenuImage)
    // Text Description
    const menuDescription = document.createElement('div')
    menuDescription.className = 'menu-description'
    menuDescription.textContent = 'Each item comes with fries and drink'
    contentLocation.appendChild(menuDescription)

}

export { loadMenuPage }