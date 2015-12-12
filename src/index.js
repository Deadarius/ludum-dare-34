import store from './store'
import BABYLON from 'babylonjs'

window.addEventListener('DOMContentLoaded', function () {
  if (!BABYLON.Engine.isSupported()) {
    console.log('BOLLOX!')
    return
  }

  let canvas = document.getElementById('viewport')
  let engine = new BABYLON.Engine(canvas, true)
  let scene = new BABYLON.Scene(engine)
  let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene)

  camera.setTarget(BABYLON.Vector3.Zero())
  camera.attachControl(canvas, false)

  let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)
  let sphere = new BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene)
  sphere.position.y = 1
  let ground = new BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene)

  window.addEventListener('resize', function () {
    engine.resize()
  })

  engine.runRenderLoop(function () {
    scene.render()
  })
})

