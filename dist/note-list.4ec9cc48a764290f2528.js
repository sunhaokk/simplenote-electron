(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1137:function(e,t,n){"use strict";n.r(t),n.d(t,"NoteList",(function(){return B}));var r=n(0),o=n.n(r),a=n(1113);function s(){return o.a.createElement("svg",{className:"icon-feed",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M2,8.667V12c5.515,0,10,4.485,10,10h3.333C15.333,14.637,9.363,8.667,2,8.667z M2,2v3.333 c9.19,0,16.667,7.477,16.667,16.667H22C22,10.955,13.045,2,2,2z M4.5,17C3.118,17,2,18.12,2,19.5S3.118,22,4.5,22S7,20.88,7,19.5 S5.882,17,4.5,17z"}))}var i,c,l=n(8),u=n.n(l),p=n(3),d=n(119),h=n(182),f=n(9),m=n(305),y=new Map,g=(i=function(e){return e.data.content},c=m.a,function(e){var t=y.get(e.id),n=i(e);if(void 0===t||n!==t.key){var r={key:n,value:c(e)};y.set(e.id,r),t=r}return t.value}),v=n(796),b=n.n(v),w=n(344),N=n(205),E=n(179),x=function(e,t){return e.reduce((function(e,t){var n=t.filter,r=t.replacer,o="string"==typeof n&&Object(N.d)(n),a=o&&o.length>0?new RegExp(Object(p.escapeRegExp)(o),"gi"):n;return b()(e,a,r)}),t).map((function(e,t){return e&&"string"!=typeof e?o.a.cloneElement(e,{key:t}):e}))},k={filter:E.b,replacer:function(e){var t=/x/i.test(e);return o.a.createElement(w.a,{checked:t})}},S=function(e){return{filter:e,replacer:function(e){if(e.length)return o.a.createElement("span",{className:"search-match"},e)}}},O=n(411),j=n(171);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=new a.c({defaultHeight:135,fixedWidth:!0}),B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(l,e);var t,n,i,c=L(l);function l(){var e;I(this,l);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return K(T(e=c.call.apply(c,[this].concat(n))),"state",{selectedIndex:null}),K(T(e),"list",Object(r.createRef)()),K(T(e),"handleShortcut",(function(t){if(e.props.keyboardShortcuts){var n=t.ctrlKey,r=t.code,o=t.metaKey,a=t.shiftKey,s=e.props,i=s.isSmallScreen,c=s.notes,l=s.showNoteList,u=e.state.selectedIndex,p=n||o;if(p&&a&&"KeyK"===r){if(c.length){var d=c[null!==u?Math.max(0,u-1):0];e.props.onSelectNote(d)}else e.setState({selectedIndex:null});return t.stopPropagation(),t.preventDefault(),!1}if(p&&a&&"KeyJ"===r){if(c.length){var h=c[null!==u?Math.min(c.length-1,u+1):0];e.props.onSelectNote(h)}else e.setState({selectedIndex:null});return t.stopPropagation(),t.preventDefault(),!1}return i&&p&&a&&"KeyL"===r?(e.props.toggleNoteList(),t.stopPropagation(),t.preventDefault(),!1):!i||!l||"Enter"!==r||null===u||(e.props.openNote(c[u]),t.stopPropagation(),t.preventDefault(),!1)}})),K(T(e),"toggleShortcuts",(function(t){t?window.addEventListener("keydown",e.handleShortcut,!0):window.removeEventListener("keydown",e.handleShortcut,!0)})),e}return t=l,i=[{key:"getDerivedStateFromProps",value:function(e){if(e.selectedNote){var t=e.notes.findIndex((function(t){return t.id===e.selectedNote.id}));return{selectedIndex:-1===t?null:t}}return{}}}],(n=[{key:"componentDidMount",value:function(){this.toggleShortcuts(!0)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.noteDisplay===this.props.noteDisplay&&e.notes===this.props.notes&&e.tagResultsFound===this.props.tagResultsFound&&e.selectedNoteContent===this.props.selectedNoteContent&&e.showNoteList===this.props.showNoteList||Q.clearAll()}},{key:"componentDidUpdate",value:function(e){e.noteDisplay===this.props.noteDisplay&&e.notes===this.props.notes&&e.tagResultsFound===this.props.tagResultsFound&&e.selectedNoteContent===this.props.selectedNoteContent&&e.showNoteList===this.props.showNoteList&&e.searchQuery===this.props.searchQuery&&e.showTrash===this.props.showTrash||Q.clearAll(),e.selectedNote&&e.selectedNote.data.deleted!==this.props.showTrash&&this.state.selectedIndex&&this.props.notes[this.state.selectedIndex]&&this.props.onSelectNote(this.props.notes[this.state.selectedIndex])}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.hasLoaded,i=t.noteDisplay,c=t.notes,l=t.openNote,p=t.onEmptyTrash,d=t.onPinNote,h=t.searchQuery,f=t.showTrash,m=t.tagResultsFound,y=this.state.selectedIndex,v=function(e,t,n){return 0===t.length||0===n?e:["tag-suggestions","notes-header"].concat(A(e.length>0?e:["no-notes"]))}(c,h,m),b=v.length-c.length,w=null!==y?y+b:null,E=function(e,t){var n=t.searchQuery,r=t.noteDisplay,i=t.highlightedIndex,c=t.onPinNote,l=t.openNote;return function(t){var p=t.index,d=t.key,h=t.parent,f=t.style,m=e[p];if("no-notes"===m)return o.a.createElement("div",{className:"note-list is-empty",style:z(z({},f),{},{height:200})},o.a.createElement("span",{className:"note-list-placeholder"},"No Notes"));if("tag-suggestions"===m||"notes-header"===m)return o.a.createElement(a.b,{cache:Q,columnIndex:0,key:d,parent:h,rowIndex:p},"tag-suggestions"===m?o.a.createElement(O.a,null):o.a.createElement("div",{className:"note-list-header"},"Notes"));var y=g(m),v=y.title,b=y.preview,w=m.data.systemTags.includes("pinned"),E=!!m.data.publishURL,j=u()("note-list-item",{"note-list-item-selected":i===p,"note-list-item-pinned":w,"published-note":E}),P=Object(N.b)(n).map(S),I=[k].concat(A(P));return o.a.createElement(a.b,{cache:Q,columnIndex:0,key:d,parent:h,rowIndex:p},o.a.createElement("div",{style:f,className:j},o.a.createElement("div",{className:"note-list-item-pinner",tabIndex:0,onClick:function(){return c(m,!w)}}),o.a.createElement("div",{className:"note-list-item-text theme-color-border",tabIndex:0,onClick:function(){return l(p)}},o.a.createElement("div",{className:"note-list-item-title"},o.a.createElement("span",null,x(I,v)),E&&o.a.createElement("div",{className:"note-list-item-published-icon"},o.a.createElement(s,null))),"condensed"!==r&&b.trim()&&o.a.createElement("div",{className:"note-list-item-excerpt"},x(I,b)))))}}(v,{searchQuery:h,highlightedIndex:w,noteDisplay:i,onPinNote:d,openNote:function(t){return e.setState({selectedIndex:t-b},(function(){return l(c[t-b])}))}}),j=0===v.length,P=o.a.createElement("div",{className:"note-list-empty-trash theme-color-border"},o.a.createElement("button",{type:"button",className:"button button-borderless button-danger",onClick:p},"Empty Trash"));return o.a.createElement("div",{className:u()("note-list",{"is-empty":j})},j?o.a.createElement("span",{className:"note-list-placeholder"},n?"No Notes":"Loading Notes"):o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:"note-list-items ".concat(i)},o.a.createElement(a.a,null,(function(t){var n=t.height,r=t.width;return o.a.createElement(a.d,{ref:e.list,estimatedRowSize:126,height:n,noteDisplay:i,notes:v,rowCount:v.length,rowHeight:Q.rowHeight,rowRenderer:E,scrollToIndex:w,width:r})}))),f&&P))}}])&&D(t.prototype,n),i&&D(t,i),l}(r.Component);K(B,"displayName","NoteList");var U=h.a.actionCreators.emptyTrash;t.default=Object(d.b)((function(e){var t=e.appState,n=e.ui,r=n.filteredNotes,o=n.note,a=n.openedTag,s=n.searchQuery,i=n.showNoteList,c=n.showTrash,l=n.tagSuggestions,u=e.settings,d=u.keyboardShortcuts,h=u.noteDisplay,f=o&&g(o).preview;return{hasLoaded:null!==t.notes,keyboardShortcuts:d,noteDisplay:h,notes:r,openedTag:a,searchQuery:s,selectedNote:o,selectedNotePreview:f,selectedNoteContent:Object(p.get)(o,"data.content"),showNoteList:i,showTrash:c,tagResultsFound:l.length}}),(function(e,t){var n=t.noteBucket;return{closeNote:function(){return e(j.a.ui.closeNote())},onEmptyTrash:function(){return e(U({noteBucket:n}))},onSelectNote:function(t){e(j.a.ui.selectNote(t)),f.a.tracks.recordEvent("list_note_opened")},onPinNote:function(t,n){return e(j.a.ui.pinNote(t,n))},openNote:function(t){return e(j.a.ui.openNote(t))},toggleNoteList:function(){return e(j.a.ui.toggleNoteList())}}}))(B)},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a}));var r={taskNode:".task-list-item",markdownRoot:"[data-markdown-root]"},o=/^(\s*)(-[ \t]+\[[xX\s]?\])/gm,a=/^(\s*)(-[ \t]+\[[xX\s]?\])(.+)/gm},344:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(13),s=n.n(a);function i(){return o.a.createElement("svg",{className:"icon-checkmark",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M11,17.768l-4.884-4.884l1.768-1.768L11,14.232l8.658-8.658C17.823,3.391,15.075,2,12,2C6.477,2,2,6.477,2,12 s4.477,10,10,10s10-4.477,10-10c0-1.528-0.353-2.971-0.966-4.266L11,17.768z"}))}function c(){return o.a.createElement("svg",{className:"icon-circle",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},o.a.createElement("g",{transform:"translate(2 2)"},o.a.createElement("path",{d:"m10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5 8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z"})))}var l=function(e){var t=e.checked,n=void 0!==t&&t,r=e.onChange;return o.a.createElement("span",{className:"checkbox",role:"checkbox","aria-checked":n,onClick:r,tabIndex:"0"},o.a.createElement("span",{className:"checkbox__icon","aria-hidden":"true"},n?o.a.createElement(i,null):o.a.createElement(c,null)))};l.propTypes={checked:s.a.bool,onChange:s.a.func};t.a=l}}]);