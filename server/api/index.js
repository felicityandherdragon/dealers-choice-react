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

module.exports = router;
