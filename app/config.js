export default function () {
    let config = {
        api: '',
        signIn:'/user',
        getCustomers:'/users'
    };
    switch (process.env.NODE_ENV) {
        case 'development':
            return Object.assign(config,{
                'api': 'http://localhost:3000'
            });
        case 'test':
            return Object.assign(config,{
                'api': 'http://localhost:3000'
            });

        case 'production':
            return Object.assign(config,{
                'api': 'http://mateli.com'
            });
        default:
            return config;
    }
};