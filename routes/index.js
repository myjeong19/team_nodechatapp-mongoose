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
  const email = req.body.email;

  try{
  const getMember = await ChannelMember.findOne({email});
  console.log(getMember);

  if(getMember){
    var result = {
      success:true, 
      message:`${getMember.email}님의 비밀번호는 ${getMember.member_password}입니다.`
    };
    console.log(result);
    res.redirect('/');
  } else{
    console.log("해당 유저는 존재하지 않습니다.");
  }
  } catch(error) {
    console.log(error);
}
});

module.exports = router;
