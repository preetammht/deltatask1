
 addm.addEventListener("click", addmen);
 	function addmen()
 	{menteelist.insertAdjacentHTML("afterbegin",`<div class="box">
   	       	                      <h3>NAME:<input type="text" name="Name" class="inname"> Ratting
   	       	<select class="rate" id="rate">
             <option value=0> </option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
            </select>
            <button class="remove-button">[x]</button></h3>
            <p class="com">  <textarea  rows="4" cols="50" class="tb">
             write comments
             </textarea>
            </p> 
   	      </div>   
   	       `);}

 	menteelist.addEventListener("click",rem) ;
 	   function rem(event){
        if (event.target.className != 'remove-button') return;

        let box = event.target.closest('.box');
        box.remove();
       };


    menteelist.addEventListener("click",mod) ;
 	function mod(event){
      if (event.target.className != 'rate') return;

      let drop= event.target;
      let box1 = event.target.closest('.box');
       if(drop.selectedIndex > 0){
  switch(drop.options[drop.selectedIndex].value)
  {case "1": box1.style.backgroundColor ="#890505";
             break;
   case "2": box1.style.backgroundColor ="#894005";
             break;
   case "3": box1.style.backgroundColor ="#f47709";
             break;                    
   case "4": box1.style.backgroundColor ="#c5f409";
             break;
   case "5": box1.style.backgroundColor ="#2df409";
             break;
   }
         }
           };

   sortm.addEventListener("click", sortmenn);
   function sortmenn()   //i have no clue why i m sorting again and again but only this is working.HELP!
   {let x = document.querySelectorAll(".box");
     for(let k=0;k<x.length-1;k++)
     sortmen();}
 	function sortmen()
 	{
 		let parentm=document.getElementById("menteelist");
 		let x = document.querySelectorAll(".box");
 		var e= document.querySelectorAll(".rate");
        for (var i =0; i<x.length-1; i++) {
        for (var j = 0; j<x.length-i-1; j++) {
         	if(Number(e[j].options[e[j].selectedIndex].value)<Number(e[j+1].options[e[j+1].selectedIndex].value))
         	parentm.insertBefore(x[j+1], x[j]);
       
         } }
 	}

 	menteelist.addEventListener("click",min) ;
 	   function min(event){
        if (event.target.className === 'remove-button'||event.target.className === 'rate'||event.target.className === 'tb') return;
       let x = menteelist.querySelectorAll('.com');
       let a=event.target.parentNode;
        let b=a.getElementsByTagName("p");
       for(let i=0;i<x.length;i++)
       	{   if(x[i]!=b[0])
       		x[i].hidden=true;}  
        b[0].hidden=!b[0].hidden;

       };

 	
