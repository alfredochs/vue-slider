
Vue.config.devtools = true;
new Vue({
    el: "#root",
    data: {
        imgList: [
            {
                url: 'img/01.jpg',
                titolo: "Svezia",
                paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                url: 'img/02.jpg',
                titolo: "Svizzera",
                paragrafo: 'Lorem ipsum',
            },
            {
                url: 'img/03.jpg',
                titolo: "Gran Bretagna",
                paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                url: 'img/04.jpg',
                titolo: "Germania",
                paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                url: 'img/05.jpg',
                titolo: "Paradise",
                paragrafo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
        ],
        indiceActiveCorrente: 0
    },
    methods: {
        imgPrecedente() {
            let indiceNuovo = this.indiceActiveCorrente - 1;
            if (indiceNuovo < 0) {
                indiceNuovo = this.imgList.length - 1;
            }
            this.indiceActiveCorrente = indiceNuovo;
        },
        imgSuccessiva() {
            let nuovoIndice = this.indiceActiveCorrente + 1;
            if (nuovoIndice > this.imgList.length - 1) {
                nuovoIndice = 0;
            }
            this.indiceActiveCorrente = nuovoIndice;
        }
    }
});