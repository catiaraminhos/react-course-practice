import classes from './NewPost.module.css';

function NewPost({ onChangeName, onChangeBody, onCancel }) {
  const changeBodyHandler = (event) => {
    onChangeBody(event.target.value);
  };

  const changeNameHandler = (event) => {
    onChangeName(event.target.value);
  };

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p></p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
