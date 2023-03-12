import Player from '@vimeo/player';
import throttle from 'lodash.throttle'
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle (function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  
},1000));
const playerSaveTime = localStorage.getItem('videoplayer-current-time');
// console.log(playerSaveTime);
const playerTimeStop = JSON.parse(playerSaveTime);
// console.log(playerTimeStop.seconds);
player.setCurrentTime(playerTimeStop.seconds).then(function(seconds) {
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
                  break;

      default:
                  break;
  }
});
// player.setCurrentTime(playerTimeStop.seconds || 0);
