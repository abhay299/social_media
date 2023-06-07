import mysql from "mysql";

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abhay@78",
	database: "socials"
});