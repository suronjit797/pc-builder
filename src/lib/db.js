
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    // eslint-disable-next-line no-console
    console.log("## Database connection established");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default connectMongo;
