const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const getAllRoutes = require("./routes/getall");
const getAllMotorciclesRoutes = require("./routes/getAllMotorcicles");
const addPaymentRoutes = require("./routes/addPayment");
const addDataRoutes = require("./routes/addData");
const addInvesmentRoutes = require("./routes/addInvesment");
const addMotocicleRoutes = require("./routes/addMotorcicle");
const addCreditRoutes = require("./routes/addCredit");
const getPaymentRoutes = require("./routes/getPayment");
const changeInvesmentRoutes = require("./routes/changeInvesment");
const changeRegisterRoutes = require("./routes/changeRegister");
const getInvestorRoutes = require("./routes/getInvestor");
// const deleteRoutes = require("./routes/delete");
const registerRoutes = require("./routes/register");
const authenticateRoutes = require("./routes/authenticate");
const getDataAppRoutes = require("./routes/getDataApp");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use("/v1", addPaymentRoutes);
app.use("/v1", getAllMotorciclesRoutes);
app.use("/v1", getPaymentRoutes);
app.use("/v1", getDataAppRoutes);
app.use("/v1", addInvesmentRoutes);
app.use("/v1", addDataRoutes);
app.use("/v1", addMotocicleRoutes);
app.use("/v1", addCreditRoutes);
app.use("/v1", getInvestorRoutes);
app.use("/v1", changeInvesmentRoutes);
app.use("/v1", changeRegisterRoutes);
// app.use("/v1", deleteRoutes);
app.use("/v1", registerRoutes);
app.use("/v1", authenticateRoutes);

module.exports = app;
