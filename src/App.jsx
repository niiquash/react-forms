import React from "react";

const App = () => {
  const signup = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const description = formData.get("description");
    const employmentStatus = formData.get("employmentStatus");
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const favColor = formData.get("favColor");
    console.log({
      email,
      password,
      description,
      employmentStatus,
      dietaryRestrictions,
      favColor,
    });
  };

  return (
    <main className="App">
      <h1>Signup form</h1>
      <form className="signup-form" action={signup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue="ammon@quarshie.com"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          defaultValue="P@5sW0rD1324"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="full-time" />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor" defaultValue="">
          <option value="">-- Select a color --</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </select>

        <button>Submit</button>
      </form>
    </main>
  );
};

export default App;
