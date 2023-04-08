import React, { useState, useEffect } from 'react';

function GithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/RobertMcNiven/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div>
      <h1>My Github Projects</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubProjects;
