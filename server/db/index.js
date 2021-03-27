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
      currentEpisode: 68,
      categoryId: manga.id,
      statusId: inProgress.id,
      startedOn: new Date('2021-02-28'),
      rating: '★★★★★',
      personalNote: 'Delicious in Dungeon is a Japanese fantasy comedy seinen manga series written and illustrated by Ryōko Kui. The series is published in Enterbrain\'s Harta magazine.'
    })

    const wordOfHonor = await Title.create({
      name: 'Word Of Honor',
      cover: '../../public/assets/img/wordofhonor.jpeg',
      currentEpisode: 32,
      totalEpisode: 36,
      categoryId: tvShows.id,
      statusId: inProgress.id,
      startedOn: new Date('2021-03-05'),
      rating: '★★★★★',
      personalNote: 'Zhou Zi Shu, leader of a royal praetorian secret service, gets embroiled in a conspiracy in the martial arts world after leaving his former life behind. He meets the mysterious Wen Ke Xing from the Ghost Valley, who is on a quest to avenge his parents\' deaths. ...'
    })

    const dennohCoil = await Title.create({
      name: 'Den-noh Coil',
      cover: '../../public/assets/img/dennohcoilcover.webp',
      currentEpisode: '26',
      totalEpisode: '26',
      categoryId: anime.id,
      statusId: finished.id,
      startedOn: new Date('2008-01-01'),
      finishedOn: new Date('2008-03-01'),
      rating: '★★★★★',
      personalNote: 'In the near future, augmented reality has become a key part of daily life. A gentle middle school girl named Yuuko "Yasako" Okonogi and her family have just moved to Daikoku City despite rumors of people disappearing. There, her grandmother, nicknamed "Mega-baa," runs a shop called Megasia that specializes in illegal tools which interact with parts of the virtual world.'
    })

    const jujutsuKaisen = await Title.create({
      name: 'Jujutsu Kaisen',
      cover: '../../public/assets/img/Jujutsu_kaisen.jpeg',
      currentEpisode: '143',
      totalEpisode: '999',
      categoryId: manga.id,
      statusId: inProgress.id,
      startedOn: new Date('2021-01-01'),
      rating: '★★★',
      personalNote: 'Jujutsu Kaisen (呪術廻戦, lit. "Sorcery Fight") is a Japanese manga series written and illustrated by Gege Akutami, serialized in Shueisha\'s Weekly Shōnen Jump since March 2018. The individual chapters of Jujutsu Kaisen are collected and published by Shueisha, with fifteen tankōbon volumes released as of March 2021.'
    })

    const thesecondsex = await Title.create({
      name: 'The Second Sex',
      cover: '../../public/assets/img/the_second_sex.jpeg',
      currentEpisode: '50',
      totalEpisode: '999',
      categoryId: book.id,
      statusId: inProgress.id,
      startedOn: new Date('2021-01-01'),
      personalNote: 'Simone de Beauvoir’s essential masterwork is a powerful analysis of the Western notion of “woman,” and a revolutionary exploration of inequality and otherness. Unabridged in English for the first time, this long-awaited edition reinstates significant portions of the original French text that were cut in the first English translation. Vital and groundbreaking, Beauvoir’s pioneering and impressive text remains as pertinent today as when it was first published, and will continue to provoke and inspire generations of men and women to come.'
    })

    const yomawari = await Title.create({
      name: 'Yomawari',
      cover: '../../public/assets/img/yomawari.jpg',
      currentEpisode: '1',
      totalEpisode: '10',
      categoryId: game.id,
      statusId: readyToStart.id,
      startedOn: new Date('2021-02-19'),
      personalNote: 'Simone de Beauvoir’s essential masterwork is a powerful analysis of the Western notion of “woman,” and a revolutionary exploration of inequality and otherness. Unabridged in English for the first time, this long-awaited edition reinstates significant portions of the original French text that were cut in the first English translation. Vital and groundbreaking, Beauvoir’s pioneering and impressive text remains as pertinent today as when it was first published, and will continue to provoke and inspire generations of men and women to come.'
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
