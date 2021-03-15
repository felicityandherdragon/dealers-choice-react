const {db, Category, Status, Title} = require('./db');

const syncAndSeed = async() => {

  await db.sync({force: true})
  try {
    const [manga,anime,tvShows,book,game] = Promise.all(['MANGA', 'ANIME', 'TV SHOWS', 'BOOK', 'GAME'].map(name => Category.create({name})));

    const [readyToStart,inProgress,finished] = Promise.all(['READY TO START', 'IN PROGRESS', 'FINISHED'].map(name => Status.create({name})));

    

  } catch(err) {
    console.log(err)
  }

}

