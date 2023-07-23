const db = require("../db/db");
const router = require("express").Router();

router
  .route("/t/:ticketId")
  .get((req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    res.status(200).json(ticket);
  })
  .patch((req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.updateById(ticketId, req.body);
    res.status(200).json(ticket);
  })
  .delete((req, res) => {
    db.deleteById(req.params.ticketId);
    res.status(203);
  });

router
  .route("/t/:username")
  .get((req, res) => {
    const username = req.params.username;
    const tickets = db.findByUsername(username);
    res.status(200).json(tickets);
  })
  .patch((req, res) => {
    const username = req.params.username
    const ticketBody = req.body
    const tickets = db.updateByUsername(username, ticketBody)
    return tickets
  })
  .delete((req, res) => {});

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = db.create(username, price);
  res.status(201).json({ message: "Ticket creation successful", ticket });
});

router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = db.bulkCreate(username, price, quantity);
  res.status(201).json({ message: "Tickets created successfully", tickets });
});

router.get("/draw", (req, res) => {
  const winnerCount = req.params.wc ?? 3;
  const winners = db.draw(winnerCount);
  res.status(200).json(winners);
});

router.get("", (_req, res) => {
  res.status(200).json(db.find());
});

module.exports = router;
