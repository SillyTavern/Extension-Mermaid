"use strict";(self.webpackChunkextension_mermaid=self.webpackChunkextension_mermaid||[]).push([[51],{4075:(e,n,t)=>{t.d(n,{M:()=>o});var r=t(9592),i=t(53),a=t(4722);t(1471);function o(e){var n={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:d(e),edges:s(e)};return r.A(e.graph())||(n.value=i.A(e.graph())),n}function d(e){return a.A(e.nodes(),(function(n){var t=e.node(n),i=e.parent(n),a={v:n};return r.A(t)||(a.value=t),r.A(i)||(a.parent=i),a}))}function s(e){return a.A(e.edges(),(function(n){var t=e.edge(n),i={v:n.v,w:n.w};return r.A(n.name)||(i.name=n.name),r.A(t)||(i.value=t),i}))}},53:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(4507);const i=function(e){return(0,r.A)(e,4)}},1051:(e,n,t)=>{t.r(n),t.d(n,{render:()=>C});var r=t(9022),i=t(8496),a=(t(8252),t(7323),t(798)),o=t(567),d=t(4075),s=t(697),c=new Map,g=new Map,l=new Map,f=(0,a.K2)((()=>{g.clear(),l.clear(),c.clear()}),"clear"),h=(0,a.K2)(((e,n)=>{const t=g.get(n)||[];return a.Rm.trace("In isDescendant",n," ",e," = ",t.includes(e)),t.includes(e)}),"isDescendant"),m=(0,a.K2)(((e,n)=>{const t=g.get(n)||[];return a.Rm.info("Descendants of ",n," is ",t),a.Rm.info("Edge is ",e),e.v!==n&&e.w!==n&&(t?t.includes(e.v)||h(e.v,n)||h(e.w,n)||t.includes(e.w):(a.Rm.debug("Tilt, ",n,",not in descendants"),!1))}),"edgeInCluster"),u=(0,a.K2)(((e,n,t,r)=>{a.Rm.warn("Copying children of ",e,"root",r,"data",n.node(e),r);const i=n.children(e)||[];e!==r&&i.push(e),a.Rm.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(n.children(i).length>0)u(i,n,t,r);else{const o=n.node(i);a.Rm.info("cp ",i," to ",r," with parent ",e),t.setNode(i,o),r!==n.parent(i)&&(a.Rm.warn("Setting parent",i,n.parent(i)),t.setParent(i,n.parent(i))),e!==r&&i!==e?(a.Rm.debug("Setting parent",i,e),t.setParent(i,e)):(a.Rm.info("In copy ",e,"root",r,"data",n.node(e),r),a.Rm.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));const d=n.edges(i);a.Rm.debug("Copying Edges",d),d.forEach((i=>{a.Rm.info("Edge",i);const o=n.edge(i.v,i.w,i.name);a.Rm.info("Edge data",o,r);try{m(i,r)?(a.Rm.info("Copying as ",i.v,i.w,o,i.name),t.setEdge(i.v,i.w,o,i.name),a.Rm.info("newGraph edges ",t.edges(),t.edge(t.edges()[0]))):a.Rm.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(e){a.Rm.error(e)}}))}a.Rm.debug("Removing node",i),n.removeNode(i)}))}),"copy"),p=(0,a.K2)(((e,n)=>{const t=n.children(e);let r=[...t];for(const i of t)l.set(i,e),r=[...r,...p(i,n)];return r}),"extractDescendants"),w=(0,a.K2)(((e,n,t)=>{const r=e.edges().filter((e=>e.v===n||e.w===n)),i=e.edges().filter((e=>e.v===t||e.w===t)),a=r.map((e=>({v:e.v===n?t:e.v,w:e.w===n?n:e.w}))),o=i.map((e=>({v:e.v,w:e.w})));return a.filter((e=>o.some((n=>e.v===n.v&&e.w===n.w))))}),"findCommonEdges"),R=(0,a.K2)(((e,n,t)=>{const r=n.children(e);if(a.Rm.trace("Searching children of id ",e,r),r.length<1)return e;let i;for(const e of r){const r=R(e,n,t),a=w(n,t,r);if(r){if(!(a.length>0))return r;i=r}}return i}),"findNonClusterChild"),v=(0,a.K2)((e=>c.has(e)&&c.get(e).externalConnections&&c.has(e)?c.get(e).id:e),"getAnchorId"),y=(0,a.K2)(((e,n)=>{if(!e||n>10)a.Rm.debug("Opting out, no graph ");else{a.Rm.debug("Opting in, graph "),e.nodes().forEach((function(n){e.children(n).length>0&&(a.Rm.warn("Cluster identified",n," Replacement id in edges: ",R(n,e,n)),g.set(n,p(n,e)),c.set(n,{id:R(n,e,n),clusterData:e.node(n)}))})),e.nodes().forEach((function(n){const t=e.children(n),r=e.edges();t.length>0?(a.Rm.debug("Cluster identified",n,g),r.forEach((e=>{h(e.v,n)^h(e.w,n)&&(a.Rm.warn("Edge: ",e," leaves cluster ",n),a.Rm.warn("Descendants of XXX ",n,": ",g.get(n)),c.get(n).externalConnections=!0)}))):a.Rm.debug("Not a cluster ",n,g)}));for(let n of c.keys()){const t=c.get(n).id,r=e.parent(t);r!==n&&c.has(r)&&!c.get(r).externalConnections&&(c.get(n).id=r)}e.edges().forEach((function(n){const t=e.edge(n);a.Rm.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),a.Rm.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let r=n.v,i=n.w;if(a.Rm.warn("Fix XXX",c,"ids:",n.v,n.w,"Translating: ",c.get(n.v)," --- ",c.get(n.w)),c.get(n.v)&&c.get(n.w)&&c.get(n.v)===c.get(n.w)){a.Rm.warn("Fixing and trying link to self - removing XXX",n.v,n.w,n.name),a.Rm.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=v(n.v),i=v(n.w),e.removeEdge(n.v,n.w,n.name);const o=n.w+"---"+n.v+"---1",d=n.w+"---"+n.v+"---2";e.setNode(o,{domId:o,id:o,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),e.setNode(d,{domId:d,id:d,labelStyle:"",padding:0,shape:"labelRect",style:"",width:10,height:10});const s=structuredClone(t),c=structuredClone(t),g=structuredClone(t);s.label="",s.arrowTypeEnd="none",s.id=n.name+"-cyclic-special-1",c.arrowTypeEnd="none",c.id=n.name+"-cyclic-special-mid",g.label="",s.fromCluster=n.v,g.toCluster=n.v,g.id=n.name+"-cyclic-special-2",e.setEdge(r,o,s,n.name+"-cyclic-special-0"),e.setEdge(o,d,c,n.name+"-cyclic-special-1"),e.setEdge(d,i,g,n.name+"-cyclic-special-2")}else if(c.get(n.v)||c.get(n.w)){if(a.Rm.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=v(n.v),i=v(n.w),e.removeEdge(n.v,n.w,n.name),r!==n.v){const i=e.parent(r);c.get(i).externalConnections=!0,t.fromCluster=n.v}if(i!==n.w){const r=e.parent(i);c.get(r).externalConnections=!0,t.toCluster=n.w}a.Rm.warn("Fix Replacing with XXX",r,i,n.name),e.setEdge(r,i,t,n.name)}})),a.Rm.warn("Adjusted Graph",d.M(e)),X(e,0),a.Rm.trace(c)}}),"adjustClustersAndEdges"),X=(0,a.K2)(((e,n)=>{if(a.Rm.warn("extractor - ",n,d.M(e),e.children("D")),n>10)return void a.Rm.error("Bailing out");let t=e.nodes(),r=!1;for(const n of t){const t=e.children(n);r=r||t.length>0}if(r){a.Rm.debug("Nodes = ",t,n);for(const r of t)if(a.Rm.debug("Extracting node",r,c,c.has(r)&&!c.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",n),c.has(r))if(!c.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){a.Rm.warn("Cluster without external connections, without a parent and with children",r,n);let t="TB"===e.graph().rankdir?"LR":"TB";c.get(r)?.clusterData?.dir&&(t=c.get(r).clusterData.dir,a.Rm.warn("Fixing dir",c.get(r).clusterData.dir,t));const i=new s.T({multigraph:!0,compound:!0}).setGraph({rankdir:t,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));a.Rm.warn("Old graph before copy",d.M(e)),u(r,e,i,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:c.get(r).clusterData,label:c.get(r).label,graph:i}),a.Rm.warn("New graph after copy node: (",r,")",d.M(i)),a.Rm.debug("Old graph after copy",d.M(e))}else a.Rm.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!c.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),n),a.Rm.debug(c);else a.Rm.debug("Not a cluster",r,n);t=e.nodes(),a.Rm.warn("New list of nodes",t);for(const r of t){const t=e.node(r);a.Rm.warn(" Now next level",r,t),t.clusterNode&&X(t.graph,n+1)}}else a.Rm.debug("Done, no node has children",e.nodes())}),"extractor"),E=(0,a.K2)(((e,n)=>{if(0===n.length)return[];let t=Object.assign([],n);return n.forEach((n=>{const r=e.children(n),i=E(e,r);t=[...t,...i]})),t}),"sorter"),b=(0,a.K2)((e=>E(e,e.children())),"sortNodesByHierarchy"),N=(0,a.K2)((async(e,n,t,s,g,l)=>{a.Rm.info("Graph in recursive render: XXX",d.M(n),g);const f=n.graph().rankdir;a.Rm.trace("Dir in recursive render - dir:",f);const h=e.insert("g").attr("class","root");n.nodes()?a.Rm.info("Recursive render XXX",n.nodes()):a.Rm.info("No nodes found for",n),n.edges().length>0&&a.Rm.info("Recursive edges",n.edge(n.edges()[0]));const m=h.insert("g").attr("class","clusters"),u=h.insert("g").attr("class","edgePaths"),p=h.insert("g").attr("class","edgeLabels"),w=h.insert("g").attr("class","nodes");await Promise.all(n.nodes().map((async function(e){const i=n.node(e);if(void 0!==g){const t=JSON.parse(JSON.stringify(g.clusterData));a.Rm.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",t.height,"\nParent cluster",g.height),n.setNode(g.id,t),n.parent(e)||(a.Rm.trace("Setting parent",e,g.id),n.setParent(e,g.id,t))}if(a.Rm.info("(Insert) Node XXX"+e+": "+JSON.stringify(n.node(e))),i?.clusterNode){a.Rm.info("Cluster identified XBX",e,i.width,n.node(e));const{ranksep:o,nodesep:d}=n.graph();i.graph.setGraph({...i.graph.graph(),ranksep:o+25,nodesep:d});const c=await N(w,i.graph,t,s,n.node(e),l),g=c.elem;(0,r.lC)(i,g),i.diff=c.diff||0,a.Rm.info("New compound node after recursive render XAX",e,"width",i.width,"height",i.height),(0,r.U7)(g,i)}else n.children(e).length>0?(a.Rm.info("Cluster - the non recursive path XBX",e,i.id,i,i.width,"Graph:",n),a.Rm.info(R(i.id,n)),c.set(i.id,{id:R(i.id,n),node:i})):(a.Rm.trace("Node - the non recursive path XAX",e,i.id,i),await(0,r.on)(w,n.node(e),f))})));const v=(0,a.K2)((async()=>{const e=n.edges().map((async function(e){const t=n.edge(e.v,e.w,e.name);a.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),a.Rm.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(n.edge(e))),a.Rm.info("Fix",c,"ids:",e.v,e.w,"Translating: ",c.get(e.v),c.get(e.w)),await(0,r.jP)(p,t)}));await Promise.all(e)}),"processEdges");await v(),a.Rm.info("Graph before layout:",JSON.stringify(d.M(n))),a.Rm.info("############################################# XXX"),a.Rm.info("###                Layout                 ### XXX"),a.Rm.info("############################################# XXX"),(0,o.Zp)(n),a.Rm.info("Graph after layout:",JSON.stringify(d.M(n)));let y=0,{subGraphTitleTotalMargin:X}=(0,i.O)(l);return await Promise.all(b(n).map((async function(e){const t=n.node(e);if(a.Rm.info("Position XBX => "+e+": ("+t.x,","+t.y,") width: ",t.width," height: ",t.height),t?.clusterNode)t.y+=X,a.Rm.info("A tainted cluster node XBX1",e,t.id,t.width,t.height,t.x,t.y,n.parent(e)),c.get(t.id).node=t,(0,r.U_)(t);else if(n.children(e).length>0){a.Rm.info("A pure cluster node XBX1",e,t.id,t.x,t.y,t.width,t.height,n.parent(e)),t.height+=X,n.node(t.parentId);const i=t?.padding/2||0,o=t?.labelBBox?.height||0,d=o-i||0;a.Rm.debug("OffsetY",d,"labelHeight",o,"halfPadding",i),await(0,r.U)(m,t),c.get(t.id).node=t}else{const e=n.node(t.parentId);t.y+=X/2,a.Rm.info("A regular node XBX1 - using the padding",t.id,"parent",t.parentId,t.width,t.height,t.x,t.y,"offsetY",t.offsetY,"parent",e,e?.offsetY,t),(0,r.U_)(t)}}))),n.edges().forEach((function(e){const i=n.edge(e);a.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i),i.points.forEach((e=>e.y+=X/2));const o=n.node(e.v);var d=n.node(e.w);const g=(0,r.Jo)(u,i,c,t,o,d,s);(0,r.T_)(i,g)})),n.nodes().forEach((function(e){const t=n.node(e);a.Rm.info(e,t.type,t.diff),t.isGroup&&(y=t.diff)})),a.Rm.warn("Returning from recursive render XAX",h,y),{elem:h,diff:y}}),"recursiveRender"),C=(0,a.K2)((async(e,n)=>{const t=new s.T({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),i=n.select("g");(0,r.g0)(i,e.markers,e.type,e.diagramId),(0,r.nA)(),(0,r.gh)(),(0,r.IU)(),f(),e.nodes.forEach((e=>{t.setNode(e.id,{...e}),e.parentId&&t.setParent(e.id,e.parentId)})),a.Rm.debug("Edges:",e.edges),e.edges.forEach((e=>{t.setEdge(e.start,e.end,{...e},e.id)})),a.Rm.warn("Graph at first:",JSON.stringify(d.M(t))),y(t),a.Rm.warn("Graph after:",JSON.stringify(d.M(t)));const o=(0,a.D7)();await N(i,t,e.type,e.diagramId,void 0,o)}),"render")}}]);