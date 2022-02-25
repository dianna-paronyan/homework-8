const select = document.querySelector('select');
const image = document.querySelector('.image');
const selectDiv = document.querySelector('.selectDiv');

function dogBreeds(){

   const breeds = ['Akita','Beagle', 'Dalmatian','Germanshepherd', 'Husky','Labrador','Lug', 'Retriever', 'Spaniel'];
   breeds.forEach((breed)=>{
        const option = document.createElement("option");
        option.innerText = breed;
        
        select.appendChild(option);
    })
    select.addEventListener('change', async ()=>{
        image.innerHTML = '';
        const res = await  fetch(`https://dog.ceo/api/breed/${select.value.toLowerCase()}/images/random`);
        const json = await res.json();
        const img = document.createElement('img');
        img.src = json.message;
        img.style.width = '300px';
        img.style.height = '300px';
        image.appendChild(img);
        console.log(json);
     })

     selectDiv.append(select);
}
   
dogBreeds()
