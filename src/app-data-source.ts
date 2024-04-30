import { DataSource } from 'typeorm'

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'stipica5',
  database: 'postgres',
  entities: ['src/entities/*.ts'],
  migrations: ['src/migration/*.ts'],
})
