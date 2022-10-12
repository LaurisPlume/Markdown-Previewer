import React from "react";
import ReactMarkdown from "react-markdown";

class Preview extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      preview:  '# This is Heading level 1 \n## This is Heading level 2\nTo markdown text, this React library is used [React-Markdown](https://github.com/remarkjs/react-markdown)\n\nThis is an inline code for markdown: ``<html><div></div></html>``\n\nThis is a code block: ```{"firstName": "John", "lastName": "Smith"}```\n\nAnd we have lists: \n 1. First item\n 2. Second item \n\n> This is a paragraph. One or more sentences makes it. Actually the more sentences the more of a paragraph it is.\n\n![Image](https://thedispatch.blob.core.windows.net/thedispatchimages/2022/04/1913623.jpeg) \n**Thank you for looking at this project!**'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      preview: event.target.value
    })
  }
  render(){
    return(
      <div>
        <textarea id="editor" onChange={this.handleChange} value={this.state.preview} style={{height: 325, width: 500}}>
        </textarea>
        <div id="preview">
          <ReactMarkdown>{this.state.preview}</ReactMarkdown></div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Preview/>
    </div>
  );
}

export default App;
