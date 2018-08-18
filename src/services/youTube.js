angular.module('video-player')
.service('youTube', function(){
  // TODO
  this.getYouTubeVideos = function(query){
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: key,
        q: query,
        maxResults: max,
        type: 'video',
        videoEmbeddable: 'true'
      }
    }).then(function successCallback(response) {
        console.log(response)
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }
});
