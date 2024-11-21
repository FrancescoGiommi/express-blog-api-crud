/* Index */
function index(req, res) {
  res.json("Lista dei post");
}

/* Show */
function show(req, res) {
  const id = parseInt(req.params.id);
  res.json("Visualizza il post" + " " + id);
}

/* Create */
function create(req, res) {
  res.json("Crea il post");
}

/* Update */
function update(req, res) {
  const id = parseInt(req.params.id);
  res.json("Modifica completamente il post" + " " + id);
}

/* Modify */
function modify(req, res) {
  const id = parseInt(req.params.id);
  res.json("Modifica parzialmente il post" + " " + id);
}

/* Delete */
function destroy(req, res) {
  const id = parseInt(req.params.id);
  res.json("Cancellazione del post" + " " + id);
}

module.exports = { index, show, create, update, modify, destroy };
