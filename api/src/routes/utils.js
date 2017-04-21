export {arrayify}
export {getTokenFromHeader}

function arrayify(arg) {
  // arg = []
  // Array.isArray(arg) ? arg : [arg]
  if (Array.isArray(arg)) {
    return arg
  } else if (typeof arg === 'undefined') {
    return []
  } else {
      return [arg]
  }
}

function getTokenFromHeader(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Token'
  ) {
    return req.headers.authorization.split(' ')[1]
  }
  return null
}
