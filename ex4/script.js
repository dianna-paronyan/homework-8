const secondList = document.querySelector('.second');


fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe").then((res)=>{
   return res.json();
}).then((json)=>{
  console.log(json);

  const keys = [json.title, json.description, json.director, json.producer, json.release_date];


    keys.forEach((key)=>{
        const li =  document.createElement('li');
        li.innerText = key;
        li.classList = "list2";
        secondList.appendChild(li);
    })
    
})


