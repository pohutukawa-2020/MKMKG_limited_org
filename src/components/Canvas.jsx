import React from "react"
import ReactDOM from "react-dom"
// import backImg from "/images/karel.png"

// props.match.image
// props.match.name

class Canvas extends React.Component {


  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.font = "50px Courier"
      // ctx.fillText(this.props.text, 210, 75) // THIS IS THE PLACE TEXT IS EMBEDDED INTO THE PICTURE
      ctx.fillText('test text', 210, 75)
    }
  }
  render() {
    console.log(`/images/${this.props.match.params.image}.png`)
    return (
      <div>
        <canvas ref="canvas" width={1280} height={720} />
        <img ref="image" src={`/images/${this.props.match.params.image}.png`} className="hidden" />
      </div>
    )
  }
}
export default Canvas