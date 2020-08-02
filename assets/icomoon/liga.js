/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'profile': '&#xe923;',
            'file2': '&#xe923;',
            'user-tie': '&#xe976;',
            'user5': '&#xe976;',
            'quill': '&#xe907;',
            'feather': '&#xe907;',
            'camera': '&#xe90f;',
            'photo': '&#xe90f;',
            'book': '&#xe91f;',
            'read': '&#xe91f;',
            'library2': '&#xe921;',
            'bank': '&#xe921;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'envelop': '&#xe945;',
            'mail': '&#xe945;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'bubbles': '&#xe96c;',
            'comments': '&#xe96c;',
            'quotes-right': '&#xe978;',
            'rdquo': '&#xe978;',
            'wrench': '&#xe991;',
            'tool': '&#xe991;',
            'trophy': '&#xe99e;',
            'cup': '&#xe99e;',
            'briefcase': '&#xe9ae;',
            'portfolio': '&#xe9ae;',
            'earth': '&#xe9ca;',
            'globe2': '&#xe9ca;',
            'link': '&#xe9cb;',
            'chain': '&#xe9cb;',
            'star-empty': '&#x2606;',
            'rate': '&#x2606;',
            'star-half': '&#x272e;',
            'rate2': '&#x272e;',
            'star-full': '&#x2605;',
            'rate3': '&#x2605;',
            'heart': '&#xe9da;',
            'like': '&#xe9da;',
            'new-tab': '&#xea7e;',
            'out2': '&#xea7e;',
            'amazon': '&#xea87;',
            'brand': '&#xea87;',
            'google': '&#xea88;',
            'brand2': '&#xea88;',
            'google-plus': '&#xea8b;',
            'brand5': '&#xea8b;',
            'google-drive': '&#xea8f;',
            'brand9': '&#xea8f;',
            'google-scholar': '&#xea90;',
            'brand9': '&#xea90;',
            'facebook': '&#xea91;',
            'brand10': '&#xea91;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'whatsapp': '&#xea93;',
            'brand13': '&#xea93;',
            'spotify': '&#xea94;',
            'brand14': '&#xea94;',
            'telegram': '&#xea95;',
            'brand15': '&#xea95;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'vine': '&#xea97;',
            'brand17': '&#xea97;',
            'vk': '&#xea98;',
            'brand18': '&#xea98;',
            'renren': '&#xea99;',
            'brand19': '&#xea99;',
            'sina-weibo': '&#xea9a;',
            'brand20': '&#xea9a;',
            'feed2': '&#xea9b;',
            'rss': '&#xea9b;',
            'youtube': '&#xea9d;',
            'brand21': '&#xea9d;',
            'twitch': '&#xea9f;',
            'brand23': '&#xea9f;',
            'vimeo': '&#xeaa0;',
            'brand24': '&#xeaa0;',
            'lanyrd': '&#xeaa2;',
            'brand26': '&#xeaa2;',
            'flickr2': '&#xeaa4;',
            'brand28': '&#xeaa4;',
            'dribbble': '&#xeaa7;',
            'brand31': '&#xeaa7;',
            'behance': '&#xeaa8;',
            'brand32': '&#xeaa8;',
            'deviantart': '&#xeaaa;',
            'brand34': '&#xeaaa;',
            '500px': '&#xeaab;',
            'brand35': '&#xeaab;',
            'steam': '&#xeaac;',
            'brand36': '&#xeaac;',
            'dropbox': '&#xeaae;',
            'brand38': '&#xeaae;',
            'onedrive': '&#xeaaf;',
            'brand39': '&#xeaaf;',
            'github': '&#xeab0;',
            'brand40': '&#xeab0;',
            'npm': '&#xeab1;',
            'brand41': '&#xeab1;',
            'basecamp': '&#xeab2;',
            'brand42': '&#xeab2;',
            'trello': '&#xeab3;',
            'brand43': '&#xeab3;',
            'wordpress': '&#xeab4;',
            'brand44': '&#xeab4;',
            'joomla': '&#xeab5;',
            'brand45': '&#xeab5;',
            'ello': '&#xeab6;',
            'brand46': '&#xeab6;',
            'blogger': '&#xeab7;',
            'brand47': '&#xeab7;',
            'tumblr': '&#xeab9;',
            'brand49': '&#xeab9;',
            'yahoo': '&#xeabb;',
            'brand51': '&#xeabb;',
            'soundcloud': '&#xeac3;',
            'brand58': '&#xeac3;',
            'skype': '&#xeac5;',
            'brand60': '&#xeac5;',
            'reddit': '&#xeac6;',
            'brand61': '&#xeac6;',
            'hackernews': '&#xeac7;',
            'brand62': '&#xeac7;',
            'wikipedia': '&#xeac8;',
            'brand63': '&#xeac8;',
            'linkedin2': '&#xeaca;',
            'brand65': '&#xeaca;',
            'lastfm': '&#xeacb;',
            'brand66': '&#xeacb;',
            'delicious': '&#xeacd;',
            'brand68': '&#xeacd;',
            'stumbleupon': '&#xeace;',
            'brand69': '&#xeace;',
            'stackoverflow': '&#xead0;',
            'brand71': '&#xead0;',
            'pinterest2': '&#xead2;',
            'brand73': '&#xead2;',
            'xing2': '&#xead4;',
            'brand75': '&#xead4;',
            'flattr': '&#xead5;',
            'brand76': '&#xead5;',
            'foursquare': '&#xead6;',
            'brand77': '&#xead6;',
            'yelp': '&#xead7;',
            'brand78': '&#xead7;',
            'paypal': '&#xead8;',
            'brand79': '&#xead8;',
            'mail2': '&#xea83;',
            'contact2': '&#xea83;',
            'feed3': '&#xea9c;',
            'rss2': '&#xea9c;',
            'box-add': '&#xe95e;',
            'box3': '&#xe95e;',
            'spinner11': '&#x21bb;',
            'loading12': '&#x21bb;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'power-cord': '&#xe9b7;',
            'plugin': '&#xe9b7;',
            'menu': '&#x2630;',
            'list3': '&#x2630;',
            'arrow-right2': '&#x2192;',
            'right4': '&#x2192;',
            'arrow-left2': '&#x2190;',
            'left4': '&#x2190;',
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'mail3': '&#xea84;',
            'contact3': '&#xea84;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
