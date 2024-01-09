import React from "react";

class ChildComponent extends React.Component {

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
       // let name ='kaka';
        let {name,age,add}=this.props;
      //  console.log('event---: ',this.state)
        console.log('propsname',this.props);
        
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
        
            <div>child component :{this.props.name}
           
            </div>
            
        
        </>
        );
    }
}

export default ChildComponent;
