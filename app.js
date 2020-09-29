let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

// span.onclick = function(){
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

$(".variable").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        dots: false,
        mobileFirst: true
      }
    }
  ]

});

$(".comments-slider").slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  centerMode: true,
  speed: 300,
  variableWidth: true,
  pauseOnHover:false,
  pauseOnFocus:false
});



const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Mar 9, 2021 00:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'WE WIN;
      //}

    }, second)