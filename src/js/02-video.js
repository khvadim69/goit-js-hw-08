import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
});
const playerSaveTime = localStorage.getItem('videoplayer-current-time');
// console.log(playerSaveTime);
const playerTimeStop = JSON.parse(playerSaveTime);
// console.log(playerTimeStop.seconds);
player.setCurrentTime(playerTimeStop.seconds || 0);
