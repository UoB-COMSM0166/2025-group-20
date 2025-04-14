class AudioController {
    constructor () {
        this.sounds = {};
        this.isPaused = true;
    }

    preload () {
        this.sounds['slice'] = loadSound('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/sounds/soundSlicing.wav');
        this.sounds['bomb'] = loadSound('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/sounds/bombSound.wav');
        this.sounds['theme'] = loadSound('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/sounds/smoothieOperatorStart.wav');
    }

    play(name) {
        if (!this.isPaused && this.sounds[name]) {
            this.sounds[name].play();
        }
    }

    toggleOnOff () {
        this.isPaused = !this.isPaused;
        if (!this.isPaused) {
            if (this.sounds['theme'] && !this.sounds['theme'].isPlaying()) {
              this.sounds['theme'].loop();
            }
          } else {
            if (this.sounds['theme'] && this.sounds['theme'].isPlaying()) {
              this.sounds['theme'].stop();
            }
          }
    }

    loop(name) {
        const sound = this.sounds[name];
        if (sound && !sound.isPlaying()) {
          sound.setVolume(this.isPaused ? 0 : 1);
          sound.loop();
        }
      }
}

//preload sounds, play sound function