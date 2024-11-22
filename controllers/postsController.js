/* Importo l'Array di posts */
const postsData = require("../data/posts");

/* Index */
function index(req, res) {
  res.json(postsData);
}

/* Show */
function show(req, res) {
  const id = parseInt(req.params.id);
  const posts = postsData.find((post) => post.id == id);
  res.json(posts);
}

/* Create */
function create(req, res) {
  /* Creo un nuovo id incrementando l'ultimo id presente */
  const newId = postsData[postsData.length - 1].id + 1;

  const newPost = {
    id: newId,
    titolo: req.body.titolo,
    contenuto: req.body.contenuto,
    immagine: req.body.immagine,
    tags: req.body.tags,
  };

  postsData.push(newPost);
  res.status(201);
  res.json(newPost);
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
  const posts = postsData.find((post) => post.id == id);
  const postsIndex = postsData.indexOf(posts);
  postsData.splice(postsIndex, 1);
  console.log(postsData);
  res.status("204").json();
}

/* Esporto tutte le funzioni */
module.exports = { index, show, create, update, modify, destroy };
