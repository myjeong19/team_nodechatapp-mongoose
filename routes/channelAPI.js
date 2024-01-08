const express = require('express');
const router = express.Router();

const channelList = [
  {
    channel_id: '0',
    category_code: '01',
    channel_name: '두부 조아',
    channel_desc: '두부를 좋아하는 사람들의 모임',
    user_limit: '130',
    channel_img_path: null,
    channel_state_code: 'Y',
    reg_date: new Date(),
    reg_member_id: 'myjeong19',
    edit_date: new Date(),
    edit_member_id: 'myjeong19',
  },
  {
    channel_id: '1',
    category_code: '02',
    channel_name: '시공 조아',
    channel_desc: '시공을 좋아하는 사람들의 모임',
    user_limit: '150',
    channel_img_path: null,
    channel_state_code: 'Y',
    reg_date: new Date(),
    reg_member_id: 'myjeong19',
    edit_date: new Date(),
    edit_member_id: 'myjeong19',
  },
  {
    channel_id: '2',
    category_code: '01',
    channel_name: '물 조아',
    channel_desc: '물을 좋아하는 사람들의 모임',
    user_limit: '130',
    channel_img_path: null,
    channel_state_code: 'Y',
    reg_date: new Date(),
    reg_member_id: 'myjeong19',
    edit_date: new Date(),
    edit_member_id: 'myjeong19',
  },
];

router.get('/all', async (req, res, next) => {
  try {
    res.json(channelList);
  } catch (error) {
    console.log('ERROR: 에러가 발생했습니다 관리자에게 문의하세요.');
  }
});

router.post('/create', async (req, res, next) => {
  const {
    channel_id,
    category_code,
    channel_name,
    channel_desc,
    user_limit,
    channel_img_path,
    channel_state_code,
    reg_date,
    reg_member_id,
    edit_date,
    edit_member_id,
  } = req.body;

  const newChannel = {
    channel_id,
    category_code,
    channel_name,
    channel_desc,
    user_limit,
    channel_img_path,
    channel_state_code,
    reg_date,
    reg_member_id,
    edit_date,
    reg_date: new Date(),
    edit_member_id,
    edit_date: new Date(),
  };

  try {
    const updatedChannelList = [...channelList, newChannel];

    res.json(updatedChannelList);
  } catch (error) {
    console.log('ERROR: 에러가 발생했습니다 관리자에게 문의하세요.');
  }
});

router.get('/modify/:id', async (req, res, next) => {
  try {
    const findId = req.params.id;

    res.json(channelList[findId]);
  } catch (error) {
    console.log('ERROR: 에러가 발생했습니다 관리자에게 문의하세요.');
  }
});

router.post('/modify/:id', async (req, res, next) => {
  try {
    const getChannel = channelList.find(
      channel => channel.channel_id !== req.body.channel_id
    );

    res.json(getChannel);
  } catch (error) {
    console.log('ERROR: 에러가 발생했습니다 관리자에게 문의하세요.');
  }
});

router.post('/delete', async (req, res, next) => {
  try {
    const updatedChannelList = channelList.filter(
      channel => channel.channel_id == req.body.channel_id
    );

    res.json(updatedChannelList);
  } catch (error) {
    console.log('ERROR: 에러가 발생했습니다 관리자에게 문의하세요.');
  }
});

module.exports = router;
