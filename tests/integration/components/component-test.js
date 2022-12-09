import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | task-list', function (hooks) {
  setupRenderingTest(hooks);

  test('should correctly display item list', async function (assert) {
    const store = this.owner.lookup('service:store');
    const task1 = store.createRecord('task', {
      description: 'siema',
      isDone: true,
    });
    const task2 = store.createRecord('task', {
      description: 'elo',
      isDone: false,
    });
    this.set('tasks', [task1, task2]);
    await render(hbs`<List @items={{this.tasks}} />`);

    assert.dom('li').exists({ count: 2 }, 'display two tasks');
    // assert.('ul').containsText('Siema', 'includes "Siema" task');
    // await this.pauseTest();
  });
});
