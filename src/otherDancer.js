var OtherDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  //this.$node.append("<img src='img/Breakdance.gif'/>");
  //this.$node.removeClass("dancer");
  this.$node.addClass("otherDance");

  // initializing arguements when inheriting superclass??
}

OtherDancer.prototype = Object.create(Dancer.prototype);
OtherDancer.prototype.constructor = OtherDancer;

OtherDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

  // this.$node.append("<img id='breakDance' src='../img/Breakdance.gif'/>");

  // $(this).on("click", function(){
  //   debugger;
  //   // this.$node.addClass("breakDance");
  //   // this.$node.removeClass("dancer");
  // })



};