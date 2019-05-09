angular.module('twitter').run(['$templateCache', function($templateCache) {$templateCache.put('components/addTweet/addTweet.html','<div class=\'tweet-input-box\'>\n   <form>\n      <textarea ng-model="newTweet" rows="4" cols="50" ng-maxlength="280"></textarea>\n      <button ng-click="post(new-tweet)">Tweet</button>\n   </form>\n</div>\n');
$templateCache.put('components/feed/feed.html','<div class =\'tweets\' >\n   <ul>\n      <li ng-repeat="tweet in tweets">\n         <tweet></tweet>\n      </li>\n   </ul>\n</div>\n');
$templateCache.put('components/login/login.html','<div class="loginBox">\n      <div class="container">\n      <form name="loginForm" novalidate>\n         <h1>Tuiter</h1>\n         <h2 class="form-signin-heading">Please, Log in</h2>\n         <label for="inputEmail" class="sr-only">Email address</label>\n         <input ng-model="inputEmail" class="form-control" placeholder="Email address" required autofocus>\n         <label for="inputPassword" class="sr-only">Password</label>\n         <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>\n         <button class="btn btn-lg btn-primary btn-block" ng-click="login()">Log in</button>\n      </form>\n   </div> \n</div>');
$templateCache.put('components/profile/profile.html','<div id="cover-picture"></div>\n<div id="profile-bar">\n<span class="profile-menu">\n    <ul>\n        <li><a>Tweets</a></li>\n        <li><a>Followers</a></li>\n        <li><a>Followed</a></li>\n    </ul>\n</span>\n<div id="edit-profile-button"><a>Edit Profile</a></div>\n</div>');
$templateCache.put('components/sidebar/profileBox.html','<div class="profile-box">\n   <img class="img-circle" src="/assets/img/default-profile-picture.jpg"/>\n   <span class="user-info-text">{{$scope.username}}</span>\n   <span class="user-info-text">{{$scope.email}}</span>\n</div>\n');
$templateCache.put('components/sidebar/userInfo.html','<img src=""/>\n<h1></h1>\n<h2></h2>\n<p></p>\n');
$templateCache.put('components/userTweets/userTweets.html','<div class =\'tweets\' >\n   <ul>\n      <li ng-repeat="tweet in tweets" track by $date>\n         <tweet></tweet>\n      </li>\n   </ul>\n</div>\n');}]);