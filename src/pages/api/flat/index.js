import clientPromise from "@/lib/MongoDB/clientPromise";
import FlatSchema from "@/schema/FlatSchema";
import { uuidv4 } from "@/utils/functions";

export default async function handler(req, res) {
  const promise = await clientPromise("flats");
  const page = 1;
  const perPage = 10;
  const schema = new FlatSchema({}).createValidate();
  const skipElement = (page - 1) * perPage;

  if (req.method === "POST") {
    // const insertResult = await promise.collection.insertOne({
    // req.params,
    // uuid: uuidv4()
    // });
    // promise.client.close();
  } else if (req.method === "GET") {
    const findResult = await promise.collection
      .find({})
      .skip(skipElement)
      .limit(perPage)
      .toArray();
    const limit = await promise.collection.countDocuments({});

    promise.client.close();
    const meta = { page: 1, perPage: 10, total: limit };

    res.status(200).json({ payload: findResult, meta });
  }
}
