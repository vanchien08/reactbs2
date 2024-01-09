import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    // state ={
    //     name:'messi',
    //     age:'10'
    // }
    // handleclick =() =>{
    //     alert('clicked');
    // }
    // handleOnChangeName =(event)=>{
    //     this.setState({
    //         name: event.target.value
    //     })
    // }


    state={
        name:'',number:''
    }
    handelOnChangeName=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    handelOnChangeNumber=(event)=>{
        this.setState({
           number: event.target.value
        })
    }
    handOnClick =(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        let name ='kaka';
        console.log('event---: ',this.state)
        return (
        //    <>

          
        //     <div>
        //     {console.log('name',this.state.name)}
        //     compoment {this.state.name}</div>
        //     <div>
        //         <button onClick={() => this.handleclick()}>
        //             click
        //         </button>
        //     </div>
        //     <div>
        //     {/* My name is {this.state.name} */}
        //         <input value={this.state.name} type='text'
        //         onChange={(event)=>{this.handleOnChangeName(event)}} />
                
        //     </div>

        //     </>
        <>
            <div>hello</div>
            <form >
            <label for="fname">First name:</label><br/>
            <input type="text" value={this.state.name}
            onChange={(event)=>{this.handelOnChangeName(event)}}
            /><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" value={this.state.number}
                onChange={(event)=>{this.handelOnChangeNumber(event)}}
            /><br/><br/>
            <input type="submit" value="Submit"
                onClick={(event)=>{this.handOnClick(event)}}
            />
        </form> 
        <ChildComponent name={'child1'} age={'10'} addr={'bthanh'}/> 
        </>
        );
    }
}

export default MyComponent;
