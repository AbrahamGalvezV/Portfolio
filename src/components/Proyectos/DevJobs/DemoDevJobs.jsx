import { JobCard } from "./components/JobCard/JobCard";
import { Pagination } from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";
import { useJobs } from "./Hooks/useJons";
import styles from "./DemoDevJobs.module.css";

export const DemoDevJobs = () => {
  const {
    jobs,
    total,
    error,
    loading,
    totalPages,
    page,
    inputText,
    filters,
    handleTextChange,
    handleFilterChange,
    handleClear,
    handlePageChange,
  } = useJobs();

  const status = loading
    ? "Cargando ofertas..."
    : error ?? (total === 0
      ? "No hay ofertas que cumplan los requisitos"
      : `${total} ofertas encontradas`);

  return (
    <div className={styles.demo}>
      <header className={styles.box}>
        <h3 className={styles.title}>DevJobs</h3>
        <Search
          text={inputText}
          filters={filters}
          onTextChange={handleTextChange}
          onFilterChange={handleFilterChange}
          onClear={handleClear}
        />
      </header>

      <div className={`${styles.box} ${styles.results}`}>
        <p className={styles.status} role="status">{status}</p>

        <ul className={styles.list} aria-busy={loading}>
          {jobs.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
