
import { getFilter } from 'components/redux/filter/filter-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/filter/filterSlice';
import css from './FilterByName.module.css';





export const FilterByName = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));

  };
  return (
    <div className={css.contacts}>
      <h2 className={css.title}>Contacts</h2>
      <input
        value={filter}
        name="filter"
        onChange={handleFilter}
        className={css.filter}
        placeholder="add name"
      />
    </div>
  );
};

