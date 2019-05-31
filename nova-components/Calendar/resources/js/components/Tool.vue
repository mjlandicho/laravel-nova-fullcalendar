<template>
  <div>

<full-calendar defaultView="dayGridMonth" :plugins="calendarPlugins"  :events="events" locale="en"></full-calendar>

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
      events : [{
        title : 'Holiday',
        start : '2019-05-25',
        end : '2019-05-27'
      }]
	}
  },

  methods:{
       showEvents(){
           axios.get('?').then(({data}) => (this.events = data.data));
        },
  },

  components : {
	FullCalendar	
  }
}

</script>

<style lang='scss'>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
</style>
