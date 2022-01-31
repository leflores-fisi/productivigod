import { NotebookContext, useNotebook } from "../context/NotebookContext";
import './MarkdownEditor.scss'

function MarkDownEditor({content}) {
  
  const text = useNotebook();
  
  return (
    <div>
      <textarea className='markdown-editor' defaultValue={content}/>
    </div>
  );
}
export default MarkDownEditor;