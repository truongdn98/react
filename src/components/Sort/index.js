import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { FaSort } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss'
Sort.propTypes = {
  onSortChange: PropTypes.func,
};

Sort.defaultProps = {
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
function Sort(props) {
  const classes = useStyles();
  const { handleSortChange } = props;
  const sortRef = useRef(null);

  const [valueActive, setValueActive] = useState({ label: null, sortBy: null });
  const priceOptions = [
    { id: 1, value: "Thấp đến cao", keyword: "asc" },
    { id: 2, value: "Cao đến Thấp", keyword: "desc" },
  ];


  // const handleSortItemClick = (sortBy, label) => {
  //   if (sortRef.current) sortRef.current = null;
  //   sortRef.current = { sortBy: sortBy, label: label };
  //   setValueActive(sortRef.current);
  //   if (onSortChange) onSortChange(sortRef.current);
  // };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="sort mb-5  me-5">
      <span className="sort__name mt-5 m-0"></span>
  
      <FormControl  className={classes.formControl}>
        <InputLabel className={classes.focused} id="demo-controlled-open-select-label"> <FaSort/>Giá</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}      
          onChange={handleSortChange}  
        >
          <MenuItem  value="">
            <em>Mặc định </em>
          </MenuItem>
          {priceOptions.map((option) => {
                return (
          <MenuItem value={option.keyword} key={option.id} 

           >{option.value}</MenuItem>
          );
        })}
        </Select>
      </FormControl>
   
    </div>
  );
}

export default Sort;
