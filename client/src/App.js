import React, { Component } from "react";

import "./App.css";
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

class App extends Component {
  state = {
    customers: ''
  }
  componentDidMount() {
    //promise 방식 사용
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }
  //async await 방식 사용
  callApi = async () => {
    const response = await fetch('/api/customer');
    const body = await response.json();
    return body;
  }




  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>아이디</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.customers
                ? this.state.customers.map(c => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    ></Customer>
                  );
                })
                : ''
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
