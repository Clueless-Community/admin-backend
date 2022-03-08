import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
  },
  codepen_link: {
    type: String,
  },
  gitHub_link: {
    type: String,
  },

  deployed_url: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  college: {
    type: String,
    required: true,
  },
  gitHub_link: {
    type: String,
    required: true,
  },
  twitter_link: {
    type: String,
    required: true,
  },

  linkedIn_link: {
    type: String,
    required: true,
  },

  portfolio_link: {
    type: String,
    required: true,
  },
  blog_link: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  tech_stack: {
    type: Array,
    required: true,
    unique: true,
  },
  xp: {
    type: Number,
  },
  level: {
    type: Number,
  },
  badges: {
    type: Array,
  },

  user_projects: projectSchema,
});

export default UserSchema;
