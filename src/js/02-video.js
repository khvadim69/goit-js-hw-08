  import Player from '@vimeo/player';
  import throttle from "lodash.throttle";
  const SAVED_TIME = 'videoplayer-current-time';
  const iframe = document.querySelector('iframe');
  const player = new Player(iframe);
  player.on('timeupdate', throttle(function (data) {
      localStorage.setItem(SAVED_TIME, JSON.stringify(data))
  }, 1000));
  const correntTime = localStorage.getItem(SAVED_TIME);
  const time = JSON.parse(correntTime);
  player.setCurrentTime(time.seconds || 0)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });