import React, { Component } from 'react';
import Checkbox from 'components/Checkbox';

const items = [
  'One',
  'Tow',
  'Three',
];

class ShowCheckbox extends Component {

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  );

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <input
                type="submit"
                className="btn btn-default"
                value="save"
              />
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default ShowCheckbox;
