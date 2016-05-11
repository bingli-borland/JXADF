!function(){var t=Flotr.EventAdapter,e=Flotr._;Flotr.addPlugin("graphGrid",{callbacks:{"flotr:beforedraw":function(){this.graphGrid.drawGrid()},"flotr:afterdraw":function(){this.graphGrid.drawOutline()}},drawGrid:function(){function i(t){for(s=0;s<t.length;++s){var i=t[s].v/n.max;for(l=0;k>=l;++l)h[0===l?"moveTo":"lineTo"](Math.cos(l*T+M)*v*i,Math.sin(l*T+M)*v*i)}}function o(t,i){e.each(e.pluck(t,"v"),function(t){t<=n.min||t>=n.max||(t==n.min||t==n.max)&&c.outlineWidth||i(Math.floor(n.d2p(t))+h.lineWidth/2)})}function r(t){h.moveTo(t,0),h.lineTo(t,m)}function a(t){h.moveTo(0,t),h.lineTo(x,t)}var n,s,l,h=this.ctx,f=this.options,c=f.grid,d=c.verticalLines,p=c.horizontalLines,u=c.minorVerticalLines,g=c.minorHorizontalLines,m=this.plotHeight,x=this.plotWidth;if((d||u||p||g)&&t.fire(this.el,"flotr:beforegrid",[this.axes.x,this.axes.y,f,this]),h.save(),h.lineWidth=1,h.strokeStyle=c.tickColor,c.circular){h.translate(this.plotOffset.left+x/2,this.plotOffset.top+m/2);var v=Math.min(m,x)*f.radar.radiusRatio/2,k=this.axes.x.ticks.length,T=2*(Math.PI/k),M=-Math.PI/2;h.beginPath(),n=this.axes.y,p&&i(n.ticks),g&&i(n.minorTicks),d&&e.times(k,function(t){h.moveTo(0,0),h.lineTo(Math.cos(t*T+M)*v,Math.sin(t*T+M)*v)}),h.stroke()}else h.translate(this.plotOffset.left,this.plotOffset.top),c.backgroundColor&&(h.fillStyle=this.processColor(c.backgroundColor,{x1:0,y1:0,x2:x,y2:m}),h.fillRect(0,0,x,m)),h.beginPath(),n=this.axes.x,d&&o(n.ticks,r),u&&o(n.minorTicks,r),n=this.axes.y,p&&o(n.ticks,a),g&&o(n.minorTicks,a),h.stroke();h.restore(),(d||u||p||g)&&t.fire(this.el,"flotr:aftergrid",[this.axes.x,this.axes.y,f,this])},drawOutline:function(){var t,e,o,r,a=this,n=a.options,s=n.grid,l=s.outline,h=a.ctx,f=s.backgroundImage,c=a.plotOffset,d=c.left,p=c.top,u=a.plotWidth,g=a.plotHeight;if(s.outlineWidth){if(h.save(),s.circular){h.translate(d+u/2,p+g/2);var m=Math.min(g,u)*n.radar.radiusRatio/2,x=this.axes.x.ticks.length,v=2*(Math.PI/x),k=-Math.PI/2;for(h.beginPath(),h.lineWidth=s.outlineWidth,h.strokeStyle=s.color,h.lineJoin="round",i=0;x>=i;++i)h[0===i?"moveTo":"lineTo"](Math.cos(i*v+k)*m,Math.sin(i*v+k)*m);h.stroke()}else{h.translate(d,p);var T=s.outlineWidth,M=.5-T+(T+1)%2/2,b="lineTo",O="moveTo";h.lineWidth=T,h.strokeStyle=s.color,h.lineJoin="miter",h.beginPath(),h.moveTo(M,M),u-=T/2%1,g+=T/2,h[-1!==l.indexOf("n")?b:O](u,M),h[-1!==l.indexOf("e")?b:O](u,g),h[-1!==l.indexOf("s")?b:O](M,g),h[-1!==l.indexOf("w")?b:O](M,M),h.stroke(),h.closePath()}h.restore(),f&&(e=f.src||f,o=(parseInt(f.left,10)||0)+c.left,r=(parseInt(f.top,10)||0)+c.top,t=new Image,t.onload=function(){h.save(),f.alpha&&(h.globalAlpha=f.alpha),h.globalCompositeOperation="destination-over",h.drawImage(t,0,0,t.width,t.height,o,r,u,g),h.restore()},t.src=e)}}})}();