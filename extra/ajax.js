//console.log("hello there")

var pokeName = "";

function setPokeName(event){
    pokeName = event.value
    //console.log(pokeName)
}



// Promise
// JS API called fetch
// asynchronous code
function handleSubmit(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => response.json())
        .then(data => {
            var html = `
                <img src="${data.sprites.front_default}" alt="">
                <p>Name: ${data.name}</p>
                <p>Types: ${data.types[0].type.name}</p>
            `;
            document.getElementById("display").innerHTML = html;
        });
}

//console.log("this console log is after the fetch")


//function thisIsAFunction(){}

//const anonFunction1 = function(thing){
//    console.log(thing)
//}

//const anonFunction = (thing) => {
//    console.log(thing)
//}