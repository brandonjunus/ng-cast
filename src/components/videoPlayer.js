angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      currentVideo: '<',
      onClick: '<'
    },
    controller: function($scope) {
    
      // this.url = () => ("https://www.youtube.com/embed/" + this.currentVideo.id.videoId);
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
