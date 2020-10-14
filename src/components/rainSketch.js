// Inspired by https://www.openprocessing.org/sketch/9299 and Daniel Shiffman

export default function sketch (p) {
    class Rain {
        constructor() {
            this.position = [Math.random()* winWidth, 0];
            this.lastPos = new Array(2);
            this.updateLastPos();
            this.speed = [0.2, 0];
            this.opacity = Math.random() * 70 + 30;
        }

        updateLastPos() {
            this.lastPos[0] = this.position[0];
            this.lastPos[1] = this.position[1];
        }
        
        draw() {
            p.stroke(160, this.opacity);
            p.line(this.position[0], this.position[1], this.lastPos[0], this.lastPos[1]);
        }
        
        calculate() {
            this.updateLastPos();
            this.gravity();
        }
        
        gravity() {
            this.speed[0] += 0.01;
            this.speed[1] += 0.3;
            this.position[0] += this.speed[0];
            this.position[1] += this.speed[1];
        }
    }

    const rain = new Set();
    let winWidth, winHeight;
    let timeout = false;

    function setupCanvas() {
        winWidth = p.windowWidth + 3;
        winHeight = p.windowHeight;
        p.createCanvas(winWidth, winHeight);
        p.background(0);
    }

    p.setup = () => {
        p.disableFriendlyErrors = true;
        p.pixelDensity(1);
        p.frameRate(60);

        window.addEventListener('resize', () => {
            clearTimeout(timeout);
            timeout = setTimeout(setupCanvas, 50);
        })
        setupCanvas();
    }
    
    p.draw = () => {
        p.background(0, 0, 0, 100);

        if (p.frameCount % 2 === 0) {
            rain.add(new Rain());
        }
        
        p.strokeWeight(3);
        for (let r of rain) {
            r.calculate();
            r.draw();
            if (r.position.y > winHeight) {
                rain.delete(r);
            }
        }
    }
}