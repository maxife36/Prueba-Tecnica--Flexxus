import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { MYSQL_ROOT_PASSWORD, MYSQL_DATABASE, MYSQL_CONTAINER_PORT } = process.env;

const ROOT_PASSWORD = MYSQL_ROOT_PASSWORD ?? "secret";
const DATABASE = MYSQL_DATABASE ?? "custome_db";
const CONTAINER_PORT = MYSQL_CONTAINER_PORT ?? "3306";
const HOST = "mysql";
const USERNAME = "root";

const sequelize = new Sequelize(DATABASE, USERNAME, ROOT_PASSWORD, {
  username: USERNAME,
  password: ROOT_PASSWORD,
  database: DATABASE,
  host: HOST,
  port: Number(CONTAINER_PORT),
  dialect: "mysql",
  logging:false
});

export default sequelize;
