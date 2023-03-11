import Player from '@vimeo/player';
// import throttle from 'lodash.throttle'
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  _.throttle(localStorage, [wait=1000], [options={}])
});
const playerSaveTime = localStorage.getItem('videoplayer-current-time');
// console.log(playerSaveTime);
const playerTimeStop = JSON.parse(playerSaveTime);
// console.log(playerTimeStop.seconds);
player.setCurrentTime(playerTimeStop.seconds || 0);

