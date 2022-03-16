const copyButton = document.querySelector('.copyBtn');
const shortenLink = document.querySelector('.shortLink');

copyButton.addEventListener('click',() =>{
    const inputVal = shortenLink.value.trim();
    if(inputVal){
        navigator.clipboard.writeText(inputVal).then(() =>{
            shortenLink.value = '';
            if(copyButton.innerText !== 'COPIED!'){
                const originalText = copyButton.innerText;
                copyButton.innerText = 'COPIED!';
                setTimeout(() =>{
                    copyButton.innerText = originalText;
                },1500);
            }
        })
        .catch(error =>{
            console.log('Something went wrong',error);
        })
    }
});