(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,r){"use strict";var i=r("TqRt");t.__esModule=!0,t.default=void 0;var a,n=i(r("PJYZ")),s=i(r("VbXa")),o=i(r("8OQS")),u=i(r("pVnL")),l=i(r("q1tI")),c=i(r("17x9")),d=function(e){var t=(0,u.default)({},e),r=t.resolutions,i=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed;return f(t||r).src},f=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},b=Object.create({}),g=function(e){var t=d(e),r=h(t);return b[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,m=v&&window.IntersectionObserver,O=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:i,sizes:n}),l.default.createElement("source",{media:a,srcSet:r,sizes:n}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function w(e){return e.map((function(e){var t=e.src,r=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:i})}))}function R(e){return e.map((function(e){var t=e.src,r=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:i})}))}function x(e,t){var r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?i:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var q=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),O.set(e,t)),function(){r.unobserve(e),O.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+o+r+i+t+n+a+u+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=l.default.forwardRef((function(e,t){var r=e.src,i=e.imageVariants,a=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(I,(0,u.default)({ref:t,src:r},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,a(i),o):o})),I=l.default.forwardRef((function(e,t){var r=e.sizes,i=e.srcSet,a=e.src,n=e.style,s=e.onLoad,c=e.onError,d=e.loading,p=e.draggable,h=e.ariaHidden,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,u.default)({"aria-hidden":h,sizes:r,srcSet:i,src:a},f,{onLoad:s,onError:c,ref:t,loading:d,draggable:p,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var M=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&m&&!r.isCritical&&!r.seenBefore;var i=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=q(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=h(t),b[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,i=e.className,a=e.style,n=void 0===a?{}:a,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,p=void 0===c?{}:c,h=e.placeholderClassName,b=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,m=e.Tag,O=e.itemProp,E=e.loading,x=e.draggable,q=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,u.default)({opacity:q?1:0,transition:M?"opacity "+v+"ms":"none"},o),Q="boolean"==typeof y?"lightgray":y,k={transitionDelay:v+"ms"},C=(0,u.default)({opacity:this.state.imgLoaded?0:1},M&&k,o,p),P={title:t,alt:this.state.isVisible?"":r,style:C,className:h,itemProp:O};if(b){var D=b,A=f(b);return l.default.createElement(m,{className:(i||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden",maxWidth:A.maxWidth?A.maxWidth+"px":null,maxHeight:A.maxHeight?A.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},l.default.createElement(m,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),Q&&l.default.createElement(m,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&k)}),A.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:P,imageVariants:D,generateSources:R}),A.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:P,imageVariants:D,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(D),l.default.createElement(I,{alt:r,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,u.default)({alt:r,title:t,loading:E},A,{imageVariants:D}))}}))}if(g){var T=g,N=f(g),V=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete V.display,l.default.createElement(m,{className:(i||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},Q&&l.default.createElement(m,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:Q,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},M&&k)}),N.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:P,imageVariants:T,generateSources:R}),N.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:P,imageVariants:T,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(T),l.default.createElement(I,{alt:r,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,u.default)({alt:r,title:t,loading:E},N,{imageVariants:T}))}}))}return null},t}(l.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),Q=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});M.propTypes={resolutions:z,sizes:Q,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([Q,c.default.arrayOf(Q)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=M;t.default=k},QeBL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return y})),r.d(t,"APOLLO_QUERY",(function(){return v}));var i=r("q1tI"),a=r.n(i),n=r("Wbzz"),s=r("ttZb"),o=r("lTCR"),u=r.n(o),l=r("9Dj+"),c=r("edhK"),d=r("9eSz"),p=r.n(d),h=function(){var e=c.data;return a.a.createElement(p.a,{fluid:e.placeholderImage.childImageSharp.fluid})},f=r("H8eV"),b=r("/2iP");function g(){var e,t,r=(e=['\n  {\n    meme(where: { id: "cjke2xlf9nhd90953khilyzja" }) {\n      photo {\n        url(\n          transformation: {\n            image: { resize: { width: 600, height: 600, fit: crop } }\n          }\n        )\n      }\n    }\n  }\n'],t||(t=e.slice(0)),e.raw=t,e);return g=function(){return r},r}var y="173509685",v=u()(g()),m=function(e){var t=e.data,r=e.loading,i=e.error;return a.a.createElement("div",{style:{textAlign:"center",width:"600px",margin:"50px auto"}},a.a.createElement("p",{style:{fontFamily:"Arial"}},"This a test to use client side rendering using apollo graphql in gatsby. The image below is loaded from a remote graphql api which simulates an async call of a service in a so called static gatsby rendered site."),a.a.createElement("div",null,r&&a.a.createElement("p",null,"Loading Sara..."),i&&a.a.createElement("p",null,"Error: $",i.message),t&&t.meme&&t.meme.photo&&a.a.createElement("img",{src:t.meme.photo.url,alt:"Sara Vieira",style:{maxWidth:300}})))};t.default=function(e){var t=e.data,r=(e.location,t.site.siteMetadata.title),i=t.allMarkdownRemark.edges,o=Object(s.a)(v);return a.a.createElement(l.a,{location:{pathname:"/"},title:r},a.a.createElement(f.a,{title:"Home"}),a.a.createElement("h1",null,"Welcome to the Demo"),a.a.createElement("p",{style:{fontFamily:"Arial"}},"The COVID-19 pandemic in Singapore has impacted many of us financially. We understand that during this difficult period, some of us may find it hard to pay for our insurance premiums. Yet, we know this is precisely the time when everyone needs crucial insurance protection and coverage."),a.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},a.a.createElement(n.Link,{style:{boxShadow:"none",fontFamily:"Arial"},to:"/blog"},a.a.createElement("button",null,"See Wordpress Pages")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(n.Link,{style:{boxShadow:"none",fontFamily:"Arial"},to:"/app/test-dynamic-api/1"},a.a.createElement("button",null,"Test Dynamic API")),a.a.createElement(h,null)),a.a.createElement("h2",null,"Static Markdown Blog Entry"),a.a.createElement("hr",null),i.map((function(e){var t=e.node,r=t.frontmatter.title||t.fields.slug;return a.a.createElement("article",{key:t.fields.slug},a.a.createElement("header",null,a.a.createElement("h3",{style:{marginBottom:Object(b.a)(1/4)}},a.a.createElement(n.Link,{style:{boxShadow:"none"},to:t.fields.slug},r)),a.a.createElement("small",null,t.frontmatter.date)),a.a.createElement("section",null,a.a.createElement("p",{style:{fontFamily:"Arial"},dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})),a.a.createElement("h1",{style:{paddingTop:100,color:"gray"}},"CSR with Apollo GraphQL"),a.a.createElement("hr",null),a.a.createElement(m,{data:o.data,error:o.error,loading:o.loading}),a.a.createElement("pre",null,a.a.createElement(n.Link,{to:"/page-2/"},"Click here to visit another page")))}},edhK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},ttZb:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r("lqOT"),a=r("mrSG"),n=r("q1tI"),s=r("dMq0"),o=r("qx2n"),u=r("qVdT"),l=function(){function e(e,t){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=e||{},this.context=t||{}}return e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(e,t){void 0===t&&(t=!1),t&&!Object(o.a)(this.options,e)&&(this.previousOptions=this.options),this.options=e},e.prototype.unmount=function(){this.isMounted=!1},e.prototype.refreshClient=function(){var e=this.options&&this.options.client||this.context&&this.context.client;Object(u.b)(!!e,2);var t=!1;return e!==this.client&&(t=!0,this.client=e,this.cleanup()),{client:this.client,isNew:t}},e.prototype.verifyDocumentType=function(e,t){var r=Object(i.e)(e);Object(i.d)(t),Object(i.d)(r.type);Object(u.b)(r.type===t,3)},e}(),c=function(e){function t(t){var r=t.options,i=t.context,a=t.onNewData,n=e.call(this,r,i)||this;return n.previousData={},n.currentObservable={},n.runLazy=!1,n.runLazyQuery=function(e){n.cleanup(),n.runLazy=!0,n.lazyOptions=e,n.onNewData()},n.getExecuteResult=function(){var e=n.getQueryResult();return n.startQuerySubscription(),e},n.obsRefetch=function(e){return n.currentObservable.query.refetch(e)},n.obsFetchMore=function(e){return n.currentObservable.query.fetchMore(e)},n.obsUpdateQuery=function(e){return n.currentObservable.query.updateQuery(e)},n.obsStartPolling=function(e){n.currentObservable&&n.currentObservable.query&&n.currentObservable.query.startPolling(e)},n.obsStopPolling=function(){n.currentObservable&&n.currentObservable.query&&n.currentObservable.query.stopPolling()},n.obsSubscribeToMore=function(e){return n.currentObservable.query.subscribeToMore(e)},n.onNewData=a,n}return Object(a.c)(t,e),t.prototype.execute=function(){this.refreshClient();var e=this.getOptions(),t=e.skip,r=e.query;return(t||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},t.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:s.b.ready,called:!1,data:void 0}]},t.prototype.fetchData=function(){var e=this.getOptions();if(e.skip||!1===e.ssr)return!1;var t=this.currentObservable.query;return!!t.getCurrentResult().loading&&t.result()},t.prototype.afterExecute=function(e){var t=(void 0===e?{}:e).lazy,r=void 0!==t&&t;return this.isMounted=!0,r&&!this.runLazy||this.handleErrorOrCompleted(),this.previousOptions=this.getOptions(),this.unmount.bind(this)},t.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},t.prototype.getOptions=function(){var t=e.prototype.getOptions.call(this);return this.lazyOptions&&(t.variables=Object(a.a)(Object(a.a)({},t.variables),this.lazyOptions.variables),t.context=Object(a.a)(Object(a.a)({},t.context),this.lazyOptions.context)),this.runLazy&&delete t.skip,t},t.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},t.prototype.getExecuteSsrResult=function(){var e,t=!1===this.getOptions().ssr,r=this.refreshClient().client.disableNetworkFetches,i=Object(a.a)({loading:!0,networkStatus:s.b.loading,called:!0,data:void 0,stale:!1,client:this.client},this.observableQueryFields());return t&&(this.ssrInitiated()||r)?(this.previousData.result=i,i):(this.ssrInitiated()&&(e=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult)||i),e)},t.prototype.prepareObservableQueryOptions=function(){var e=this.getOptions();this.verifyDocumentType(e.query,i.b.Query);var t=e.displayName||"Query";return!this.ssrInitiated()||"network-only"!==e.fetchPolicy&&"cache-and-network"!==e.fetchPolicy||(e.fetchPolicy="cache-first"),Object(a.a)(Object(a.a)({},e),{displayName:t,context:e.context,metadata:{reactComponent:{displayName:t}}})},t.prototype.initializeObservableQuery=function(){var e,t;if(this.ssrInitiated()&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var r=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(a.a)(Object(a.a)({},r),{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(Object(a.a)({},r)),this.ssrInitiated()&&(null===(t=null===(e=this.context)||void 0===e?void 0:e.renderPromises)||void 0===t||t.registerSSRObservable(this.currentObservable.query,r))}},t.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var e=Object(a.a)(Object(a.a)({},this.prepareObservableQueryOptions()),{children:null});Object(o.a)(e,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=e,this.currentObservable.query.setOptions(e).catch((function(){})))}else this.initializeObservableQuery()},t.prototype.startQuerySubscription=function(){var e=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var t=this.currentObservable.query;this.currentObservable.subscription=t.subscribe({next:function(t){var r=t.loading,i=t.networkStatus,a=t.data,n=e.previousData.result;n&&n.loading===r&&n.networkStatus===i&&Object(o.a)(n.data,a)||e.onNewData()},error:function(t){if(e.resubscribeToQuery(),!t.hasOwnProperty("graphQLErrors"))throw t;var r=e.previousData.result;(r&&r.loading||!Object(o.a)(t,e.previousData.error))&&(e.previousData.error=t,e.onNewData())}})}},t.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var e=this.currentObservable.query.getLastError(),t=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:e,lastResult:t})},t.prototype.getQueryResult=function(){var e=this.observableQueryFields(),t=this.getOptions();if(t.skip)e=Object(a.a)(Object(a.a)({},e),{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),i=r.loading,n=r.partial,o=r.networkStatus,u=r.errors,l=r.error,c=r.data;if(u&&u.length>0&&(l=new s.a({graphQLErrors:u})),e=Object(a.a)(Object(a.a)({},e),{loading:i,networkStatus:o,error:l,called:!0}),i){var d=this.previousData.result&&this.previousData.result.data;e.data=d&&c?Object(a.a)(Object(a.a)({},d),c):d||c}else if(l)Object.assign(e,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var p=this.currentObservable.query.options.fetchPolicy;if(t.partialRefetch&&!c&&n&&"cache-only"!==p)return Object.assign(e,{loading:!0,networkStatus:s.b.loading}),e.refetch(),e;e.data=c}}return e.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=e,this.currentObservable.query&&this.currentObservable.query.resetQueryStoreErrors(),e},t.prototype.handleErrorOrCompleted=function(){if(this.currentObservable.query&&this.previousData.result){var e=this.previousData.result,t=e.data,r=e.loading,i=e.error;if(!r){var a=this.getOptions(),n=a.query,s=a.variables,u=a.onCompleted,l=a.onError;if(this.previousOptions&&!this.previousData.loading&&Object(o.a)(this.previousOptions.query,n)&&Object(o.a)(this.previousOptions.variables,s))return;u&&!i?u(t):l&&i&&l(i)}}},t.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},t.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},t}(l);function d(e,t,r){void 0===r&&(r=!1);var s=Object(n.useContext)(Object(i.c)()),u=Object(n.useReducer)((function(e){return e+1}),0),l=u[0],d=u[1],p=t?Object(a.a)(Object(a.a)({},t),{query:e}):{query:e},h=Object(n.useRef)(),f=h.current||new c({options:p,context:s,onNewData:function(){f.ssrInitiated()?d():Promise.resolve().then(d)}});f.setOptions(p),f.context=s,f.ssrInitiated()&&!h.current&&(h.current=f);var b,g,y,v={options:Object(a.a)(Object(a.a)({},p),{onError:void 0,onCompleted:void 0}),context:s,tick:l},m=(b=function(){return r?f.executeLazy():f.execute()},g=v,(y=Object(n.useRef)()).current&&Object(o.a)(g,y.current.key)||(y.current={key:g,value:b()}),y.current.value),O=r?m[1]:m;return Object(n.useEffect)((function(){return h.current||(h.current=f),function(){return f.cleanup()}}),[]),Object(n.useEffect)((function(){return f.afterExecute({lazy:r})}),[O.loading,O.networkStatus,O.error,O.data]),m}function p(e,t){return d(e,t,!1)}!function(e){function t(t){var r=t.options,a=t.context,n=t.result,s=t.setResult,o=e.call(this,r,a)||this;return o.runMutation=function(e){void 0===e&&(e={}),o.onMutationStart();var t=o.generateNewMutationId();return o.mutate(e).then((function(e){return o.onMutationCompleted(e,t),e})).catch((function(e){if(o.onMutationError(e,t),!o.getOptions().onError)throw e}))},o.verifyDocumentType(r.mutation,i.b.Mutation),o.result=n,o.setResult=s,o.mostRecentMutationId=0,o}Object(a.c)(t,e),t.prototype.execute=function(e){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,i.b.Mutation),e.client=this.refreshClient().client,[this.runMutation,e]},t.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},t.prototype.cleanup=function(){},t.prototype.mutate=function(e){var t=this.getOptions(),r=t.mutation,i=t.variables,n=t.optimisticResponse,s=t.update,o=t.context,u=void 0===o?{}:o,l=t.awaitRefetchQueries,c=void 0!==l&&l,d=t.fetchPolicy,p=Object(a.a)({},e),h=Object.assign({},i,p.variables);return delete p.variables,this.refreshClient().client.mutate(Object(a.a)({mutation:r,optimisticResponse:n,refetchQueries:p.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:c,update:s,context:u,fetchPolicy:d,variables:h},p))},t.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},t.prototype.onMutationCompleted=function(e,t){var r=this.getOptions(),i=r.onCompleted,a=r.ignoreResults,n=e.data,o=e.errors,u=o&&o.length>0?new s.a({graphQLErrors:o}):void 0;this.isMostRecentMutation(t)&&!a&&this.updateResult({called:!0,loading:!1,data:n,error:u}),i&&i(n)},t.prototype.onMutationError=function(e,t){var r=this.getOptions().onError;this.isMostRecentMutation(t)&&this.updateResult({loading:!1,error:e,data:void 0,called:!0}),r&&r(e)},t.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},t.prototype.isMostRecentMutation=function(e){return this.mostRecentMutationId===e},t.prototype.updateResult=function(e){!this.isMounted||this.previousResult&&Object(o.a)(this.previousResult,e)||(this.setResult(e),this.previousResult=e)}}(l);!function(e){function t(t){var r=t.options,i=t.context,a=t.setResult,n=e.call(this,r,i)||this;return n.currentObservable={},n.setResult=a,n.initialize(r),n}Object(a.c)(t,e),t.prototype.execute=function(e){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var t=e;this.refreshClient().isNew&&(t=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"==typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(o.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),t=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(a.a)(Object(a.a)({},t),{variables:this.getOptions().variables})},t.prototype.afterExecute=function(){this.isMounted=!0},t.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},t.prototype.initialize=function(e){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:e.subscription,variables:e.variables,fetchPolicy:e.fetchPolicy}))},t.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},t.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},t.prototype.updateResult=function(e){this.isMounted&&this.setResult(e)},t.prototype.updateCurrentData=function(e){var t=this.getOptions().onSubscriptionData;this.updateResult({data:e.data,loading:!1,error:void 0}),t&&t({client:this.refreshClient().client,subscriptionData:e})},t.prototype.updateError=function(e){this.updateResult({error:e,loading:!1})},t.prototype.completeSubscription=function(){var e=this.getOptions().onSubscriptionComplete;e&&e(),this.endSubscription()},t.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)}}(l);!function(){function e(){this.queryPromises=new Map,this.queryInfoTrie=new Map}e.prototype.registerSSRObservable=function(e,t){this.lookupQueryInfo(t).observable=e},e.prototype.getSSRObservable=function(e){return this.lookupQueryInfo(e).observable},e.prototype.addQueryPromise=function(e,t){return this.lookupQueryInfo(e.getOptions()).seen?t():(this.queryPromises.set(e.getOptions(),new Promise((function(t){t(e.fetchData())}))),null)},e.prototype.hasPromises=function(){return this.queryPromises.size>0},e.prototype.consumeAndAwaitPromises=function(){var e=this,t=[];return this.queryPromises.forEach((function(r,i){e.lookupQueryInfo(i).seen=!0,t.push(r)})),this.queryPromises.clear(),Promise.all(t)},e.prototype.lookupQueryInfo=function(e){var t=this.queryInfoTrie,r=e.query,i=e.variables,a=t.get(r)||new Map;t.has(r)||t.set(r,a);var n=JSON.stringify(i),s=a.get(n)||{seen:!1,observable:null};return a.has(n)||a.set(n,s),s}}()}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e80c25931ff6e4d62542.js.map