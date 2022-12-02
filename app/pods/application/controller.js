import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class ApplicationController extends Controller {
  @tracked items = [
    {
      isDone: false,
      label: 'kupić jajka',
    },
    {
      isDone: true,
      label: 'ugotować jajka',
    },
    {
      isDone: false,
      label: 'zjeść jajka',
    },
  ];

  @action
  onInputValue(event) {
    this.newTaskValue = event.target.value;
  }
  @action
  addNewTask(event) {
    event.preventDefault();

    this.items = [
      ...this.items,
      {
        isDone: false,
        label: this.newTaskValue,
      },
    ];
  }
}
