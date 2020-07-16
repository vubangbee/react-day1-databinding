import React from 'react';

function FunctionProps(props) {
    return (
        <div>
            <h2>Stateless Component</h2>
            <div className="card text-left">
                <img className="card-img-top" src={props.pet.image} />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>

        </div>
    )
}

export default FunctionProps;
