import React from 'react';
function Alert(props) {
    const hideParent = () => {
        const parentElement = document.getElementById('parentElement');
        if (parentElement) {
            parentElement.style.display = 'none';
        }

    }
    return (
        <>
            {props.alert && (
           <div className={`alert alert-${props.alert.typ} alert-dismissible fade show my-1 mx-3`} role="alert" style={{backgroundColor:props.mode==='dark'?'#31577a':'#FFF3CD'}} id='parentElement'>
               <strong>{props.alert.typ}</strong>:{props.alert.msg}
               <button type="button" className="btn-close" onClick={hideParent} aria-label="Close"></button>
           </div>
            )}
        </>
    );
}
export default Alert;