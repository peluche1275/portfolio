
Vue.component('title-section', {
    props: ['info'],
    template: '<div class="row"><div class="col-md-12"><h2> {{ info.title }} </h2></div></div>'
})

Vue.component('projects-section', {
    props: ['info'],
    template: '<div class="projects col"><a :href="info.link"><figure><img :src="info.picture" alt="miniature de projet"><figcaption>{{ info.title }}</figcaption></figure></a></div>'
})


new Vue({
    el: '#app',
    data: {

        presentation: "<p><span class='gras'>Développeur Web</span>, c’est comme ça que je me défini aujourd’hui.<br /><span class='gras'>Diplômé d’un BAC+2</span> en <span class='gras'>développement web</span> chez <span class='gras'>OpenClassRooms</span>.</p><p><span class='gras'>Avant</span> cela j’ai pu travailler dans <span class='gras'>l’univers administratif et commercial,<br />ce qui a confirmé ma volonté de travailler dans le domaine du digital.</span></p><p>Étant le plus à l’aise avec <span class='gras'>JavaScript</span> mais <span class='gras'>ouvert à tout langages</span>,<br /><span class='gras'>je cherche</span> maintenant un poste <span class='gras'>Front-end, Back-end ou les deux !</span></p>",

        skills: [
            { id: 0,icon: 'fab fa-js-square', text: "JavaScript m’a servi dans tout mes projets, principalement  pour  le front-end, et j’apprends à l’utiliser maintenant dans le  back-end.", title: 'JavaScript' },
            { id: 1,icon: 'fab fa-vuejs', text: "Vue.JS a été utilisé pour  réalisé le  front-end de ce site ainsi  que le celui  d’un  autre projet : ‘Tic Tac Toe’.", title: 'Vue.JS' },
            { id: 2,icon: 'fab fa-node-js', text: "Actuellement en train de travailler sur un projet utilisant Node.JS, je lis également le  livre  de  Eric Sarrion afin de  comprendre ce framework  en profondeur.", title: 'NodeJS' },
            { id: 3,icon: 'fab fa-bootstrap', text: "Bootstrap est le framework que j’utilise pour faire le responsive, notamment avec sa version 4 qui gère le flexbox.", title: 'Bootstrap' },
            { id: 4,icon: 'fab fa-php', text: "PHP est le langage avec lequel  j’ai commencé à  programmer  en orienté objet. J’ai  pu réalisé durant ma formation un framework  personnalisé.", title: 'PHP' },
            { id: 5,icon: 'fab fa-python', text: "Dans le  but de découvrir d’autre horizons,  j’ai voulu  me  mettre à utilisé  Python,  j’ai  pu  avec ce langage m’exercer à utiliser la méthode TDD", title: 'Python' }
        ],

        projects: [
            { picture: 'pictures/todolist.webp',  title: 'TodoList', link: 'https://nathan-todolist-node.herokuapp.com/', github: 'https://github.com/peluche1275/todolist-nodejs' },
            { picture: 'pictures/tictactoe.webp',  title: 'Tic Tac Toe', link: 'http://tictactoe.nathanhtml.fr/', github: 'https://github.com/peluche1275/Oxo' },
            { picture: 'pictures/quizz.webp',  title: 'Quizz', link: 'http://projet5.nathanhtml.fr/', github: 'https://github.com/peluche1275/Projet-5' },
            { picture: 'pictures/forteroche.webp', title: 'Blog d\'écrivain', link: 'http://jeanforteroche.nathanhtml.fr/', github: 'https://github.com/peluche1275/Projet-4' },
            { picture: 'pictures/location.webp',  title: 'Location de vélo', link: 'http://locationvelo.nathanhtml.fr/', github: 'https://github.com/peluche1275/Projet-3' },
            { picture: 'pictures/ireki.webp',  title: 'Tourisme', link: 'http://ireki.nathanhtml.fr/', github: 'https://github.com/peluche1275' },
        ],

        menunav: [
            { id: 1, text: 'Projets', anchor: '#ancreProjets' },
            { id: 5, text: 'Contact', anchor: '#ancreContact' }
        ],

        titlesection: [
            { id: 1, title: 'Projets' },
            { id: 2, title: 'Contact' }
        ]
    },

    methods: {
        filter: function (data, index) {
            return data.filter(item => item.id == index)
        },
    }
})
