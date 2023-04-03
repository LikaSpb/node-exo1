const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

console.log("Devinez un nombre entre 1 et 100. Vous avez 10 tentatives.");

process.stdin.on("data", (input) => {
  const userGuess = parseInt(input);

  if (userGuess >= 1 && userGuess <= 100) {
    if (userGuess === secretNumber) {
      console.log("Félicitations ! Vous avez trouvé le nombre secret !");
      process.exit();
    } else {
      attempts -= 1;

      if (attempts === 0) {
        console.log(
          `Désolé, vous n'avez plus de tentatives. Le nombre secret était ${secretNumber}.
        `);
        process.exit();
      } else {
        console.log(
          "Le nombre secret est " +
            (userGuess < secretNumber ? "plus grand" : "plus petit") +
            "."
        );
        console.log(`Il vous reste ${attempts} tentatives.`);
      }
    }
  } else {
    console.log("Veuillez entrer un nombre valide entre 1 et 100.");
  }
});