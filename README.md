Elements.highlight
===========

Packager compatible.

Update 1:
This plugin now implements Elements instead of Element and I took out the dependancy on Element.Delegation due to the fact that it seemed inefficient since it was using the
mouseover mouseout events potentially cause the body tag to be always listening to the mouse movements.

Sets full opacity to element that is moused over while dimming all other elements of same class.

![Screenshot](http://github.com/subhaze/mootools-element-highlight/raw/master/logo.png)

How to use
----------

JavaScript
	
	// Use any selector to grab elements that you wish to apply this effect to.
	$$( '.link' ).highlight();
	
	// Over ride the default opacity value of .3
	$$('.link').highlight(.5);
HTML

	<div id="link-container">
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
		<a class="link" href="#"></a>
	</div>