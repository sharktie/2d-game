export default class Player {
  constructor(gamestate, x, y, input) {
    this.state = gamestate;
    this.input = input;

    this.MC = gamestate.physics.add.sprite(x, y, 'player');
    this.MC.setCollideWorldBounds(false);              //phaser reqs

    this.speed = 260;
    this.jumpPower = 520;                            //character vars
    this.dashPower = 500;                                  
  }

  update() {
    const onGround = this.MC.body.blocked.down;

    // left and right
    if (this.input.LeftDown()) {
      this.MC.setVelocityX(-this.speed);
      this.MC.flipX = true;
    } else if (this.input.RightDown()) {
      this.MC.setVelocityX(this.speed);
      this.MC.flipX = false;

    } else {
      this.MC.setVelocityX(0);
    }

    // jump
    if (this.input.JumpDown() && onGround) {
      this.MC.setVelocityY(-this.jumpPower);
    }

    
    if (this.input.DashHeld() && (this.input.RightDown() || this.input.LeftDown())) {
      const dir = this.MC.flipX ? -1 : 1;
      this.MC.setVelocityX(dir * this.dashPower);
    }
  }
}