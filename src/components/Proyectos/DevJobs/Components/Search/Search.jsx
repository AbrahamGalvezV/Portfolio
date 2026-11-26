import { FILTERS } from "./filterOptions";
import styles from "./Search.module.css";

export const Search = ({ text, filters, onTextChange, onFilterChange, onClear }) => {
  const hasFilters = text !== "" || Object.values(filters).some(Boolean);

  return (
    <form className={styles.search} role="search" onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles.input}
        type="search"
        value={text}
        placeholder="Busca trabajos, empresas o habilidades"
        aria-label="Buscar ofertas"
        onChange={(e) => onTextChange(e.target.value)}
      />

      <div className={styles.filters}>
        {FILTERS.map(({ name, label, options }) => (
          <select
            key={name}
            className={styles.select}
            aria-label={label}
            value={filters[name]}
            onChange={(e) => onFilterChange(name, e.target.value)}
          >
            <option value="">{label}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ))}

        <button type="button" className={styles.clear} onClick={onClear} disabled={!hasFilters}>
          Limpiar
        </button>
      </div>
    </form>
  );
};
