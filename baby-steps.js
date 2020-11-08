s=0;
i=2;

while (process.argv[i]) {
    s += Number(process.argv[i]);
    i++;
  }

console.log(s)