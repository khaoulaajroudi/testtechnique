const express = require("express");
const Contact = require("../models/contact");

// initialisation
const ContactRouter = express.Router();

ContactRouter.get("/all", async (req, res) => {
  try {
    let result = await Contact.find();
    res.send({ result, msg: " All Contacts" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
ContactRouter.post("/add", async (req, res) => {
  try {
    let newContact = new Contact({ ...req.body });
    let result = await newContact.save();
    res.send({ result, msg: "sucefuly add" });
    console.log(result);
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

ContactRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Contact.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " delete Contact" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

ContactRouter.get("/:id", async (req, res) => {
  try {
    let result = await Contact.findById({ _id: req.params.id });
    res.send({ result, msg: " get one" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

ContactRouter.put("/:id", async (req, res) => {
  try {
    let result = await Contact.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ newContact: result, msg: "contact updated.." });
  } catch (error) {
    res.status(500).send("cannot update the contact..");
    console.log(error);
  }
});

module.exports = ContactRouter;
