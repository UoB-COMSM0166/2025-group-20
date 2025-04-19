class AudioController {
    constructor () {
        this.sounds = {};
        this.musicPaused = true;
        this.effectsPaused = false;
    }

    preload () {
        this.sounds['slice'] = loadSound('sounds/soundSlicing.wav');
        this.sounds['bomb'] = loadSound('sounds/bombSound.wav');
        this.sounds['button'] = loadSound('sounds/soundButtonClick.wav');
        this.sounds['gameover'] = loadSound('sounds/soundGameOver.wav');
        this.sounds['lifeGained'] = loadSound('sounds/soundLifeGained.wav');
        this.sounds['lifeLost'] = loadSound('sounds/soundLoseLife.wav');
        this.sounds['recipe'] = loadSound('sounds/soundRecipeComplete.wav');
        this.sounds['theme'] = loadSound('sounds/smoothieOperatorStart.wav');
    }

    play(name) {
        if (!this.effectsPaused && this.sounds[name] && name !== 'theme') {
            this.sounds[name].play();
        }
    }

    toggleMusic () {
        this.musicPaused = !this.musicPaused;
        if (!this.musicPaused) {
            if (this.sounds['theme'] && !this.sounds['theme'].isPlaying()) {
              this.sounds['theme'].loop();
            }
          } else {
            if (this.sounds['theme'] && this.sounds['theme'].isPlaying()) {
              this.sounds['theme'].stop();
            }
          }
    }

    toggleEffects () {
        this.effectsPaused = !this.effectsPaused;
    }

    loop(name) {
        const sound = this.sounds[name];
        if (sound && !sound.isPlaying()) {
          sound.setVolume(this.musicPaused ? 0 : 1);
          sound.loop();
        }
      }
}

//preload sounds, play sound function