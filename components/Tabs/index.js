// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        
        const topics = response.data.topics

        const topics_dom = document.querySelector('.topics')

        //Loop through axios response = array of topics
        topics.forEach( topic => {

            //Create Component
            const topic_div = document.createElement('div')
                topic_div.classList.add('tab')
                topic_div.textContent = topic

            //Append to DOM
            topics_dom.appendChild(topic_div)

        })
    })
    .catch( err => {
        // deal with the error in here
        console.log(err)
    })