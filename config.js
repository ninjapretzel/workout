const fs = require("fs");
const DEV = fs.existsSync(".dev");

const config = {
	port: !DEV ? process.env.PORT : 3000,
	db: {
		url: "localhost:27017/workoutTracker",
	},
};

if (!DEV) {
	config.db = {
		user: process.env.ATDB_USERNAME,
		password: process.env.ATDB_PASSWORD,
		host: process.env.ATDB_HOST,
		dbname: process.env.ATDB_DBNAME, // Add ATDB_DBNAME to heroku console
	}
	const { user, password, host, dbname } = config.db;
	config.db.url = `${user}:${password}@${host}/${dbname}?retryWrites=true&w=majority`
}

module.exports = config;
