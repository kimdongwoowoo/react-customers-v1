import React, { Component } from "react";

import "./App.css";
import Customer from "./components/Customer";
import CustomerAdd from "./components/CustomerAdd";
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
  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
    this.stateRefresh = this.stateRefresh.bind(this);

  }
  //state refresh할때도 동기화 주의할것.
  //GET으로 데이터를 갖고온 후 state를 변경해줘야함.
  stateRefresh() {
    this.callApi().then((body) => {
      this.setState({ customers: body });
    });


  }
  componentDidMount() {

    this.stateRefresh();
  }

  //async await 방식 사용

  callApi = async () => {
    const response = await fetch('/api/customer');//fetch 자체적으로 promise 리턴
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
              <TableCell>설정</TableCell>
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
                      stateRefresh={this.stateRefresh}
                    ></Customer>
                  );
                })
                : ''
            }
          </TableBody>
        </Table>
        <CustomerAdd stateRefresh={this.stateRefresh}></CustomerAdd>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
