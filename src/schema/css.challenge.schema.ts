import mongoose from "mongoose";

const participantsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  result_link: {
    type: String,
    required: true,
  },
  pass: {
    type: Boolean,
    required: true,
  },
});

const csschallengeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  documentation_link: {
    type: String,
    required: true,
  },
  week: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: [String],
    required: true
  },
  xp: {
    type: Number,
    required: true
  },
  codepen_link:{
    type:String,
    required:true
  },
  participants_no: {
    type: Number,
    required: true,
  },
  participants:participantsSchema
});

export default csschallengeSchema;
