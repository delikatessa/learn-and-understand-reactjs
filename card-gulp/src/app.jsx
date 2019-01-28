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
