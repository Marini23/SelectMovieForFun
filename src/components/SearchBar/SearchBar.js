export const SearchBar = ({ onChange }) => {
  const onSubmit = evt => {
    evt.preventDefault();

    const searchQuery = evt.target.query.value.trim();

    if (!searchQuery) {
      return;
    }

    onChange(searchQuery);

    evt.target.reset();
  };

  return (
    <div>
      <form>
        <button type="submit" onSubmit={onSubmit}>
          <span>Search</span>
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="query"
        />
      </form>
    </div>
  );
};
