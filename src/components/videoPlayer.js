angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      currentVideo: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
