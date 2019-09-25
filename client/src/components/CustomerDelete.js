import React, { Component } from "react";

const axios = require('axios');
class CustomerDelete extends Component {
    render() {
        return (
            <button onClick={(e) => {
                this.deleteCustomer(this.props.id)
            }}>삭제</button>
        );
    }
    async deleteCustomer(id) {
        //api delete호출하고
        //얘도 마찬가지로 동기화
        await axios.delete('/api/customer/'+id);
        await this.props.stateRefresh();
    }

}

export default CustomerDelete;
