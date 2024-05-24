let a = { x: 40, y: 40 };
let b = { x: 40, y: 340 };
let c = { x: 340, y:340 };
let d = { x: 340, y: 40 };

let o = { x: 400, y: 340 };
let x = { x: 800, y: 340 };
let y = { x: 400, y: 40 };

let p = { x: o.x, y: o.y };

let init = 310;
let t;

function sleep(waitMsec) {
    var startMsec = new Date();
    while (new Date() - startMsec < waitMsec);
}

function setLineDash(list) {
    drawingContext.setLineDash(list);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    line(a.x,a.y,b.x,b.y);
    line(b.x,b.y,c.x,c.y);
    line(c.x,c.y,d.x,d.y);

    line(o.x,o.y,x.x,x.y);
    line(o.x,o.y,y.x,y.y);
    fill("black");
    triangle(y.x-5,y.y,y.x+5,y.y,y.x,y.y-10);
    triangle(x.x,x.y-5,x.x,x.y+5,x.x+10,x.y);

    t = 0;
}

function draw(){
    clear();
    let h = init - t/3;

    setLineDash([])
    fill("#00bfff");
    rect(b.x,h,c.x-b.x,b.y-h);

    fill("black");
    line(a.x,a.y,b.x,b.y);
    line(b.x,b.y,c.x,c.y);
    line(c.x,c.y,d.x,d.y);

    line(o.x,o.y,x.x,x.y);
    line(o.x,o.y,y.x,y.y);
    triangle(y.x-5,y.y,y.x+5,y.y,y.x,y.y-10);
    triangle(x.x,x.y-5,x.x,x.y+5,x.x+10,x.y);

    fill("white");
    p.x = o.x + t/2;
    p.y = h;
    circle(p.x,p.y,12);
    line(o.x,init,p.x,p.y);
    setLineDash([5, 5]);
    line(p.x,p.y,c.x,h);

    fill("black");
    textSize(25);
    textFont("Sawarabi Mincho");
    text("時間: " + String(Math.floor(t/60)) + "分後", 290,380);
    text("高さ: " + String(Math.floor((b.y-h)/10)) + "cm",290,420);
    textSize(20);
    text("経過時間", x.x-20,x.y+30);
    text("高\nさ", y.x-30,y.y);
    text("5",o.x+150,o.y+20);
    text("10",o.x+300,o.y+20);
    text("10",o.x-25,o.y-100);
    text("20",o.x-25,o.y-200);

    t += 1;
    if(t > 821) {
        sleep(1000);
        t = 0;
        p.x = o.x;
        p.y = init;
    }
}
