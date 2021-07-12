import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination(props) {
    const {pagination, handlePageChange} = props
     
     const totalPage = Math.ceil(pagination.count / pagination.limit) 
    
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={totalPage} page={pagination.page} color="primary" onChange={handlePageChange}/> 
    </div>
  );
}