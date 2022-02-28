const input = document.querySelector("input");
const button = document.querySelector(".searchBtn");
const searchRes = document.querySelector('.searchResults')
const authorList = document.querySelector(".author");
const titleList = document.querySelector(".title");
const publishYearList = document.querySelector(".publishYear");
const tbody = document.querySelector("tbody");
const pagination = document.querySelector(".pagination");

let spaces  = input.value.replaceAll(" ", "+");
let url = `http://openlibrary.org/search.json?q=${spaces}`;


button.addEventListener("click", (e)=>{
    e.preventDefault();

    bookFounder()   
})

function bookFounder(){
    fetch(`${url+input.value}`).then((res)=>{

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
                            td.setAttributeNode(attr);
                            td.innerText = val;
                            tr.appendChild(td);
 
                })
        
                tbody.appendChild(tr)
        
            })

            searchRes.innerText =`Search resaults are equal ${r.numFound}`;
            searchRes.style.color = '#fff';

            let pages = Math.ceil(r.numFound/100)
            pagination.innerHTML = '';
            paginate(pages);
       
        })

}

function paginate(pages){
    for (let i = 1; i <= pages; i++) {
            
        let pageNumber = document.createElement("button");
        pageNumber.classList = 'pageNum';
        pageNumber.innerText = i;
        pageNumber.addEventListener('click',(e)=>{
          
            if(i === 1){

                bookFounder()
                        
            }else  {
               
                fetch(`http://openlibrary.org/search.json?q=&page=${e.target.value}`).then((res)=>{

                    return res.json();

                }).then((res)=>{
                            console.log(res);
                            tbody.innerHTML = "";
                            res.docs.forEach((el)=>{
                                let listValues = [el.title, el.author_name, el.first_publish_year, el.subject];
                                let tr = document.createElement("tr");
                                listValues.forEach((val)=>{
                                    let td = document.createElement("td");
                                    let attr = document.createAttribute('class');
                                    attr.value = 'data';
                                    td.setAttributeNode(attr)
                                    td.innerText = val;
                                    tr.appendChild(td);
                                    tbody.appendChild(tr)
                                })
                            })
    
                        })
                
            }
             

        })
     
        pagination.append(pageNumber);
      }
}