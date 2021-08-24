import React from 'react'
import FeiyanTable from './components/feiyanTable'
export default class feiyanDemo extends React.Component{
  /*constructor(props) {
    super(props)
  }*/
  render() {
    return (
      <div>
        <h1>肺炎demo</h1>
        <FeiyanTable></FeiyanTable>
      </div>
    )
  }
}
