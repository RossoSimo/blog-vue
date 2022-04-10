const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // month's numbers to name helper
const regex = new RegExp('(http)?s?:?(\\/\\/[^"\']*\\.(?:png|jpg|jpeg|gif|png|svg))', 'gm'); // image url checker

const Blog = {
    data() {
        return {
            posts: [
                {
                    title: "Cristiano Ronaldo da non credere: la reazione violenta contro un tifoso",
                    text: `Nelle immagini che hanno già fatto il giro del web, Ronaldo e compagni vengono fischiati e disturbati all'uscita dal campo dopo la sfida di campionato.
                    L'attaccante dei Red Devils, che portava un parastinchi nella mano sinistra dopo aver subito un brutto taglio alla gamba sinistra, a questo punto reagisce e sembra distruggere quello che sembra essere il telefono di un tifoso dell'Everton. Come riferisce il Mirror, lo United non ha voluto commentare l'incidente e sta attualmente esaminando la questione.
                    "Non è mai facile affrontare le emozioni in momenti difficili come quello che stiamo affrontando - ha poi aggiunto in un post pubblicato su Instagram - Tuttavia, dobbiamo sempre essere rispettosi, pazienti e dare l'esempio a tutti i giovani che amano questo bel gioco.
                    Vorrei scusarmi per il mio sfogo e, se possibile, vorrei invitare questo tifoso a guardare una partita all'Old Trafford in segno di fair-play e sportività".`,
                    tag: ["calcio", "cristiano", "premier"],
                    category: "sport",
                    comments: [
                        {author: "Daniele", text: "vai fra!", likes: 9, liked: false},
                        {author: "Matteo", text: "Grande vittoria", likes: 5, liked: false}
                    ],
                    image: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/9/2019/08/LP_8611563-768x512.jpg",
                    author: {
                        image: "https://static-sosfanta.calciomercato.com/wp-content/uploads/2021/09/11152856/aramu-e1631366943446.jpg",
                        name: "Mattia Aramu",
                    },
                    date: {
                        day: "21",
                        month: "Jenuary",
                        year: "2022"
                    },
                    expanded: false,
                },
                {
                    title: 'Balotelli: "Manco solo quando si perde... Fa male l\'Italia fuori, voglio bene a Mancini"',
                    text: `La sconfitta contro la Macedonia del Nord ancora brucia. Non vedere l\'Italia in Qatar è un mix di delusione e frustrazione, non solo tra i tifosi ma anche per chi veste (o ha vestito) la maglia azzurra.
                    Come Mario Balotelli che, intervistato da Peppe Di Stefano, ha confessato: "La sconfitta dell\'Italia ha fatto male a tutti. Anche io sono stato molto male. Non è solo la mancata convocazione contro la Macedonia.  Col Mondiale a dicembre, la possibilità di tornare in nazionale c\'era comunque. Non è che le porte erano chiuse: ho perso un\'opportunità importante anche io. Fa davvero male vedere l\'Italia fuori dal Mondiale".`,
                    tag: ["calcio", "italia", "jorginho"],
                    category: "sport",
                    comments: [
                        {author: "Paolo", text: "paolo", likes: 2, liked: false}
                    ],
                    image: null,
                    author: {
                        image: "https://static.fanpage.it/wp-content/uploads/sites/27/2020/08/mario-balotelli.jpg",
                        name: "Super Mario Balotelli",
                    },
                    date: {
                        day: "9",
                        month: "February",
                        year: "2022"
                    },
                    expanded: false,
                },
                {
                    title: 'Thelonious B.: «La nostra arte? Non si può spiegare, è come svelare la magia»',
                    text: `I Thelonious B. sono un gruppo post-trap e collettivo romano, formato dai rapper THB Brown, THB Kirua (che si è unito successivamente), il produttore BRBK e dal grafico Zomby Roger. La B del nome indica l’iniziale di Brown, BRBK e del cognome di Junior Roger.

                    Nel 2013 esce il mixtape Grinder Shit Vol.1 di Mr. Brown e Doc Borbuka, pubblicato a nome Doc e Brown; successivamente entrano nel collettivo Do Your Thang.
                    Nel 2015 Brown pubblica English Breakfast, progetto in collaborazione con Rubber Soul, produttore di casa DYT.

                    Il 3 maggio 2017 esce MOOD, raccolta di brani già pubblicati su YouTube, rilasciata in free download su SoundCloud. Il progetto raccoglie 14 brani, pubblicati uno alla settimana da gennaio ad aprile.Ad agosto dello stesso anno esce The Soso Summer Diet, tre brani prodotto da BRBK in attesa dell’album d’esordio.
                    Il 29 giugno 2018 esce Soso, il primo album dei Thelonious B pubblicato in maniera indipendente, prodotto interamente da BRBK e senza featuring. A luglio esce Telespalla Bob // 3018, doppio singolo di Radical che vede Telespalla Bob in collaborazione coi Thelonious B.
                    
                    Il 16 settembre 2019 esce Lobby, singolo di THB Kirua, Daytona KK e Radical, prodotto da Beakonthenight, mentre a ottobre esce Dr. Jeffrey e Mr. Hype, album di Jordan Jeffrey, che vede la collaborazione di Kirua e Brown per Brutta Abitudine.
                    
                    Il 2020 si apre con On Gang, singolo prodotto da Beak, pubblicato inizialmente su YouTube con un video ufficiale e poi il 27 gennaio sui digital stores per Thaurus.
                    
                    Il 6 marzo esce Polka, singolo di Rosa Chemical in collaborazione coi Thelonious B. prodotto da Greg Willen. Il singolo è estratto da Forever, il primo disco ufficiale di Rosa. Tre giorni dopo esce il video ufficiale, curato da Luca La Piana, Riccardo Cagnotto e Matteo Croci.`,
                    tag: ["Droga", "Trap", "Lobby", "Rosa", "Album", "THB"],
                    category: "Musica",
                    comments: [
                        {author: "Radical", text: "tu non sei della lobby!", likes: 2, liked: false}
                    ],
                    image: "https://upload.wikimedia.org/wikipedia/it/thumb/8/8d/Polka_Rosa_Chemical.jpeg/1200px-Polka_Rosa_Chemical.jpeg",
                    author: {
                        image: "https://www.accordiespartiti.it/wp-content/uploads/2022/01/rosa-chemical.gif",
                        name: "Rosa Chemical",
                    },
                    date: {
                        day: "18",
                        month: "April",
                        year: "2021"
                    },
                    expanded: false,
                }
            ],

            // default categories
            categories: ["sport", "film", "informatica", "scuola", "ambiente", "economia", "networking", "lavoro", "musica"],

            focusComment: [], // post with comment widnow expanded

            // popups
            newPostTriggered: false,
            settingsTriggered: false,

            // default account settings
            accountName: "You",
            imageAccountUrl: "https://www.sanitascare.it/wp-content/uploads/2017/04/default-user-image.png",

            search: "", // filter
            alerts: [], // live alerts
        }
    },
    methods: {
        // open popups
        openNewPost() {
            if(this.settingsTriggered) {
                return;
            }
            this.newPostTriggered = true;
            document.body.style.overflow = "hidden";
        },
        openSettings() {
            if(this.newPostTriggered) {
                return;
            }
            this.settingsTriggered = true;
            document.body.style.overflow = "hidden";
        },

        // posts handlers
        deletePost(index) {
            this.posts.splice(index,1);
        },
        deleteAll() {
            this.posts = []
        },
        addPost(title, text, tag, category, imageURL) {
            if(text == undefined || title == undefined || category == undefined) {
                this.pushErrorAlert();
                return; 
            }
            if(text.trim().length == 0 || title.trim().length == 0) {
                this.pushErrorAlert();
                return;
            }
            if(category.trim().length == 0) {
                this.pushErrorAlert();
                return;
            }

            if(!category in this.categories) {
                addCategory(category);
            }

            let url;
            if(!imageURL || imageURL.length == 0) {
                url = null;
            } else {
                try {
                    url = new URL(imageURL);
                    if(!regex.test(url.toString())) {
                        this.pushErrorImgAlert();
                        return false;  
                    }
                } catch (_) {
                    this.pushErrorImgAlert();
                    return false;  
                }
            }

            let tags = [];
            if(tag.length != 0) {
                tags = tag.split(",");
                tags.forEach(i => i.trim());
            }

            tags = new Set(tags); // prevent duplicate tags
            
            // calculate data
            let today = new Date();

            // add post
            this.posts.push({
                title: title.trim(),
                text: text.trim(),
                tag: tags,
                category: category.trim(),
                comments: [],
                image: url,
                author: {
                    image: this.imageAccountUrl,
                    name: this.accountName,
                },
                date: {
                    day: today.getDate(),
                    month: monthNames[today.getMonth()],
                    year: today.getFullYear()
                }
            });

            this.newPostTriggered = false; // close popup
            document.body.style.overflow = '';

            // add alert
            this.alerts.push({
                type: 'success',
                msg: 'Success! New post added successfully',
                id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
            })
        },
        expandPost(items, index) {
            items.expanded = true;
            const card = document.getElementById(`${items.text.length}-${index}`);
            card.style.height = 'auto';

           const right = document.getElementById(`${items.text.length}-${index}-right`);
           right.style.marginLeft = '30px';
        },
        unexpandPost(items, index) {
            items.expanded = false;
            const card = document.getElementById(`${items.text.length}-${index}`);
            card.style.height = '450px';

            const right = document.getElementById(`${items.text.length}-${index}-right`);
            right.style.marginLeft = '590px';
        }, 

        // alerts handlers
        pushErrorAlert() {
            this.alerts.push({
                type: 'danger',
                msg: 'Error! Title, body and category must be specified.',
                id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
            })
        },
        pushErrorImgAlert() {
            this.alerts.push({
                type: 'danger',
                msg: 'Error! Not a valid image URL.',
                id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
            })
        },

        // sites hanlders
        changeSettings(name, imageURL) {
            if(name == undefined || name.trim().length == 0) {
                this.alerts.push({
                    type: 'danger',
                    msg: "Error! Name can't be empty or must be less than 30 char.",
                    id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
                });
                return;
            }
            if(name.trim().length >= 30) {
                this.alerts.push({
                    type: 'danger',
                    msg: "Error! Name can't be empty or must be less than 30 char.",
                    id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
                });
                return;
            }
            let url;
            if(imageURL == undefined) {
                url = this.imageAccountUrl;
            } else {
                if(imageURL.trim().length == 0)
                    url = this.imageAccountUrl;
                else {
                    try {
                        url = new URL(imageURL);
                        if(!regex.test(url.toString())) {
                            this.pushErrorImgAlert();
                            return false;  
                        }
                    } catch (_) {
                        this.pushErrorImgAlert();
                        return false;  
                    }
                }
            }
            
            this.accountName = name.trim();
            this.imageAccountUrl = url;

            this.settingsTriggered = false;
            document.body.style.overflow = '';

            this.alerts.push({
                type: 'success',
                msg: "Success! Account settings have been changed.",
                id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
            });
        },
        addCategory(cat) {
            this.categories.push(cat);
        },
          
        // comments
        openComment(index, l) {
            this.focusComment.push(`${l}-${index}`); 
        },
        closeComment(index, l) {
            this.focusComment.splice(this.focusComment.indexOf(`${l}-${index}`), 1);
        },
        addComment(item, com) {
            if(!com) {
                this.alerts.push({
                    type: 'danger',
                    msg: "Error! comment body can't be empty",
                    id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
                })
                return;
            }
            if(com.length > 500) {
                this.alerts.push({
                    type: 'danger',
                    msg: "Error! comment body is too long",
                    id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
                })
                return;
            }
            item.comments.push({
                author: this.accountName,
                text: com,
                likes: 0,
                liked: false
            });

        },
        deleteComment(items, index) {
            items.comments.splice(index, 1);
        },
        likeComment(item) {
            if(item.liked) {
                item.liked = false;
                item.likes--;
            } else {
                item.liked = true;
                item.likes++;
            }
        },
    }
}

const app = Vue.createApp(Blog);

// new post popup
app.component('newpost', {
    methods: {
        closeNewPost() {
            this.$parent.newPostTriggered = false;
            document.body.style.overflow = '';
        },
    },
    template:
        `
        <div class="popup">
            <div class="popup-inner">
                <div class="d-grid d-md-flex justify-content-md-between">
                    <div class="d-inline">
                        <h2>New Post</h2>
                    </div>
                    <button type="button" class="btn-close" v-on:click="closeNewPost()" aria-label="Close"></button>
                </div>
                <slot></slot>
            </div>
        </div>
        `,
});

// account settings popup
app.component('settings', {
    methods: {
        closeSettings() {
            this.$parent.settingsTriggered = false;
            document.body.style.overflow = '';
        }
    },
    template:
        `
        <div class="popup">
            <div class="popup-inner">
                <div class="d-grid d-md-flex justify-content-md-between">
                    <div class="d-inline">
                        <h2>Settings</h2>
                    </div>
                    <button type="button" class="btn-close" v-on:click="closeSettings()" aria-label="Close"></button>
                </div>
                <slot></slot>
            </div>
        </div>
        `,
});

// post's comments
app.component('comment', {
    props: ['item'],
    methods: {
    },
    template:
        `<p>{{item.author}}: {{item.text}}</p>`
});

// post's tags
app.component('tags', {
    props: ['item'],
    template:
        `<span class="badge alert-primary my-1" style="margin-right: 5px;">{{item}}</span>`
});

// alert's body
app.component('alertmsg', {
    props: ['a'],
    data() {
        return {
            timeout: null,
        }
    },
    computed: {
        typeClass() {
            return `alert-${this.a.type}`; // variable alert's type
        }
    },
    created() {
        this.timeout = setTimeout(() => {
            this.removeAlert(this.a);
        }, 5000);
    },
    beforeDestroy() {
        clearTimeout(this.timeout);
    },
    methods: {
        removeAlert(alertToRemove) {
            this.$parent.$parent.alerts = this.$parent.$parent.alerts.filter(b => b.id != alertToRemove.id);
        }
    },
    template:
        `
        <div class="row justify-content-center">
            <div class="col-md-10 col-md-offset-1" style="width: 80%">
                <div :class="typeClass" class="alert alert-dismissible fade show fadeInDown" role="alert">
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    {{a.msg}}
                </div>
            </div>
        </div>
        `
});

// alert handler
app.component('alertlist', {
    props: ["alerts"],
    template:
        `
        <div class="container-fluid m-0 p-0">
            <div class="position-fixed justify-content-center my-5 m-0 top-0" style="width: 100%">
                <alertmsg 
                    v-for="a in alerts"
                    :key="a.id"
                    :a="a"
                />
            </div>
        </div>
        `
});

app.mount('#blog')