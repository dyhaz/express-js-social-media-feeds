module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            port: '3306',
            user: 'user',
            password: 'password',
            database: 'database'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        seeds: {
            directory: './src/database/seeds'
        }
    }
};
