import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service store;

  @tracked newTaskValue = '';

  get hasEmptyValue() {
    return this.newTaskValue.trim().length === 0;
  }

  @action
  async addNewTask(event) {
    event.preventDefault();
    if (this.hasEmptyValue) {
      return;
    }
    const newTask = this.store.createRecord('task');
    newTask.description = this.newTaskValue;

    await newTask.save();
    this.newTaskValue = '';
  }

  @action
  onInputValue({ target: { value } }) {
    this.newTaskValue = value;
  }
}
