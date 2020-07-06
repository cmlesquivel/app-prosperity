const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const Schema = mongoose.Schema;

const ProfileSchema = Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    document: { type: Number, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

ProfileSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;

    bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

ProfileSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

module.exports = mongoose.model("Profile", ProfileSchema);
