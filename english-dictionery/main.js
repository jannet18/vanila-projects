const inputEl = document.querySelector('input');
const infoText = document.getElementById('info-text');
const meaningEl = document.getElementById('meaning-container');
const title = document.getElementById('title');
const meaning = document.getElementById('meaning');
const audioEl = document.getElementById('audio');


async function fetchAPI(word) {
    try {
        infoText.style.display = 'block';
        infoText.innerText = `Searching for the meaning of '${word}`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const response = await fetch(url).then((res) => res.json());
        console.log(response);

        if (response.title){
            infoText.style.display = 'none';
            meaningEl.style.display = 'block';
    
            title.innerText = word;
            meaning.innerText = 'N/A';
            audioEl.style.display = 'none';
        } else {
            infoText.style.display = 'none';
            meaningEl.style.display = 'block';
    
            title.innerText = response[0].word;
            meaning.innerText = response[0].meanings[0].definitions[0].definition;
    
            audioEl.src = response[0].phonetics[0].audio;
        }
      

    } catch (error) {
        console.log(error);
        infoText.innerText = `An error occurred, try again later`;
    }

}
inputEl.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === 'Enter'){
        fetchAPI(e.target.value)
    }
});