import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const {
  MYSQL_DATABASE,
  MYSQL_ROOT_PASSWORD,
  MYSQL_HOST_PORT,
  EXTERNAL_DATABASE,
  EXTERNAL_DB_ROOT_USER,
  EXTERNAL_DB_ROOT_PASSWORD,
  EXTERNAL_DB_PORT,
  EXTERNAL_DB_HOST,
  EXTERNAL_DB_DIALECT,
} = process.env;

const connectDb = async function dbConnect() {
  let sequelize;

  const dbConfig = {
    username: EXTERNAL_DB_ROOT_USER ?? "root",
    password: EXTERNAL_DB_ROOT_PASSWORD ?? MYSQL_ROOT_PASSWORD ?? "ContraseñaSecreta",
    database: EXTERNAL_DATABASE ?? MYSQL_DATABASE ?? "flexxus_db",
    host: EXTERNAL_DB_HOST ?? "localhost",
    port: Number(EXTERNAL_DB_PORT ?? MYSQL_HOST_PORT) || 3306,
    dialect: (EXTERNAL_DB_DIALECT ?? "mysql") as Dialect,
    logging: false
  };

  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig
  );
 

  try {
    await sequelize.authenticate();
    console.log("Base de Datos Conectadas Correctamente");
    return sequelize;
  } catch (error) {
    console.log(`Error en la conexión con la Base de Datos: \n ${error}`);
    throw error;
  }
};

export default connectDb;
