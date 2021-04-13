import { Component } from "react";


class CatFactList extends Component {

  render() {

    const facts = this.props.facts 
    const factItems = facts.map((fact) => {
      return <li>{fact.text}</li>
    })


    return(
      <div>
        <h1>Cat Facts List</h1>
        {factItems}
      </div>
     
    )
  }

}

export default CatFactList