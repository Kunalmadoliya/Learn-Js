function country(c1, c2) {
  return {
    c1,
    c2,
    run() {
      return `Country 1: ${this.c1} , Country 2: ${this.c2}`;
    },
  };
}

