const React = require("react");

class New extends React.Component {
  render() {
    return (
      <form action="/api/fruits" method="POST">
        Fruit Name: <input type="text" name="name" /> <br />
        Fruit Color: <input type="text" name="color" /> <br />
        Is Ready to Eat: <input type="checkbox" name="readyToEat" /> <br />
        <input type="submit" name="" value="Create Fruit" />
      </form>
    );
  }
}

module.exports = New;
