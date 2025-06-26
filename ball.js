class Ball {
  constructor(track, radius, speed) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.offset = 0;
    this.direction = 1;
    this.center = this.track.getPosition(this.offset);
  }

  move() {
    this.offset += this.speed * this.direction;
    this.center = this.track.getPosition(this.offset);
    if (this.center.y > this.track.center.y) {
      this.direction *= -1;
      playSound();
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = "blue";
    ctx.stroke();
  }
}
