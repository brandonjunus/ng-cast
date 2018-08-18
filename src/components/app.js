angular.module('video-player', [])
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($scope){

    this.changeVideo = (video) => {
      this.currentVideo = video;
    };
    
    this.searchResults = (e) => {
      console.log(e)
    };

    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[3];
    
    console.log('init', this);
  }
});
