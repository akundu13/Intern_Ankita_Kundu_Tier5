chrome.runtime.onConnect.addListener((con)=>
{
    //Checking the  popup connection 
    if(con.name==="backPopConnection")
    {
        //Handling the request message
        con.onMessage.addListener((request)=>
        {
            if(request.status===true)
            {   
                //For search
                let newURL= `https://www.google.com/search?q=${request.type}`;
                //It will create new tab
                chrome.tabs.create(
                {
                    url:newURL
                },
                (tab)=>
                {                                  
                    //For close  the tab
                    chrome.alarms.onAlarm.addListener((data) => 
                    {
                        if (data.name === "closeTab") 
                        {
                            //Remove the tab
                            chrome.tabs.remove(tab.id,()=>
                            {
                                console.log("Tab Closed");
                            });              
                        }
                    });                                                      
                });
            }            
        });

        //print function
        function getprint() 
        {
            return window.print();
        }

        //Print active page
        con.onMessage.addListener((request)=>
        {
            if(request.action===true)
            {
                //For current Tab id
                chrome.tabs.query({active: true, currentWindow: true}, 
                function(tabs)
                {
                    let myTabId = tabs[0].id; 

                    //To execute JS code
                    chrome.scripting.executeScript(
                    {
                        target: {tabId:myTabId},
                        function:getprint
                    },
                    () => 
                    { 
                        console.log("Printed"); 
                    }); 
                            
                });         
            }

        });
    }

    //Checking the Contentscript connection 
   if(con.name==="backConConnection")
    {
         
       con.onMessage.addListener((request)=>
       {
           //Handling the request message
            if(request.notify="notification")
            {
                
                notification();
            }
       }); 
    }
});  


//Creating alarm
chrome.alarms.create("closeTab", {delayInMinutes: 5 });  


//Notification Function
let notification = function() 
{
       
    chrome.notifications.create( 
    "noitify",
    {
        type: "basic",
        title:"Hello",
        message: "Your Message Has Been Saved",
        iconUrl:"img/icon48.png"  
    });
};
     

              




  

                  