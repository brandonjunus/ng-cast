angular.module('video-player')
.component('videoList', {
  bindings: {
    onClick: '<',
    videoList: '<'
  },
  templateUrl: 'src/templates/videoList.html',
});
