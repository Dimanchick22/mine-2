Ponder.registry(e => {
    e
        .create([
        'botania:gourmaryllis',
        'botania:floating_gourmaryllis'
        ])
        .scene('gribtweaks:gourmaryllis', "Гурмарилис: Ферма маны", 'gourmaryllis', (scene, util) => {
    scene.scaleSceneView(.7);
    scene.setSceneOffsetY(-1);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(20)
    scene.overlay.showText(60)
			.colored(PonderPalette.OUTPUT)
			.text("Давайте построим ферму маны на Гурмарилисах!")
			.placeNearTarget();
    scene.idle(80)
    scene.addKeyframe()
    scene.world.showIndependentSection(util.select.fromTo(7,1,4,7,2,4), Facing.WEST)
    scene.world.showIndependentSection(util.select.fromTo(7,1,6,7,2,6), Facing.WEST)
    scene.world.showIndependentSection(util.select.fromTo(7,1,8,7,2,8), Facing.WEST)
    scene.idle(20)
    scene.world.showIndependentSection(util.select.fromTo(7,1,3,7,3,3), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(7,1,5,7,3,5), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(7,1,7,7,3,7), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(7,1,9,7,3,9), Facing.DOWN)
    scene.idle(20)
    scene.world.showSection(util.select.position(7,3,4), Facing.DOWN)
    scene.world.showSection(util.select.position(7,3,6), Facing.DOWN)
    scene.world.showSection(util.select.position(7,3,8), Facing.DOWN)
    scene.idle(20)
    scene.world.showSection(util.select.fromTo(6,3,4,6,3,8), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(8,3,4,8,3,8), Facing.DOWN)
    scene.idle(20)
    scene.world.showIndependentSection(util.select.fromTo(6,4,4,6,4,8), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(8,4,4,8,4,8), Facing.DOWN)
    scene.idle(20)
    scene
        .text(60, "Поместите еду в первый ряд бочек", [6, 4.4, 6])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .text(60, "И другую еду во второй ряд", [8, 4.4, 6])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene.world.showIndependentSection(util.select.fromTo(5,3,2,5,3,10), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(6,3,10,9,3,10), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(9,3,9,9,3,2), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(8,3,2,6,3,2), Facing.DOWN)
    scene.idle(20)
    scene.world.showSection(util.select.fromTo(5,4,2,5,4,8),Facing.NORTH)
    scene.world.showSection(util.select.fromTo(9,4,2,9,4,8),Facing.NORTH)
    scene.idle(20)
    scene.world.showSection(util.select.fromTo(5,2,2,5,2,0), Facing.UP)
    scene.world.showSection(util.select.fromTo(9,2,2,9,2,0), Facing.UP)
    scene.idle(20)
    scene.world.showIndependentSection(util.select.fromTo(5,3,1,5,3,0),Facing.SOUTH)
    scene.world.showIndependentSection(util.select.fromTo(9,3,1,0,3,0),Facing.SOUTH)
    scene.idle(20)
    scene
        .text(50, "Поместите 14 песка в первые песочные часы", [5, 4, 0])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(70)
    scene
        .text(80, "Засеките 7 секунд на первых, после поместите 14 песка во вторые часы", [9, 4, 0])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(120)
    scene.world.showIndependentSection(util.select.fromTo(3,1,5,5,1,7), Facing.DOWN)
    scene.idle(20)
    scene.addKeyframe()
    scene
    .text(60, "И не забудьте привязать цветки!", [5, 2, 6])
    .colored(PonderPalette.WHITE)
    .placeNearTarget()
    scene.idle(90)
    })
})