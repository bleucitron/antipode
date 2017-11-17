import React from 'react';
import ReactDOM from 'react-dom';

import { ROOT_GITHUB_PATH } from './constants.js';
import posts from './postReference.json';

posts.forEach(post => {
  post.src = `${ROOT_GITHUB_PATH}/${post.src}`
});

const Post = ({name, src, date}) => (<article>
    <h2>{name}</h2>
    <div>{date}</div>
    <img src={src} />
  </article>
);

class Root extends React.Component {
	render() {
    const postComponents = posts.map(post => (<Post name={post.name} src={post.src} date={post.date} key={post.name}/>));
		return (
      <div>
        {postComponents}
      </div>
    );
	}
}




ReactDOM.render(<Root />, document.getElementById('root'));
