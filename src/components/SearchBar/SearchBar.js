import { BiSearchAlt } from 'react-icons/bi';
import { SearchForm, BtnSubmit, BtnLabel, Input } from './SearchBar.styled';

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
    <SearchForm>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        name="query"
      />
      <BtnSubmit type="submit" onSubmit={onSubmit}>
        <BtnLabel>
          Search <BiSearchAlt size="24" />
        </BtnLabel>
      </BtnSubmit>
    </SearchForm>
  );
};
