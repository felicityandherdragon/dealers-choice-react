const db = require('./db.js');
const { STRING, DATE, TEXT, INTEGER, VIRTUAL } = db.Sequelize;

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
  currentEpisode: {
    type: INTEGER
  },
  totalEpisode: {
    type: INTEGER,
    defaultValue: 999
  },
  startedOn: {
    type: DATE
  },
  finishedOn: {
    type: DATE
  },
  rating: {
    type: STRING
  },
  personalNote: {
    type: TEXT
  },
  progress: {
    type: VIRTUAL,
    get: function() {
      if (this.currentEpisode && this.totalEpisode) {
        return Math.floor(this.currentEpisode / this.totalEpisode * 100)
      } else {
        return 0;
      }
    },
  }
});

module.exports = Title;
