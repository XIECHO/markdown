import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this)
    this.handlePreviewMaximize = this.handleEditorMaximize.bind(this)
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    })
  }

  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    })
  }

  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    })
  }

  render() {
    const classes = this.state.editorMaximized ? 
      ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']: this.state.previewMaximized ?
      ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']:
      ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
      return (
      <div>
        <div >
          <Toolbar onClick={this.handleEditorMaximize} text="Editor"/>
          <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
        </div>
        <div>
          <Toolbar onClick={this.handlePreviewMaximize} text="Previewer"/>
          <Preview markdown={this.state.markdown}></Preview>
        </div>
      </div>
    )
  }
}

function Toolbar(props) {
  return (
    <div className='toolbar'>
      <i title="no-stack-dub-sack" className="fa fa-free-code-camp"/>
      {props.text}
      <i onClick={props.onClick} className={props.icon}></i>
    </div>
  )
}

function Editor(props) {
  return (
    <textarea id="editor" value = {props.markdown} onChange = {props.onChange} type="text"/>
  )
}

function Preview(props) {
  return (
    <div id='preview'></div>
  )
}

let placeholder = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
`

ReactDOM.render(<App />, document.getElementById('root'))