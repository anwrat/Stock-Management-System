const mongoose = require('mongoose');

const interiorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: int, required: true },
  image:{type:String,default:"https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"},
}, {
  collection: 'Interior'
});

module.exports = mongoose.model('Interior', interiorSchema);