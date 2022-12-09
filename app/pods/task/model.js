import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') description;
  @attr('boolean') isDone;
  @attr('date') updatedAt;
  @attr('date') createdAt;
}
