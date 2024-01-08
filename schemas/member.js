const mongoose = require('mongoose');

const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;

const memberSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  member_password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profile_img_path: {
    type: String,
    required: false,
  },
  telephone: {
    type: String,
    required: true,
  },
  entry_type_code: {
    type: Number,
    required: true,
  },
  use_state_code: {
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

memberSchema.plugin(AutoIncrement, { inc_field: 'member_id' }); //article_id는 1,2,3,4..

module.exports = mongoose.model('Member', memberSchema);
// mongoose.model('이름', 구조 정의 클래스) 호출해 물리적인 콜렉션을 생성해줌
