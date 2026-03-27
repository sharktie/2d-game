export default class ChunkGen {
  constructor(scene, platforms) {
    this.scene = scene;
    this.platforms = platforms;

    this.tileWidth = 50;
    this.chunkSize = 10;

    this.generatedColumns = 0;
  }

  update(playerX) {
    // gen as player moves basically
    if (playerX > this.generatedColumns * this.tileWidth - 800) {
      this.generateChunk(this.generatedColumns);
      this.generatedColumns += this.chunkSize;
    }

    this.cleanup(playerX);
  }

  generateChunk(startCol) {
    for (let i = 0; i < this.chunkSize; i++) {
      const col = startCol + i;
      const row = 8;

     if (startCol === 0) {
         this.createBlock(col, row);
      }
    
     if (i > 0 && Math.random() > 0.6) {
        this.createBlock(col, row);
      }
      // variation platforms
      if (i > 0 && Math.random() > 0.6) {
        this.createBlock(col, row - 2);
      }

      if (i > 0 && Math.random() > 0.8) {
        this.createBlock(col, row + 2);
      }
    }
  }

  createBlock(col, row) {
    const block = this.platforms.create(
      col * this.tileWidth,
      row * 50,
      'ground'
    );

    block.setDisplaySize(this.tileWidth, 20);
    block.refreshBody();
  }

  cleanup(playerX) {
    this.platforms.getChildren().forEach(p => {
      if (p.x < playerX - 1200) {
        p.destroy();
      }
    });
  }
}