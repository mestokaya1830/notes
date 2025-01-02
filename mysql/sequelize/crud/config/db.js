import {Sequelize} from 'sequelize'

const dbConn = async () => {
  const sequelize =  new Sequelize('blog', 'mesto','mk1972mk', {
    host:'localhost',
    port:3306,
    dialect: 'mysql'
  })
  try {
    await sequelize.authenticate();
    console.log('Connected.');
  } catch (error) {
    console.error(error);
  }
}

export default dbConn