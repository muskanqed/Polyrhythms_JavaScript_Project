class Track {
  constructor(center, radius, hue) {
    this.center = center;
    this.radius = radius;
    this.hue = hue;
    this.period = Math.PI;
  }

  getPosition(offset) {
    return {
      x: this.center.x + Math.cos(offset) * this.radius,
      y: this.center.y - Math.abs(Math.sin(offset)) * this.radius,
      round: Math.floor(offset / this.period),
      progress: (offset % this.period) / this.period,
    };
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI, true);
    ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
    ctx.stroke();
  }
}
