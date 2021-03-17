import React from 'react'

function logHoc (WrappedComponent) {
    return class extends React.Component {
      render(){
        return <WrappedComponent {...this.props} >{this.children}</WrappedComponent>;
      }
    }
}

export default logHoc