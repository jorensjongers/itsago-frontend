import React from 'react'
import Camera from 'react-camera'
import Button from './Button'

class CameraField extends React.Component {
    render() {
        return (
            <Camera ref={(cam) => {this.camera = cam;}}>
                <Button txt='Take Picture' action={this.takePicture}/>
            </Camera>
    
        )
    }

    takePicture = () => {
        this.camera.capture()
        .then(picture => {this.props.action(picture)});
    }
}

export default CameraField;