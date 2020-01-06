const mongoose = require('mongoose');

const { Schema } = mongoose;

const lessonSchema = Schema({
  title: { type: String, required: true },
  description: String,
  _teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
  _students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
});

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;