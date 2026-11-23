import { useState } from "react";
import { ColorSelector } from "../ColorSelector/ColorSelector";
import { evaluateGuess, generateSecret, getGuess } from "../Utils/Mastermind";
import { TablaDeUno } from "../TablaDeUno/TablaDeUno"
import styles from "./DemoMastermind.module.css"
import { TablaPistas } from "../TablaPistas/TablaPistas";
import { COLORS } from "../ColorSelector/colors";

const ROWS = 11;
const COLUMNS = 4; 

const createBoard = () =>
  Array.from({ length: COLUMNS }, () => Array(ROWS).fill(null));

const getActiveRow = (board) => {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (!board.every((column) => column[row] !== null)) return row;
    }
    return -1;
};

const colorValue = (id) => COLORS.find((c) => c.id === id)?.value ?? null;


export const DemoMastermind = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [board, setBoard] = useState(createBoard);
    const [secret, setSecret] = useState(() => generateSecret(COLUMNS));

    const activeRow = getActiveRow(board);
    const hints = Array.from({ length: ROWS }, (_, row) =>
        row > activeRow ? evaluateGuess(secret, getGuess(board, row)) : null
    );
    const lastCompletedRow = activeRow + 1;
    const hasWon = hints[lastCompletedRow]?.exact === secret.length;
    const isGameOver = hasWon || activeRow === -1;
    const attemps = ROWS - lastCompletedRow;

    const handleCellClick = (column, row) => {
      if (isGameOver || !selectedColor || row !== activeRow) return;
      setBoard((prev) =>
        prev.map((cells, c) =>
          c === column ? cells.map((cell, r) => (r === row ? selectedColor : cell)) : cells
        )
      );
    };

    const restart = () => {
        setSecret(generateSecret(COLUMNS));
        setBoard(createBoard());
        setSelectedColor(null);
    };

    return (
        <div className={styles.demo} >
            <div className={styles.board}>
                {board.map((cells, column) => (
                    <TablaDeUno 
                        key={column}
                        cells={cells.map(colorValue)}
                        activeRow={isGameOver ? -1 : activeRow}
                        onCellClick={(row) => handleCellClick(column, row)}
                    />
                ))}
                <TablaPistas hints={hints} pegs={COLUMNS} />
            </div>
            
            {isGameOver ? (
                <div className={styles.result} role="status">
                    <p>{hasWon ? `¡Ganaste en ${attemps} intentos!` : "Has perdido"}</p>
                    <button type="button" className={styles.restart} onClick={restart}>
                        Jugar otra vez
                    </button>
                </div>
            ) : (
                <ColorSelector
                    className={styles.selector}
                    selected={selectedColor}
                    onSelect={setSelectedColor}
                />
                
            )}
            
        

        </div>
    );
}