var user_array = [];
function submitform1()
{
	var one = validation_of_username1();
	var two = validation_of_password1();
	var flag = check();
	if(flag==1)
	{
		alert("Success");
	}
	else
	{
		alert("Failure");
	}
}
function submitform2()
{
	var one = validation_of_username2();
	var two = validation_of_email2()
	var three = validation_of_password2();
	if(one==1 && two==1 && three==1)
	{
		LocalSto();
	}	
}
function submitform3()
{
	validation_of_name3();
	validation_of_email3();
	validation_of_phone3();
	validation_of_question3();
	document.getElementById("form_id3").submit();
	
}
function validation_of_username1()
{
	var usernamealert=document.getElementById("useralert1");
	if( document.form1.users1.value == "" )
         {
		usernamealert.innerHTML="Enter username".fontsize(2).fontcolor("red");
		return 0;
         }
	else
	{
		return 1;
	}
}
function validation_of_password1()
{
	var pwdalert=document.getElementById("passwordalert1");
	if( document.form1.passwords1.value == "" )
         {
            	pwdalert.innerHTML="Enter Password".fontsize(2).fontcolor("red");
		return 0;
	 }
	else
	{
		return 1;
	}
}
function validation_of_username2()
{
	var usernamealert=document.getElementById("useralert2");
	if( document.form.users2.value == "" )
	{
		usernamealert.innerHTML="Enter username".fontsize(2).fontcolor("red");
		return 0;
	}
	else
	{
		return 1;
	}
}
function validation_of_email2()
{
	var emalert=document.getElementById("emailalert2");
	if( document.form.emails2.value == "" )
         {
            	emalert.innerHTML="Enter Email".fontsize(2).fontcolor("red");
		return 0;
	 }
	var filter=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	var data=document.form.emails2.value;
	if (!filter.test(data))
	{
		emalert.innerHTML="Enter valid email".fontsize(2).fontcolor("red");
		return 0;
	}
	else
	{
		return 1;
	}
}
function validation_of_password2()
{
	var pwdalert=document.getElementById("passwordalert2");
	if( document.form.passwords2.value == "" )
         {
            	pwdalert.innerHTML="Enter Password".fontsize(2).fontcolor("red");
		return 0;
	 }
	if(document.form.passwords2.value.length<=3||document.form.passwords2.value.length>=15)
	{	
		pwdalert.innerHTML="Enter at least 3 characters and atmost 15 characters".fontsize(2).fontcolor("red");
		return 0;
	}
	else
	{
		return 1;
	}
}
function validation_of_name3()
{
	var nmalert=document.getElementById("namealert3");
	if( document.form3.names3.value == "" )
         {
		nmalert.innerHTML="Enter Name".fontsize(2).fontcolor("red");
		return;
         }
}
function validation_of_email3()
{
	var emalert=document.getElementById("emailalert3");
	if( document.form3.emails3.value == "" )
         {
            	emalert.innerHTML="Enter Email".fontsize(2).fontcolor("red");
		return;
	 }
	var filter=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	var data=document.form3.emails3.value;
	if (!filter.test(data))
	{
		emalert.innerHTML="Enter valid email".fontsize(2).fontcolor("red");
		return;
	}
}
function validation_of_phone3()
{
	var phnalert=document.getElementById("phonealert3");
	if( document.form3.phones3.value == "" )
         {
		phnalert.innerHTML="Enter Phone Number".fontsize(2).fontcolor("red");
		return;
         }
	if(document.form3.phones3.value.length<10||document.form3.phones3.value.length>10)
	{	
		phnalert.innerHTML="Enter a 10 digit number".fontsize(2).fontcolor("red");
		return;
	}
}
function validation_of_question3()
{
	var qalert=document.getElementById("questionalert3");
	if( document.form3.questions3.value == "" )
         {
            	qalert.innerHTML="Enter Question".fontsize(2).fontcolor("red");
		return;
	 }
}
function seeuser1()
{
	var usernamealert=document.getElementById("useralert1");
	usernamealert.innerHTML="";
}
function seepass1()
{
	var pwdnamealert=document.getElementById("passwordalert1");
	pwdnamealert.innerHTML="";
}
function seeuser2()
{
	var usernamealert=document.getElementById("useralert2");
	usernamealert.innerHTML="";
}
function seeemail2()
{
	var emalert=document.getElementById("emailalert2");
	emalert.innerHTML="";
}
function seepass2()
{
	var pwdnamealert=document.getElementById("passwordalert2");
	pwdnamealert.innerHTML="";
}
function seename3()
{
	var nmalert=document.getElementById("namealert3");
	nmalert.innerHTML="";
}
function seeemail3()
{
	var emalert=document.getElementById("emailalert3");
	emalert.innerHTML="";
}
function seephone3()
{
	var phnalert=document.getElementById("phonealert3");
	phnalert.innerHTML="";
}
function seequestion3()
{
	var qalert=document.getElementById("questionalert3");
	qalert.innerHTML="";
}
var divs = ["Login", "ContactUs", "SignUp"];
var visibleDivId = null;
function toggleVisibility(divId) 
{
  	if(visibleDivId === divId) 
	{ 
	}
   	else 
	{
    		visibleDivId = divId;
  	}
  	hideNonVisibleDivs();
}
function hideNonVisibleDivs() 
{
  	var i, divId, div;
  	for(i = 0; i < divs.length; i++) 
	{
    		divId = divs[i];
    		div = document.getElementById(divId);
    		if(visibleDivId === divId) 
		{
      			div.style.display = "block";
   		} 
		else 
		{
      			div.style.display = "none";
    		}
  	}
}
function LocalSto()
{
	if (localStorage) 
	{
		document.getElementById("form_id2").addEventListener("submit",LoSto());
	}
}
function LoSto() 
{
	var user = document.getElementById("users2").value;
	var email = document.getElementById("emails2").value;
	var password = document.getElementById("passwords2").value;
	

	userobj = 
	{
		UserName: user,
		Email: email,
		Password: password,
	};
       	if (localStorage.firstentry)
       	{
         	user_array = JSON.parse(localStorage["user_array"]);
      	}
	user_array.push(userobj);
       	localStorage.setItem("user_array",JSON.stringify(user_array));
       	localStorage.firstentry += 1;
}
function check()
{

	var user = document.getElementById("users1").value;
	var password = document.getElementById("passwords1").value;
	user_array = JSON.parse(localStorage["user_array"]);
	for(var i=0;i<user_array.length;i++)
	{
                
		var checkuser =JSON.parse(localStorage["user_array"])[i].UserName;
		var checkpassword =JSON.parse(localStorage["user_array"])[i].Password;
		
        
                if ((checkuser==user) && (checkpassword==password))
                {
                  	return 1;
                }
		else
		{
			return 0;
			
		}
	}   
}
