import { useGameManager } from "./hooks/use-game-manager";
import { Container } from "./components/Container/Container";
import { Spinner } from "./components/Container/Spinner/Spinner";
import PokemonDisplay from "./components/PokemonDisplay/PokemonDisplay";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import PokemonResults from "./components/PokemonResults/PokemonResults";
import GameOver from "./hooks/GameOver/Gameover";
import styles from "./DemoPokemon.module.css";


export const DemoPokemon = () => {
  const {
    loadNewPokemon,
    pokemon,
    error,
    isLoading,
    gameState,
    handlePokemonNameSubmit,
    handlePokemonLevel,
    level,
    fail,
    handleSkipPokemon,
    isGameOver,
    resetGame,
    correctPokemon,
    nextPokemon,
    textFail,
  } = useGameManager();

  return (
    <div className={styles.demo}>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <Container>
          <PokemonDisplay
            pokemon={pokemon}
            isLoading={isLoading}
            gameState={gameState}
            level={level}
            fail={fail}
          />
          {gameState === "playing" ? (
            <PokemonForm
              gameState={gameState}
              handlePokemonNameSubmit={handlePokemonNameSubmit}
              handleSkipPokemon={handleSkipPokemon}
              handlePokemonLevel={handlePokemonLevel}
            />
          ) : (
            <PokemonResults
              loadNewPokemon={loadNewPokemon}
              gameState={gameState}
              isGameOver={isGameOver}
              resetGame={resetGame}
            />
          )}
          {isGameOver && (
            <GameOver
              correctPokemon={correctPokemon}
              nextPokemon={nextPokemon}
              textFail={textFail}
            />
          )}
        </Container>
      )}
    </div>
  );
};
