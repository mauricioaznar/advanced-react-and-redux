import React from 'react'


class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lifecycleValue: ''
    }
  }



  componentDidMount() {
    this.setState({lifecycleValue: 'componentDidMount()'})
  }


  componentWillUnmount() {
    this.setState({lifecycleValue: 'componentDidUnmount()'})
  }


  setLifecycleValue() {
    console.log('is method called?')
    this.setState({lifecycleValue: 'Method called from render'})
  }

  render() {
   return <div>
     <div onClick={(e) => {this.setLifecycleValue()}}>Method from render</div>
     {this.state.lifecycleValue}
   </div>
  }
}

export default Hello