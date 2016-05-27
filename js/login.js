var events = [];
function start(){
	registerClickEvent('signIn', signin);
 	getId('msg').style.color='red';
}
	
function signin(){
  var found;
  if( (isValidData('email')) && (isValidData('password')) ){
    if(isEmail('email')){
		  console.log(getId('email').value.split('@')[0] );
		  var myUserRef = new Firebase('https://icalendra.firebaseio.com/'+ getId('email').value.split('@')[0]);
		  myUserRef.on("value", function(snapshot) {
			  var message = snapshot.val();	

			  if( (message.email == getId('email').value) && (message.password === getId('password').value)){
					localStorage.setItem("database",getId('email').value.split('@')[0]);
					localStorage.setItem('currentUser', message.fullName);
					console.log(localStorage.getItem('database'));
					console.log(localStorage.getItem('currentUser'));
					linkTo('event.html');
			  }
			  else{
					getId('msg').innerHTML='Invalid Username or password';
				}
			});
		}
		else{
	  	getId('msg').innerHTML='Invalid Email Address';
		}
	}
	else{
		getId('msg').innerHTML='Fill all fields';
	}	
}

window.addEventListener('load', start, false);
