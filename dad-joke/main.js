const btn = document.getElementById('btn');
const joke = document.getElementById('joke');

const apiKey = 'QCKAwV35vO3vbXoabk942A==oGpcpRXTm6EmjJUB';

const options = {
    method: 'GET',
    headers: {
        'X-api-key': apiKey,
    }
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke () {
    try {
        joke.innerText = 'Updating...';
        btn.disabled = true;
        btn.innerText = 'Loading...';
    const response = await fetch(apiURL, options);
    const result = await response.json();
    // console.log(result);
    btn.disabled = false;
    btn.innerText = 'Tell me a Joke';
    
    joke.innerText = result[0].joke ;
    } catch (error) {
        joke.innerText = 'An error occurred, try again later';
    }
  
};

btn.addEventListener('click', getJoke);

