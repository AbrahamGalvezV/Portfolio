import { CasillaVacia } from "../CasillaVacia/CasillaVacia"
import styles from "./TablaDeUno.module.css"

export const TablaDeUno = ({ cells = [], activeRow, onCellClick }) => {

    return (
        <div className={styles.table}>
            {cells.map((color, row) => (
                <CasillaVacia
                    key={row}
                    color={color}
                    active={row === activeRow}
                    disabled={row !== activeRow}
                    onClick={() => onCellClick?.(row)}
                />
            ))}
        </div>
    )
}
