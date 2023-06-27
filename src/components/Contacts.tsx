import React from 'react';
import GitHubIcon from './GithubIcon';

function Contacts() {
  return (
    <div className="flex flex-col items-center justify-center">
      <a href="https://github.com/hesperu" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
        <GitHubIcon />
      </a>
      <h1 className="text-6xl font-bold text-center text-gray-700">Mail: ko-ibuka♡outlook.jp</h1>
      <h1 className="text-6xl font-bold text-center text-gray-700">♡を@にしてください</h1>
    </div>
  );
}

export default Contacts;
