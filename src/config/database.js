const { Sequelize } = require('sequelize');

// Database configuration
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: false, // Disable logging SQL queries
});

// Test the database connection
async function dbConnection() {
  try {
    // Authenticate the database connection
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Sync models with the database
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Export Sequelize instance and connection test function
module.exports = {
  sequelize,
  dbConnection,
};
