var Share = {
    facebook: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'http://www.facebook.com/sharer.php',
            {
                u: data.url
            }
        );

        console.log(link);

        Share.showPopup(link, 729, 250);
    },


    twitter: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'https://twitter.com/share',
            {
                url: data.url,
                text: data.title,
                via: data.via,
                hashtags: data.hashtags,
            }
        );

        Share.showPopup(link, 729, 250);
    },


    google: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'https://plus.google.com/share',
            {
                url: data.url
            }
        );

        Share.showPopup(link, 400, 500);
    },

    pinterest: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'https://pinterest.com/pin/create/bookmarklet',
            {
                media: data.image,
                url: data.url,
                description: data.title
            }
        );

        Share.showPopup(link, 750, 750);
    },


    linkedIn: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'http://www.linkedin.com/shareArticle',
            {
                url: data.url,
                title: data.title
            }
        );

        Share.showPopup(link, 550, 500);
    },


    bufferApp: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'http://bufferapp.com/add',
            {
                text: data.title,
                url: data.url
            }
        );

        Share.showPopup(link, 400, 700);
    },


    tumblr: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'http://www.tumblr.com/share/link',
            {
                url: data.url,
                name: data.title,
                description: data.description
            }
        );

        Share.showPopup(link, 540, 700);
    },


    reddit: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'http://reddit.com/submit',
            {
                url: data.url,
                title: data.title
            }
        );

        Share.showPopup(link);
    },


    stumbleUpon: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'http://www.stumbleupon.com/submit',
            {
                url: data.url,
                title: data.title
            }
        );

        Share.showPopup(link, 557, 587);
    },


    evernote: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'http://www.evernote.com/clip.action',
            {
                url: data.url,
                title: data.title
            }
        );

        Share.showPopup(link, 960, 550);
    },


    email: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'mailto:',
            {
                subject: data.title,
                body: data.title + ' - ' + data.description + ' - ' + data.url
            }
        );

        Share.showPopup(link, 10, 10);
    },


    wordpress: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'http://wordpress.com/press-this.php',
            {
                u: data.url,
                t: data.title,
                s: data.description,
                i: data.image
            }
        );

        Share.showPopup(link);
    },


    pocket: function (params) {
        var data = Share.getShareData(params);

        var link = Share.encodeUrl(
            'https://getpocket.com/save',
            {
                url: data.url,
                title: data.title
            }
        );

        Share.showPopup(link, 600, 300);
    },


    showPopup: function (url, w, h) {
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, '', 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    },

    getShareData: function (params) {
        if (params == null) {
            params = {};
        } else {
            params = params;
        }

        if (params.url === undefined) {
            params.url = window.location.href;
        }

        if (params.title === undefined) {
            params.title = Share.getMetaContentByName('title');
        }

        if (params.description === undefined) {
            params.description = Share.getMetaContentByName('description');
        }

        if (params.image === undefined) {
            params.image = Share.getMetaContentByName('image');
        }

        if (params.via === undefined) {
            params.via = Share.getMetaContentByName('app-name');
        }

        if (params.hashtags === undefined) {
            params.hashtags = Share.getMetaContentByName('app-hash-tags');
        }

        return params;
    },

    encodeUrl: function (url, params) {
        var ret = [];
        for (var param in params)
            ret.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]));
        return url + '?' + ret.join('&');
    },

    getMetaContentByName: function (name, content) {
        var content = (content == null) ? 'content' : content;
        var el = document.querySelector("meta[name='" + name + "']");

        if (el === null) {
            return '';
        }

        return el.getAttribute(content);
    }
};
