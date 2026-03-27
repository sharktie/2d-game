export function setupCamera(scene, target) {
  scene.cameras.main.startFollow(target, true, 0.08, 0.08);
}