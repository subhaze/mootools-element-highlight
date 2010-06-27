/*
---
description: Sets full opacity to element that is moused over while dimming all other elements of same class.
license: MIT-style
authors: [Michael Russell]
provides: [Element.hightlight]
requires: 
  core/1.2.4: [Element, Fx.Tween]
  more/1.2.4.4: [Element.Delegation]
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