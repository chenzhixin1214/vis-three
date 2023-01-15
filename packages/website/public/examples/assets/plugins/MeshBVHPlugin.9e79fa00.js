var ce=Object.defineProperty;var le=(i,t,e)=>t in i?ce(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var pt=(i,t,e)=>(le(i,typeof t!="symbol"?t+"":t,e),e);import"../modulepreload-polyfill.b7f2da20.js";import{d as Lt,aR as st,h as z,V as dt,bu as te,bv as G,bw as Ct,b3 as ue,t as Pt,bx as fe,aS as de,K as W,a4 as Nt,aw as ee,al as pe,am as he,s as me,M as se,a as ye,A as xe}from"../three.a7f96461.js";import{W as ge,C as be}from"../index.071db2cc.js";import{R as we}from"../index.510eaae3.js";import{E as Ae}from"../index.d73b554e.js";import{a as Be}from"../index.9e868923.js";import{O as Te}from"../index.4b35f5ef.js";import{E as Pe}from"../index.42ee2ebe.js";import{O as Me}from"../index.f615e0f3.js";import{t as ve,v as Se}from"../index.8b9e7665.js";function ne(i,t=!1){const e=i[0].index!==null,s=new Set(Object.keys(i[0].attributes)),n=new Set(Object.keys(i[0].morphAttributes)),c={},r={},l=i[0].morphTargetsRelative,o=new Lt;let f=0;for(let a=0;a<i.length;++a){const d=i[a];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+a+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+a+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;c[p]===void 0&&(c[p]=[]),c[p].push(d.attributes[p]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+a+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+a+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+a+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.morphAttributes[p])}if(o.userData.mergedUserData=o.userData.mergedUserData||[],o.userData.mergedUserData.push(d.userData),t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+a+". The geometry must have either an index or a position attribute"),null;o.addGroup(f,p,a),f+=p}}if(e){let a=0;const d=[];for(let u=0;u<i.length;++u){const p=i[u].index;for(let y=0;y<p.count;++y)d.push(p.getX(y)+a);a+=i[u].attributes.position.count}o.setIndex(d)}for(const a in c){const d=Gt(c[a]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+a+" attribute."),null;o.setAttribute(a,d)}for(const a in r){const d=r[a][0].length;if(d===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[a]=[];for(let u=0;u<d;++u){const p=[];for(let B=0;B<r[a].length;++B)p.push(r[a][B][u]);const y=Gt(p);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+a+" morphAttribute."),null;o.morphAttributes[a].push(y)}}return o}function Gt(i){let t,e,s,n=0;for(let l=0;l<i.length;++l){const o=i[l];if(o.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=o.array.constructor),t!==o.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=o.itemSize),e!==o.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=o.normalized),s!==o.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;n+=o.array.length}const c=new t(n);let r=0;for(let l=0;l<i.length;++l)c.set(i[l].array,r),r+=i[l].array.length;return new st(c,e,s)}const ie=0,Ie=1,Ee=2,qt=2,St=1.25,Ot=1,Bt=6*4+4+4,Ft=65535,ze=Math.pow(2,-24);class ht{constructor(){}}function V(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function kt(i){let t=-1,e=-1/0;for(let s=0;s<3;s++){const n=i[s+3]-i[s];n>e&&(e=n,t=s)}return t}function Xt(i,t){t.set(i)}function jt(i,t,e){let s,n;for(let c=0;c<3;c++){const r=c+3;s=i[c],n=t[c],e[c]=s<n?s:n,s=i[r],n=t[r],e[r]=s>n?s:n}}function mt(i,t,e){for(let s=0;s<3;s++){const n=t[i+2*s],c=t[i+2*s+1],r=n-c,l=n+c;r<e[s]&&(e[s]=r),l>e[s+3]&&(e[s+3]=l)}}function it(i){const t=i[3]-i[0],e=i[4]-i[1],s=i[5]-i[2];return 2*(t*e+e*s+s*t)}function Ue(i,t){if(!i.index){const e=i.attributes.position.count,s=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let n;e>65535?n=new Uint32Array(new s(4*e)):n=new Uint16Array(new s(2*e)),i.setIndex(new st(n,1));for(let c=0;c<e;c++)n[c]=c}}function Ce(i){if(!i.groups||!i.groups.length)return[{offset:0,count:i.index.count/3}];const t=[],e=new Set;for(const n of i.groups)e.add(n.start),e.add(n.start+n.count);const s=Array.from(e.values()).sort((n,c)=>n-c);for(let n=0;n<s.length-1;n++){const c=s[n],r=s[n+1];t.push({offset:c/3,count:(r-c)/3})}return t}function It(i,t,e,s,n=null){let c=1/0,r=1/0,l=1/0,o=-1/0,f=-1/0,a=-1/0,d=1/0,u=1/0,p=1/0,y=-1/0,B=-1/0,w=-1/0;const h=n!==null;for(let x=t*6,m=(t+e)*6;x<m;x+=6){const b=i[x+0],g=i[x+1],A=b-g,T=b+g;A<c&&(c=A),T>o&&(o=T),h&&b<d&&(d=b),h&&b>y&&(y=b);const P=i[x+2],M=i[x+3],v=P-M,S=P+M;v<r&&(r=v),S>f&&(f=S),h&&P<u&&(u=P),h&&P>B&&(B=P);const E=i[x+4],I=i[x+5],U=E-I,C=E+I;U<l&&(l=U),C>a&&(a=C),h&&E<p&&(p=E),h&&E>w&&(w=E)}s[0]=c,s[1]=r,s[2]=l,s[3]=o,s[4]=f,s[5]=a,h&&(n[0]=d,n[1]=u,n[2]=p,n[3]=y,n[4]=B,n[5]=w)}function Fe(i,t,e,s){let n=1/0,c=1/0,r=1/0,l=-1/0,o=-1/0,f=-1/0;for(let a=t*6,d=(t+e)*6;a<d;a+=6){const u=i[a+0];u<n&&(n=u),u>l&&(l=u);const p=i[a+2];p<c&&(c=p),p>o&&(o=p);const y=i[a+4];y<r&&(r=y),y>f&&(f=y)}s[0]=n,s[1]=c,s[2]=r,s[3]=l,s[4]=o,s[5]=f}function Re(i,t,e,s,n){let c=e,r=e+s-1;const l=n.pos,o=n.axis*2;for(;;){for(;c<=r&&t[c*6+o]<l;)c++;for(;c<=r&&t[r*6+o]>=l;)r--;if(c<r){for(let f=0;f<3;f++){let a=i[c*3+f];i[c*3+f]=i[r*3+f],i[r*3+f]=a;let d=t[c*6+f*2+0];t[c*6+f*2+0]=t[r*6+f*2+0],t[r*6+f*2+0]=d;let u=t[c*6+f*2+1];t[c*6+f*2+1]=t[r*6+f*2+1],t[r*6+f*2+1]=u}c++,r--}else return c}}const N=32,Ve=(i,t)=>i.candidate-t.candidate,O=new Array(N).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),yt=new Float32Array(6);function _e(i,t,e,s,n,c){let r=-1,l=0;if(c===ie)r=kt(t),r!==-1&&(l=(t[r]+t[r+3])/2);else if(c===Ie)r=kt(i),r!==-1&&(l=Le(e,s,n,r));else if(c===Ee){const o=it(i);let f=St*n;const a=s*6,d=(s+n)*6;for(let u=0;u<3;u++){const p=t[u],w=(t[u+3]-p)/N;if(n<N/4){const h=[...O];h.length=n;let x=0;for(let b=a;b<d;b+=6,x++){const g=h[x];g.candidate=e[b+2*u],g.count=0;const{bounds:A,leftCacheBounds:T,rightCacheBounds:P}=g;for(let M=0;M<3;M++)P[M]=1/0,P[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0,A[M]=1/0,A[M+3]=-1/0;mt(b,e,A)}h.sort(Ve);let m=n;for(let b=0;b<m;b++){const g=h[b];for(;b+1<m&&h[b+1].candidate===g.candidate;)h.splice(b+1,1),m--}for(let b=a;b<d;b+=6){const g=e[b+2*u];for(let A=0;A<m;A++){const T=h[A];g>=T.candidate?mt(b,e,T.rightCacheBounds):(mt(b,e,T.leftCacheBounds),T.count++)}}for(let b=0;b<m;b++){const g=h[b],A=g.count,T=n-g.count,P=g.leftCacheBounds,M=g.rightCacheBounds;let v=0;A!==0&&(v=it(P)/o);let S=0;T!==0&&(S=it(M)/o);const E=Ot+St*(v*A+S*T);E<f&&(r=u,f=E,l=g.candidate)}}else{for(let m=0;m<N;m++){const b=O[m];b.count=0,b.candidate=p+w+m*w;const g=b.bounds;for(let A=0;A<3;A++)g[A]=1/0,g[A+3]=-1/0}for(let m=a;m<d;m+=6){let A=~~((e[m+2*u]-p)/w);A>=N&&(A=N-1);const T=O[A];T.count++,mt(m,e,T.bounds)}const h=O[N-1];Xt(h.bounds,h.rightCacheBounds);for(let m=N-2;m>=0;m--){const b=O[m],g=O[m+1];jt(b.bounds,g.rightCacheBounds,b.rightCacheBounds)}let x=0;for(let m=0;m<N-1;m++){const b=O[m],g=b.count,A=b.bounds,P=O[m+1].rightCacheBounds;g!==0&&(x===0?Xt(A,yt):jt(A,yt,yt)),x+=g;let M=0,v=0;x!==0&&(M=it(yt)/o);const S=n-x;S!==0&&(v=it(P)/o);const E=Ot+St*(M*x+v*S);E<f&&(r=u,f=E,l=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${c} used.`);return{axis:r,pos:l}}function Le(i,t,e,s){let n=0;for(let c=t,r=t+e;c<r;c++)n+=i[c*6+s*2];return n/e}function De(i,t){const e=i.attributes.position,s=i.index.array,n=s.length/3,c=new Float32Array(n*6),r=e.normalized,l=e.array,o=e.offset||0;let f=3;e.isInterleavedBufferAttribute&&(f=e.data.stride);const a=["getX","getY","getZ"];for(let d=0;d<n;d++){const u=d*3,p=d*6;let y,B,w;r?(y=s[u+0],B=s[u+1],w=s[u+2]):(y=s[u+0]*f+o,B=s[u+1]*f+o,w=s[u+2]*f+o);for(let h=0;h<3;h++){let x,m,b;r?(x=e[a[h]](y),m=e[a[h]](B),b=e[a[h]](w)):(x=l[y+h],m=l[B+h],b=l[w+h]);let g=x;m<g&&(g=m),b<g&&(g=b);let A=x;m>A&&(A=m),b>A&&(A=b);const T=(A-g)/2,P=h*2;c[p+P+0]=g+T,c[p+P+1]=T+(Math.abs(g)+T)*ze,g<t[h]&&(t[h]=g),A>t[h+3]&&(t[h+3]=A)}}return c}function He(i,t){function e(h){u&&u(h/p)}function s(h,x,m,b=null,g=0){if(!y&&g>=o&&(y=!0,f&&(console.warn(`MeshBVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`),console.warn(i))),m<=a||g>=o)return e(x+m),h.offset=x,h.count=m,h;const A=_e(h.boundingData,b,r,x,m,d);if(A.axis===-1)return e(x+m),h.offset=x,h.count=m,h;const T=Re(l,r,x,m,A);if(T===x||T===x+m)e(x+m),h.offset=x,h.count=m;else{h.splitAxis=A.axis;const P=new ht,M=x,v=T-x;h.left=P,P.boundingData=new Float32Array(6),It(r,M,v,P.boundingData,c),s(P,M,v,c,g+1);const S=new ht,E=T,I=m-v;h.right=S,S.boundingData=new Float32Array(6),It(r,E,I,S.boundingData,c),s(S,E,I,c,g+1)}return h}Ue(i,t);const n=new Float32Array(6),c=new Float32Array(6),r=De(i,n),l=i.index.array,o=t.maxDepth,f=t.verbose,a=t.maxLeafTris,d=t.strategy,u=t.onProgress,p=i.index.count/3;let y=!1;const B=[],w=Ce(i);if(w.length===1){const h=w[0],x=new ht;x.boundingData=n,Fe(r,h.offset,h.count,c),s(x,h.offset,h.count,c),B.push(x)}else for(let h of w){const x=new ht;x.boundingData=new Float32Array(6),It(r,h.offset,h.count,x.boundingData,c),s(x,h.offset,h.count,c),B.push(x)}return B}function Ne(i,t){const e=He(i,t);let s,n,c;const r=[],l=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let a=0;a<e.length;a++){const d=e[a];let u=o(d);const p=new l(Bt*u);s=new Float32Array(p),n=new Uint32Array(p),c=new Uint16Array(p),f(0,d),r.push(p)}return r;function o(a){return a.count?1:1+o(a.left)+o(a.right)}function f(a,d){const u=a/4,p=a/2,y=!!d.count,B=d.boundingData;for(let w=0;w<6;w++)s[u+w]=B[w];if(y){const w=d.offset,h=d.count;return n[u+6]=w,c[p+14]=h,c[p+15]=Ft,a+Bt}else{const w=d.left,h=d.right,x=d.splitAxis;let m;if(m=f(a+Bt,w),m/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return n[u+6]=m/4,m=f(m,h),n[u+7]=x,m}}}class D{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let s=1/0,n=-1/0;for(let c=0,r=t.length;c<r;c++){const o=t[c][e];s=o<s?o:s,n=o>n?o:n}this.min=s,this.max=n}setFromPoints(t,e){let s=1/0,n=-1/0;for(let c=0,r=e.length;c<r;c++){const l=e[c],o=t.dot(l);s=o<s?o:s,n=o>n?o:n}this.min=s,this.max=n}isSeparated(t){return this.min>t.max||t.min>this.max}}D.prototype.setFromBox=function(){const i=new z;return function(e,s){const n=s.min,c=s.max;let r=1/0,l=-1/0;for(let o=0;o<=1;o++)for(let f=0;f<=1;f++)for(let a=0;a<=1;a++){i.x=n.x*o+c.x*(1-o),i.y=n.y*f+c.y*(1-f),i.z=n.z*a+c.z*(1-a);const d=e.dot(i);r=Math.min(d,r),l=Math.max(d,l)}this.min=r,this.max=l}}();(function(){const i=new D;return function(e,s){const n=e.points,c=e.satAxes,r=e.satBounds,l=s.points,o=s.satAxes,f=s.satBounds;for(let a=0;a<3;a++){const d=r[a],u=c[a];if(i.setFromPoints(u,l),d.isSeparated(i))return!1}for(let a=0;a<3;a++){const d=f[a],u=o[a];if(i.setFromPoints(u,n),d.isSeparated(i))return!1}}})();const Ge=function(){const i=new z,t=new z,e=new z;return function(n,c,r){const l=n.start,o=i,f=c.start,a=t;e.subVectors(l,f),i.subVectors(n.end,n.start),t.subVectors(c.end,c.start);const d=e.dot(a),u=a.dot(o),p=a.dot(a),y=e.dot(o),w=o.dot(o)*p-u*u;let h,x;w!==0?h=(d*u-y*p)/w:h=0,x=(d+h*u)/p,r.x=h,r.y=x}}(),Dt=function(){const i=new dt,t=new z,e=new z;return function(n,c,r,l){Ge(n,c,i);let o=i.x,f=i.y;if(o>=0&&o<=1&&f>=0&&f<=1){n.at(o,r),c.at(f,l);return}else if(o>=0&&o<=1){f<0?c.at(0,l):c.at(1,l),n.closestPointToPoint(l,!0,r);return}else if(f>=0&&f<=1){o<0?n.at(0,r):n.at(1,r),c.closestPointToPoint(r,!0,l);return}else{let a;o<0?a=n.start:a=n.end;let d;f<0?d=c.start:d=c.end;const u=t,p=e;if(n.closestPointToPoint(d,!0,t),c.closestPointToPoint(a,!0,e),u.distanceToSquared(d)<=p.distanceToSquared(a)){r.copy(u),l.copy(d);return}else{r.copy(a),l.copy(p);return}}}}(),qe=function(){const i=new z,t=new z,e=new te,s=new G;return function(c,r){const{radius:l,center:o}=c,{a:f,b:a,c:d}=r;if(s.start=f,s.end=a,s.closestPointToPoint(o,!0,i).distanceTo(o)<=l||(s.start=f,s.end=d,s.closestPointToPoint(o,!0,i).distanceTo(o)<=l)||(s.start=a,s.end=d,s.closestPointToPoint(o,!0,i).distanceTo(o)<=l))return!0;const B=r.getPlane(e);if(Math.abs(B.distanceToPoint(o))<=l){const h=B.projectPoint(o,t);if(r.containsPoint(h))return!0}return!1}}(),Oe=1e-15;function K(i){return Math.abs(i)<Oe}class q extends Ct{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new z),this.satBounds=new Array(4).fill().map(()=>new D),this.points=[this.a,this.b,this.c],this.sphere=new ue,this.plane=new te,this.needsUpdate=!0}intersectsSphere(t){return qe(t,this)}update(){const t=this.a,e=this.b,s=this.c,n=this.points,c=this.satAxes,r=this.satBounds,l=c[0],o=r[0];this.getNormal(l),o.setFromPoints(l,n);const f=c[1],a=r[1];f.subVectors(t,e),a.setFromPoints(f,n);const d=c[2],u=r[2];d.subVectors(e,s),u.setFromPoints(d,n);const p=c[3],y=r[3];p.subVectors(s,t),y.setFromPoints(p,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(l,t),this.needsUpdate=!1}}q.prototype.closestPointToSegment=function(){const i=new z,t=new z,e=new G;return function(n,c=null,r=null){const{start:l,end:o}=n,f=this.points;let a,d=1/0;for(let u=0;u<3;u++){const p=(u+1)%3;e.start.copy(f[u]),e.end.copy(f[p]),Dt(e,n,i,t),a=i.distanceToSquared(t),a<d&&(d=a,c&&c.copy(i),r&&r.copy(t))}return this.closestPointToPoint(l,i),a=l.distanceToSquared(i),a<d&&(d=a,c&&c.copy(i),r&&r.copy(l)),this.closestPointToPoint(o,i),a=o.distanceToSquared(i),a<d&&(d=a,c&&c.copy(i),r&&r.copy(o)),Math.sqrt(d)}}();q.prototype.intersectsTriangle=function(){const i=new q,t=new Array(3),e=new Array(3),s=new D,n=new D,c=new z,r=new z,l=new z,o=new z,f=new G,a=new G,d=new G;return function(p,y=null){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);const B=this.plane,w=p.plane;if(Math.abs(B.normal.dot(w.normal))>1-1e-10){const h=this.satBounds,x=this.satAxes;e[0]=p.a,e[1]=p.b,e[2]=p.c;for(let g=0;g<4;g++){const A=h[g],T=x[g];if(s.setFromPoints(T,e),A.isSeparated(s))return!1}const m=p.satBounds,b=p.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let g=0;g<4;g++){const A=m[g],T=b[g];if(s.setFromPoints(T,t),A.isSeparated(s))return!1}for(let g=0;g<4;g++){const A=x[g];for(let T=0;T<4;T++){const P=b[T];if(c.crossVectors(A,P),s.setFromPoints(c,t),n.setFromPoints(c,e),s.isSeparated(n))return!1}}return y&&(console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),y.start.set(0,0,0),y.end.set(0,0,0)),!0}else{const h=this.points;let x=!1,m=0;for(let I=0;I<3;I++){const U=h[I],C=h[(I+1)%3];f.start.copy(U),f.end.copy(C),f.delta(r);const R=x?a.start:a.end,F=K(w.distanceToPoint(U));if(K(w.normal.dot(r))&&F){a.copy(f),m=2;break}if((w.intersectLine(f,R)||F)&&!K(R.distanceTo(C))){if(m++,x)break;x=!0}}if(m===1&&p.containsPoint(a.end))return y&&(y.start.copy(a.end),y.end.copy(a.end)),!0;if(m!==2)return!1;const b=p.points;let g=!1,A=0;for(let I=0;I<3;I++){const U=b[I],C=b[(I+1)%3];f.start.copy(U),f.end.copy(C),f.delta(l);const R=g?d.start:d.end,F=K(B.distanceToPoint(U));if(K(B.normal.dot(l))&&F){d.copy(f),A=2;break}if((B.intersectLine(f,R)||F)&&!K(R.distanceTo(C))){if(A++,g)break;g=!0}}if(A===1&&this.containsPoint(d.end))return y&&(y.start.copy(d.end),y.end.copy(d.end)),!0;if(A!==2)return!1;if(a.delta(r),d.delta(l),r.dot(l)<0){let I=d.start;d.start=d.end,d.end=I}const T=a.start.dot(r),P=a.end.dot(r),M=d.start.dot(r),v=d.end.dot(r),S=P<M,E=T<v;return T!==v&&M!==P&&S===E?!1:(y&&(o.subVectors(a.start,d.start),o.dot(r)>0?y.start.copy(a.start):y.start.copy(d.start),o.subVectors(a.end,d.end),o.dot(r)<0?y.end.copy(a.end):y.end.copy(d.end)),!0)}}}();q.prototype.distanceToPoint=function(){const i=new z;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();q.prototype.distanceToTriangle=function(){const i=new z,t=new z,e=["a","b","c"],s=new G,n=new G;return function(r,l=null,o=null){const f=l||o?s:null;if(this.intersectsTriangle(r,f))return(l||o)&&(l&&f.getCenter(l),o&&f.getCenter(o)),0;let a=1/0;for(let d=0;d<3;d++){let u;const p=e[d],y=r[p];this.closestPointToPoint(y,i),u=y.distanceToSquared(i),u<a&&(a=u,l&&l.copy(i),o&&o.copy(y));const B=this[p];r.closestPointToPoint(B,i),u=B.distanceToSquared(i),u<a&&(a=u,l&&l.copy(B),o&&o.copy(i))}for(let d=0;d<3;d++){const u=e[d],p=e[(d+1)%3];s.set(this[u],this[p]);for(let y=0;y<3;y++){const B=e[y],w=e[(y+1)%3];n.set(r[B],r[w]),Dt(s,n,i,t);const h=i.distanceToSquared(t);h<a&&(a=h,l&&l.copy(i),o&&o.copy(t))}}return Math.sqrt(a)}}();class H{constructor(t,e,s){this.isOrientedBox=!0,this.min=new z,this.max=new z,this.matrix=new Pt,this.invMatrix=new Pt,this.points=new Array(8).fill().map(()=>new z),this.satAxes=new Array(3).fill().map(()=>new z),this.satBounds=new Array(3).fill().map(()=>new D),this.alignedSatBounds=new Array(3).fill().map(()=>new D),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),s&&this.matrix.copy(s)}set(t,e,s){this.min.copy(t),this.max.copy(e),this.matrix.copy(s),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}H.prototype.update=function(){return function(){const t=this.matrix,e=this.min,s=this.max,n=this.points;for(let f=0;f<=1;f++)for(let a=0;a<=1;a++)for(let d=0;d<=1;d++){const u=1*f|2*a|4*d,p=n[u];p.x=f?s.x:e.x,p.y=a?s.y:e.y,p.z=d?s.z:e.z,p.applyMatrix4(t)}const c=this.satBounds,r=this.satAxes,l=n[0];for(let f=0;f<3;f++){const a=r[f],d=c[f],u=1<<f,p=n[u];a.subVectors(l,p),d.setFromPoints(a,n)}const o=this.alignedSatBounds;o[0].setFromPointsField(n,"x"),o[1].setFromPointsField(n,"y"),o[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();H.prototype.intersectsBox=function(){const i=new D;return function(e){this.needsUpdate&&this.update();const s=e.min,n=e.max,c=this.satBounds,r=this.satAxes,l=this.alignedSatBounds;if(i.min=s.x,i.max=n.x,l[0].isSeparated(i)||(i.min=s.y,i.max=n.y,l[1].isSeparated(i))||(i.min=s.z,i.max=n.z,l[2].isSeparated(i)))return!1;for(let o=0;o<3;o++){const f=r[o],a=c[o];if(i.setFromBox(f,e),a.isSeparated(i))return!1}return!0}}();H.prototype.intersectsTriangle=function(){const i=new q,t=new Array(3),e=new D,s=new D,n=new z;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(i.copy(r),i.update(),r=i);const l=this.satBounds,o=this.satAxes;t[0]=r.a,t[1]=r.b,t[2]=r.c;for(let u=0;u<3;u++){const p=l[u],y=o[u];if(e.setFromPoints(y,t),p.isSeparated(e))return!1}const f=r.satBounds,a=r.satAxes,d=this.points;for(let u=0;u<3;u++){const p=f[u],y=a[u];if(e.setFromPoints(y,d),p.isSeparated(e))return!1}for(let u=0;u<3;u++){const p=o[u];for(let y=0;y<4;y++){const B=a[y];if(n.crossVectors(p,B),e.setFromPoints(n,t),s.setFromPoints(n,d),e.isSeparated(s))return!1}}return!0}}();H.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();H.prototype.distanceToPoint=function(){const i=new z;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();H.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new G),e=new Array(12).fill().map(()=>new G),s=new z,n=new z;return function(r,l=0,o=null,f=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(o||f)&&(r.getCenter(n),this.closestPointToPoint(n,s),r.closestPointToPoint(s,n),o&&o.copy(s),f&&f.copy(n)),0;const a=l*l,d=r.min,u=r.max,p=this.points;let y=1/0;for(let w=0;w<8;w++){const h=p[w];n.copy(h).clamp(d,u);const x=h.distanceToSquared(n);if(x<y&&(y=x,o&&o.copy(h),f&&f.copy(n),x<a))return Math.sqrt(x)}let B=0;for(let w=0;w<3;w++)for(let h=0;h<=1;h++)for(let x=0;x<=1;x++){const m=(w+1)%3,b=(w+2)%3,g=h<<m|x<<b,A=1<<w|h<<m|x<<b,T=p[g],P=p[A];t[B].set(T,P);const v=i[w],S=i[m],E=i[b],I=e[B],U=I.start,C=I.end;U[v]=d[v],U[S]=h?d[S]:u[S],U[E]=x?d[E]:u[S],C[v]=u[v],C[S]=h?d[S]:u[S],C[E]=x?d[E]:u[S],B++}for(let w=0;w<=1;w++)for(let h=0;h<=1;h++)for(let x=0;x<=1;x++){n.x=w?u.x:d.x,n.y=h?u.y:d.y,n.z=x?u.z:d.z,this.closestPointToPoint(n,s);const m=n.distanceToSquared(s);if(m<y&&(y=m,o&&o.copy(s),f&&f.copy(n),m<a))return Math.sqrt(m)}for(let w=0;w<12;w++){const h=t[w];for(let x=0;x<12;x++){const m=e[x];Dt(h,m,s,n);const b=s.distanceToSquared(n);if(b<y&&(y=b,o&&o.copy(s),f&&f.copy(n),b<a))return Math.sqrt(b)}}return Math.sqrt(y)}}();const xt=new z,gt=new z,bt=new z,Wt=new dt,Yt=new dt,Zt=new dt,$t=new z;function ke(i,t,e,s,n,c){let r;return c===fe?r=i.intersectTriangle(s,e,t,!0,n):r=i.intersectTriangle(t,e,s,c!==de,n),r===null?null:{distance:i.origin.distanceTo(n),point:n.clone()}}function Xe(i,t,e,s,n,c,r){xt.fromBufferAttribute(t,s),gt.fromBufferAttribute(t,n),bt.fromBufferAttribute(t,c);const l=ke(i,xt,gt,bt,$t,r);if(l){e&&(Wt.fromBufferAttribute(e,s),Yt.fromBufferAttribute(e,n),Zt.fromBufferAttribute(e,c),l.uv=Ct.getUV($t,xt,gt,bt,Wt,Yt,Zt,new dt));const o={a:s,b:n,c,normal:new z,materialIndex:0};Ct.getNormal(xt,gt,bt,o.normal),l.face=o,l.faceIndex=s}return l}function re(i,t,e,s,n){const c=s*3,r=i.index.getX(c),l=i.index.getX(c+1),o=i.index.getX(c+2),f=Xe(e,i.attributes.position,i.attributes.uv,r,l,o,t);return f?(f.faceIndex=s,n&&n.push(f),f):null}function je(i,t,e,s,n,c){for(let r=s,l=s+n;r<l;r++)re(i,t,e,r,c)}function We(i,t,e,s,n){let c=1/0,r=null;for(let l=s,o=s+n;l<o;l++){const f=re(i,t,e,l);f&&f.distance<c&&(r=f,c=f.distance)}return r}function L(i,t,e,s){const n=i.a,c=i.b,r=i.c;let l=t,o=t+1,f=t+2;e&&(l=e.getX(t),o=e.getX(t+1),f=e.getX(t+2)),n.x=s.getX(l),n.y=s.getY(l),n.z=s.getZ(l),c.x=s.getX(o),c.y=s.getY(o),c.z=s.getZ(o),r.x=s.getX(f),r.y=s.getY(f),r.z=s.getZ(f)}function Kt(i,t,e,s,n,c,r){const l=e.index,o=e.attributes.position;for(let f=i,a=t+i;f<a;f++)if(L(r,f*3,l,o),r.needsUpdate=!0,s(r,f,n,c))return!0;return!1}class oe{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}function k(i,t){return t[i+15]===65535}function tt(i,t){return t[i+6]}function lt(i,t){return t[i+14]}function ut(i){return i+8}function ft(i,t){return t[i+6]}function Ye(i,t){return t[i+7]}const Q=new W,Mt=new z,Ze=["x","y","z"];function Rt(i,t,e,s,n){let c=i*2,r=nt,l=X,o=j;if(k(c,l)){const a=tt(i,o),d=lt(c,l);je(t,e,s,a,d,n)}else{const a=ut(i);vt(a,r,s,Mt)&&Rt(a,t,e,s,n);const d=ft(i,o);vt(d,r,s,Mt)&&Rt(d,t,e,s,n)}}function Vt(i,t,e,s){let n=i*2,c=nt,r=X,l=j;if(k(n,r)){const f=tt(i,l),a=lt(n,r);return We(t,e,s,f,a)}else{const f=Ye(i,l),a=Ze[f],u=s.direction[a]>=0;let p,y;u?(p=ut(i),y=ft(i,l)):(p=ft(i,l),y=ut(i));const w=vt(p,c,s,Mt)?Vt(p,t,e,s):null;if(w){const m=w.point[a];if(u?m<=c[y+f]:m>=c[y+f+3])return w}const x=vt(y,c,s,Mt)?Vt(y,t,e,s):null;return w&&x?w.distance<=x.distance?w:x:w||x||null}}const $e=function(){let i,t;const e=[],s=new oe(()=>new W);return function(...r){i=s.getPrimitive(),t=s.getPrimitive(),e.push(i,t);const l=n(...r);s.releasePrimitive(i),s.releasePrimitive(t),e.pop(),e.pop();const o=e.length;return o>0&&(t=e[o-1],i=e[o-2]),l};function n(c,r,l,o,f=null,a=0,d=0){function u(m){let b=m*2,g=X,A=j;for(;!k(b,g);)m=ut(m),b=m*2;return tt(m,A)}function p(m){let b=m*2,g=X,A=j;for(;!k(b,g);)m=ft(m,A),b=m*2;return tt(m,A)+lt(b,g)}let y=c*2,B=nt,w=X,h=j;if(k(y,w)){const m=tt(c,h),b=lt(y,w);return V(c,B,i),o(m,b,!1,d,a+c,i)}else{const m=ut(c),b=ft(c,h);let g=m,A=b,T,P,M,v;if(f&&(M=i,v=t,V(g,B,M),V(A,B,v),T=f(M),P=f(v),P<T)){g=b,A=m;const F=T;T=P,P=F,M=v}M||(M=i,V(g,B,M));const S=k(g*2,w),E=l(M,S,T,d+1,a+g);let I;if(E===qt){const F=u(g),$=p(g)-F;I=o(F,$,!0,d+1,a+g,M)}else I=E&&n(g,r,l,o,f,a,d+1);if(I)return!0;v=t,V(A,B,v);const U=k(A*2,w),C=l(v,U,P,d+1,a+A);let R;if(C===qt){const F=u(A),$=p(A)-F;R=o(F,$,!0,d+1,a+A,v)}else R=C&&n(A,r,l,o,f,a,d+1);return!!R}}}(),Ke=function(){const i=new q,t=new q,e=new Pt,s=new H,n=new H;return function c(r,l,o,f,a=null){let d=r*2,u=nt,p=X,y=j;if(a===null&&(o.boundingBox||o.computeBoundingBox(),s.set(o.boundingBox.min,o.boundingBox.max,f),a=s),k(d,p)){const w=l,h=w.index,x=w.attributes.position,m=o.index,b=o.attributes.position,g=tt(r,y),A=lt(d,p);if(e.copy(f).invert(),o.boundsTree)return V(r,u,n),n.matrix.copy(e),n.needsUpdate=!0,o.boundsTree.shapecast({intersectsBounds:P=>n.intersectsBox(P),intersectsTriangle:P=>{P.a.applyMatrix4(f),P.b.applyMatrix4(f),P.c.applyMatrix4(f),P.needsUpdate=!0;for(let M=g*3,v=(A+g)*3;M<v;M+=3)if(L(t,M,h,x),t.needsUpdate=!0,P.intersectsTriangle(t))return!0;return!1}});for(let T=g*3,P=A+g*3;T<P;T+=3){L(i,T,h,x),i.a.applyMatrix4(e),i.b.applyMatrix4(e),i.c.applyMatrix4(e),i.needsUpdate=!0;for(let M=0,v=m.count;M<v;M+=3)if(L(t,M,m,b),t.needsUpdate=!0,i.intersectsTriangle(t))return!0}}else{const w=r+8,h=y[r+6];return V(w,u,Q),!!(a.intersectsBox(Q)&&c(w,l,o,f,a)||(V(h,u,Q),a.intersectsBox(Q)&&c(h,l,o,f,a)))}}}();function vt(i,t,e,s){return V(i,t,Q),e.intersectBox(Q,s)}const _t=[];let Tt,nt,X,j;function at(i){Tt&&_t.push(Tt),Tt=i,nt=new Float32Array(i),X=new Uint16Array(i),j=new Uint32Array(i)}function wt(){Tt=null,nt=null,X=null,j=null,_t.length&&at(_t.pop())}const Et=Symbol("skip tree generation"),zt=new W,Ut=new W,J=new Pt,Y=new H,rt=new H,ot=new z,At=new z,Je=new z,Qe=new z,ts=new z,Jt=new W,_=new oe(()=>new q);class et{static serialize(t,e={}){if(e.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),et.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});e={cloneBuffers:!0,...e};const s=t.geometry,n=t._roots,c=s.getIndex();let r;return e.cloneBuffers?r={roots:n.map(l=>l.slice()),index:c.array.slice()}:r={roots:n,index:c.array},r}static deserialize(t,e,s={}){if(typeof s=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),et.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});s={setIndex:!0,...s};const{index:n,roots:c}=t,r=new et(e,{...s,[Et]:!0});if(r._roots=c,s.setIndex){const l=e.getIndex();if(l===null){const o=new st(t.index,1,!1);e.setIndex(o)}else l.array!==n&&(l.array.set(n),l.needsUpdate=!0)}return r}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({strategy:ie,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[Et]:!1},e),e.useSharedArrayBuffer&&typeof SharedArrayBuffer=="undefined")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,e[Et]||(this._roots=Ne(t,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new W))),this.geometry=t}refit(t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=this.geometry,s=e.index.array,n=e.attributes.position;let c,r,l,o,f=0;const a=this._roots;for(let u=0,p=a.length;u<p;u++)c=a[u],r=new Uint32Array(c),l=new Uint16Array(c),o=new Float32Array(c),d(0,f),f+=c.byteLength;function d(u,p,y=!1){const B=u*2;if(l[B+15]===Ft){const h=r[u+6],x=l[B+14];let m=1/0,b=1/0,g=1/0,A=-1/0,T=-1/0,P=-1/0;for(let M=3*h,v=3*(h+x);M<v;M++){const S=s[M],E=n.getX(S),I=n.getY(S),U=n.getZ(S);E<m&&(m=E),E>A&&(A=E),I<b&&(b=I),I>T&&(T=I),U<g&&(g=U),U>P&&(P=U)}return o[u+0]!==m||o[u+1]!==b||o[u+2]!==g||o[u+3]!==A||o[u+4]!==T||o[u+5]!==P?(o[u+0]=m,o[u+1]=b,o[u+2]=g,o[u+3]=A,o[u+4]=T,o[u+5]=P,!0):!1}else{const h=u+8,x=r[u+6],m=h+p,b=x+p;let g=y,A=!1,T=!1;t?g||(A=t.has(m),T=t.has(b),g=!A&&!T):(A=!0,T=!0);const P=g||A,M=g||T;let v=!1;P&&(v=d(h,p,g));let S=!1;M&&(S=d(x,p,g));const E=v||S;if(E)for(let I=0;I<3;I++){const U=h+I,C=x+I,R=o[U],F=o[U+3],Z=o[C],$=o[C+3];o[u+I]=R<Z?R:Z,o[u+I+3]=F>$?F:$}return E}}}traverse(t,e=0){const s=this._roots[e],n=new Uint32Array(s),c=new Uint16Array(s);r(0);function r(l,o=0){const f=l*2,a=c[f+15]===Ft;if(a){const d=n[l+6],u=c[f+14];t(o,a,new Float32Array(s,l*4,6),d,u)}else{const d=l+Bt/4,u=n[l+6],p=n[l+7];t(o,a,new Float32Array(s,l*4,6),p)||(r(d,o+1),r(u,o+1))}}}raycast(t,e=Nt){const s=this._roots,n=this.geometry,c=[],r=e.isMaterial,l=Array.isArray(e),o=n.groups,f=r?e.side:e;for(let a=0,d=s.length;a<d;a++){const u=l?e[o[a].materialIndex].side:f,p=c.length;if(at(s[a]),Rt(0,n,u,t,c),wt(),l){const y=o[a].materialIndex;for(let B=p,w=c.length;B<w;B++)c[B].face.materialIndex=y}}return c}raycastFirst(t,e=Nt){const s=this._roots,n=this.geometry,c=e.isMaterial,r=Array.isArray(e);let l=null;const o=n.groups,f=c?e.side:e;for(let a=0,d=s.length;a<d;a++){const u=r?e[o[a].materialIndex].side:f;at(s[a]);const p=Vt(0,n,u,t);wt(),p!=null&&(l==null||p.distance<l.distance)&&(l=p,r&&(p.face.materialIndex=o[a].materialIndex))}return l}intersectsGeometry(t,e){const s=this.geometry;let n=!1;for(const c of this._roots)if(at(c),n=Ke(0,s,t,e),wt(),n)break;return n}shapecast(t,e,s){const n=this.geometry;if(t instanceof Function){if(e){const u=e;e=(p,y,B,w)=>{const h=y*3;return u(p,h,h+1,h+2,B,w)}}t={boundsTraverseOrder:s,intersectsBounds:t,intersectsTriangle:e,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const c=_.getPrimitive();let{boundsTraverseOrder:r,intersectsBounds:l,intersectsRange:o,intersectsTriangle:f}=t;if(o&&f){const u=o;o=(p,y,B,w,h)=>u(p,y,B,w,h)?!0:Kt(p,y,n,f,B,w,c)}else o||(f?o=(u,p,y,B)=>Kt(u,p,n,f,y,B,c):o=(u,p,y)=>y);let a=!1,d=0;for(const u of this._roots){if(at(u),a=$e(0,n,l,o,r,d),wt(),a)break;d+=u.byteLength}return _.releasePrimitive(c),a}bvhcast(t,e,s){let{intersectsRanges:n,intersectsTriangles:c}=s;const r=this.geometry.index,l=this.geometry.attributes.position,o=t.geometry.index,f=t.geometry.attributes.position;J.copy(e).invert();const a=_.getPrimitive(),d=_.getPrimitive();if(c){let p=function(y,B,w,h,x,m,b,g){for(let A=w,T=w+h;A<T;A++){L(d,A*3,o,f),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let P=y,M=y+B;P<M;P++)if(L(a,P*3,r,l),a.needsUpdate=!0,c(a,d,P,A,x,m,b,g))return!0}return!1};if(n){const y=n;n=function(B,w,h,x,m,b,g,A){return y(B,w,h,x,m,b,g,A)?!0:p(B,w,h,x,m,b,g,A)}}else n=p}t.getBoundingBox(Ut),Ut.applyMatrix4(e);const u=this.shapecast({intersectsBounds:p=>Ut.intersectsBox(p),intersectsRange:(p,y,B,w,h,x)=>(zt.copy(x),zt.applyMatrix4(J),t.shapecast({intersectsBounds:m=>zt.intersectsBox(m),intersectsRange:(m,b,g,A,T)=>n(p,y,m,b,w,h,A,T)}))});return _.releasePrimitive(a),_.releasePrimitive(d),u}intersectsBox(t,e){return Y.set(t.min,t.max,e),Y.needsUpdate=!0,this.shapecast({intersectsBounds:s=>Y.intersectsBox(s),intersectsTriangle:s=>Y.intersectsTriangle(s)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,s={},n={},c=0,r=1/0){t.boundingBox||t.computeBoundingBox(),Y.set(t.boundingBox.min,t.boundingBox.max,e),Y.needsUpdate=!0;const l=this.geometry,o=l.attributes.position,f=l.index,a=t.attributes.position,d=t.index,u=_.getPrimitive(),p=_.getPrimitive();let y=At,B=Je,w=null,h=null;n&&(w=Qe,h=ts);let x=1/0,m=null,b=null;return J.copy(e).invert(),rt.matrix.copy(J),this.shapecast({boundsTraverseOrder:g=>Y.distanceToBox(g),intersectsBounds:(g,A,T)=>T<x&&T<r?(A&&(rt.min.copy(g.min),rt.max.copy(g.max),rt.needsUpdate=!0),!0):!1,intersectsRange:(g,A)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:T=>rt.distanceToBox(T),intersectsBounds:(T,P,M)=>M<x&&M<r,intersectsRange:(T,P)=>{for(let M=T*3,v=(T+P)*3;M<v;M+=3){L(p,M,d,a),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let S=g*3,E=(g+A)*3;S<E;S+=3){L(u,S,f,o),u.needsUpdate=!0;const I=u.distanceToTriangle(p,y,w);if(I<x&&(B.copy(y),h&&h.copy(w),x=I,m=S/3,b=M/3),I<c)return!0}}}});{const T=d?d.count:a.count;for(let P=0,M=T;P<M;P+=3){L(p,P,d,a),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let v=g*3,S=(g+A)*3;v<S;v+=3){L(u,v,f,o),u.needsUpdate=!0;const E=u.distanceToTriangle(p,y,w);if(E<x&&(B.copy(y),h&&h.copy(w),x=E,m=v/3,b=P/3),E<c)return!0}}}}}),_.releasePrimitive(u),_.releasePrimitive(p),x===1/0?null:(s.point?s.point.copy(B):s.point=B.clone(),s.distance=x,s.faceIndex=m,n&&(n.point?n.point.copy(h):n.point=h.clone(),n.point.applyMatrix4(J),B.applyMatrix4(J),n.distance=B.sub(n.point).length(),n.faceIndex=b),s)}closestPointToPoint(t,e={},s=0,n=1/0){const c=s*s,r=n*n;let l=1/0,o=null;if(this.shapecast({boundsTraverseOrder:a=>(ot.copy(t).clamp(a.min,a.max),ot.distanceToSquared(t)),intersectsBounds:(a,d,u)=>u<l&&u<r,intersectsTriangle:(a,d)=>{a.closestPointToPoint(t,ot);const u=t.distanceToSquared(ot);return u<l&&(At.copy(ot),l=u,o=d),u<c}}),l===1/0)return null;const f=Math.sqrt(l);return e.point?e.point.copy(At):e.point=At.clone(),e.distance=f,e.faceIndex=o,e}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(s=>{V(0,new Float32Array(s),Jt),t.union(Jt)}),t}}const Qt=new W;class es extends me{get isMesh(){return!this.displayEdges}get isLineSegments(){return this.displayEdges}get isLine(){return this.displayEdges}constructor(t,e,s=10,n=0){super(),this.material=e,this.geometry=new Lt,this.name="MeshBVHRootVisualizer",this.depth=s,this.displayParents=!1,this.mesh=t,this.displayEdges=!0,this._group=n}raycast(){}update(){const t=this.geometry,e=this.mesh.geometry.boundsTree,s=this._group;if(t.dispose(),this.visible=!1,e){const n=this.depth-1,c=this.displayParents;let r=0;e.traverse((u,p)=>{if(u===n||p)return r++,!0;c&&r++},s);let l=0;const o=new Float32Array(8*3*r);e.traverse((u,p,y)=>{const B=u===n||p;if(B||c){V(0,y,Qt);const{min:w,max:h}=Qt;for(let x=-1;x<=1;x+=2){const m=x<0?w.x:h.x;for(let b=-1;b<=1;b+=2){const g=b<0?w.y:h.y;for(let A=-1;A<=1;A+=2){const T=A<0?w.z:h.z;o[l+0]=m,o[l+1]=g,o[l+2]=T,l+=3}}}return B}},s);let f,a;this.displayEdges?a=new Uint8Array([0,4,1,5,2,6,3,7,0,2,1,3,4,6,5,7,0,1,2,3,4,5,6,7]):a=new Uint8Array([0,1,2,2,1,3,4,6,5,6,7,5,1,4,5,0,4,1,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7]),o.length>65535?f=new Uint32Array(a.length*r):f=new Uint16Array(a.length*r);const d=a.length;for(let u=0;u<r;u++){const p=u*8,y=u*d;for(let B=0;B<d;B++)f[y+B]=p+a[B]}t.setIndex(new st(f,1,!1)),t.setAttribute("position",new st(o,3,!1)),this.visible=!0}}}class Ht extends ee{get color(){return this.edgeMaterial.color}get opacity(){return this.edgeMaterial.opacity}set opacity(t){this.edgeMaterial.opacity=t,this.meshMaterial.opacity=t}constructor(t,e=10){super(),this.name="MeshBVHVisualizer",this.depth=e,this.mesh=t,this.displayParents=!1,this.displayEdges=!0,this._roots=[];const s=new pe({color:65416,transparent:!0,opacity:.3,depthWrite:!1}),n=new he({color:65416,transparent:!0,opacity:.3,depthWrite:!1});n.color=s.color,this.edgeMaterial=s,this.meshMaterial=n,this.update()}update(){const t=this.mesh.geometry.boundsTree,e=t?t._roots.length:0;for(;this._roots.length>e;){const s=this._roots.pop();s.geometry.dispose(),this.remove(s)}for(let s=0;s<e;s++){if(s>=this._roots.length){const c=new es(this.mesh,this.edgeMaterial,this.depth,s);this.add(c),this._roots.push(c)}const n=this._roots[s];n.depth=this.depth,n.mesh=this.mesh,n.displayParents=this.displayParents,n.displayEdges=this.displayEdges,n.material=this.displayEdges?this.edgeMaterial:this.meshMaterial,n.update()}}updateMatrixWorld(...t){this.position.copy(this.mesh.position),this.rotation.copy(this.mesh.rotation),this.scale.copy(this.mesh.scale),super.updateMatrixWorld(...t)}copy(t){this.depth=t.depth,this.mesh=t.mesh}clone(){return new Ht(this.mesh,this.depth)}dispose(){this.edgeMaterial.dispose(),this.meshMaterial.dispose();const t=this.children;for(let e=0,s=t.length;e<s;e++)t[e].geometry.dispose()}}const ae=new Lt;ae.setAttribute("position",new st(new Float32Array([0,0,0,0,0,0,0,0,0]),3));class ss{constructor(){pt(this,"bvh",new et(ae));pt(this,"visualizer");pt(this,"castOptions",{intersectsBounds:t=>!1,intersectsTriangle:()=>{}})}addBVH(t){const e=t.geometry.clone();e.applyMatrix4(t.matrixWorld);for(const s in e.attributes)s!=="position"&&e.deleteAttribute(s);this.bvh=new et(ne([this.bvh.geometry,e])),this.bvh.geometry.boundsTree=this.bvh,this.visualizer&&(this.visualizer.mesh.geometry=this.bvh.geometry,this.visualizer.update())}createVisualizer(){return this.visualizer=new Ht(new se(this.bvh.geometry)),this}shapecast(t){return this.bvh.shapecast(t||this.castOptions)}dispose(){var t;(t=this.visualizer)==null||t.dispose(),this.bvh.geometry.dispose()}}const ns="@vis-three/mesh-bvh-plugin",is=ve(ns),rs=function(i={}){return{name:is,install(t){const e=new ss;i.visualizer&&(e.createVisualizer(),t.scene.add(e.visualizer)),i.shapecast&&(e.castOptions=i.shapecast),t.MeshBVHManager=e},dispose(t){t.MeshBVHManager.dispose(),delete t.MeshBVHManager}}},ct=Se({plugins:[we(),ge({antialias:!0,alpha:!0}),Ae({WebGLMultisampleRenderTarget:!0}),be(),Be({path:"/vis-three/examples/"}),Te(),rs({visualizer:!0})],strategy:[Pe(),Me()]}).setDom(document.getElementById("app")).setSize().play();ct.loadResourcesAsync(["/model/glb/dungeon_low_poly_game_level_challenge/scene.gltf"]).then(i=>{const e=i.resourceMap.get("/model/glb/dungeon_low_poly_game_level_challenge/scene.gltf").scene;e.scale.setScalar(.1);const s=new W;s.setFromObject(e),s.getCenter(e.position).negate(),e.updateMatrixWorld(!0);const n={};e.traverse(r=>{if(!(/Boss/.test(r.name)||/Enemie/.test(r.name)||/Shield/.test(r.name)||/Sword/.test(r.name)||/Character/.test(r.name)||/Gate/.test(r.name)||/Cube/.test(r.name)||r.material&&r.material.color.r===1)&&r.isMesh){const l=r.material.color.getHex();n[l]=n[l]||[],n[l].push(r)}});const c=new ee;for(const r in n){const l=n[r],o=[];if(l.forEach(f=>{if(f.material.emissive.r!==0)c.attach(f);else{const a=f.geometry.clone();a.applyMatrix4(f.matrixWorld),o.push(a)}}),o.length){const f=ne(o),a=new se(f,new ye({color:parseInt(r),shadowSide:2}));a.castShadow=!0,a.receiveShadow=!0,a.material.shadowSide=2,c.add(a)}}c.updateMatrixWorld(!0),c.traverse(r=>{r.geometry&&ct.MeshBVHManager.addBVH(r)}),ct.scene.add(c)});ct.scene.add(new xe("white",8));window.engine=ct;
