var React = require('react');


var About = function(props) {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application build on React. I have built this for the Complete React web App Developer Couse.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>- this was the javascript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open weather Map</a> - I used Open weather Map to search for weather date by city name.
        </li>
      </ul>
   </div>
  )
};

module.exports = About;
