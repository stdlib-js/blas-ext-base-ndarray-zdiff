"use strict";var C=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var B=C(function(J,A){
var E=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),n=require('@stdlib/ndarray-base-numel-dimension/dist'),o=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),F=require('@stdlib/blas-ext-base-zdiff/dist').ndarray;function G(a){var r,e,v,i,s,p,q,x,c,f,w,g,k,l,m,N,D,z,O,S,b,h,t,j;return t=a[0],e=a[1],v=a[2],i=a[3],r=a[4],j=E(a[5]),h=n(t,0),z=n(e,0),D=n(v,0),b=u(t),f=u(e),N=u(v),k=u(i),q=u(r),S=o(t,0),c=o(e,0),m=o(v,0),g=o(i,0),p=o(r,0),O=d(t),x=d(e),l=d(v),w=d(i),s=d(r),F(h,j,b,S,O,z,f,c,x,D,N,m,l,k,g,w,q,p,s),i}A.exports=G
});var H=B();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
