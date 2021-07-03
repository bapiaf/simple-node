const favoriteVariable = process.env.FAVORITE_VARIABLE;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log('Containers rule!' + favoriteVariable);
    await sleep(5000);
  }
}

main();
