export default ({dispatch}) => (next) => (action) => {
  // Check to osee if the action
  // has a promise on its 'payload' property
  // if it does, then wait for it to resolve
  // if it doesnt, then send the action on the
  // next middleware

  if (!action.payload || !action.payload.then) {
    return next(action)
  } else {
    // we want to wait for the promise to resolve
    // (get its data!!) and then create a new action
    // with that data and dispatch it
    action.payload.then(function(response) {
      const newAction = { ...action, payload: response}
      dispatch(newAction)
    })
  }
}

