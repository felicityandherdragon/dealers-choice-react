const router = require('express').Router();
const { Category, Status, Title } = require('../db');

router.get('/all', async(req,res,next) => {
  try {
    const allTitle = await Title.findAll({
      include: [Category, Status]
    });
    res.send(allTitle);
  } catch(err) {
    next(err)
  }
})


router.get('/categories', async(req,res,next) => {
  try {
    const allCategories = await Category.findAll();
    res.send(allCategories);
  } catch(err) {
    next(err)
  }
})

router.get('/categories/:categoryId', async(req,res,next) => {
  try {
    const currentCategory = await Title.findAll({
      where: {
        categoryId: req.params.categoryId
      }
    })
    res.send(currentCategory);
  } catch(err) {
    next(err)
  }
})

router.get('/category/title/:titleId', async(req,res,next) => {
  try {
    const selectedTitle = await Title.findAll({
      include: [Category, Status],
      where: {
        id: req.params.titleId
      }
    })
    res.send(selectedTitle);
  } catch(err) {
    next(err)
  }
})

router.post('/add', async(req,res,next) => {
  try {
    console.log(req.body);
    res.status(201).send(await Title.create(req.body));
  } catch(err) {
    next(err)
  }
})

router.delete('/category/title/:titleId', async(req,res,next) => {
  try {
    const titleToDelete = await Title.findByPk(req.params.titleId);
    await titleToDelete.destroy();
    res.send(titleToDelete);
  } catch(err) {
    next(err)
  }
})

module.exports = router;
