window.onload = function(){
    const smallCups = document.querySelectorAll('.cup-small')
    const liters = document.getElementById('liters')
    const percentage = document.getElementById('percentage')
    const remained = document.getElementById('remained')
    // onload is the event property of the window object, and I have given it four separate events: smallCups, liters, percentage and remained.
    // The onload event is triggered when Windows finishes loading, executing the four events I set
  updateBigCup()

    smallCups.forEach((cup,idx)=>{
        cup.addEventListener('click',()=>highlightCups(idx))
    })
    // Add a click event to each small cup
    // Linking the buttons to the change in colour marking of the large cup

    function highlightCups(idx){
        if(idx  == 7 && smallCups[idx].classList.contains("full")){
            idx--
        }else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
            idx--
        }
            
        
         smallCups.forEach((cup,index)=>{
             if(index <= idx){
                cup.classList.add('full')
             }else{
                 cup.classList.remove('full')
             }
         })   
        //  The event function triggered by clicking in the small cup handles whether or not there is water in the cup
         
         updateBigCup()
    }
    // Ways to renew the large cup
    function updateBigCup(){
        const fullCups = document.querySelectorAll('.cup-small.full').length
        const totalCups = smallCups.length
        // Hide the percentage section when there is no water
        if(fullCups == 0){
            percentage.style.visibility = 'hidden'
            percentage.style.height = 0
        // Percentage display based on water volume when available
        }else{
            percentage.style.visibility = 'visible'
            percentage.style.height = `${fullCups/totalCups*300}px`
            percentage.innerText = `${fullCups/totalCups*100}%`
        }
        // Hide the remainder when the water is full
        if(fullCups == totalCups){
            remained.style.visibility = 'hidden'
            remained.style.height = 0
        // Displays the remaining portion of water according to the amount of water available when it is full
        }else{
            remained.style.visibility = 'visible'
            liters.innerText = `${2-(250*fullCups/1000)}L`
        }
    }
}

