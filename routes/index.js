const express = require('express');
const router = express.Router();
const ChannelMember = require('../schemas/member');

/* GET home page. */

router.get('/', async (req, res, next) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const getMemberEmail = await ChannelMember.findOne({ email });
    const getPassword = await ChannelMember.findOne({ password });
    console.log(getMemberEmail, getPassword);
    if (getMemberEmail === email && password === getPassword) {
      res.redirect('/chat');
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/entry', async (req, res, next) => {
  res.render('entry');
});

router.post('/entry', async (req, res) => {
  const { email, password } = req.body;
  const newMember = { email, password };

  try {
    await ChannelMember.create(newMember);
    res.redirect('/');
  } catch {}
});

router.get('/find', async (req, res, next) => {
  res.render('find');
});

router.post('/find', async (req, res) => {
  res.redirect('login');
});

module.exports = router;
