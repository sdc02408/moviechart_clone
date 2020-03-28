const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchemab = mongoose.Schema({
  userFrom: {
    type: Schema.Types.ObjectID, //이걸로 userb에있는걸 다 알 수 있어
    ref: 'Userb'//모델지정
  },
  movieId: {
    type: String
  },
  movieTitle: {
    type: String
  },
  moviePost: {
    type: String
  },
  movieRunTime: {
    type: String
  }
},{timestamps:true})

const Favoriteb = mongoose.model('Favoriteb',favoriteSchemab);

module.exports = {  Favoriteb }
