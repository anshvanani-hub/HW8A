export class Account {
  constructor(ownerName) {
    if (!ownerName || typeof ownerName !== 'string') {
      throw new Error('ownerName is required');
    }
    this.ownerName = ownerName;
    this.balanceCents = 0;
  }

  credit(amount) {
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount)) {
      throw new Error('Amount must be a number');
    }
    this.balanceCents += Math.round(numericAmount * 100);
    return this.balanceCents / 100;
  }

  describe() {
    const balance = (this.balanceCents / 100).toFixed(2);
    return `owner: ${this.ownerName}, balance: ${balance}`;
  }
}


