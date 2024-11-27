Absolute lengths(px, mm, in, cm)
Monitors -> Have different pixels per square inch
800px by 600px

1 pixel = 1 pixel


Relative lengths(Units specify a length relative to another length property)
em -> font-size 10px 1em = 10px
2em = 20px
rem -> Relative to the ROOT font-size

* em (relative to the font-size of the element, usually 16px)
1em === 100%
1.5em === 150%
---If the parent font-size is 16px and the child is calling for 1em === 16px
--- 2em === 32px
* rem -> Root

* width !== the full size of the viewport
 100% is equal to the space that the parent provides it

* vw (viewport width) 75vw == 75% of the viewport width
* vh (viewport height)100vh == 100% of the viewport height
* percentage 100% is how much space the parent provides the child element
 width: 100% !== width: 100vw
 height: 100% !== height: 100vw