var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return (
            React.createElement("button", {type: "button", className: "btn btn-primary"}, 
                this.props.title, ' ', 
                React.createElement("span", {className: "badge badge-light"}, this.props.number)
            )
        );
    }
});

var Card = React.createClass({displayName: "Card",
    render: function() {
        return (
            React.createElement("div", {className: "col-sm-6 col-md-4"}, 
                React.createElement("div", {className: "card"}, 
                    React.createElement("img", {src: this.props.imageUrl, className: "card-img-top"}), 
                    React.createElement("div", {className: "card-body"}, 
                        React.createElement("h5", {className: "card-title"}, this.props.header), 
                        React.createElement("p", {className: "card-text"}, this.props.description), 
                        React.createElement(Badge, {
                            title: this.props.title, 
                            number: this.props.number}
                        )
                    )
                )
            )
        );
    }
});

var CardList = React.createClass({displayName: "CardList",
    render: function() {
        var list = this.props.cardData.map(props => {
            return React.createElement(Card, React.__spread({},  props));
        });
        return React.createElement("div", null, list);
    }
});

var options = {
    cardData: [
        {
            title: 'See Tutorials',
            number: 32,
            header: 'Learn React',
            description:
                'React is a fantastic new library for making fast, dynamic pages.',
            imageUrl: 'https://formatjs.io/img/react.svg'
        },
        {
            title: 'See Tutorials',
            number: 25,
            header: 'Learn Gulp',
            description: 'Gulp will speed up your development workflow.',
            imageUrl:
                'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
        }
    ]
};

// ask react to render this class
var element = React.createElement(CardList, options);

// when we ask to render this class, we will tell it
// where to place the rendered element in the dome
ReactDOM.render(element, document.querySelector('.container'));
