/*
---

name: Elements.Highlight

description: Sets full opacity to element that is moused over while dimming all other elements of same class.

license: MIT-style

requires: 
  - Core/Elements
  - Core/Fx.Tween

provides: Elements.highlight

authors: [Michael Russell]

...
*/

Elements.implement({

	highlight: function( opacity ) {
		var opacity = ( opacity ) ? opacity : .3,
		    elems = this;
		this.addEvents({
		  'mouseover':  function( e ) {
		    elems.each( function( elem ) {
		      if( elem != e.target ) elem.tween( 'opacity', opacity );
		    });
		  },
		  'mouseout':   function( e ) {
		    elems.each( function( elem ){
		      elem.tween( 'opacity', 1);
		    });
		  }
		});
	}
});