// ADD ACTIVE CLASS TO SELECTED NAV-ITEM
const ul = document.getElementById("navbarNavAltMarkup");

const navItem = ul.getElementsByClassName("nav-item");

for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//COLLAPSE HAMBURGER NAVBAR IN MOBILE/TABLET MODE WHEN SELECT NAV-ITEM

$(document).ready(function () {
  $(".navbar-nav a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

// CHANGING DEFAULT JUMP LINK

const shiftWindow = function() { scrollBy(0, -175) };

window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow(); }
// handle hashes when the page loads


// FIRST MODAL CODE
var firstModal = document.getElementById("firstModal");

var firstBtn = document.getElementById("firstBtn");

var spanOne = document.getElementsByClassName("closeOne")[0];

firstBtn.onclick = function(e) {
    firstModal.style.display = "block";
  e.preventDefault();
}

spanOne.onclick = function() {
    firstModal.style.display = "none";
}

// SECOND MODAL CODE
var secondModal = document.getElementById("secondModal");

var secondBtn = document.getElementById("secondBtn");

var spanTwo = document.getElementsByClassName("closeTwo")[0];

secondBtn.onclick = function(e) {
    secondModal.style.display = "block";
  e.preventDefault();
}

spanTwo.onclick = function() {
    secondModal.style.display = "none";
}

// THIRD MODAL CODE
var thirdModal = document.getElementById("thirdModal");

var thirdBtn = document.getElementById("thirdBtn");

var spanThree = document.getElementsByClassName("closeThree")[0];

thirdBtn.onclick = function(e) {
    thirdModal.style.display = "block";
  e.preventDefault();
}

spanThree.onclick = function() {
    thirdModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == firstModal) {
      firstModal.style.display = "none";
    } else if (event.target == secondModal) {
      secondModal.style.display = "none";
    } else if (event.target == thirdModal) {
      thirdModal.style.display = "none";
    }
}

// backup autofocus javascript code

// $('#firstModal #secondModal #thirdModal').on('shown.bs.modal', function () {
//   $('.modal-footer button').focus();
// }) 

// TO DO: GO BACK AND FIGURE OUT AUTOFOCUS FUNCTION AND WHY THIS ABOVE FUNCTION IS NOT WORKING 



// https://api.instagram.com/oauth/authorize/?client_id=567a5dbd252e428aa6f40ce71717a282&redirect_uri=https://adele-decore-and-design.com&response_type=token

// $(window).on('load', function(){
//     $.instagramFeed({
//     'username': 'adeledecordesign',
//     'container': "#instagram-feed-demo",
//     'display_profile': false,
//     'display_biography': false,
//     'items': 8,
//     'items_per_row': 4,
//     'margin': 0.5
//     });
// });

// var instafeed = new Instafeed({
//     clientId: '567a5dbd252e428aa6f40ce71717a282',
//     target: 'instafeed',
//     get: 'userId',
//     userId: 'adeledecordesign'

// });
// instafeed.run();




  var tutorialFeed = new Instafeed ({
    get: 'user',
    userId: '12395157497',
    clientId: '567a5dbd252e428aa6f40ce71717a282',
    target: 'instafeed',
    accessToken: 'Access-Token',
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    limit: 8,
    template: '<div class="image-item insta-page">' +
    '<a class="image insta-image" href="{{image}}>' +
    '<img alt="{{user.full_name}}" src="{{image}}>' +
    '<div class="img-backdrop-tutorial">' +
    '<div class="insta-caption">' +
    '<p>{{caption}}</p>' +
    '</div>' +
    '</div>' +
    '<div class="captions">' +
    '<a></a>' +
    '</div>' +
    '</a>' +
    '</div>'
     });
      
    //  tutorialFeed.run();