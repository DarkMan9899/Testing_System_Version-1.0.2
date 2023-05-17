const { model } = require("mongoose");

const QType_1 = model("QType_1", {
  question: String,
  answer_1: String,
  answer_2: String,
  answer_3: String,
  answer_4: String,
  answer_5: String,
  answer_6: String,
  score: Number,
  type: Number,
  level: Number,
  correct: String,
  subject: String
});

const QType_2 = model("QType_2", {
  question: String,
  answer_1: String,
  answer_2: String,
  answer_3: String,
  answer_4: String,
  score: Number,
  type: Number,
  level: Number,
  correct: String,
  subject: String
});

const QType_3 = model("QType_3_test", {
  question: String,
  score: Number,
  type: Number,
  level: Number,
  correct: Boolean,
  subject: String
});

const QType_4 = model("QType_4", {
  question: String,
  answer_1: String,
  answer_2: String,
  answer_3: String,
  answer_4: String,
  answer_5: String,
  answer_6: String,
  score: Number,
  type: Number,
  level: Number,
  correct: String,
  subject: String

});

module.exports = { QType_1, QType_2, QType_3, QType_4 }