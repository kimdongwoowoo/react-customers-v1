import React, { Component } from "react";
const axios = require('axios');
//ajax를 쓰기위해 이거 꼭 삽입해줌, npm install도 해야함
class CustomerAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            birthday: '',
            gender: '',
            job: ''
        };
        //생성자에서 바인딩 다 해주기
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        //this.addCustomer=this.addCustomer.bind(this);
    }
    handleValueChange(e) {
        /*
        리액트는 input에서 값이 바뀔때마다 갱신하는걸 따로해줘야한다.
        <input onChange={메서드} value=스테이트참조> 이런식으로해야한다.
        onChange에 할당된 메서드로 이벤트객체 e가 넘어가고, 
        e.target.name으로 속성값을 뽑아내고
        e.target.value로 현재 입력되어 있는 값을 알아낸다.
        만약 아이디값에서 값이 변경되었으면
        e.target.name은 id가 되고
        e.target.value는 현재 입력중이 값이된다.
        
        
        {id:'값'}
        nextState['id']:'값'
        이런식으로 해주는 신종문법이다.
        */
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleFormSubmit(e) {
        //일단 멈추고
        e.preventDefault();
        //추가하고
        this.addCustomer().then((msg) => {
            console.log(msg); //addCustomer에서 리턴한 promise객체 안의 resolve값.

            //부모컴포넌트 App.js에서 목록갱신ㄱㄱ
            //DB에 잘 넣은 후에 목록 갱신할수있게 동기화 해줌. 안해주면 DB에 드가지도않았는데 먼저 긁어올수가 있음
            this.props.stateRefresh();
        });



    }
    addCustomer() {
        axios.post('/api/customer', {
            id: this.state.id,
            name: this.state.name,
            birthday: this.state.birthday,
            gender: this.state.gender,
            job: this.state.job
        });
        //프로미스를 리턴해야하기 때문에 아무것도없는애 리턴.
        //원래 resolve, reject두개인데 걍 한개만해도됨.
        return new Promise(resolve => {
            resolve('post끝'); //프로미스라는 값이 리턴됨
        });

    }


    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                아이디:<input type="text" name="id" value={this.state.id} onChange={this.handleValueChange}></input>
                이름:<input type="text" name="name" value={this.state.name} onChange={this.handleValueChange}></input>
                생년월일:<input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}></input>
                성별:<input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}></input>
                직업:<input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}></input>
                <button type="submit">전송</button>

            </form>
        );
    }


}

export default CustomerAdd;
