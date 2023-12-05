import React,{ useState } from 'react'
export default function TextForm(props) {
  const [text,setText] = useState('');
  // text = 'Enter Text here2'; wrong way to change state
  // setText('New text')// right way to change the state
  const handleUpperClick = () => {
    // console.log('Upper case');
    // setText('You have clicked on handleUpperClick'+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text converted to upper case','success');
  }
    const handleLowerClick = () => {
        // console.log('Upper case');
        // setText('You have clicked on handleLowerClick'+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to lower case','success');

    }
    const handleNormalClick = () => {
        // console.log('Upper case');
        // setText('You have clicked on handleNormalClick:'+text);
        let newText1 = text.split(" ");
        let newText2 = [];
        for (let i = 0; i < newText1.length; i++) {
            newText2[i] = newText1[i].charAt(0).toUpperCase()+ newText1[i].slice(1).toLowerCase();
        }
        setText(newText2.join(" "));
        props.showAlert('Text converted to Capitalize case','success');

    }
    const clearText = () => {
      setText('');
        props.showAlert('Text cleared','success');

    }
    const copyText = () => {
      let text = document.getElementById('exampleFormControlTextarea1');
      text.select();
      text.setSelectionRange(0,99999999);
      navigator.clipboard.writeText(text.value).catch(() => {});
        props.showAlert('Text copied to clipboard','success');

    }
    const handleExtraSpaces = () => {
      let regex = text.split(/ +/);
      setText(regex.join(' '));
        props.showAlert('Extra spaces removed','success');
    }
    const handleWordLength = () => {
      let textArea = document.getElementById('exampleFormControlTextarea1');
      let wordLength = text.split(/ +[a-zA-Z0-9~`!@#%&]+/).length;
      if(textArea===null){
          return 0;
      }else{
          return wordLength;
      }
    }
  const handleOnChange = (event) =>{
    // console.log('Handle on change');
    setText(event.target.value);
  }
  return (
      <>
          <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
              <div className="mb-3">
                  <h1>{props.heading}</h1>
                  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{background:props.mode==='dark'?'#a2a8a2':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
              </div>
              <button className="btn btn-outline-primary me-2 my-2" onClick={handleUpperClick}>Convert to Upper Case</button>
              <button className="btn btn-outline-info me-2 my-2" onClick={handleNormalClick}>Convert to Capitalize Case</button>
              <button className="btn btn-outline-warning me-2 my-2" onClick={handleLowerClick}>Convert to Lower Case</button>
              <button className="btn btn-outline-success me-2 my-2" onClick={clearText}>Clear Text</button>
              <button className="btn btn-outline-dark me-2 my-2" onClick={copyText}>Copy Text</button>
              <button className="btn btn-outline-danger me-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          </div>
          <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
              <h1>Your Text Summary</h1>
              <p>Your Summary has {handleWordLength()} word(s) and {text.length} character(s)</p>
              <p>You can read this summary in {0.008*text.split(" ").length} minute(s)</p>
              <h2>Preview</h2>
              <pre>{text.length>0?text:'Enter something in above box to preview'}</pre>
          </div>
      </>
  );
}