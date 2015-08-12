var TwitterUser = React.createClass({
  render: function(){
    var screen_name = this.props.screen_name;
    return (
      <div className="twitter-user">
        <div className="naming">
          <h5><strong>{this.props.name}</strong></h5>
          <span className="screen_name">
            <a target="_blank" href="https://twitter.com/{screen_name}">@{screen_name}</a>
          </span>
        </div>
        <div className="description">
          {this.props.description}
        </div>
      </div>
    );
  }
})
