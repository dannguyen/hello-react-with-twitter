var Tweet = React.createClass({
  render: function(){
    var user = this.props.user,
      text = this.props.text;
    return (
      <div className="tweet" key={this.props.id}>
          <span className="screen_name">
            <a target="_blank" href="https://twitter.com/{screen_name}">@{user.screen_name}</a>
          </span>
        <div className="text">
          {text}
        </div>
      </div>
    );
  }
})
