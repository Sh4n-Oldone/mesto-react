(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/logo_white.94cbab21.svg"},function(e,t,a){e.exports=a.p+"static/media/cousteau.f3e9a11e.jpg"},function(e,t,a){e.exports=a.p+"static/media/edit-profile-icon.d476a8b8.svg"},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(15),a(2)),l=a(1),i=a(5),p=a.n(i);function u(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:p.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"logo"})))}var m=a(6),d=a.n(m),_=a(7),f=a.n(_),h=a(8),E=a(9),v=new(function(){function e(t){Object(h.a)(this,e),this._userUrl=t.userUrl,this._cardsUrl=t.cardsUrl,this._headers=t.headers}return Object(E.a)(e,[{key:"getUserData",value:function(){return fetch(this._userUrl,{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCardsData",value:function(){return fetch(this._cardsUrl,{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserData",value:function(e){return fetch(this._userUrl,{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setCardsData",value:function(e){return fetch(this._cardsUrl,{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"removeCard",value:function(e){return fetch(this._cardsUrl+"/"+e,{method:"DELETE",headers:this._headers})}},{key:"putLike",value:function(e){return fetch(this._cardsUrl+"/likes/"+e,{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"removeLike",value:function(e){return fetch(this._cardsUrl+"/likes/"+e,{method:"DELETE",headers:this._headers})}},{key:"setNewAvatar",value:function(e){return fetch(this._userUrl+"/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({userUrl:"https://mesto.nomoreparties.co/v1/cohort-14/users/me",cardsUrl:"https://mesto.nomoreparties.co/v1/cohort-14/cards",headers:{authorization:"14950384-2a2e-482b-8250-dfb0e0c885f3","Content-Type":"application/json"}}),N=(document.querySelector(".page"),document.querySelector(".popup-profile"),document.querySelector(".popup-card"),document.querySelector(".popup-image"),document.querySelector(".popup-submit"),document.querySelector(".popup-avatar"),document.querySelector(".profile__edit-button"),document.querySelector(".profile__add-button"),document.querySelector(".profile__name"),document.querySelector(".profile__title"),document.querySelector(".profile__pic"),document.querySelector(".cards__list"),function(e){var t=e.url,a=e.description,n=e.likes,o=e.ownerId,c=e.onCardClick,s=e.onRemoveClick;function l(){c({url:t,description:a})}return"ed99dd7809a559eac419471a"===o?r.a.createElement("li",{className:"card"},r.a.createElement("button",{className:"card__remove-button button-style__reset",onClick:s}),r.a.createElement("img",{className:"card__image",src:t,alt:a,onClick:l}),r.a.createElement("div",{className:"card__item"},r.a.createElement("h3",{className:"card__title"},a),r.a.createElement("div",{className:"card__like-container"},r.a.createElement("button",{className:"card__like-button button-style__reset"}),r.a.createElement("p",{className:"card__like-counter"},n.length)))):r.a.createElement("li",{className:"card"},r.a.createElement("img",{className:"card__image",src:t,alt:a,onClick:l}),r.a.createElement("div",{className:"card__item"},r.a.createElement("h3",{className:"card__title"},a),r.a.createElement("div",{className:"card__like-container"},r.a.createElement("button",{className:"card__like-button button-style__reset"}),r.a.createElement("p",{className:"card__like-counter"},n.length))))});function b(e){var t=r.a.useState({userName:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"}),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState({userDescription:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430"}),s=Object(l.a)(c,2),i=s[0],p=s[1],u=r.a.useState({userAvatar:d.a}),m=Object(l.a)(u,2),_=m[0],h=m[1],E=r.a.useState([]),b=Object(l.a)(E,2),g=b[0],k=b[1];return r.a.useEffect((function(){v.getUserData().then((function(e){o(e.name),p(e.about),h(e.avatar)})).catch((function(e){console.log("\u042f \u043f\u043e\u043b\u0443\u0447\u0430\u043b \u0434\u0430\u043d\u043d\u044b\u0435. \u042f \u0441\u043b\u043e\u043c\u0430\u043b\u0441\u044f. \u041e\u0448\u0438\u0431\u043a\u0430: "+e)}))}),[]),r.a.useEffect((function(){v.getCardsData().then((function(e){var t=e.map((function(e){return{url:e.link,description:e.name,likes:e.likes,id:e._id,ownerId:e.owner._id}}));k(t)})).catch((function(e){console.log("\u042f \u0433\u0440\u0443\u0437\u0438\u043b \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a. \u042f \u0441\u043b\u043e\u043c\u0430\u043b\u0441\u044f. \u041e\u0448\u0438\u0431\u043a\u0430: "+e)}))}),[]),r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__overlay"},r.a.createElement("img",{src:_,alt:"\u0424\u043e\u0442\u043e: ".concat(n),className:"profile__pic",onClick:e.onEditAvatar}),r.a.createElement("img",{src:f.a,alt:"edit-icon",className:"profile__edit-icon"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__wrapper"},r.a.createElement("h1",{className:"profile__name"},"".concat(n)),r.a.createElement("button",{className:"profile__edit-button button-style__reset",onClick:e.onEditProfile})),r.a.createElement("p",{className:"profile__title"},"".concat(i))),r.a.createElement("button",{className:"profile__add-button button-style__reset",onClick:e.onAddPlace})),r.a.createElement("section",{className:"cards"},r.a.createElement("ul",{className:"cards__list"},g.map((function(t){return r.a.createElement(N,Object.assign({},t,{key:t.id,onCardClick:e.onCardClick,onRemoveClick:e.onRemoveClick}))})))))}function g(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia")))}function k(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"popup popup-".concat(e.name).concat(e.isOpen?" popup_opened":"")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("h2",{className:"popup__title"},e.title),r.a.createElement("form",{className:"popup__form",name:e.name},e.children,r.a.createElement("button",{type:"submit",className:"popup__save-button button-style__reset"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement("button",{type:"button",className:"popup__close-button button-style__reset",onClick:e.onClose}))))}function y(e){return r.a.createElement("section",{className:"popup popup-".concat(e.name).concat(e.card?" popup_opened":"")},r.a.createElement("div",{className:"popup-image__container"},r.a.createElement("img",{src:e.card.url,alt:e.card.description,className:"popup-image__image"}),r.a.createElement("p",{className:"popup-image__title"},e.card.description),r.a.createElement("button",{type:"button",className:"popup__close-button button-style__reset",onClick:e.onClose})))}function O(){var e=r.a.useState({isEditProfilePopupOpen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,isRemoveCardPopupOpen:!1}),t=Object(l.a)(e,2),a=t[0],n=t[1],o=r.a.useState(""),c=Object(l.a)(o,2),i=c[0],p=c[1];function m(){document.querySelector(".popup_opened").classList.remove("popup_opened"),n(Object(s.a)({},a,{isEditProfilePopupOpen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,isRemoveCardPopupOpen:!1})),p("")}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page__container"},r.a.createElement(u,null),r.a.createElement(b,{onEditProfile:function(){n(Object(s.a)({},a,{isEditProfilePopupOpen:!a.isEditProfilePopupOpen}))},onAddPlace:function(){n(Object(s.a)({},a,{isAddPlacePopupOpen:!a.isAddPlacePopupOpen}))},onEditAvatar:function(){n(Object(s.a)({},a,{isEditAvatarPopupOpen:!a.isEditAvatarPopupOpen}))},onCardClick:function(e){p(e)},onRemoveClick:function(){n(Object(s.a)({},a,{isRemoveCardPopupOpen:!a.isRemoveCardPopupOpen}))}}),r.a.createElement(k,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:a.isEditProfilePopupOpen,onClose:m},r.a.createElement("small",{className:"popup__input_type_error input_name_error-message"}),r.a.createElement("input",{type:"text",name:"name",defaultValue:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup__input popup__input_name",minLength:"2",maxLength:"40",required:!0}),r.a.createElement("small",{className:"popup__input_type_error input_title_error-message"}),r.a.createElement("input",{type:"text",name:"job",defaultValue:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430",placeholder:"\u0412\u0430\u0448\u0430 \u0440\u0430\u0431\u043e\u0442\u0430",className:"popup__input popup__input_title",minLength:"2",maxLength:"200",required:!0})),r.a.createElement(k,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:a.isAddPlacePopupOpen,onClose:m},r.a.createElement("small",{className:"popup__input_type_error input_name_error-message"}),r.a.createElement("input",{type:"text",name:"name",defaultValue:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_name",minLength:"1",maxLength:"30",required:!0}),r.a.createElement("small",{className:"popup__input_type_error input_title_error-message"}),r.a.createElement("input",{type:"url",name:"link",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"popup__input popup__input_title",required:!0})),r.a.createElement(k,{name:"submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:a.isRemoveCardPopupOpen,onClose:m}),r.a.createElement(k,{name:"avatar",title:"\u041d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:a.isEditAvatarPopupOpen,onClose:m},r.a.createElement("small",{className:"popup__input_type_error input_title_error-message"}),r.a.createElement("input",{type:"url",name:"avatar",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__input popup__input_title",required:!0})),r.a.createElement(y,{card:i,name:"image",onClose:m}),r.a.createElement(g,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.61294abf.chunk.js.map