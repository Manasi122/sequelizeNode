module.exports = {
    "username": "root",
    "password": "root",
    "database": "my_db",
    "host": "localhost",
    "dialect": "mysql"
    ,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}