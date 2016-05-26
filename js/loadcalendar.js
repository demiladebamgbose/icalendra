$(function () {

  /* initialize the external events*/
  function initialize_events(element){
    element.each(function(){

      var eventObject = {
        title:$.trim($(this).text()) //use this.text as event title
      };
    

      $(this).data('eventObject', eventObject); // store the eventObject in the item
       $(this).draggable({
          zIndex: 1070,
          revert: true, // will cause the event to go back to its
          revertDuration: 0  //  original position after the drag
        });

   });
  }
   initialize_events($('#external-events div.external-event'));


    //Date for the calendar events (dummy data)
   
    var date = new Date();
    var d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear();
            var calendar ;  // dummy dates for calendar events
          

    $('#calendar').fullCalendar({
       
      
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      buttonText: {
        today: 'today',
        year: 'year',
        month: 'month',
        week: 'week',
      },
     
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar !!!

      drop: function(date, allDay){
        console.log("ggsduuks")
        var originalEventObject = $(this).data('eventObject');
        var copiedEventObject = $.extend({}, originalEventObject);
        copiedEventObject.start = date;
        copiedEventObject.allDay = allDay;
        copiedEventObject.backgroundColor = $(this).css("background-color");
        copiedEventObject.borderColor = $(this).css("border-color");
        saveEvent(copiedEventObject.title,date,copiedEventObject.allDay,copiedEventObject.backgroundColor,copiedEventObject.borderColor);
        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
          if ($('#drop-remove').is(':checked')) {
              // if so, remove the element from the "Draggable Events" list
            $(this).remove();
          }

        },

       eventDrop: function(event, delta, revertFunc) {

       // alert(event.title + " was dropped on " + event.start.format());

        if (!confirm("Are you sure abou  t this change?")) {
            revertFunc();
        }
        else{
             reSaveEvent(event.title,event.start.format());
        }

      }
    
 });
});

