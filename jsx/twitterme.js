var TwitterList = React.createClass({
  render: function(){
    var tweets = this.props.data.map(function(datum){
      return(
        <div className="col-sm-4" key={datum.id}>
          <Tweet {...datum} />
        </div>
      );
    })
    return(
      <div className="twitter-list">
        <h5>Tweets: {this.props.data.length}</h5>
        <div className="row">
          {tweets}
        </div>
      </div>
    )
  }
})

var TwitterBox = React.createClass({
  loadUserData: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        console.log("Data loaded!");
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function(){
    this.loadUserData();
  },
  render: function(){
    return(
      <div className="twitter-box">
        <h1>Twitter</h1>
        <TwitterList data={this.state.data} />
      </div>
    );
  }
})




var MyTwitterApp = React.createClass({
  render: function(){
    return(
      <div className="my-twitter-app">
        <FilterBox />
        <TwitterBox url={this.props.url} />
      </div>
    );
  }
})

// TODO: Filter list on handleChange
var FilterBox = React.createClass({
  getInitialState: function(){
    return {value: ''};
  },
  handleChange: function(event){
    this.setState({value: event.target.value})
  },
  render: function(){
    var value = this.state.value;
    return(
      <div className="filter-box">
        Filter: <input type="text" value={value}
        onChange={this.handleChange} placeholder="Non functional!" />
      </div>
    );
  }
});


React.render(
  <MyTwitterApp url="/data/tweet-stream.json"/>,
  document.getElementById('mah-twitter-app')
);
