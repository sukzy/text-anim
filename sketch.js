function setup() {
	createCanvas(windowWidth, windowHeight);
  t = new Text();
}

function draw() {
  background(250, 70, 150);

  t.shadowRight();
  t.shadowRightUpdate();
  t.shadowRightEdge();

  t.shadowLeft();
  t.shadowLeftUpdate();
  t.shadowLeftEdge();

  t.show();
  t.zoom();
  t.reset();
}

function Text() {
  this.x = width/2;
  this.y = height/2;
  this.font = 10;
  this.zooming = 4.4;
  this.xShadowRight = width;
  this.yShadowRight = height/3;
  this.xShadowLeft = 0;
  this.yShadowLeft = height-100;
  this.xShadowRightMove = 1.5;
  this.xShadowLeftMove = 2.3;

  this.show = function() {
    fill(255);
    textAlign(CENTER);
    textFont("Prototype", this.font)
    text("Writer no Jutsu", this.x, this.y);
  };

  this.zoom = function() {
    this.font = this.font + this.zooming;
  };

  this.reset = function() {
    if (this.font > 700) {
      this.font = 10;
    }
  };

  this.shadowRight = function() {
    fill(250, 100, 170);
    textAlign(LEFT);
    textFont("Prototype", 100)
    text("Writer no Jutsu", this.xShadowRight, this.yShadowRight);
  };

  this.shadowRightUpdate = function() {
    this.xShadowRight = this.xShadowRight - this.xShadowRightMove;
  }

  this.shadowRightEdge = function() {
    if (this.xShadowRight < 0-500) {
      this.xShadowRight= width;
    }
  }

  this.shadowLeft = function() {
    fill(250, 100, 170);
    textAlign(RIGHT);
    textFont("Prototype", 90)
    text("Writer no Jutsu", this.xShadowLeft, this.yShadowLeft);
  };

  this.shadowLeftUpdate = function() {
    this.xShadowLeft = this.xShadowLeft + this.xShadowLeftMove;
  }

  this.shadowLeftEdge = function() {
    if (this.xShadowLeft > width+500) {
      this.xShadowLeft = 0;
    }
  }

}
