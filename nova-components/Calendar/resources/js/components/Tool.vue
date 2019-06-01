<template>
  <div>

<full-calendar :events="events"  defaultView="dayGridMonth" :plugins="calendarPlugins">

</full-calendar>


  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

// var agenda = [
// 	{
//       title : 'Holiday',
//       start : '2019-05-25',
//       end : '2019-05-27'
//     }
// ]

export default {
  data () {
    return {
        calendarPlugins: [ dayGridPlugin ],
        contentHeight: 400,
        events: null
    }
  },
  methods:{
       showEvents(){
        axios.get('/nova-vendor/Calendar/events').then((data) => {
          let eventList = [];
          data.data.forEach(element => {
            eventList.push({
              title: element.title,
              start: element.start_date,
              end: element.end_date
            });
          });
          this.events = eventList;
        });
      }
  },

  components : {
	FullCalendar	
  },
  mounted() {
    this.showEvents();
  }
}


</script>

<style lang='scss'>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
</style>
