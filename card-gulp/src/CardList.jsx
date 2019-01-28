var CardList = React.createClass({
    render: function() {
        var list = this.props.cardData.map(props => {
            return <Card {...props} />;
        });
        return <div>{list}</div>;
    }
});
