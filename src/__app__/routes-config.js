export const DEFAULT_PAGE = 'folders';

export const routingConfig = {
  'folders': {
    path: '/',
    name: 'folders',
    title: 'home.title',
    // permissionId: 'WELCOME',
  },
  'notes': {
    path: '/:id',
    name: 'notes',
    title: 'home.title',
  },
  'details': {
    path: '/:id/:noteid',
    name: 'details',
    title: 'home.title',
  },
  //†route
};
