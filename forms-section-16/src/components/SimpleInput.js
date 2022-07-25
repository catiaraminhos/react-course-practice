import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const validateName = (nameValue) => nameValue.trim() !== '';
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(validateName);

  // eslint-disable-next-line no-useless-escape
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validateEmail = (emailValue) => emailFormat.test(emailValue);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(validateEmail);

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(nameInputHasError || emailInputHasError) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses =
    'form-control' + (nameInputHasError ? ' invalid' : '');
  const emailInputClasses =
    'form-control' + (emailInputHasError ? ' invalid' : '');

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty and must have the right format. For example, test@example.com .</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
