# BLOG

Qui è possibile trovare un progetto riguardante la creazione di un **blog**.
<br>

E' stato realizzato tramite l'utilizzo di [VueJS](https://vuejs.org/) e un framework css quale [Bootstrap 5](https://getbootstrap.com/), importati nel html.
<br>
Il progetto è stato ideao per un utilizzo unicamente **client-sided**, ovvero non presenta nessun aiuto esterno di un server o un database per ad esempio la memorizzazione di dati.

Tutto il codice JS è contenuto nel file [app.js](/app.js). Al suo interno è presente un oggetto che contiene tutti i campi e metodi utilizzati per il funzionamento dell'applicazione vue (creata utilizzando `Vue.createApp()`). Tutti i post visibili nel interfaccia del blog son presenti all'intero di un array. Per una realizzazione più efficace e immediata del codice son stati utilizzati i componenti Vue.

Le principali *features* presenti sono: 
- Post compatti ed **espandibili**
- **Immagini** per i post
- **Commenti** per i post
- **Like** ai commenti
- Nome e immagine del autore personalizzabili
- Strumento di **ricerca**
- Custom message **alert**
- **Tags** e **categoria** per i post
- Data di pubblicazione di un post