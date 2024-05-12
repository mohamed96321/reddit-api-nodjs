const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notNull: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Palestine',
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Al-Quds',
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Old City',
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: new Date(),
    validate: {
      notEmpty: true,
      notNull: true,
      isDate: true,
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '055-789564',
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  profile_image: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'uploads\\profile-images\\default.jpg',
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  cover_image: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'uploads\\cover-images\\default.jpg',
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'https://github.com/mohamed96321',
    validate: {
      notEmpty: true,
      notNull: true,
      isURL: true,
    }
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'I love coding.',
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'male',
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  join_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_DATE')
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false
});

module.exports = User;
