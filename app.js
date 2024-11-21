//! Giorno 1

/* Esercizio

Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire 
con nuove funzionalità sulla base di quello che impareremo.

Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”

Creiamo un array dove inserire una lista di almeno 5 post, 
per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, 
partendo da un array.

Configuriamo gli asset statici sull’applicazione in modo che si possano 
visualizzare le immagini associate ad ogni post.

Testare le chiamate su Postman! */

//! Giorno 2

/* Esercizio

Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) 
che conterrà le rotte necessario per l'entità post.

All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, 
secondo le convenzioni REST.Ad esempio:

Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;

Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
e via dicendo…

Registrare il router dentro app.js con il prefisso posts/.

Bonus

Provare a restituire la lista dei post dalla rotta index, in formato json

Provare a restituire un singolo post dalla rotta show, sempre in formato json */

//! Giorno 3

/* Milestone 1
Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.

All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica 
delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).

Poi torniamo sul file delle rotte. 
Qui importiamo le funzioni dichiarate nel controller e 
le associamo alle varie rotte, come visto in classe.

Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
Se tutto funziona, passiamo alla prossima milestone

Milestone 2

Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti l’array
 di posts che trovate in allegato. 
 
 Importiamo questo file in cima al controller.

Ora passiamo ad implementare le logiche delle nostre CRUD:

    Index dovrà restituire la lista dei post in formato JSON
    Show dovrà restituire un singolo post in formato JSON
    Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

Bonus

    Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
    In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON. */

/* Import express */
const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");

/* First route */
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

/* List object */
const bachecaPost = [
  {
    /* Post 1 */
    id: "1",
    titolo: "Ciambellone",
    contenuto: "Ricetta ciambellone",
    immagine: "images/ciambellone.jpeg",
    tags: ["ciambellone", "ricetta", "dolce"],
  },
  {
    /* Post 2 */
    id: "2",
    titolo: "Cracker alla barbabietola",
    contenuto: "Ricetta cracker alla barbabietola",
    immagine: "images/cracker_barbabietola.jpeg",
    tags: ["cracker", "spuntino", "dolce"],
  },
  {
    /* Post 3 */
    id: "3",
    titolo: "Pane fritto dolce",
    contenuto: "Ricetta pane fritto dolce",
    immagine: "images/pane_fritto_dolce.jpeg",
    tags: ["pane fritto dolce", "ricetta", "dolce"],
  },
  {
    /* Post 4 */
    id: "4",
    titolo: "Pasta alla barbabietola",
    contenuto: "Ricetta pasta alla barbabietola",
    immagine: "images/pasta_barbabietola.jpeg",
    tags: ["pasta alla barbabietola", "ricetta", "pasta"],
  },
  {
    /* Post 5 */
    id: "5",
    titolo: "Torta paesana",
    contenuto: "Ricetta Torta paesana",
    immagine: "images/torta_paesana.jpeg",
    tags: ["torta paesana", "ricetta", "dolce"],
  },
];

/* Static asset for images */
app.use(express.static("images"));

app.use("/posts", postsRouter);

/* Bacheca route */
app.get("/bacheca", (req, res) => {
  const data = {
    bachecaPost: bachecaPost,
    length: bachecaPost.length,
  };
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port`);
});
