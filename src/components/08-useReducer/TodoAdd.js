import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  
  const [{ description }, setFormState, reset] = useForm({
    description: ""
  });
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.length < 1) {
      return;
    }
    const newToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };
    handleAddTodo(newToDo)
    reset();
  }
  
  
  return (
    <>
      <h4>Add ToDo</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text"
            className="form-control"
            name="description"
            id="description"
            placeholder="Add Task"
            autoComplete="off"
            value={description}
            onChange={setFormState}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-primary"
        >
          Add
            </button>

      </form>
    </>
  )
}
