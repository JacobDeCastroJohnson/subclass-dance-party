var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  //Call Dancer and assign this and other variables
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  // Dancer.call(this, Math.random() * 100, Math.random() * 100, Math.random() * 100);)
  this.$node.addClass('blinkyClass');

};
//Use Object.create to define prototype chain
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

//Make BlinkyDancer.prototype.constructor = MakeBlinkyDancer
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// Make BlinkyDancer.protoype.step (method) function
makeBlinkyDancer.prototype.step = function() {
  //  Reference the old step by calling Dancer.prototype.step and calling that
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
  // this.setPosition(50, 300);
  // Dancer.prototype.step.call(this);
  this.$node.animate({top: '500px'}, 5000);

  // this.$node.mouseover(function() {
  //   this.$node.animate({right: '1000px'});
  // });
  // // this.$node.mouseout(function() {
  // //   this.$node.css()
  // // })


  // this.top = $("body").height() * Math.random();
  // this .left = $("body").width() * Math.random();
  // this.setPosition(this.top, this.left);
  // // this.$node.on("click", function(event) {
  //   this.$node.animate({right: '1000px'});
  };

  // makeBlinkyDancer.prototype.lineUp = function() {

  //     this.$node.setPosition(50, 100);


  // }
//  Use the jQuery toggle method
//this.$node.toggle();

makeBlinkyDancer.prototype.move = function() {
  this.$node.on("click", function(event) {
    this.$node.animate({right: '1000px'});
  })

}
// var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
// // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// // so we must keep a copy of the old version of this function

// var oldStep = blinkyDancer.step;

// blinkyDancer.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   blinkyDancer.$node.toggle();
// };

// return blinkyDancer;