import mainRestrauntImage from './restraunt-home-page-pic.jpeg'

const loadHomePage = () => {
    const contentLocation = document.querySelector('#content')

    // Headline
    const homeHeadline = document.createElement('div')
    homeHeadline.className = 'home-headline'
    homeHeadline.textContent = 'Hello, welcome to Blank Bar & Grill'
    contentLocation.appendChild(homeHeadline)
    // Home Image
    const homeImage = document.createElement('img')
    homeImage.className = 'mainRestrauntImage'
    homeImage.src = mainRestrauntImage
    contentLocation.appendChild(homeImage)
    // Text Description
    const homeDescription = document.createElement('div')
    homeDescription.className = 'home-description'
    homeDescription.textContent = 'We serve phillies, rice bowls, etc.'
    contentLocation.appendChild(homeDescription)

}

export { loadHomePage }