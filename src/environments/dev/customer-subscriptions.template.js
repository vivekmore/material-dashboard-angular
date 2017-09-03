customer_subscriptions: [
    {
        'repeat(10)': {
            _id: '{{index()}}',
            customer_id: '{{integer(0,10)}}',
            subscription_type_id: '{{integer(0,20)}}',
            subscription_status_id: '{{random(0,1,2)}}',
            for_date: '{{date(new Date(2017, 8, 1), new Date())}}',
            last_updated: '{{date(new Date(), new Date())}}'
        }
    }
]