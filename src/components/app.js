angular.module('video-player')
  .component('app', {
   controller: function(youTube) {
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };

      this.searchResults = (message) => {
        youTube.getYouTubeVideos(message, this.callback);
      }

      this.callback = (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      }

      youTube.getYouTubeVideos("Hello", this.callback);

      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];

  },
  templateUrl: 'src/templates/app.html'
});
