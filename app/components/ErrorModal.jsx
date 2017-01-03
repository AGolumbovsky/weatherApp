var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount: function() {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4> Title titlE </h4>
                <p> The Error Message </p>
                <p>
                    <button className="button hollow" data-close="">Mkay</button>
                </p>
            </div>
        )
    }
})

module.exports = ErrorModal;