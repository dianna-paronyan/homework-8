const first = document.querySelector('.first');
const second = document.querySelector('.second');


fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe").then((res)=>{
   return res.json();
}).then((json)=>{
  console.log(json);
  const keys = Object.keys(json);
  const values = Object.values(json);


  keys.forEach((key)=>{
      const li =  document.createElement('li');
      const att = document.createAttribute('class');
      att.value = 'list1';
      li.setAttributeNode(att);
      li.innerText = key;
      li.style.height = '120px';
      first.appendChild(li); 

  })

  values.forEach((value)=>{
    
      const li = document.createElement('li');
      const att = document.createAttribute('class');
      att.value = 'list2';
      li.setAttributeNode(att);
      if(value !== json.image && value !== json.movie_banner){
          li.innerText=value;
      }
            
      li.style.height = '120px';
            
      if(value === json.image){
          const img = document.createElement('img');
          img.src = value;
          img.style.width = '200px';
          img.style.height = '100px';
          li.style.height = '120px';
          li.appendChild(img)
      }
      if(value === json.movie_banner){
          const img = document.createElement('img');
          img.src = value;
          img.style.width = '200px';
          img.style.height = '100px';
          li.style.height = '120px';
          li.appendChild(img);
      }
        
        second.appendChild(li);
    
    })
    
})


