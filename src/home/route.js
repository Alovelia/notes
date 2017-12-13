import { routingConfig } from 'app/routes-config';
import { errorLoading } from 'common/error-core';
import { getAsyncInjectors } from 'common/async-injectors';

const { path, name } = routingConfig['folders'];
const { path: notesPath, name: notesName } = routingConfig['notes'];
const { path: detailsPath, name: detailsName } = routingConfig['details'];

export default (store) => {
  // #if process.env.NODE_ENV === 'production'
  // in production reducers and sagas will be loaded asynchronously
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  // #endif

  return {
    path,
    name,
    // #if process.env.NODE_ENV !== 'production'
    // eslint-disable-next-line
    component: require('./containers/home').default,
    // #endif
    // #if process.env.NODE_ENV === 'production'
    async getComponent(nextState, cb) {
      try {
        const [
          component,
          reducer,
          sagas
        ] = await Promise.all([
          import('./containers/home' /* webpackChunkName: "home" */),
          import('./reducer' /* webpackChunkName: "home" */),
          import('./sagas' /* webpackChunkName: "home" */),
        ]);
        injectReducer('home', reducer.default);
        injectSagas(sagas.default);
        cb(null, component.default);
      } catch (e) {
        errorLoading(e);
      }
    },
    // #endif
    childRoutes: [
      {
        path: notesPath,
        name: notesName,
        // #if process.env.NODE_ENV !== 'production'
        component: {
        // eslint-disable-next-line
          notes: require('./containers/notes').default
        },
        // #endif
        // #if process.env.NODE_ENV === 'production'
        async getComponent(nextState, cb) {
          try {
            const [
              notes,
            ] = await Promise.all([
              import('./containers/notes' /* webpackChunkName: "notes" */),
            ]);
            cb(null, { notes: notes.default });
          } catch (e) {
            errorLoading(e);
          }
        },
        // #endif
      },
      {
        path: detailsPath,
        name: detailsName,
        // #if process.env.NODE_ENV !== 'production'
        component: {
        // eslint-disable-next-line
          notes: require('./containers/notes').default,
          // eslint-disable-next-line
          details: require('./containers/details').default,
        },
        // #endif
        // #if process.env.NODE_ENV === 'production'
        async getComponent(nextState, cb) {
          try {
            const [
              notes,
              details,
            ] = await Promise.all([
              import('./containers/notes' /* webpackChunkName: "notes" */),
              import('./containers/details' /* webpackChunkName: "details" */),
            ]);
            cb(null, {
              notes: notes.default,
              details: details.default,
            });
          } catch (e) {
            errorLoading(e);
          }
        },
        // #endif
      },
      //†child_route
    ]
  };
};
