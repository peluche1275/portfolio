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


new Vue({
    el: '#app',
    data: {
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
        covid: [
            { text: 'Respect du Covid', title: 'Covid', icon: 'fas fa-head-side-mask' },
        ],
        mobilite: [
            { text: 'Dispo immétiatement', title: 'Présentiel HDF ou Full Remote', icon: 'fas fa-laptop-house' },
        ],
        english: [
            { text: 'I can write and read in English. ', title: 'Anglais', icon: 'fas fa-flag-usa' },
        ],
    }
})
