import mongoose from "mongoose";


const opensourceSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  repo_url: {
    type: String,
    required: true,
  },
  tech_stack: {
    type: Array,
    required: true,
  },
  admin_name: {
    type: String,
    required: true,
  },
  admin_email: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },

  description: {
    type: Array,
    required: true,
  },
});
export default opensourceSchema;
