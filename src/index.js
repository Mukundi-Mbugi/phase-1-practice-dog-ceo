console.log('%c HI', 'color: firebrick')

const imageUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imageUrl)
.then( res => res.json())
.then(changeDogImg)

function changeDogImg(dogs){
    dogs.message.forEach( dog => {
        let dogId = document.querySelector("#dog-image-container")
        let image = document.createElement('img')
        image.src = dog;
        image.className = "image-fluid";

        dogId.appendChild(image)
        
    });
}

// fetch breeds

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then( res => res.json())
.then(changeDogBreed)

function changeDogBreed(breed){
    for(let breed in breed.message){
        let list = document.getElementById('dog-breeds')
        let li = document.createElement('li')
        li.innerHTML =  breed
        list.appendChild(li)
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    let selectElements = document.querySelector('#breed-dropdown');
    if(selectElements){
        selectElements.addEventListener('change', listSelected)
    
    }
    
    function listSelected(){
      let selectedElement = selectElements.value;
      fetch(breedUrl)
        .then( res => res.json())
        .then(changeDogBreedCode)
    
        function changeDogBreedCode(bread){
            
            document.getElementById("dog-breeds").innerHTML = '';
            for(let breed in bread.message){
                if(breed.charAt(0) === selectedElement.charAt(0)){
                    let unOrderedList = document.getElementById('dog-breeds')
                    let listElement = document.createElement('li')
                    listElement.innerHTML =  breed
                    
                    unOrderedList.appendChild(listElement)
                    listElement.addEventListener('click',(e)=>e.target.style.color='brown')
                }
                
            }
        }
    }
})
