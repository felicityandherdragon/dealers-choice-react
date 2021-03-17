const db = require('./db.js');
const { STRING, DATE, TEXT } = db.Sequelize;

const Title = db.define('title', {
  name: {
    type: STRING,
    allowNull: false
  },
  cover: {
    type: STRING,
    defaultValue: '../../public/assets/img/placeholder-image.webp'
  },
  link: {
    type: STRING,
    defaultValue: 'To be updated'
  },
  current_episode: {
    type: STRING
  },
  total_episode: {
    type: STRING
  },
  started_on: {
    type: DATE
  },
  finished_on: {
    type: DATE
  },
  rating: {
    type: STRING
  },
  personal_note: {
    type: TEXT
  }
});

module.exports = Title;
