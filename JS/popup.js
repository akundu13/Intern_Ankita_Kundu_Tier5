//To connect with background.js 
let backPop = chrome.runtime.connect(
    {   
        name:"backPopConnection"
    });

//Selecting the elements
let textArea=document.getElementById("textArea")
let search_btn=document.getElementById("search_btn");
let print_btn=document.getElementById("print_btn");


//Adding functionality in Search Button
search_btn.addEventListener('click',()=>
    {
        let searchWord=textArea.value;

       //Sending the searchWord to background.js
        backPop.postMessage(
            {
               status: true,
               type: searchWord
            });
    });

//Adding functionality in Print Button
print_btn.addEventListener('click',()=>
{
    
  //Sending the message to background for print the page
    backPop.postMessage(
        {
            action: true,
        });
     

});





 

 
    