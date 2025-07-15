import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, MenuItem, Select } from '@mui/material';
import styles from '@/styles/sortfilter.module.css';

const SortFilterSection = () => {
  const [sort, setSort] = useState<Sort>("asc");
  return (
    <div className={`${styles["sort-filter-section"]}`}>
      <div className={`${styles["section-container"]}`}>
        <span className={`${styles["section-title"]}`}>Sort by Title</span>
        <Select
          value={sort}
          size="small"
          onChange={(e) => setSort(e.target.value)}
        >
          <MenuItem value={"asc"}>ASC</MenuItem>
          <MenuItem value={"desc"}>DESC</MenuItem>
        </Select>
      </div>
      <div className={`${styles["section-container"]}`}>
        <span className={`${styles["section-title"]}`}>Filter</span>
        <div className={`${styles["filter-favorites"]}`}>
          <span>Favorites?</span>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Yes" />
            <FormControlLabel control={<Checkbox />} label="No" />
          </FormGroup>
        </div>
      </div>
    </div>
  )
}

export default SortFilterSection;