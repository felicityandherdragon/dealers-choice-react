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

const syncAndSeed = async() => {

  await db.sync({force: true})
  try {
    const [manga,anime,tvShows,book,game] = await Promise.all(['MANGA', 'ANIME', 'TV SHOWS', 'BOOK', 'GAME'].map(name => Category.create({name})));

    const [readyToStart,inProgress,finished] = await Promise.all(['READY TO START', 'IN PROGRESS', 'FINISHED'].map(name => Status.create({name})));

    const deliciousInDungeon = await Title.create({
      name: 'Delicious in Dungeon',
      cover: '../../public/assets/img/dindcover.jpeg',
      current_episode: '68',
      total_episode: 'Hasn\'t ended yet',
      categoryId: manga.id,
      statusId: inProgress.id,
      started_on: 2021-02-28,
      rating: 'U+2B50,U+2B50,U+2B50,U+2B50,U+2B50',
      personal_note: 'Delicious in Dungeon is a Japanese fantasy comedy seinen manga series written and illustrated by Ryōko Kui. The series is published in Enterbrain\'s Harta magazine.'
    })

    const wordOfHonor = await Title.create({
      name: 'Word Of Honor',
      cover: '../../public/assets/img/wordofhonor.jpeg',
      current_episode: '25',
      total_episode: 'Hasn\'t ended yet',
      categoryId: tvShows.id,
      statusId: inProgress.id,
      started_on: 2021-03-05,
      rating: 'U+2B50,U+2B50,U+2B50,U+2B50,U+2B50',
      personal_note: 'Zhou Zi Shu, leader of a royal praetorian secret service, gets embroiled in a conspiracy in the martial arts world after leaving his former life behind. He meets the mysterious Wen Ke Xing from the Ghost Valley, who is on a quest to avenge his parents\' deaths. ...'
    })

    const dennohCoil = await Title.create({
      name: 'Den-noh Coil',
      cover: '../../public/assets/img/dennohcoilcover.webp',
      current_episode: '26',
      total_episode: '26',
      categoryId: anime.id,
      statusId: finished.id,
      started_on: 2008-01-01,
      finished_on: 2008-03-01,
      rating: 'U+2B50,U+2B50,U+2B50,U+2B50,U+2B50',
      personal_note: 'In the near future, augmented reality has become a key part of daily life. A gentle middle school girl named Yuuko "Yasako" Okonogi and her family have just moved to Daikoku City despite rumors of people disappearing. There, her grandmother, nicknamed "Mega-baa," runs a shop called Megasia that specializes in illegal tools which interact with parts of the virtual world.'
    })

  } catch(err) {
    console.log(err)
  }
}


module.exports = {
  db,
  syncAndSeed,
  //add other models here
  Category,
  Status,
  Title
}
