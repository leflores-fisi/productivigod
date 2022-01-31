import './MarkdownEditor.scss'

function MarkDownEditor({content}) {
  
  return (
    <div>
      <textarea className='markdown-editor' defaultValue={content}/>
    </div>
  );
}
export default MarkDownEditor;