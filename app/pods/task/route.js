import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TaskRoute extends Route {
  @service store;
  @service router;
  async model(params) {
    try {
      return await this.store.findRecord('task', params.id);
    } catch (error) {
      this.router.transitionTo('');
    }
  }
}
