const mongoose = require('mongoose');

const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;

const channelSchema = new Schema({
  community_id: {
    type: Number,
    required: true,
  },
  category_code: {
    type: Number,
    required: true,
  },
  channel_name: {
    type: String,
    required: true,
  },
  user_limit: {
    type: Number,
    required: false,
  },
  channel_img_path: {
    type: String,
    required: true,
  },
  channel_desc: {
    type: String,
    required: false,
  },
  channel_state_code: {
    type: Number,
    required: true,
  },

  reg_date: {
    type: Date,
    default: Date.now,
  },
  reg_member_id: {
    type: Number,
    required: true,
  },

  edit_date: {
    type: Date,
    default: Date.now,
  },
  edit_member_id: {
    type: Number,
    required: false,
  },
});

channelSchema.plugin(AutoIncrement, { inc_field: 'channel_id' });

module.exports = mongoose.model('Channel', channelSchema);
// mongoose.model('이름', 구조 정의 클래스) 호출해 물리적인 콜렉션을 생성해줌
