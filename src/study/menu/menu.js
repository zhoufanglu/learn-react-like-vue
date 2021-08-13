import React from 'react'
import '../study.scss'
import './menu.scss'


export default class Menu extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      active: 0,
      menuList: [{id:0, name: 'A'},{id:1, name: 'B'}]
    }
  }
  render() {
    return (
      <div className={'menu panel'}>
        {this.state.menuList.map((i,index)=>{
          return <button
            className={this.state.active === i.id?'item active':'item'}
            key={i.id}
            /*onClick={this.btnClick.bind(this,i)}*/
            onClick={()=> this.btnClick(i)}
            //onClick={this.btnClick}
          >
            {i.name}
          </button>
        })}
      </div>
    )
  }
  btnClick(i) {
    console.log(32, this)
    //console.log(i)
    //this.setState({active: i.id})
  }
  componentDidMount() {

  }
}
