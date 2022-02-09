class Wtrmln {
    
    constructor(BodyA,BodyB) {

        var Bodya = BodyA.body.bodies.length-2 

        this.link = Constraint.create({

          bodyA: BodyA.body.bodies[Bodya],
          pointA: {x: 0,y: 0},
          bodyB: BodyB,
          pointB: {x: 0,y: 0},
          length: -10,
          stiffness: 0.01,

        })
        World.add(engine.world,this.link);
    }

}
