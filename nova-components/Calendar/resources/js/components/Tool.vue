<template>
  <div>

<full-calendar :events="events" locale="en"></full-calendar>

  </div>
</template>

<script>

var agenda = [
	{
      title : 'Sunny Out of Office',
      start : '2019-05-25',
      end : '2019-05-27'
    }
]

export default {
  data () {
	return {
	  events : agenda
	}
  },
  components : {
	'full-calendar': require('vue-fullcalendar')	
  }
}

</script>

<style lang='scss'>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
</style>
