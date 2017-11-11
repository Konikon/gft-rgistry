const express = require("express");
const gifteeRoutes = express.Router();
const Giftee = require("../models/giftee");

gifteeRoutes.get("/", (req, res)=>{
  Giftee.find(req.query,(err, giftees)=>{
    if(err) return res.status(400).send(err);
    return res.status(201).send(giftees);
  })
})

gifteeRoutes.get("/:id", (req, res)=>{
  Giftee.findById(req.params.id, (err, giftee)=>{
      if(err) return res.status(400).send(err);
      return res.status(201).send(giftee)
  })
})

gifteeRoutes.post("/", (req, res)=>{
  const newGiftee = new Giftee(req.body);
  newGiftee.save((err, savedGiftee)=>{
      if(err) return res.status(400).send(err);
      return res.status(201).send(savedGiftee);
  })
})

gifteeRoutes.delete("/:id", (req, res)=>{
  Giftee.findByIdAndRemove(req.params.id, (err, deletedGiftee)=>{
    if(err) return res.status(400).send(err);
    return res.status(201).send(deletedGiftee);
  })
})

gifteeRoutes.put("/:id", (req, res)=>{
  Giftee.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGiftee)=>{
    if(err) return res.status(400).send(err);
    return res.status(201).send(updatedGiftee);
  })
})



module.exports = gifteeRoutes;
