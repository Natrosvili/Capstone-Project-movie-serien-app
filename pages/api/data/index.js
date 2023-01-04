import connectDB from "../_db/connect-db";
import {Data} from "../_db/models/Data";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const data = await Data.find({});
        console.log(data);
        res.status(200).json(data[0]);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;
    default:
      return res.status(400).json({error: "method not supported"});
  }
}

export default connectDB(handler);
