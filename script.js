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
      
     tutorialFeed.run();