// deno --allow-read read.ts

function main(): void {
  const rs = Deno.readDirSync("./assets/");
  console.log(rs);
}

main();