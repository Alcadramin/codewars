class VigenèreCipher {
  constructor(key, abc) {
    this.key = key;
    this.abc = abc.split('');
    this.cipherDict = {
      string: [],
      key: [],
      encryptedTotal: [],
      decryptedTotal: [],
      encrypted: [],
      decrypted: []
    }
  }

  generateKey(length) {
    // codewarsftw -> passwordpas
    this.key = this.key.repeat(Math.ceil(length / this.key.length)).substring(0, length);
    console.log(this.key)

    // reset cipherDict
    this.cipherDict = {
      string: [],
      key: [],
      encryptedTotal: [],
      decryptedTotal: [],
      encrypted: [],
      decrypted: []
    }
  }

  generateEncryptedTotal () {
    this.cipherDict.string.map((q, i) => this.cipherDict.encryptedTotal.push(q + this.cipherDict.key[i]));
  }

  generateDecryptedTotal () {
    this.cipherDict.encrypted.map((q, i) => this.cipherDict.decryptedTotal.push(q - this.cipherDict.key[i] + 26));
  }

  moduloMinus(input) {
    const result = input.map((q) => q % this.abc.length);
    return result;
  }

  findIndex(char) {
    return this.abc.indexOf(char);
  }

  encode(str) {
    this.generateKey(str.length);

    str.split('').map((q) => this.cipherDict.string.push(this.findIndex(q)));

    console.log(this.cipherDict.string);

    // FIXME: Dont convert if unicode chars.
    if (this.cipherDict.string.includes(-1)) {
      return str;
    }

    this.key.split('').map((q) => this.cipherDict.key.push(this.findIndex(q)));
    this.generateEncryptedTotal();
    this.cipherDict.encrypted = this.moduloMinus(this.cipherDict.encryptedTotal);
    const converEncIndex = this.cipherDict.encrypted.map((q) => this.abc[q]);
    
    

    return converEncIndex.join('');
  }

  decode(str) {
    if (this.cipherDict.string.includes(-1)) {
      return str;
    }

    this.generateDecryptedTotal();
    this.cipherDict.decrypted = this.moduloMinus(this.cipherDict.decryptedTotal);
    const convertDecIndex = this.cipherDict.decrypted.map((q) => this.abc[q]);

    return convertDecIndex.join('');
  }
}

module.exports = VigenèreCipher;
