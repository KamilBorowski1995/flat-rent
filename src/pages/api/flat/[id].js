import { MongoServerError, ObjectId } from "mongodb";

import clientPromise from "@/lib/MongoDB/clientPromise";

export default async function handler(req, res) {
  if (!req?.query?.id) return res.status(404).json({ message: "Not found" });

  const promise = await clientPromise("flats");
  try {
    const findResult = await promise.collection.findOne({
      _id: new ObjectId(req?.query?.id),
    });

    if (!findResult) return res.status(404).json({ message: "Not found" });
    promise.client.close();
    res.status(200).json({ payload: findResult });
  } catch (error) {
    promise.client.close();
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`); // special case for some reason
    }
    res.status(404).json({ error: error.message });
  }
}
