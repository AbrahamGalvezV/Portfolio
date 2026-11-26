import { useEffect, useRef, useState } from "react";
import { buildQuery, getJobs, RESULTS_PER_PAGE } from "../services/jobs.service";

const EMPTY_FILTERS = { technology: "", location: "", experienceLevel: "" };
const DEBOUNCE_MS = 400;

export const useJobs = () => {
  const [inputText, setInputText] = useState(""); 
  const [text, setText] = useState("");           
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState({ query: null, jobs: [], total: 0, error: null });
  const timeoutId = useRef(null);

  const query = buildQuery({ text, filters, page });

  useEffect(() => {
    const controller = new AbortController();

    getJobs(query, controller.signal)
      .then(({ jobs, total }) => setResult({ query, jobs, total, error: null }))
      .catch((error) => {
        if (controller.signal.aborted) return;
        console.error("Error al cargar las ofertas:", error);
        setResult({
          query,
          jobs: [],
          total: 0,
          error: "No se han podido cargar las ofertas. Inténtalo más tarde.",
        });
      });

    return () => controller.abort();
  }, [query]);

  useEffect(() => () => clearTimeout(timeoutId.current), []);

  const handleTextChange = (value) => {
    setInputText(value);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setText(value.trim());
      setPage(1);
    }, DEBOUNCE_MS);
  };

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setPage(1);
  };

  const handleClear = () => {
    clearTimeout(timeoutId.current);
    setInputText("");
    setText("");
    setFilters(EMPTY_FILTERS);
    setPage(1);
  };

  return {
    jobs: result.jobs,
    total: result.total,
    error: result.error,
    loading: result.query !== query,
    totalPages: Math.ceil(result.total / RESULTS_PER_PAGE),
    page,
    inputText,
    filters,
    handleTextChange,
    handleFilterChange,
    handleClear,
    handlePageChange: setPage,
  };
};
