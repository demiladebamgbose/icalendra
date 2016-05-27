var array = [];
var started = false;
var myUserRef ;
function init(){
  greet();
  myUserRef  = new Firebase('https://icalendra.firebaseio.com/'+ localStorage.getItem('database'));
  loadItems();   
}

function greet(){
  getId('greet').style.color = 'white';
  getId('greet').innerHTML = 'Welcome  ' + localStorage.getItem('currentUser');
} 

function loadItems(){
  myUserRef .on("value", function(snapshot) {
    if(!started){
      var message = snapshot.val();
      loopThroughItems(message.event);//(message.event)
    }
      started = true;
 });
}


function loopThroughItems(obj){
  var event = [];
  document.getElementById('rem').innerHTML = obj.length; 
  for(var c = 0; c < obj.length; c++){
    array.push( new addEvent(obj[c].title,obj[c].start,obj[c].backgroundColor,obj[c].borderColor) );
    console.log(obj[c].start)
    $('#calendar').fullCalendar( 'addEvent',  new addEvent(obj[c].title,obj[c].start,obj[c].backgroundColor,obj[c].borderColor) );
    $('#calendar').fullCalendar('renderEvent', new addEvent(obj[c].title,obj[c].start,obj[c].backgroundColor,obj[c].borderColor) , true);
  }
}


function saveEvent(title,date,alldate,bgcss,bdcss){
    var dd = new Date(date._d);
    array.push({title:title,start: new Date(dd.getFullYear(),dd.getMonth(),dd.getDate()),backgroundColor:bgcss,borderColor:bdcss});
    
  myUserRef.update({'event':array});
  
}

function reSaveEvent(title,date){
  var dd = new Date(date);
  console.log(dd.getMonth());
  for(var index = 0; index < array.length; index++){
    if(array[index].title === title){
      array[index].start = dd;
    }
  }
    myUserRef.update({'event':array});
}

function addEvent(title,start,bg,bc){
  this.title = title;
  this.start = start;
  this.backgroundColor = bg;
  this.borderColor = bc;
            
}

window.addEventListener('load', init, false);




