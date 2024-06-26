import { useState } from 'react';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [err, setError] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      if (firstName.length < 1) {
          setError('first name is not long enough')
          return 
      }
    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
      setLastName('');
      setError('');
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button type="submit">
          Submit
              </button>
          </form>
          <h3>{err}</h3>
    </div>
  );
}

export default Form;
