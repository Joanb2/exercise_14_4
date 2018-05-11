var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Movie about some wizard', 
		src: "./potter.jpg",
		alt: "potter"
	},
	{
		id: 2,
		title: 'Lion King',
		desc: 'Everyone cry on this',
		src: "./king.jpg",
		alt: "king"
	},
	{
		id: 3,
		title: 'Fight Club',
		desc: 'I should not talk about this',
		src: "./fight.jpg",
		alt: "club"
	},
	{
		id: 4,
		title: 'A Clockwork Orange',
		desc: 'History about charming Alex DeLarge',
		src: "./clock.jpg",
		alt: "orange"
	}
];

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.desc);
	}
});

var MoviesList = React.createClass({
	propTypes: {
		id: React.PropTypes.number.isRequired,
	},
	render: function() {
		return React.createElement('li', {key: this.props.id});
	}
});


var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired, 
	},
  	render: function() {
	  	return React.createElement(MoviesList, {id: this.props.movie.id},
			React.createElement(MovieTitle, {title: this.props.movie.title}),
			React.createElement(MovieDescription, {desc: this.props.movie.desc}),
			React.createElement('img', {src: this.props.movie.src, alt: this.props.movie.alt}
			));

	}
      
});

var moviesElements = movies.map(function(movie){
	return React.createElement(Movie, {movie: movie});
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Movies'),
		React.createElement('ul', {}, moviesElements),
	);
ReactDOM.render(element, document.getElementById('app'));