const FilterBy = ({ setFilterBy }) => {
  const onChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <div className="filterBy">
      <label htmlFor="category">Filter by</label>
      <select id="category" onChange={onChange} className="dropdown">
        <option value="all">All</option>
        <option value="homeware">Homeware</option>
        <option value="food-drink">Food and Drink</option>
        <option value="consumables">Consumables</option>
        <option value="clothing">Clothing</option>
        <option value="special-gift">Special / Gift</option>
      </select>
    </div>
  );
};

export default FilterBy;
