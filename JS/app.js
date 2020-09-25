Vue.component('banner-icon', {
    props: ['info'],
    template: '<section class="banner d-flex align-items-center"><div class="container"><div class="row d-flex align-items-center"><div class="col"><i :class="info.icon"></i></div><div class="col"><h4> {{ info.title }} </h4><p>{{ info.text }}.</p></div></div></div></section>'
})

Vue.component('forma', {
    props: ['info'],
    template: '<div class="row d-flex align-items-center"><div class="col-md-4"><img :class="info.class" :src="info.picture" :alt="info.alt"></div><div class="col-md-8"><h4> {{ info.title }} </h4><p> {{ info.text }} </p></div></div>'
})

Vue.component('banner-code', {
    props: ['info'],
    template: '<section class="banner code"><div class="container"><div class="row d-flex justify-content-center"><div id="code" contentEditable="true"><p> <span class="codeColorIf">if</span>(<span class="codeColorPonct">!</span><span class="codeColorVar">$lost</span>) {</p><p> <span class="codeColorVar">$learned</span> <span class="codeColorPonct">=</span> <span class="codeColorZero">0</span>;</p><p> }</p></div></div></div></section>'
})

Vue.component('skill', {
    props: ['info'],
    template: '<div class="row d-flex align-items-center"><div class="col-md-4"><i :class="info.icon"></i></div><div class="col-md-8"><h3>{{ info.title }}</h3><p>{{ info.text }}</p></div></div>'
})

Vue.component('menu-nav', {
    props: ['info'],
    template: '<div class="col-md-2 col-sm-2"><a :href="info.anchor"><p>{{info.text}}</p></a></div>'
})

Vue.component('hobbies', {
    props: ['info'],
    template: '<div class="row d-flex align-items-center"><div class="col-md-12"><h3>{{ info.title }}</h3></div><div class="col-md-8"><p>{{ info.text }} </p></div><div class="col-md-4"><img class="picturesProjects" :src="info.picture" :alt="info.alt"></div></div>'
})

Vue.component('title-section', {
    props: ['info'],
    template: '<div class="row"><div class="col-md-12"><p class="titleQuestion"> {{ info.text }} </p><h2> {{ info.title }} </h2><hr></div></div>'
})

Vue.component('projects-section', {
    props: ['info'],
    template: '<div class="row d-flex align-items-center"><div class="titleAndIcons col-md-12 d-flex justify-content-center align-items-center"><h3>{{ info.title }}</h3><a :href="info.github"><i class="fab fa-github"></i></a><a :href="info.link"><i class="fas fa-globe"></i></a></div><div class="col-md-6"><p>{{ info.text }} </p></div><div class="col-md-6"><img class="picturesProjects" :src="info.picture" alt="view"></div></div>'
})

Vue.component('soft-skills', {
    props: ['info'],
    template: '<div class="row d-flex align-items-center"><div class="col-md-12"><h3>{{ info.title }}</h3></div><div class="col-md-8"><p> {{ info.text }} </p></div><div class="col-md-4"><i :class="info.icon"></i></div></div>'
})

new Vue({
    el: '#app',
    data: {

        presentation: "Aspirant Développeur Web et fraichement sorti de formation, je suis situé près de Lille, dans les Hauts de France. Profondément ancré dans l'informatique depuis toujours j'ai envie d\'assimiler de nouvelles compétences sans arrêt. Prêt à mettre les mains dans le cambouis et sortant du monde commercial et administratif, j_'ai la capacité d\'interpréter les demandes d\'un client et j\'ai acquis une sensibilité aux normes.",

        skills: [
            { icon: 'fab fa-js-square', text: 'J\'utilise du Javascript dans quasi tout mes projets. J\'aime beaucoup l\'utilisation de la technologie Ajax. ', title: 'JavaScript' },
            { icon: 'fab fa-vuejs', text: 'Blablabla Vue.JS ', title: 'Vue.JS' },
            { icon: 'fab fa-node-js', text: 'J\'apprends en ce moment à utiliser la NodeJS, j\'essaye d\'explorer toutes ses possibilités ', title: 'NodeJS' },
            { icon: 'fab fa-bootstrap', text: 'J\'aime bien ce framework CSS , je l\'utiliser surtout pour avoir un layout responsive, d\'ailleurs ce site est fait avec Bootstrap.', title: 'Bootstrap' },
            { icon: 'fab fa-php', text: 'C\'est avec le PHP que j\'ai appris la programmation orientée objets ainsi que l\'architecture MVC. J\'ai également durant ma formation construit un framework PHP. ', title: 'PHP' },
            { icon: 'fab fa-python', text: 'Dans le but de m\'améliorer et de voir d\'autre horizons j\'ai commencé à apprendre le Python. J\'apprécie particulièrement l\'utilité de l\'indentation.', title: 'Python' },
            { icon: 'fas fa-question', text: 'J\'insiste sur ce point, je suis ouvert à tout langages, framework, technologies.. ', title: 'Ouvert à tout' }
        ],
        job: [
            { class: 'picturesJob', picture: 'pictures/cosmolys.webp', text: 'Commercial dans le secteur de la destruction des déchets dangereux. J`\'ai eu pour mission de réalisé des devis aux prospects et les contrats aux clients. Réalisé le nécessaire pour répondres aux appels d\'offres. Ainsi que la formation des clients sur l\'application de gestions des déchets', title: 'Cosmolys', alt: 'Logo de Cosmolys' },
            { class: 'picturesJob', picture: 'pictures/ramsay.webp', text: 'Agent administratif, j\'avais pour mission d\'inscrire les dossiers des patients dans la base de données de l`\'Hopital. J\'avais également à ma charge les stagiaires', title: 'Ramsay Général de Santé', alt: 'Logo de Ramsay' }
        ],
        forma: [
            { class: 'picturesFormation', picture: 'pictures/logooc.webp', text: 'Formation en ligne. Accompagné par un mentor 45 minutes par semaines et évalué, j\'ai eu à réalisé 5 projets évalué par des professionnels.J\'ai appris différents langages web ainsi que les bonnes pratiques en matières de programmation et de SEO.', title: 'OpenClassRooms', alt: 'Logo d\'OpenClassRooms' },
            { class: 'picturesFormation', picture: 'pictures/logoul.webp', text: 'Parcours universitaire classique. J\'ai ici appris les rédiments du parfait commercial.', title: 'Université de Lille', alt: 'Logo de l\'Université de Lille' }
        ],

        banner: [
            { id: 0, text: 'Respect du Covid', title: 'Covid', icon: 'fas fa-head-side-mask' },
            { id: 1, text: 'Dispo immétiatement', title: 'Présentiel HDF ou Full Remote', icon: 'fas fa-laptop-house' },
            { id: 2, text: 'I can write and read in English. ', title: 'Anglais', icon: 'fas fa-flag-usa' }
        ],

        hobbies: [
            { picture: 'pictures/jeuxvideo.webp', text: 'J\'ai toujours trouvé important de maitriser ses émotions, et pour travailler cette maitrise de soi, il faut la mettre à l\'épreuve ! Rien de tel qu\'un programme développé dans le but de mettre les nerds à l\'épreuve ! ', title: 'Jeux Video.. Difficiles', alt: 'Scène de jeuxvideo' },
            { picture: 'pictures/paintweb.webp', text: 'Le paintball est un sport vraiment intéressant. Au paintball on ne joue pas à la guerre. On essaye de gagner en équipe. En plus de se sentir vivant en pratiquant cette activité, elle aide à la gestion du stress. ', title: 'Paintball', alt: 'Scène de Paintball' }
        ],

        softskills: [
            { icon: 'fas fa-exclamation-triangle', text: "J'adore trouver le pourquoi du problème : Pourquoi est ce que cela ne marche pas ? Qu'est ce qu'on peut faire pour y remedier ? J'aime comprendre le problème et le régler. ", title: 'Problem Solver' },
            { icon: 'fas fa-yin-yang', text: "Une de mes qualités est que j'ai l'humeur très stable, très sereine. Je suis d'humeur égale et ça peut importe la situation. ", title: 'Stable Mood' },
            { icon: 'fas fa-code', text: "J'aspire à être un bon développeur, être quelqu'un qui code proprement. C'est réellement quelques choses qui m'importe et qui à de la valeur à mes yeux", title: 'Clean Coder' },
        ],

        projects: [
            { picture: 'pictures/1projet6.webp', text: 'En écriture', title: 'Tic Tac Toe', link: 'http://tictactoe.nathanhtml.fr/', github: 'https://github.com/peluche1275/Oxo' },
            { picture: 'pictures/1projet5.webp', text: 'En écriture', title: 'Quizz', link: 'http://projet5.nathanhtml.fr/', github: 'https://github.com/peluche1275/Projet-5' },
            { picture: 'pictures/1projet4.webp', text: 'En écriture', title: 'Blog d\'écrivain', link: 'http://jeanforteroche.nathanhtml.fr/', github: 'https://github.com/peluche1275/Projet-4' },
            { picture: 'pictures/1projet3.webp', text: 'En écriture', title: 'Location de vélo', link: 'http://locationvelo.nathanhtml.fr/', github: 'https://github.com/peluche1275/Projet-3' },
            { picture: 'pictures/1projet2.webp', text: 'En écriture', title: 'Tourisme avec WordPress', link: 'http://ireki.nathanhtml.fr/', github: 'https://github.com/peluche1275' },
        ],

        menunav: [
            { id: 0, text: 'Compétences', anchor: '#ancreCompetences' },
            { id: 1, text: 'Projets', anchor: '#ancreProjets' },
            { id: 2, text: 'Formations', anchor: '#ancreFormation' },
            { id: 3, text: 'Expériences', anchor: '#ancreExperiences' },
            { id: 4, text: 'Soft skills', anchor: '#ancreSoftskills' },
            { id: 5, text: 'Contact', anchor: '#ancreContact' }
        ],

        titlesection: [
            { id: 0, title: 'Compétences techniques', text: 'Quelles technologies j\'utilise ? ' },
            { id: 1, title: 'Mes projets', text: 'Qu`\'est ce que j\'ai fait ? ' },
            { id: 2, title: 'Formations', text: 'Quelles études ? ' },
            { id: 3, title: 'Expériences', text: 'Que faisais - je avant ? ' },
            { id: 4, title: 'Soft skills', text: 'Quel humain suis - je ? ' },
            { id: 5, title: 'Loisirs', text: 'Quelles sont mes centres d\'intérets ? ' },
            { id: 6, title: 'Contact', text: 'Comment me contacter ? ' },
            { id: 7, title: 'Présentation', text: 'Qui suis-je ?' }
        ]
    },

    methods: {
        filter: function (data, index) {
            return data.filter(item => item.id == index)
        },
    }
})
