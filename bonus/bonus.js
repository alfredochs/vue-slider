Vue.config.devtools = true;
new Vue({
    el: "#root",
    data: {
        imgList: [
            {
                url: 'imgBonus/01.jpg',
                titolo: "Svezia",
                paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                url: 'imgBonus/02.jpg',
                titolo: "Svizzera",
                paragrafo: 'Lorem ipsum',
            },
            {
                url: 'imgBonus/03.jpg',
                titolo: "Gran Bretagna",
                paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                url: 'imgBonus/04.jpg',
                titolo: "Germania",
                paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                url: 'imgBonus/05.jpg',
                titolo: "Paradise",
                paragrafo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
        ],
        currentImg: 0,
        hover: false
    },
    methods: {
        upButton() {
            let nuovoIndice = this.currentImg - 1;
            if (nuovoIndice < 0) {
                nuovoIndice = this.imgList.length - 1;
            }
            this.currentImg = nuovoIndice;
        },
        downButton() {
            let nuovoIndice = this.currentImg + 1;
            if (nuovoIndice > this.imgList.length - 1) {
                nuovoIndice = 0;
            }
            this.currentImg = nuovoIndice;
        },
    },
    mounted() {
        setInterval(() => {
            this.downButton();
        }, 1500);
    }
});