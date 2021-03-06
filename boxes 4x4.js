//let Matter = require('matter-js');
let engine = Matter.Engine.create();
let render = Matter.Render.create({
    element: document.body,
    engine: engine
});
let ground = Matter.Bodies.rectangle(400, 600, 800, 10, { isStatic: true });
let stack = Matter.Composites.stack(200, 200, 4, 4, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 80, 80);
})
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {
            visible: false
        }
    }
});
render.mouse = mouse;
Matter.World.add(engine.world, [stack, ground, mouseConstraint]);
Matter.Engine.run(engine);
Matter.Render.run(render);