//create subclass for rainbowDancer
var RainbowDancer = function(top, left, timeBetweenSteps) {
//assign to function that takes 2 parameters, top, left, time between steps
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('RainbowDancer');


//call Dancer and assign this and other variables
};
//Object.create to set prototype for delegation
RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  this.$node.css('border-color', 'rgb('+ r + ',' + g + ',' + b + ')',);



};
