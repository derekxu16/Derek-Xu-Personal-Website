// Inspired by https://www.openprocessing.org/sketch/9299 and Daniel Shiffman

export default function sketch (p) {
    class Rain {
        constructor() {
            this.position = p.createVector(p.random(0, winWidth), 0);
            this.lastPos = this.position;
            this.speed = p.createVector(0, 0);
            this.color = p.random(30, 100);
        }
        
        draw() {
            p.stroke(160, this.color);
            p.strokeWeight(3);
            p.line(this.position.x, this.position.y, this.lastPos.x, this.lastPos.y);
        }
        
        calculate() {
            this.lastPos = this.position.copy();
            this.gravity();
        }
        
        gravity() {
            this.speed.y += 0.2;
            this.speed.x += 0.01;
            this.position.add(this.speed);
        }
    }
    
    class Umbrella {
        constructor() {
            const xOrigin = winWidth/2, yOrigin = winHeight/4;
            this.width = winWidth < 480 ? 4*winWidth/5 : p.min(500, 2*winWidth/3);
            this.height = this.width/6;
            this.bounds = {};
            this.points = [
                p.createVector(xOrigin, yOrigin),
                p.createVector(xOrigin, yOrigin),
                p.createVector(xOrigin - this.width/8, yOrigin - this.height/10),
                p.createVector(xOrigin - this.width/4, yOrigin),
                p.createVector(xOrigin - 3*this.width/8, yOrigin - this.height/10),
                p.createVector(xOrigin - this.width/2, yOrigin),
                p.createVector(xOrigin, yOrigin - this.height),
                p.createVector(xOrigin + this.width/2, yOrigin),
                p.createVector(xOrigin + 3*this.width/8, yOrigin - this.height/10),
                p.createVector(xOrigin + this.width/4, yOrigin),
                p.createVector(xOrigin + this.width/8, yOrigin - this.height/10),
            ];
        }
        
        draw() {
            p.strokeWeight(3);
            p.stroke(80, 100, 200);
            p.fill(30, 20, 140);
            
            p.beginShape();
            this.points.forEach(point => {
                p.curveVertex(point.x, point.y);
            })
            p.endShape(p.CLOSE);
        }
        
        calcBoundaries() {
            // Calculates the boundaries of the umbrella dome from the Bezier curve between the points
            const p0 = this.points[5];
            const p1 = this.points[6];
            const p2 = this.points[7];
            for (let t = 0; t <= 1; t += 0.005) {
                const x = (p0.x-10)*p.pow(t, 2) + 2*(p1.x)*t*(1-t) + (p2.x+10)*p.pow(1-t,2);
                const y = (p0.y+15)*p.pow(t, 2) + 1.2*(p1.y)*t*(1-t) + (p2.y+15)*p.pow(1-t,2);
                
                const roundx = p.round(x);
                if (!this.bounds.hasOwnProperty(roundx)) {
                    this.bounds[roundx] = new Array();
                }
                this.bounds[roundx].push(y);
            }
            Object.keys(this.bounds).forEach(key => {
                const yVals = this.bounds[key];
                const avg = yVals.reduce( ( p, c ) => p + c, 0 ) / yVals.length;
                this.bounds[key] = avg;
            })
        }
        checkCollision(x, y) {
            const center = this.points[0]
            const left = this.points[5];
            const right = this.points[7];
            if (x >= left.x && x <= right.x && y < center.y && center.y - y <= this.height) {
                return y > this.bounds[x] || p.abs(y-this.bounds[x]) < this.height/8;
            }
            return false;
        }
    }

    function drawSplash(pos) {
        let splashes = 3;
        while (splashes --) {
            const angle = p.random(p.PI, p.TWO_PI);
            let endControl = p.createVector(30 * p.cos(angle + 1), 30 * p.sin(angle + 1));
            endControl.add(pos);
            let end = p.createVector(8 * p.cos(angle), 8 * p.sin(angle));
            end.add(pos);
            
            p.fill(160, 30);
            p.curve(pos.x, pos.y, pos.x, pos.y, end.x, end.y, endControl.x, endControl.y);
        }
    }

    function fade() {
        p.fill(0, 65);
        p.rect(0, 0, winWidth, winHeight);
    }

    function writeText() {
        const mobileWidth = 540;

        p.strokeWeight(winWidth < 480 ? 4 : 6);
        p.stroke(250, 140, 50, 30);
        p.fill(255);
        p.textFont('Calligraffitti');
        p.textSize(winWidth < mobileWidth ? 36 : 48);
        p.textAlign('center');
        p.text("Hi, I'm Derek!", winWidth/2, 4*winHeight/12);

        p.textSize(winWidth < mobileWidth ? 10 + winWidth/50 : 28);
        p.textFont('Dosis');
        p.textSize()
        p.noStroke();
        p.text("I'm a Software Engineering student @ uWaterloo", winWidth/2, 6*winHeight/13);
        
        p.text('I am passionate about:', winWidth/2, 2*winHeight/3);

        p.fill(255, 100 - messages[0].countdown);
        p.text(messages[0].text, winWidth/2, 8*winHeight/11);

        messages[0].countdown -= messages[0].coundown > 30 ? 3 : 1;
        if (!messages[0].countdown) {
            messages.push(Object.assign({}, messages[0], {countdown: 100}));
            messages.splice(0, 1);
        }
    }

    var rain = new Set;
    let umbrella;
    var startTime;
    var winWidth, winHeight;
    const messages = ['Modern interactive web development', 'Data Science', 'Music', 'Rainy days', 'Yoyo'].map(
        m => ({text: m, countdown: 100})
    )

    p.setup = function() {
        winWidth = p.windowWidth + 3;
        winHeight = p.windowHeight;
        startTime = p.millis();
        p.createCanvas(winWidth, winHeight);
        p.background(0);
        p.frameRate(60);
        
        umbrella = new Umbrella();
        umbrella.calcBoundaries();
    }
    
    p.draw = function() {
        fade();	
        
        writeText();
        umbrella.draw();
    
        rain.add(new Rain);
        if (p.frameCount % 20 == 0) {
            rain.add(new Rain)
        }
        
        for (let r of rain) {
            r.calculate();
            r.draw();
            if (r.position.y > winHeight) {
                rain.delete(r);
            } else if (r.color >= 40 && umbrella.checkCollision(p.round(r.position.x), r.position.y)) {
                drawSplash(r.position);
                rain.delete(r);
            }
        }
    }
}