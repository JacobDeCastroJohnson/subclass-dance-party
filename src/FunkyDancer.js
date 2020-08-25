var FunkyDancer = function(top, left, timeBetweenSteps) {
  //assign to function that takes 2 parameters, top, left, time between steps
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('funkyDancer');
  // this.$node.addClass("animated shake");
  // this.$node = $('<span class="funkyDancer"></span>');
  //call Dancer and assign this and other variables
  };
  //Object.create to set prototype for delegation
  FunkyDancer.prototype = Object.create(Dancer.prototype);
  FunkyDancer.prototype.constructor = FunkyDancer;

  FunkyDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
    // this.randPosY = Math.floor((Math.random()*bodyHeight));
    // this.$node.css('top', this.randPosY);
    // this.$node.animate({left: '-100px'}, 5000);
    //this.$node.slideDown();


  //   this.$node.css({
  //     left:(Math.random()*$(window).width()-20),
  //     top:(Math.random()*$(window).height()-20),
  // });

  };