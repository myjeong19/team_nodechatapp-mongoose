const express = require('express');
const router = express.Router();
const ChannelMember = require('../schemas/member');

/* GET home page. */

router.get('/', async (req, res, next) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const { email, member_password } = req.body;
  try {
    const getMember = await ChannelMember.findOne({ email });

    if (getMember && getMember.member_password === member_password) {
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
  const { email, member_password, name, profile_img_path, telephone } =
    req.body;
  const newMember = {
    email,
    member_password,
    name,
    profile_img_path,
    telephone,
    entry_type_code: 1,
    use_state_code: 1,
    reg_member_id: 1,
    reg_date: Date.now(),
  };

  try {
    await ChannelMember.create(newMember);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.get('/find', async (req, res, next) => {
  res.render('find');
});

router.post('/find', async (req, res) => {
  res.redirect('login');
});

module.exports = router;
