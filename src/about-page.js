import employeesImage from './restraunt-home-page-pic.jpeg'

const loadAboutPage = () => {
    const contentLocation = document.querySelector('#content')

    // Headline
    const aboutHeadline = document.createElement('div')
    aboutHeadline.className = 'about-headline'
    aboutHeadline.textContent = 'This is our about page'
    contentLocation.appendChild(aboutHeadline)
    // Home Image
    const mainEmployeesImage = document.createElement('img')
    mainEmployeesImage.className = 'employeesImage'
    mainEmployeesImage.src = employeesImage
    contentLocation.appendChild(mainEmployeesImage)
    // Text Description
    const aboutDescription = document.createElement('div')
    aboutDescription.className = 'about-description'
    aboutDescription.textContent = 'We are open 24/7'
    contentLocation.appendChild(aboutDescription)
}

export { loadAboutPage }