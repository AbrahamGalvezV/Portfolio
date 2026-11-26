const API_URL = "https://jscamp-api.vercel.app/api/jobs";
export const RESULTS_PER_PAGE = 4;

export const buildQuery = ({ text, filters, page }) => {
  const params = new URLSearchParams({
    limit: RESULTS_PER_PAGE,
    offset: (page - 1) * RESULTS_PER_PAGE,
  });

  if (text) params.set("text", text);
  if (filters.technology) params.set("technology", filters.technology);
  if (filters.location) params.set("type", filters.location);
  if (filters.experienceLevel) params.set("level", filters.experienceLevel);

  return params.toString();
};

export const getJobs = async (query, signal) => {
  const response = await fetch(`${API_URL}?${query}`, { signal });
  if (!response.ok) throw new Error(`Error HTTP ${response.status}`);

  const { data, total } = await response.json();
  return { jobs: data, total };
};
