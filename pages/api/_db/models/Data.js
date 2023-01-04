import mongoose from "mongoose";

// This is a demo model! Create your own model files in this directory to model your data.

const DataSchema = new mongoose.Schema({
  movie: {
    type: Array,
  },
  series: {
    type: Array,
  },
});

// This is important in serverless environments: Check if the model exists and otherwise create a new one.
// The model name is the first parameter you pass to mongoose.model()

export const Data =
  mongoose.models.Data || mongoose.model("Data", DataSchema, "data");
