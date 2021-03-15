const db = require('./db.js');
const { STRING } = db.Sequelize;

const Category = db.define('category', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      isIn: [['MANGA', 'ANIME', 'TV SHOWS', 'BOOK', 'GAME']]
    },
    defaultValue: 'MANGA'
  }
});

module.exports = Category;
