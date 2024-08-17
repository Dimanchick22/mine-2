Ponder.registry(e => {
    e
        .create([
            'botania:endoflame',
            'botania:floating_endoflame'
        ])
        .scene('gribtweaks:endoflame', "Эндопламя: Ферма маны", 'endoflame', (scene, util) => {
    scene.scaleSceneView(.8);
    scene.setSceneOffsetY(-1);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(20)
    scene.overlay.showText(60)
			.colored(PonderPalette.OUTPUT)
			.text("Давайте построим ферму маны на цветках Эндопламени!")
			.placeNearTarget();
    scene.idle(80)
    scene.addKeyframe()
    scene.world.showSection(util.select.position(2,1,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,1,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,1,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,2,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,2,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,2,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,3,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,3,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,3,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,4,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,4,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,4,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,5,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,5,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,5,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,6,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,6,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,6,5), Facing.DOWN)
    scene.idle(20)
    scene
        .text(60, "Выбрасыватели должны смотреть вниз", [2, 5, 5])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene.overlay.showText(120)
        .text("Теперь разместите хранилище для топлива и проведите от него трубы к выбрасывателям")
        .colored(PonderPalette.OUTPUT)
        .attachKeyFrame()
    scene.idle(140)
    scene.world.showIndependentSection(util.select.position(4,1,3), Facing.DOWN)
    scene.idle(20)
    scene.world.showIndependentSection(util.select.fromTo(3,1,4,5,1,4), Facing.NORTH)
    scene.world.showIndependentSection(util.select.fromTo(3,1,5,3,6,5), Facing.NORTH)
    scene.world.showIndependentSection(util.select.fromTo(5,1,5,5,6,5), Facing.NORTH)
    scene.idle(20)
    scene
        .text(60, "Поменяйте режим трубы на \"Выход\"", [4, 2, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(70)
    scene
        .showControls(40, [4.5, 1.8, 4], "left")
        .rightClick()
        .withItem('pipez:wrench')
        .whileSneaking()
    scene.idle(60)
    scene
        .text(100, "Можно использовать любой другой мод, чтобы загружать выбрасыватели топливом", [4, 2, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(120)
    scene
        .text(60, "Поместите топливо в сундук", [4, 2, 3])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)  
    scene
        .showControls(40, [4, 2, 3], "left")
        .rightClick()
        .withItem('coal_block')
    scene.idle(60)
    scene
        .text(80, "Далее разместите редстоуновые передатчики на выбрасыватели", [1.7, 5, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(100)
    scene.world.showIndependentSection(util.select.fromTo(2,2,4,6,6,4), Facing.SOUTH)
    scene.idle(20)
    scene
        .text(120, "Поменяйте фильтр на передатчиках (разместите там топливо). Нажмите на них, чтобы они заработали", [2, 5, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(140)
    scene.overlay.showText(60)
			.colored(PonderPalette.OUTPUT)
			.text("Теперь разместите песочные часы с 40 красного песка")
			.placeNearTarget()
            .attachKeyFrame()
    scene.idle(80)
    scene.world.showSection(util.select.position(4,1,1), Facing.DOWN)
    scene.idle(20)
    scene
        .text(80, "И разместите на них редстоуновые передатчики с фильтром, чтобы выбрасыватели работали", [4, 2, 1])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(100)
    scene.world.showIndependentSection(util.select.position(4,1,0), Facing.SOUTH)
    scene.idle(20)
    scene.rotateCameraY(-180)
    scene.idle(60)
    scene.addKeyframe()
    scene.world.showSection(util.select.fromTo(6,1,6,2,6,6), Facing.NORTH)
    scene.world.showIndependentSection(util.select.position(4,1,8), Facing.DOWN)
    scene.idle(20)
    scene
        .text(80, "Присоедините распространители маны к цветкам, а затем напрвьте их на бассейн маны", [4, 5, 6])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()

    scene.idle(60)
    })
})