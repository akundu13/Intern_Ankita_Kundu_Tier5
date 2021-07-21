//Select the elements
var nameInputBox=document.getElementById("name_ip");
var saveInputBox=document.getElementById("save_name");
var submit_btn=document.getElementById("submit_btn");
var save_btn=document.getElementById("save_btn");
var studentList=document.getElementById("listOfStudent");



//Declare student array to store data
var student=[];


//Add event in SUBMIT Button

submit_btn.addEventListener('click',function()
{  
   var inputName=nameInputBox.value;

   if(inputName.trim()!=0 )
   {
         
        if(student.length==0 )
        {
             student.push(inputName);
        
         }else 
        {
           // To check whether the name already present in arrray or not
            var check=duplicateName(inputName);
            

            //If name is not present in the list then it would be added 
            if(check===true)  
            {
                student.push(inputName); 
            }else
            {
                alert("Name is already present");
            }
           
         }
    }else
    { 
        
        alert("Enter Your Name Properly");
    }
    
    show();

});

//This function will show the name
function show()
{
    if(student.length==0)
    {

        studentList.innerHTML="";

    }else
    {
      var temp="";
    
         for(i=0;i<student.length;i++)
        { 
        
            temp+=`
            
                <li> 
                    <span class="slNo">${student.indexOf(student[i])+1}</span>
                    <label id="names">${student[i]}</label>
                    <button type="button" class="rmv_btn" onclick="dltName(${student.indexOf(student[i])})">REMOVE</button>
                    <button type="button" class="edit_btn" onclick="editName(${student.indexOf(student[i])})">EDIT</button>
                 </li> <br/>   
             `;
             
              studentList.innerHTML= temp;          
         }  
    }

    nameInputBox.value=""; 
}

//This function is for check whether the name already present in arrray or not

function duplicateName(name)
{
    
    for(i=0;i<=student.length;i++)
    {
        if( student[i]===name)
        {
            
             return false;
        }
       
    }

    return true;
}

//To delete name
function dltName(index)
{
    
   student.splice(index,1); 
   show();  
   save_btn.style.display="none";
   submit_btn.style.display="inline-block";
}

//To edit name
function editName(index)
{

    saveInputBox.value=index;
    nameInputBox.value=student[index];
    submit_btn.style.display="none";
    save_btn.style.display="inline-block";
    
    
}
//Add event to save button for save  edited name
save_btn.addEventListener('click',function()
    {
        student[saveInputBox.value]=nameInputBox.value;
        save_btn.style.display="none";
        submit_btn.style.display="inline-block";
        show(); 
    });
    


