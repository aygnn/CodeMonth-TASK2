let country=[]
axios.get("https://countryapi.io/api/all?apikey=kvou8gS0q189sNpNXhYxfgpm1nACBaDKP8igrvfF")
.then(response => {
    const dataObject = response.data;
    const keys = Object.keys(dataObject);
    const dataArray = keys.map(key => dataObject[key]); 
 
       dataArray.forEach(element => {
            let card=document.createElement("div")
            card.classList.add('card')
    
            let card_image = document.createElement("img");
            card_image.classList.add('card-img-top');
            card_image.src = element.flag.large     ; // 


            let card_body=document.createElement("div")
            card_body.classList.add("card-body")
     

    
               let card_title = document.createElement("h5");
      card_title.classList.add("card-title");
                 card_title.innerHTML=element.name


    
            let card_text=document.createElement("p")
            card_text.classList.add("card-text")
        

            for (const currencyCode in element.currencies) {
                if (element.currencies.hasOwnProperty(currencyCode)) {
                  const currency = element.currencies[currencyCode];
                  card_text.innerHTML += `${currencyCode}: ${currency.symbol},`;
                }
              }
        
              let buttons_div=document.createElement("div")
            buttons_div.classList.add("buttons")

            let btn=document.createElement("a")
            btn.classList.add("btn")
            btn.setAttribute("delattr",element.name)

            btn.classList.add("btn-primary")
            btn.innerHTML="Delete"
            
            
            let details=document.createElement("a")
            details.classList.add("btn") 
            details.setAttribute("detailattr",element.name)
            details.setAttribute("href","detail/detail.html")


            details.classList.add("btn-warning")
            details.innerHTML="Details"
    
            card.appendChild(card_image)
            card.appendChild(card_body)
            card_body.appendChild(card_title)
            card_body.appendChild(card_text)
            buttons_div.append(btn,details)
            card_body.appendChild(buttons_div)
        

    
          let cards=document.querySelector(".cards")
          cards.append(card)
          
            let deletebtns=document.querySelectorAll(".btn-primary")
            deletebtns.forEach(elem => {
              elem.addEventListener("click",function(e){
                  let deleteattribute=e.target.getAttribute("delattr")
      
                 
                  
                  try {
                      
                      if (deleteattribute==element.name) {
                        axios.delete(`https://countryapi.io/api/all?apikey=kvou8gS0q189sNpNXhYxfgpm1nACBaDKP8igrvfF/${element.name}`)
                        .then(response=>console.log(response))
                            e.target.parentElement.parentElement.parentElement.remove()
                            // alert("Deleted Successfully!")
                      }
                  } 
                  catch (error) {
                    console.log(error);
                    
                  }
              })
                
                  
              
              
            });



            let viewbtns=document.querySelectorAll(".btn-warning")
            viewbtns.forEach(button=>{
                button.addEventListener("click",function(e){
                    let viewattr = e.target.getAttribute("detailattr")
                    
                        if( viewattr==element.name){
                            console.log(element);
                           localStorage.setItem("viewApi", JSON.stringify(element))
                     }
                    
    
            
                })
            })
        });
      
    
  })
  .catch(error => {
    console.error('Hata:', error);
  });


