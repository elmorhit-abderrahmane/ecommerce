(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[36],{628:function(e,t,r){"use strict";r(174);var a=r(13),n=r.n(a),o=r(14),c=r.n(o),s=r(16),l=r.n(s),i=r(17),d=r.n(i),u=r(7),m=r.n(u),b=r(0),f=r(2),p=r(1),h=r.n(p),y=r(112),g=r(42);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var _=function(e){l()(r,e);var t=O(r);function r(){return n()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e,t,r,a,n=this.props,o=n.className,c=n.isError,s=n.isEmpty;return c?(e=Object(f.__)("There was an error getting your stats. Please try again.",'woocommerce'),t=Object(f.__)("Reload",'woocommerce'),a=function(){window.location.reload()}):s&&(e=Object(f.__)("No results could be found for this date range.",'woocommerce'),t=Object(f.__)("View Orders",'woocommerce'),r=Object(g.f)("edit.php?post_type=shop_order")),Object(b.createElement)(y.EmptyContent,{className:o,title:e,actionLabel:t,actionURL:r,actionCallback:a})}}]),r}(b.Component);_.propTypes={className:h.a.string,isError:h.a.bool,isEmpty:h.a.bool},_.defaultProps={className:""},t.a=_},640:function(e,t,r){"use strict";var a=r(324),n=["a","b","em","i","strong","p","br"],o=["target","href","rel","name","download"];t.a=function(e){return{__html:Object(a.sanitize)(e,{ALLOWED_TAGS:n,ALLOWED_ATTR:o})}}},729:function(e,t,r){},730:function(e,t,r){},757:function(e,t,r){"use strict";r.r(t);var a=r(30),n=r.n(a),o=r(66),c=r.n(o),s=r(0),l=(r(117),r(108),r(205),r(282),r(134),r(2)),i=r(34),d=r(1),u=r.n(d),m=r(5),b=r(15),f=r(112),p=r(33),h=r(42),y=r(44),g=(r(174),r(13)),O=r.n(g),_=r(14),w=r.n(_),v=r(16),j=r.n(v),E=r(17),R=r.n(E),T=r(7),k=r.n(T),L=r(28),q=r(58),B=r(628),C=r(640);r(729);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=k()(e);if(t){var n=k()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return R()(this,r)}}var S=function(e){j()(r,e);var t=N(r);function r(){return O()(this,r),t.apply(this,arguments)}return w()(r,[{key:"getFormattedHeaders",value:function(){return this.props.headers.map((function(e,t){return{isLeftAligned:0===t,hiddenByDefault:!1,isSortable:!1,key:e.label,label:e.label}}))}},{key:"getFormattedRows",value:function(){return this.props.rows.map((function(e){return e.map((function(e){return{display:Object(s.createElement)("div",{dangerouslySetInnerHTML:Object(C.a)(e.display)}),value:e.value}}))}))}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.isError,a=e.totalRows,n=e.title,o="woocommerce-leaderboard";if(r)return Object(s.createElement)(B.a,{className:o,isError:!0});var c=this.getFormattedRows();return t||0!==c.length?Object(s.createElement)(f.TableCard,{className:o,headers:this.getFormattedHeaders(),isLoading:t,rows:c,rowsPerPage:a,showMenu:!1,title:n,totalRows:a}):Object(s.createElement)(m.Card,{className:o},Object(s.createElement)(m.CardHeader,null,Object(s.createElement)(q.Text,{variant:"title.small",as:"h3"},n)),Object(s.createElement)(m.CardBody,{size:null},Object(s.createElement)(f.EmptyTable,null,Object(l.__)("No data recorded for the selected time period.",'woocommerce'))))}}]),r}(s.Component);S.propTypes={headers:u.a.arrayOf(u.a.shape({label:u.a.string})),id:u.a.string.isRequired,query:u.a.object,rows:u.a.arrayOf(u.a.arrayOf(u.a.shape({display:u.a.node,value:u.a.oneOfType([u.a.string,u.a.number,u.a.bool])}))).isRequired,title:u.a.string.isRequired,totalRows:u.a.number.isRequired},S.defaultProps={rows:[],isError:!1,isRequesting:!1};var I=Object(i.compose)(Object(b.withSelect)((function(e,t){var r=t.id,a=t.query,n=t.totalRows,o=t.filters,c=e(p.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,s=Object(p.getFilterQuery)({filters:o,query:a}),l={id:r,per_page:n,persisted_query:Object(L.getPersistedQuery)(a),query:a,select:e,defaultDateRange:c,filterQuery:s};return Object(p.getLeaderboard)(l)})))(S),P=(r(730),function(e){var t=e.allLeaderboards,r=e.controls,a=e.isFirst,o=e.isLast,i=e.hiddenBlocks,d=e.onMove,u=e.onRemove,b=e.onTitleBlur,h=e.onTitleChange,g=e.onToggleHiddenBlock,O=e.query,_=e.title,w=e.titleInput,v=e.filters,j=Object(p.useUserPreferences)(),E=j.updateUserPreferences,R=c()(j,["updateUserPreferences"]),T=Object(s.useState)(parseInt(R.dashboard_leaderboard_rows||5,10)),k=n()(T,2),L=k[0],q=k[1],B=function(e){q(parseInt(e,10));var t={dashboard_leaderboard_rows:parseInt(e,10)};E(t)};return Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{className:"woocommerce-dashboard__dashboard-leaderboards"},Object(s.createElement)(f.SectionHeader,{title:_||Object(l.__)("Leaderboards",'woocommerce'),menu:Object(s.createElement)(f.EllipsisMenu,{label:Object(l.__)("Choose which leaderboards to display and other settings",'woocommerce'),renderContent:function(e){var n=e.onToggle;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(f.MenuTitle,null,Object(l.__)("Leaderboards",'woocommerce')),function(e){var t=e.allLeaderboards,r=e.hiddenBlocks,a=e.onToggleHiddenBlock;return t.map((function(e){var t=!r.includes(e.id);return Object(s.createElement)(f.MenuItem,{checked:t,isCheckbox:!0,isClickable:!0,key:e.id,onInvoke:function(){a(e.id)(),Object(y.recordEvent)("dash_leaderboards_toggle",{status:t?"off":"on",key:e.id})}},e.label)}))}({allLeaderboards:t,hiddenBlocks:i,onToggleHiddenBlock:g}),Object(s.createElement)(m.SelectControl,{className:"woocommerce-dashboard__dashboard-leaderboards__select",label:Object(l.__)("Rows Per Table",'woocommerce'),value:L,options:Array.from({length:20},(function(e,t){return{v:t+1,label:t+1}})),onChange:B}),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(s.createElement)(r,{onToggle:n,onMove:d,onRemove:u,isFirst:a,isLast:o,onTitleBlur:b,onTitleChange:h,titleInput:w}))}})}),Object(s.createElement)("div",{className:"woocommerce-dashboard__columns"},function(e){var t=e.allLeaderboards,r=e.hiddenBlocks,a=e.query,n=e.rowsPerTable,o=e.filters;return t.map((function(e){if(!r.includes(e.id))return Object(s.createElement)(I,{headers:e.headers,id:e.id,key:e.id,query:a,title:e.label,totalRows:n,filters:o})}))}({allLeaderboards:t,hiddenBlocks:i,query:O,rowsPerTable:L,filters:v}))))});P.propTypes={query:u.a.object.isRequired};t.default=Object(i.compose)(Object(b.withSelect)((function(e){var t=e(p.ITEMS_STORE_NAME),r=t.getItems,a=t.getItemsError;return{allLeaderboards:Object(h.g)("dataEndpoints",{leaderboards:[]}).leaderboards,getItems:r,getItemsError:a}})))(P)}}]);