
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
        currentImg: 0

    }
});





