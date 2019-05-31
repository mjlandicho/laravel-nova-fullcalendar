Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'Calendar',
            path: '/Calendar',
            component: require('./components/Tool'),
        },
    ])
})
import Vue from "vue"
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'


Vue.use(FullCalendar);

