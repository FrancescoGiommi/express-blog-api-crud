const express = require("express");
const router = express.Router();

/* Operazioni CRUD */

/* Index */
router.get("/", (req, res) => {
  res.json("Lista dei post");
});

/* Show */
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json("Visualizza il post" + " " + id);
});

/* Create */
router.post("/", (req, res) => {
  res.json("Crea il post");
});

/* Update */
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json("Modifica completamente il post" + " " + id);
});

/* Modify */
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json("Modifica parzialmente il post" + " " + id);
});

/* Delete */
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json("Cancellazione del post" + " " + id);
});

module.exports = router;
