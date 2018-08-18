angular.module('video-player')
.service('youTube', function($http){
  this.getYouTubeVideos = function(query, callback){
    $http({
        method: 'GET',
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          part: "snippet",
          key: YOUTUBE_API_KEY,
          q: query,
          maxResults: 5,
          videoEmbeddable: 'true',
          type: 'video'
        }
    }).then(function successCallback(response) {
        callback(response.data.items)
    }, function errorCallback(response) {
        console.log('error', response);
    });
  }
});

