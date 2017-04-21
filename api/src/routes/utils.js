export {arrayify}
export {getTokenFromHeader}

function arrayify(arg) {
  if (arg instanceof Array) {
    return arg
  } else if (arg === undefined) {
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
