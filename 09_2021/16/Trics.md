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