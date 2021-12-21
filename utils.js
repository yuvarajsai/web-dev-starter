let showMessage = (message) => {
    document.getElementById('message').textContent = message;
}

let button = document.getElementById('btn');
button.addEventListener('click', function(){
    console.log('Submitted!');
})