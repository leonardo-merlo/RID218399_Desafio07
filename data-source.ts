import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from './src/user/user.entity'; 

config(); 

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User], 
  migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
  synchronize: process.env.DB_SYNC === 'true', 
  logging: process.env.DB_LOGGING === 'true',
});