import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { CgTrees } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss'
Filter.propTypes = {
  onSortChange: PropTypes.func,
};

Filter.defaultProps = {
  onSortChange: null,
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    height: '20px'
  },
   focused2: {
    transform: 'translate(-30px, 25px) scale(1)',
    transformOrigin: 'top left',
}
}));
function Filter(props) {
  const classes = useStyles();
  const { catalog, handleChangeFilter } = props;
  

  // const [filter, setFilter] = useState({ label: null, sortBy: null });
 
const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="sort">
      {/* <span className="sort__name mt-5 m-0"></span> */}
     
      <FormControl  className={classes.formControl}>
        <InputLabel className={classes.focused} id="demo-controlled-open-select-label"><CgTrees/>Danh mục</InputLabel>
        <Select
          
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChangeFilter}
          // renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem  value="">
            <em>Mặc định </em>
          </MenuItem>
          {catalog.map((cat) => {
                return (
          <MenuItem value={cat.name} key={cat.id} 
           >{cat.name}</MenuItem>
          );
        })}
        </Select>
      </FormControl>
   
    </div>
  );
}

export default Filter;
