/*
---

name: Element.Highlight

description: Sets full opacity to element that is moused over while dimming all other elements of same class.

license: MIT-style

requires: 
  - Core/Element
  - Core/Fx.Tween
  - More/Element.Delegation

provides: Element.highlight

authors: [Michael Russell]

...
*/

Element.implement({

	highlight: function( linkClass, opacity ) {
	
		opacity = ( opacity ) ? opacity : .3;
		linkClass = ( linkClass.charAt( 0 ) == '.' ) ? linkClass : '.' + linkClass;
		
		this.addEvent( 'mouseover:relay('+ linkClass +')', function( e, elem ) {
		
			$$( linkClass ).each( function( link ) {
			
				if( elem != link ) {
				
					link.tween( 'opacity', opacity );
				}
			});
		});
		
		this.addEvent( 'mouseout:relay('+ linkClass +')', function( e, elem ) {
		
			$$( linkClass ).each( function( link ) {
			
				link.tween( 'opacity', 1 );
			});
		});
	}
});