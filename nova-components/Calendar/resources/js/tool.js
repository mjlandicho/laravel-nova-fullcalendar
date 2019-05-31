Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'Calendar',
            path: '/Calendar',
            component: require('./components/Tool'),
        },
    ])
})
