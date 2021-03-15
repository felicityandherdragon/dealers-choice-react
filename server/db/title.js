const db = require('./db.js');
const { STRING, NUMBER, DATE, TEXT } = db.Sequelize;

const Title = db.define('title', {
  name: {
    type: STRING,
    allowNull: false
  },
  link: {
    type: STRING
  },
  current_episode: {
    type: NUMBER
  },
  total_episode: {
    type: NUMBER
  },
  started_on: {
    type: DATE
  },
  finished_on: {
    type: DATE
  },
  personal_note: {
    type: STRING
  }
});

module.exports = Title;
