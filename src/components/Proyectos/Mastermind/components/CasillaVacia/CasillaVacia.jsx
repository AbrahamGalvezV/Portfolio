import styles from "./CasillaVacia.module.css"

export const CasillaVacia = ({ color = null, active = false, disabled = false, onClick }) => {

    const classes = [
        styles.casilla,
        color && styles["casilla--filled"],
        active && styles["casilla--active"],
    ].filter(Boolean).join(" ")

    return (
        <button
            type="button"
            aria-label={color ? "Casilla pintada" : "Casilla vacía"}
            className={classes}
            style={color ? { "--peg-color": color } : undefined}
            disabled={disabled}
            onClick={onClick}
        />
    )
}
