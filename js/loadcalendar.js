 <!-- Page specific script -->
      $(function () {

        /* initialize the external events
      

        /* initialize the calendar
         -----------------------------------------------------------------*/
        //Date for the calendar events (dummy data)
       
              
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
        
                  });
      });

