export default function () {
    let config = {
        api: '',
        auth: {
            signIn : '/user',
            signUp : '/user'
        },
        users: {
            userList : '/users',
            usersMenu:'/usersMenu'
        }
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
                'api': 'http://production.adress.com'
            });
        default:
            return config;
    }
};