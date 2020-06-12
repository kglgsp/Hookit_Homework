import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataTable({rows}) {
  const classes = useStyles();
 
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Social Post ID</TableCell>
            <TableCell>Brand Name</TableCell>
            <TableCell>Display Name</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Likes</TableCell>
            <TableCell>Views</TableCell>
            <TableCell>Mention Value</TableCell>
            <TableCell>Tag Value</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>

              <TableCell>{row.SocialPost_ID}</TableCell>
              <TableCell>{row.BrandName}</TableCell>
              <TableCell>{row.Displayname}</TableCell>
              <TableCell>{row.Comments}</TableCell>
              <TableCell>{row.Likes}</TableCell>
              <TableCell>{row.Views}</TableCell>
              <TableCell>{row.MentionValue}</TableCell>
              <TableCell>{row.TagValue}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
