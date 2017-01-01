var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
    return (
        <div>
            <h1 className="text-cente"> Examples Component </h1>
            <p> some example locations:  </p>
            <ol>
                <li>
                    <Link to="/?location=London"> London, UK</Link>
                </li>
                <li>
                    <Link to="/?location=Washington"> Washington, DC </Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;