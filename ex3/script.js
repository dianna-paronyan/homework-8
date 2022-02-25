const input = document.querySelector("input");
const button = document.querySelector(".searchBtn");
const searchRes = document.querySelector('.searchResults')
const authorList = document.querySelector(".author");
const titleList = document.querySelector(".title");
const publishYearList = document.querySelector(".publishYear");
const tbody = document.querySelector("tbody");
const pagination = document.querySelector(".pagination");

let url = 'http://openlibrary.org/search.json?q=';

button.addEventListener("click", (e)=>{
    e.preventDefault();
    if(input.value.includes(" ")){
        let repValue = input.value.replace(" ", "+");
        let newUrl = url + repValue;
        newUrl.toString()

        url = newUrl;
    
    }
    
    fetch(` ${url+input.value}`).then((res)=>{
        return res.json();
        }).then((r)=>{
            
        console.log(r);
        tbody.innerHTML = "";
        r.docs.forEach((el)=>{
            let listValues = [el.title, el.author_name, el.first_publish_year, el.subject];
            let tr = document.createElement("tr");
            listValues.forEach((val)=>{
                let td = document.createElement("td");
                let attr = document.createAttribute('class');
                attr.value = 'data';
                td.setAttributeNode(attr)
                td.innerText = val;
                tr.appendChild(td);
            })
    
        
            tbody.appendChild(tr)
    
        })
        let pages = Math.ceil(r.numFound/100)
        pagination.innerHTML = '';
        for (let i = 1; i <= pages; i++) {
            let pageNumber = document.createElement("button");
            pageNumber.classList = 'pageNum';
            pageNumber.innerText = i;
            pagination.append(pageNumber);
          }
        searchRes.innerText =`Search resaults are equal ${r.numFound}`;
        searchRes.style.color = '#fff';
    
        })
})

