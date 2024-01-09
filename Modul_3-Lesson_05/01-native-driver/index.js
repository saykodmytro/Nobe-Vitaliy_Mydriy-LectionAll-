const { MongoClient } = require("mongodb");

const DB_URI = `mongodb+srv://student:0xQT0gqSMPo3IzBv@cluster0.e42dgc7.mongodb.net/`;

const client = new MongoClient(DB_URI);

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.info(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

run();
