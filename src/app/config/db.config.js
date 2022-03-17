module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWD: "123456",
    DBNAME: "test",
    dialect: "mysql",
    pool: {
        max: 5, min:1, acquire: 30000, idle: 10000
    }
};