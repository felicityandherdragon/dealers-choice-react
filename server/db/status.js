const db = require('./db.js');
const { STRING } = db.Sequelize;

const Status = db.define('status', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      isIn: [['READY TO START', 'IN PROGRESS', 'FINISHED']]
    },
    defaultValue: 'READY TO START'
  }
});

module.exports = Status;
