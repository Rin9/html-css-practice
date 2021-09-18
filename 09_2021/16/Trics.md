1.The size of the box itself is calculated like this:

Width	width + padding-left + padding-right + border-left + border-right
Height	height + padding-top + padding-bottom + border-top + border-bottom

2.A magic to show the box border of the whole page:

* {
	outline: solid 1px red !important;
}

3. Best box-sizing in css?

Generally speaking, the best box-sizing value to use is border-box. 

The border-box value makes our math much, much easier. 

If we want an element to be 400 pixels wide, it is, and it will remain 400 pixels wide 
no matter what padding or border values we add to it.

4. clearfix: clear the float:

.group:before,
.group:after {
  content: "";
  display: table;
}
.group:after {
  clear: both;
}
.group {
  clear: both;
  *zoom: 1;
}

5. About relative and absolute position:

With relatively positioned elements, the box offset properties identify in which direction an element would be moved in relation to itself. 

With absolutely positioned elements, the box offset properties identify in which direction an element will be moved in relation to its closest relatively positioned parent element.

