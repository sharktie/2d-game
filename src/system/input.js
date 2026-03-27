export default class Input {
  constructor(wasd) {
    this.wasd = wasd;

    this.keys = wasd.input.keyboard.createCursorKeys();        //arrow keys

    // extra keys (for dash etc.)
    this.space = wasd.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE                //space bar
    );

    this.shift = wasd.input.keyboard.addKey(               //shift key 
      Phaser.Input.Keyboard.KeyCodes.SHIFT
    );
  }

  LeftDown() {
    return this.keys.left.isDown;
  }

  RightDown() {
    return this.keys.right.isDown;
  }

  JumpDown() {
    return this.keys.up.isDown;
  }

  DashPressed() {
    return Phaser.Input.Keyboard.JustDown(this.space);
  }

  DashHeld() {
    return this.space.isDown;
  }
}