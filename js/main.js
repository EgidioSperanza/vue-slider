new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    images: [
      {
        img: "./img/roma.jpg",
        city: "Roma",
      },
      {
        img: "./img/napoli.jpg",
        city: "Napoli",
      },
      {
        img: "./img/milano.png",
        city: "Milano",
      },
    ],
    mouseOverHere: false,
  },
  methods: {
    autoplaySlide: function () {
      let time = this;
      this.timer = setInterval(function () {
        time.nextImage();
      }, 5000);
    },
    nextImage: function () {
      this.currentIndex++;

      if (this.currentIndex > this.images.length - 1) {
        this.currentIndex = 0;
      }
    },
    prewImage: function () {
      this.currentIndex--;

      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
    },
  },
  mounted: function () {
    this.autoplaySlide();
  },
});