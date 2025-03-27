class Track {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    getPosition(offset){
        return{
            x: this.center.x + Math.cos(offset) * this.radius,
            y: this.center.y - Math.sin(offset) * this.radius
        }
    }

    draw(ctx) {
        // Starts a new drawing path so that the circle can be drawn without affecting other drawings.
        ctx.beginPath();
        //  This will draw a full circle in arc method we use radius to create a full 360 decree circle
        // Refer the CircleCreation image for better understanding
        // ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}