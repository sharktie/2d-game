import Input from '../system/input.js';
import Player from '../entities/Player.js';
import ChunkGenerator from '../world/ChunkGen.js';


export default class GameScreen extends Phaser.Scene {

  constructor() {
    super('GameScreen');
  }

  

  create() {

    this.score = 0;                                                          //score var
    this.platforms = this.physics.add.staticGroup();

    this.inputSystem = new Input(this);
    this.player = new Player(this, 100, 300, this.inputSystem);                   //Graphics basically

    this.chunk = new ChunkGenerator(this, this.platforms);
    this.physics.add.collider(this.player.MC, this.platforms);

    this.cameras.main.startFollow(this.player.MC, true, 0.08, 0.08);

    this.scoreText = this.add.text(20, 20, 'Score: 0', {
     fontSize: '24px',
     color: '#ffffff'
    });

  }

  update() {
    this.player.update();
    this.score = Math.max(this.score, Math.floor(this.player.MC.x / 10));
    this.scoreText.setText('Score: ' + this.score);
    this.chunk.update(this.player.MC.x);                       //the game loop

    if (this.player.MC.y > 1000) {
      this.scene.start('DeathScreen',{
       score: this.score
      });
    }
                 //score clac

  }
}