
/**
 * dependencies
 */

var classes = require('classes')
  , events = require('events');

/**
 * Export `placeholder`
 */

module.exports = Placeholder;

/**
 * Initialize a new `Placeholder`.
 *
 * @param {Element} el
 */

function Placeholder(el){
  if (!(this instanceof Placeholder)) return new Placeholder(el);
  if (!el) throw new TypeError('expected an input / textarea element');
  this.events = events(el, this);
  this.classes = classes(el);
  this.type = el.type;
  this.el = el;
  this.bind();
}

/**
 * Bind internal events.
 *
 * @return {Placeholder}
 */

Placeholder.prototype.bind = function(){
  this.events.bind('focus');
  this.events.bind('blur');
  return this;
};

/**
 * Unbind internal events.
 *
 * @return {Placeholder}
 */

Placeholder.prototype.unbind = function(){
  this.events.unbind();
  return this;
};

/**
 * Set the placeholder to `val`.
 *
 * @param {String} val
 * @return {Placeholder}
 */

Placeholder.prototype.set = function(val){
  this.val = val;
  if (this.classes.has('placeholder')) return this;
  if (this.el.value) return this;
  this.classes.add('placeholder');
  this.el.value = val;
  return this;
};

/**
 * Clear placeholder.
 *
 * @return {Placeholder}
 */

Placeholder.prototype.clear = function(){
  if (this.val != this.el.value) return this;
  if (!this.classes.has('placeholder')) return this;
  this.el.value = '';
  this.classes.remove('placeholder');
  return this;
};

/**
 * Remove the placeholder on focus.
 *
 * @param {Event} e
 * @api private
 */

Placeholder.prototype.onfocus = function(e){
  this.clear();
  if (this.el != document.activeElement) return;
  this.el.select();
};

/**
 * Set the placeholder on focus.
 *
 * @param {Event} e
 * @api private
 */

Placeholder.prototype.onblur = function(e){
  this.set(this.val);
};
