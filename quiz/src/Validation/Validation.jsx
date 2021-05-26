import React from 'react'

function Validation(props) {
    
    let validate = null;
    if(props.inputLength>=0 && props.inputLength<=5 ){
        validate =(
            <p>{'The text length is Too short'}</p>
            )
    }
    else{
        validate =(
            <p>{'The text length is long enough'}</p>
            )
    }
    return (
        <div>
          {validate}
        </div>
    )
}

export default Validation
