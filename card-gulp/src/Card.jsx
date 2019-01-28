var Card = React.createClass({
    render: function() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="card">
                    <img src={this.props.imageUrl} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.header}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <Badge
                            title={this.props.title}
                            number={this.props.number}
                        />
                    </div>
                </div>
            </div>
        );
    }
});
