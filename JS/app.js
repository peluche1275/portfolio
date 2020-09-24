Vue.component('banner-icon', {
    props: ['info'],
    template: '<section class="banner d-flex align-items-center"><div class="container"><div class="row d-flex align-items-center"><div class="col"><i :class="info.icon"></i></div><div class="col"><h4> {{ info.title }} </h4><p>{{ info.text }}.</p></div></div></div></section>'
})

new Vue({
    el: '#app',
    data: {
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
