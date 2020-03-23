
async function main() {
  const process: Deno.Process = Deno.run({
    args: ["deno", "run", "--allow-net", "./server.ts"],
    stdout: "piped",
  });
  const stdout: Deno.ReadCloser|undefined = process.stdout;
  if (stdout) {
    const chunk = new Uint8Array(1024);
    await stdout.read(chunk);
    console.log(`[process.stdout]: ${new TextDecoder().decode(chunk)}`)
  }

  setTimeout(() => {
    process.close();
    console.log('close process');
  }, 1000 * 60);
}


main();

