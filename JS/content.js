//HTML Code for FORM
let html = `<div class="container_test">
    <div class="row">
      <div class="col-25">
        <label for="title">Notification Title</label>
      </div>
      <div class="col-75">
        <input type="text" placeholder="Notification Title" class="noti_title">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="message">Notification Message</label>
      </div>
      <div class="col-75">
        <textarea placeholder="Notification Message" style="height:200px" class="noti_message"></textarea>
      </div>
    </div>
    <div class="row">
      <input type="button" value="Submit" id="submit_btn">
    </div>
</div>`;

document.querySelector("body").insertAdjacentHTML("beforeend", html);


//Change the Tab Title name 
document.title="Ankita Kundu";


//To connect with background.js 
let backCon = chrome.runtime.connect(
  {   
      name:"backConConnection"
  });


//For save the data
let submit_btn=document.querySelector("#submit_btn");

submit_btn.addEventListener('click',()=>
{
    //Feteching the value from the form
    let notiTitle=document.querySelector(".noti_title").value;
    let notiMessage=document.querySelector(".noti_message").value;

    if(notiTitle.trim()!=0 && notiMessage.trim()!=0)
    {
      //saving the data
      chrome.storage.local.set({title: notiTitle,message:notiMessage}, ()=>
      {
        console.log('Saved');
        
        //sending message to background for notification
        backCon.postMessage(
          {  
            notify:"notification"
          });
       
      });

    }else
    {
      alert("Enter proper notification Title and Message");
    }
});





