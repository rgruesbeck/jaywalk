// Overlay wrapper

class Overlay {
    constructor(node) {
        this.root = node;

        this.container = node.querySelector('.container');
        this.banner = node.querySelector('#banner');
        this.button = node.querySelector('#button');
        this.score = node.querySelector('#score');
        this.lives = node.querySelector('#lives');
        this.mute = node.querySelector('#mute');

        this.styles = {
            textColor: 'white',
            primaryColor: 'purple',
            fontFamily: 'Courier New'
        };
    }

    showBanner(message) {
        this.banner.textContent = message;
        this.show('banner');
    }

    hideBanner() {
        this.banner.style.opacity = 0;
        this.hide('banner');
    }

    showButton(message) {
        this.button.style.fontFamily = this.styles.fontFamily;
        this.button.textContent = message;
        this.show('button');
        // console.log(this.styles.fontFamily, this.button.style.fontFamily);
    }

    hideButton() {
        this.hide('button');
    }

    showStats() {
        this.show('score');
        this.show('lives');
    }

    setScore(score) {
        this.score.textContent = `Score: ${score}`;
    }

    setLives(lives) {
        this.lives.textContent = `Lives: ${lives}`;
    }

    setStyles(styles) {
        this.styles = { ...this.styles, ...styles };
        this.applyStyles();
    }

    applyStyles() {
        this.container.style.color = this.styles.textColor;
        this.container.style.fontFamily = this.styles.fontFamily;

        this.button.style.backgroundColor = this.styles.primaryColor;
    }

    setMute(soundsOn) {
        this.mute.textContent = soundsOn ? '🔈' : '🔇';
    }

    show(node) {
        this[node].style.visibility = 'visible';
        this[node].style.opacity = 1;
    }

    hide(node) {
        this[node].style.opacity = 0;
        setTimeout(() => {
            this[node].style.visibility = 'hidden';
        }, 2000);
    }
}

export default Overlay;