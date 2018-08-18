angular.module('video-player', [])
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($scope){

    this.changeVideo = (video) => {
      this.currentVideo = video;
      console.log(this)
    };
    
    this.searchResults = (message) => {

      console.log(message);
      // this.message = '';
    }   
    
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    
    console.log('init', this);
  }
});
