
function emailvalidate(){

    var emailtxt = document.getElementById('txtmail');
    // var errormsg = document.getElementById('errormsg');
    var mainemail = emailtxt.value;
    var regexpres = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //testing the regular expression for the email in email txtbox (regexpres.test(mainemail))
    if(regexpres.test(mainemail))
    {
        // errormsg.style.display="none";
        emailtxt.style.borderColor = "green";
        emailtxt.style.boxShadow ="3px 2px 4px green";
    }else {
        // errormsg.innerHTML="enter a valid email address";
        // errormsg.style.color="white";
        // errormsg.style.backgroundColor="red";
        emailtxt.style.borderColor = "red";
        emailtxt.style.boxShadow ="3px 2px 4px red";
    }
    return false;
    }


    // access input box
    var iteminput = document.getElementById('Firstname');
    // var txtArea = document.querySelector('#postComment');
   
    iteminput.addEventListener('input',runEvent); 
    // txtArea.addEventListener('input',runEvent); 

    function runEvent(d){
    document.getElementById('posts').innerHTML = '<h3>'+d.target.value+'</h3>'; 
    }