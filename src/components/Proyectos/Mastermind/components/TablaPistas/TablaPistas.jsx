import styles from "./TablaPistas.module.css"

export const TablaPistas = ({ hints = [], pegs = 4 }) => {

    return (
        <div className={styles.pistas}>
            {hints.map((hint, row) => {
                const exact = hint?.exact ?? 0
                const partial = hint?.partial ?? 0

                return (
                    <div
                        key={row}
                        className={styles.pistas__row}
                        style={{ "--pistas-cols": Math.ceil(pegs / 2) }}
                        aria-label={hint ? `${exact} exactas, ${partial} de color` : undefined}
                    >
                        {Array.from({ length: pegs }, (_, i) => {
                            const type = i < exact ? "exact" : i < exact + partial ? "partial" : "empty"
                            return (
                                <span
                                    key={i}
                                    className={`${styles.pistas__peg} ${styles[`pistas__peg--${type}`]}`}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
