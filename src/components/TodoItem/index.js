// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="listItem">
      <p>{title}</p>
      <button
        onClick={onDelete}
        alt="cross"
        type="button"
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  )
}
export default TodoItem
