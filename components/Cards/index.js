// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(topic){

    const cards_container = document.querySelector('.cards-container')

    topic.forEach( article => {

        const card = document.createElement('div')
        card.classList.add('card')

            const headline = document.createElement('div')
            headline.classList.add('headline')
            headline.textContent = article.headline

            const author = document.createElement('div')
            author.classList.add('author')

                const img_container = document.createElement('div')
                img_container.classList.add('img-container')

                    const img_src = document.createElement('img')
                    img_src.src = article.authorPhoto

                    //append to img_container
                    img_container.appendChild(img_src)
                    
                //append img_container to author div
                author.appendChild(img_container)

                const author_name = document.createElement('span')
                author_name.textContent = article.authorName

                //append to author
                author.appendChild(author_name)

            //append headline and author to card
            card.appendChild(headline)
            card.appendChild(author)

        //append to DOM    
        cards_container.appendChild(card)
    })
}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        
        // console.log(response.data.articles)

        for (let key in response.data.articles){

            cardCreator(response.data.articles[key])

        }
    })
    .catch( err => {
        // deal with the error in here
        console.log(err)
    })