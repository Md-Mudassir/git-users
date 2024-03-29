import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert, clearUsers }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    githubContext.searchUsers(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          placeholder="Search Users.."
          name="text"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      <button
        className="btn btn-light btn-block"
        onClick={githubContext.clearUsers}
      >
        Clear
      </button>
    </div>
  );
};

export default Search;
