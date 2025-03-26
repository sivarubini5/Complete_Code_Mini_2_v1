module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/safety_app.db',
        },
        useNullAsDefault: true,
    },
};
