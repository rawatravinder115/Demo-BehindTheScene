import React from 'react';

const DemoOutput = (props) =>{
    console.log('DemoOutput RUNNING');
    return <p>{props.show ? 'this is new!' : '' }</p>;
};

export default React.memo(DemoOutput);

//  when the state of component changes its children component also get 
// re-evaluated and re-exicuted again but we can stop them when the value of props are 
// same as prev state by using 
// export default React.memo(DemoOutput);