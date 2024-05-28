import { useSearchParams } from "react-router-dom";

export default function FilmsSorter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortQuery = searchParams.get("sort_by") ?? "created_at";

  function handleChange(e: any) {
    setSearchParams({ sort_by: e.target.value });
  }

  return (
    <>
      <label>
        Sort by:
        <select className="dropdown" value={sortQuery} onChange={handleChange}>
          <option value="date_watched">Most recent</option>
          <option value="rating">Most popular</option>
          <option value="release_year">Newest</option>
          <option value="title">Title</option>
          <option value="runtime">Runtime</option>
        </select>
      </label>
    </>
  );
}
