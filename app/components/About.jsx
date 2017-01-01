var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center"> About Componenet </h1>
            <p> React application this is for me to learn React </p>
            <p> Here are tools I used: </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> -- The JS library used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map </a> -- Free weather API to search by city
                </li>
            </ul>
        </div>
    )
}

module.exports = About;