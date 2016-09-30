(function(){
function niceTooltip(cls) {
	return {
		str: function() {
			var refCls, a,b,c, h, i,j, x1,x2,x3,z,offLeftPOS,offRightPOS,offTop,mainElmHeihjt,mainElmWidth,ttwidth,sampEl,cur
			var refCls = document.getElementsByClassName(cls);
			for(i=0; i<refCls.length; i++){
				refCls[i].onmouseover = function(){
					c = this.getAttribute('data-tooltip')
					d = document.createElement('div');					
					a = document.body.appendChild(d);
					cur = sampEl = document.createElement('em');
					a.className='foo';
					a.innerHTML = c;
					a.appendChild(sampEl);
					a.className='foo up-arrow';
					
					offLeftPOS = this.offsetLeft;					
					offTop = this.offsetTop;
					mainElmHeihjt = this.offsetHeight;
					mainElmWidth = this.offsetWidth/2;
					ttwidth = a.offsetWidth/2;
					a.style.left = (offLeftPOS-ttwidth+mainElmWidth) + 'px';
					a.style.top = (offTop + mainElmHeihjt + 19) + 'px';	
					a.style.right = 'inherit';
						
					//var wWIDTH
					h = window.innerWidth;
					i = d.offsetWidth;	
					j = h + i;
					x1 = window.innerWidth; 
					x2 = (offLeftPOS+ttwidth)
					x3 = offLeftPOS + (mainElmWidth*2)
					offRightPOS = x1 - x2 ;
					z = x1 - x3;
					cur.style.left = (ttwidth-10) + 'px';
					if( x2 > x1){
						a.style.left = 'inherit';
						a.style.right = z + 'px';
						a.className="foo up-right";	
						cur.style.left = 'inherit';	
						cur.style.right = (mainElmWidth+10) + 'px';					
					} else if( offLeftPOS < ttwidth*2){
					a.style.right = 'inherit';
					a.style.left = offLeftPOS + 'px';
					a.className="foo up-left";	
					cur.style.left = (mainElmWidth-10) + 'px';				
					} 
					this.onmouseout = function (){
						var element = document.getElementsByClassName("foo")[0];						
						element.parentNode.removeChild(element);
					}
				}
			}
		}
	}

}
var NtoolTip = niceTooltip('Ntooltip')
NtoolTip.str();

})()