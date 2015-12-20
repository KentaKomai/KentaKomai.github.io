
var CommentBox = React.createClass({
  render: function() {
    return (
      <div>
        Hello,  world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />
  , document.getElementById('application')
);
