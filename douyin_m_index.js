(() => {

    for (let s of document.getElementsByTagName('script')) {
        // console.log(s.src);
        if (s.src.indexOf('obj/static/growth/douyin_ug/') > 0) {
            let sp = s.parentNode;
            sp.removeChild(s);
        }
    }
    let load_script = (js) => {
        let r = document.createElement('script');
        let version = 'v0.1.5-douyin';
        r.setAttribute('src', 'https://cdn.jsdelivr.net/gh/KunsLand/public-static@' + version + '/douyin/' + js);
        (document.head || document.documentElement).appendChild(r);

    }

    let all_scripts = ['879.85a10c42.js', '65.23d042be.js', '123.ce013409.js', '34.8471e453.js', '475.899120c1.js', '72.9e2bed01.js', '872.e50764bd.js', 'index.js'];

    for (let s of all_scripts) {
        load_script(s);
    }

    setInterval(() => {
        for (let v of document.getElementsByTagName('video')) {
            if (v.getAttribute('processed')) {
                continue;
            }
            v.addEventListener('click', () => {
                if (v.requestFullscreen) {
                    v.requestFullscreen();
                } else if (v.mozRequestFullScreen) {
                    v.mozRequestFullScreen();
                } else if (v.webkitRequestFullscreen) {
                    v.webkitRequestFullscreen();
                } else if (v.msRequestFullscreen) {
                    v.msRequestFullscreen();
                }
            });
            for (let vd of ['fullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange', 'webkitfullscreenchange']) {
                v.addEventListener(
                    vd, event => {
                        if (!document.fullscreenElement) {
                            v.pause();
                        } else {
                            v.play();
                        }
                    },
                    false
                );
            }
            v.setAttribute('processed', true);
        }
    }, 100);
})();