module.exports = (el, event, selector, cb) => {
  const handler = (e) => {
    if (e.target.matches(selector)) {
      cb(e);
    }
  };
  el.addEventListener(event, handler, false);
  return handler;
};
