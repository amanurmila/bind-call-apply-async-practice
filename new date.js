const start = performance.now();
let sum = 0;

for (let i = 0; i < 10000000; i++) {
  sum++;
}

const end = performance.now();
console.log("How much time = ", end - start);
