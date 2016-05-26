

function start(){
	registerClickEvent('register', register);
}


function register(){
	if(isValidData('fullName') && isValidData('email') && isValidData('password') && isValidData('confirm')){
		if(isEmail('email')){
			if(rightLen('password')){
        		if(isValidPassword('password','confirm')){
        			var myUserRef = new Firebase('https://icalendra.firebaseio.com/'+ getId('email').value.split('@')[0]);
        			console.log( getId('email').value.split('@')[0])
        			myUserRef.set({
        				fullName: getId('fullName').value,
        				email: getId('email').value,
        				password: getId('password').value,
        				event: {
        					date:[]
        				}
        			});

        		}
        		else{
        			getId('msg').innerHTML='Passwords do not match';
        		}
			}
			else{
				getId('msg').innerHTML='Password must be at least 7 characters s ';
			}
		}
		else{
			getId('msg').innerHTML='invalid Email Address';	
		}

	}
	else{
			getId('msg').innerHTML='Invalid Username or password';	
		}
}


window.addEventListener('load', start, false);