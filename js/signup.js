

function start(){
	reisterClickEvent('register', register);
}


function register(){
	if(isValidData('email') && isValidData('fullname') && isValidData('password') && isValidData('confirm')){
		if(isEmail('email')){
			if(rightLen(password)){
        		if(isValidPassword('password','repassword')){
        			var myUserRef = new Firebase('https://icalendra.firebaseio.com/'+ getId('email').value.split('@')[0]);
        			myUserRef.set({
        				fullname: getId(fullname).value,
        				
        			})
        		}
			}
		}
	}
}


window.addEventListener('load', start, false);