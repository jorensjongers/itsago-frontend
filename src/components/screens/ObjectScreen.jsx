import React from 'react'

class ObjectScreen extends React.Component {
    render() {
        return (
            <h1>Your item</h1>
        )
    }

    getImage = () => {
        var outside

        fetch("http://localhost:5000/detect_object" + image)
        .then(response => response.blob())
        .then(images => {
            // Then create a local URL for that image and print it 
            outside = URL.createObjectURL(images)
            console.log(outside)
        })
      }
}

export default ObjectScreen;