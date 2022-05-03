class User {
  constructor() {
    this.debug = true;
    this.rank = -8;
    this.progress = 0;
  }

  evaluateRank() {
    if (this.progress >= 100 && this.rank < 8) {
      this.rank += ~~(this.progress / 100);
      this.progress %= 100;
    }

    if (this.rank === 0) {
      this.rank += 1;
    }

    if (this.rank === 8) {
      this.progress = 0;
    }
  }

  incProgress(rank) {
    this.debug &&
      console.log(
        JSON.stringify({
          incomingRank: rank,
          actualRank: this.rank,
          progress: this.progress,
        })
      );

    if (rank === 0 || rank > 8 || rank < -8)
      throw new Error("Rank is out of range");

    if (this.rank === 8) return;

    let rankDiff =
      (this.rank < 0 && rank > 0) || (this.rank > 0 && rank < 0)
        ? Math.abs(this.rank) + Math.abs(rank)
        : rank - this.rank;

    if (this.rank < 0 && rank > 0) {
      rankDiff--;
    }

    if (this.rank > 0 && rank < 0) {
      rankDiff = -rankDiff;
    }

    if (rankDiff > 0) {
      if (rank === 1 && this.rank === -1) {
        this.progress += 10;
      } else {
        this.progress += 10 * rankDiff * rankDiff;
      }
    } else {
      this.progress += rankDiff === 0 ? 3 : 1;
    }

    this.evaluateRank();
  }
}

module.exports = User;
