var test_canvas = document.createElement("canvas") ;
var canvascheck=(test_canvas.getContext)? true : false ;
var svgcheck = true ;

if(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0")){
  if(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")){
    svgcheck = false ;
  }
}
