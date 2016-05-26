function registerClickEvent(id, callback){
	getId(id).addEventListener('click', callback, false);
}

 function registerDropEvents(id,callback){
    getId(id).addEventListener('drop',callback,false);
}

function rightLen(password){
	if(getId(password).value.length >= 7){
		return true;
	}
	return false;
}

function isValidData(input){
	if(getId(input).value != ''){
		return true;
	}
	return false;
}


function isEmail(email){
	if( (getId(email).value.includes('@')) && (getId('email').value.includes('.'))){
		return true;
	}
	return false;
}


function isValidPassword(password1, password2){
	if(getId(password1).value == getId(password2).value){
		return true;
	}
	return false;
}


function getId(id){
	return document.getElementById(id);
}


function linkTo(link){
	return window.location.assign(link);
}