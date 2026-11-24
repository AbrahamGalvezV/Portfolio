import styles from "./ColorSelector.module.css"
import { COLORS } from "./colors"

export const ColorSelector = ({ selected = null, onSelect, className = "" }) => {

    

    return (
        <div className={`${styles.selector} ${className}`}>
            {COLORS.map(({ id, value }) => (
                <button
                    key={id}
                    type="button"
                    aria-label={`Color ${id}`}
                    aria-pressed={selected === id}
                    className={`${styles.selector__color} ${selected === id ? styles["selector__color--selected"] : ""}`}
                    style={{ "--peg-color": value }}
                    onClick={() => onSelect?.(id)}
                />
            ))}
        </div>
    )
}
