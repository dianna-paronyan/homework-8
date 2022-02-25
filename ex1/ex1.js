const div = document.querySelector(".el");

fetch("https://ghibliapi.herokuapp.com/films").then((res)=>{
   return res.json();
}).then((r)=>{
  let data = r;

  data.forEach((el)=>{
    //   console.log(el);
    let arr = [el.title, el.release_date, el.director, el.description];
    const list = document.createElement("ul");
    list.style.margin = '40px';
   
    arr.forEach((e)=>{
        const item =  document.createElement("li");
        item.innerText = e;
        list.appendChild(item);
    })
    div.appendChild(list);
  })
  
})