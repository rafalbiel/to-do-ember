import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://localhost:3000';

  get headers() {
    return {
      'owner-secret': 'f1QkHg2YR5',
    };
  }
}
