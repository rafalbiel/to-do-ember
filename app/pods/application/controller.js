import Controller from '@ember/controller';
export default class ApplicationController extends Controller {
  items = [
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
}
