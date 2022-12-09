import EmberRouter from '@ember/routing/router';
import config from 'to-do-list-x/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('task', { path: '/task/:id' });
});
