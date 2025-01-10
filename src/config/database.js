import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@starwars-api.wcw8f.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
