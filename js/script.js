
Vue.config.devtools = true;
new Vue({
    el: "#root",
    data: {
        imgList: [
            {
                url: 'img/01.JPG',
                titolo: "Svezia",
                paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                url: 'img/02.JPG',
                titolo: "Svizzera",
                paragrafo: 'Lorem ipsum',
            },
            {
                url: 'img/03.JPG',
                titolo: "Gran Bretagna",
                paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                url: 'img/04.JPG',
                titolo: "Germania",
                paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                url: 'img/05.JPG',
                titolo: "Paradise",
                paragrafo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
        ],
        indiceActiveCorrente: 0
    },
    methods: {
        // imgPrecedente() {
        //     let nuovoIndice = this.indiceActiveCorrente - 1;
        //     if (nuovoIndice < 0) {
        //         nuovoIndice = this.imgList.lenght - 1;
        //     }
        //     this.indiceActiveCorrente = nuovoIndice;
        // },
        imgPrecedente() {
            let newIndex = this.indiceActiveCorrente - 1;

            if (newIndex < 0) {
                newIndex = this.imgList.length - 1;
            }

            this.indiceActiveCorrente = newIndex;
        },
        imgSuccessiva() {
            let newIndex = this.indiceActiveCorrente + 1;

            if (newIndex > this.imgList.length - 1) {
                newIndex = 0;
            }

            this.indiceActiveCorrente = newIndex;
        },


    }
});