const db = require('./db.js');
const Category = require('./category.js');
const Status = require('./status.js');
const Title = require('./title.js');
//require other js files later here

//put associations here
Category.hasMany(Title);
Status.hasMany(Title);
Title.belongsTo(Category);
Title.belongsTo(Status);


module.exports = {
  db,
  //add other models here
  Category,
  Status,
  Title
}
