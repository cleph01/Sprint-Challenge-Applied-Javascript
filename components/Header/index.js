// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    //Create Parent Div
    const header = document.createElement('div')
    header.classList.add('header')

    //Creat Child Divs
        const date_span = document.createElement('span')
        date_span.classList.add('date')
        date_span.textContent = 'SMARCH 28, 2019'
        

        const h1 = document.createElement('h1')
        h1.textContent = 'Lambda Times'

        const temp = document.createElement('span')
        temp.classList.add('temp')
        temp.textContent ='98˚'


    //Append child divs to header
    header.appendChild(date_span)
    header.appendChild(h1)
    header.appendChild(temp)

    //Append component to DOM
    const header_container = document.querySelector('.header-container')
    header_container.appendChild(header)

}

//run function
Header();