class Link{
    constructor (bodyA, BodyB) {
        var lastlink = bodyA.body.bodies.length - 2;
        this.link = Constraint.create({
            bodyA: bodyA.body.bodies[lastlink],
            PointA: {x:0 , y:0 },
            bodyB: bodyB.body,
            pointB: {x:0, y:0},
            length: 10,
            stiffness: 0.8
        });

        World . add(world,this.link);
    }
}