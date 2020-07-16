import React, { PureComponent } from 'react'

class ClassProps extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        //Gọi props về 1 nơi
        const {image, name, price} = this.props.phone
        
        return <div>
            <div className="card text-left">
                {/* Nhận prop  image */}
                <img className="card-img-top" src={image} alt="asss" style={{width: "300px"}}/>
                <div className="card-body">
    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>

        </div>
    }
}

export default ClassProps