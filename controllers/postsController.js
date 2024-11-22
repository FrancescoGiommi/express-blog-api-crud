/* Importo l'Array di posts */
const postsData = require("../data/posts");

/* Index */
function index(req, res) {
  res.json(postsData);
}

/* Show */
function show(req, res) {
  /* Recupero l'id e lo trasformo in numero */
  const id = parseInt(req.params.id);

  /* Cerco il post tramite l'id */
  const posts = postsData.find((post) => post.id == id);

  /* Faccio il controllo*/
  if (!posts) {
    res.status(404);

    return res.json({
      error: "Not found",
      message: "Post non trovato",
    });
  }

  res.json(posts);
}

/* Create */
function create(req, res) {
  /* Creo un nuovo id incrementando l'ultimo id presente */
  const newId = postsData[postsData.length - 1].id + 1;

  /* Creo il nuvove oggetto post */
  const newPost = {
    id: newId,
    titolo: req.body.titolo,
    contenuto: req.body.contenuto,
    immagine: req.body.immagine,
    tags: req.body.tags,
  };

  /* Pusho il nuovo oggetto nell'array */
  postsData.push(newPost);

  /* Imposto lo status a 201 */
  res.status(201);

  /* Restituisco il nuovo post */
  res.json(newPost);
}

/* Update */
function update(req, res) {
  /* Recupero l'id e lo trasformo in numero */
  const id = parseInt(req.params.id);

  /* Cerco il post tramite l'id */
  const post = postsData.find((post) => post.id == id);

  /* Faccio il controllo*/
  if (!post) {
    res.status(404);

    return res.json({
      error: "Not found",
      message: "Post non trovato",
    });
  }

  /* Aggiorno il post */
  post.titolo = req.body.titolo;
  post.contenuto = req.body.contenuto;
  post.immagine = req.body.immagine;
  post.tags = req.body.tags;

  /* Stampo l'Array in console */
  console.log(postsData);

  /* Genero il post aggiornato */
  res.json(post);
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

  /* Faccio il controllo*/
  if (!posts) {
    res.status(404);

    return res.json({
      error: "Not found",
      message: "Post non trovato",
    });
  }

  const postsIndex = postsData.indexOf(posts);
  postsData.splice(postsIndex, 1);
  console.log(postsData);
  res.status("204").json();
}

/* Esporto tutte le funzioni */
module.exports = { index, show, create, update, modify, destroy };
