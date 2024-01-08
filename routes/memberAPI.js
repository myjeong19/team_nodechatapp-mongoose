const express = require('express');
const router = express.Router();
const Member = require('../schemas/member');

router.get('/all', async (req, res, next) => {
  try {
    const members = await Member.find({});
    res.json(members);
  } catch (error) {
    console.log(error);
  }
});

router.post('/create', async (req, res, next) => {
  const {
    email,
    member_password,
    name,
    profile_img_path,
    telephone,
    entry_type_code,
    use_state_code,
    reg_member_id,
  } = req.body;

  const createMember = {
    email,
    member_password,
    name,
    profile_img_path,
    telephone,
    entry_type_code,
    use_state_code,
    reg_member_id,
  };

  try {
    const DuplicateTest = await Member.findOne({
      email,
    });

    if (email !== DuplicateTest) {
      await Member.create(createMember);
      console.log('회원 가입이 완료되었습니다.');
    } else {
      console.log('이미 가입한 아이디 입니다.');
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/modify', async (req, res, next) => {
  const selectedUser = req.query.email;

  const {
    email,
    member_password,
    name,
    profile_img_path,
    telephone,
    entry_type_code,
    use_state_code,
    reg_member_id,
  } = req.body;

  const updatedMember = {
    email,
    member_password,
    name,
    profile_img_path,
    telephone,
    entry_type_code,
    use_state_code,
    reg_member_id,
  };

  try {
    await Member.updateOne({ email: selectedUser }, updatedMember);
  } catch (error) {
    console.log(error);
  }
});

router.post('/delete', async (req, res, next) => {
  const selectedUser = req.query.email;

  try {
    await Member.deleteOne({ email: selectedUser });
  } catch {
    consolelog(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const getMember = req.params.id;
  try {
    const selectedMember = await Member.findOne({
      member_id: getMember,
    });
    res.json(selectedMember);
  } catch (error) {
    console.log('ERROR: 에러가 발생했습니다 관리자에게 문의하세요.');
  }
});

module.exports = router;
