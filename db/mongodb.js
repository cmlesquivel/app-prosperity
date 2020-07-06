const mongose = require("mongoose");

mongose.connection.on("open", () => {
  console.log("Conectado a la BD...");
});

async function connectDb({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  await mongose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectDb;
