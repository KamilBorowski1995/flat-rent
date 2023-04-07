import { MongoClient } from "mongodb";

if (!process.env.MONGO_DB_USER || !process.env.MONGO_DB_PASS) {
  throw new Error("Add Mongo user or password to .env.local");
}

const client = new MongoClient(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_URI}/?retryWrites=true&w=majority`
);

const dbName = "flats";

const clientPromise = async (collectionName) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  return { collection, client };
};
export default clientPromise;
