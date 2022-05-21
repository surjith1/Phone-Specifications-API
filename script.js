const url="https://api-mobilespecs.azharimm.site/v2/brands/alcatel-phones-5";
console.log(url);
//let list ="";

fetch(url)
.then((res)=>res.json())
// .then((data)=> generatePhone(data))
.then((phone)=> generatePhone(phone))
.catch((error)=>console.log(error))
function generatePhone (data) {
    //console.log(data)
    let ph=data.data.phones;
    console.log("phones",ph)
    let list=`
     <div class="content-wrap"}>
     <h3>${ph[0].brand}</h3>
     <img src=${ph[0].image} alt=${ph[0].brand} />
     <p>${ph[0].detail}</p>
     </div>
     <div class="content-wrap"}>
     <h3>${ph[1].brand}</h3>
     <img src=${ph[1].image} alt=${ph[1].brand} />
     <p>${ph[1].detail}</p>
     </div>
     
     <div class="content-wrap"}>
     <h3>${ph[2].brand}</h3>
     <img src=${ph[2].image} alt=${ph[2].brand} />
     <p>${ph[2].detail}</p>
     </div>

     <div class="content-wrap"}>
     <h3>${ph[3].brand}</h3>
     <img src=${ph[3].image} alt=${ph[3].brand} />
     <p>${ph[3].detail}</p>
     </div>

     <div class="content-wrap"}>
     <h3>${ph[4].brand}</h3>
     <img src=${ph[4].image} alt=${ph[4].brand} />
     <p>${ph[4].detail}</p>
     </div>

     <div class="content-wrap"}>
     <h3>${ph[5].brand}</h3>
     <img src=${ph[5].image} alt=${ph[6].brand} />
     <p>${ph[5].detail}</p>
     </div>

    `;
    const wrap=document.querySelector(".inner-wrap");
    wrap.innerHTML=list;
}


   
