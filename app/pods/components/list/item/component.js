import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ListItemComponent extends Component {
  @action
  async onToggleIsDone() {
    this.args.item.isDone = !this.args.item.isDone;
    await this.args.item.save();
  }

  @action
  async onRemoveTask() {
    console.log('remove');
    await this.args.item.destroyRecord();
  }
}
