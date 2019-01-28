const { Component } = require('react');

class Badge extends Component {
    render() {
        return (
            <button type="button" className="btn btn-primary">
                {this.props.title}{' '}
                <span className="badge badge-light">{this.props.number}</span>
            </button>
        );
    }
}

module.exports = Badge;gu
