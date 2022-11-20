(() => {
    // document.getElementById('root').innerHTML = '';
    if (window.location.host != 'www.instagram.com') {
        return;
    }
    newElement = (tag, cls) => {
        let ele = document.createElement(tag);
        cls && ele.setAttribute('class', cls);
        return ele;
    }
    cloneNode = node => {
        let dup = node.cloneNode();
        for (let c of node.childNodes) {
            dup.appendChild(cloneNode(c));
        }
        return dup;
    }
    parseVideoSrc = content => {
        let ele = document.createElement('div');
        ele.innerHTML = content;
        return ele.getElementsByTagName('baseurl')[0].innerText;
    }
    parseEdge = edge => {
        let cell = {};
        cell.is_video = edge.is_video;
        cell.display_url = edge.display_url;
        cell.thumbnail_src = edge.thumbnail_src;
        if (!(edge.thumbnail_resources) || !(edge.display_resources) || !(edge.thumbnail_src)) {
            console.log(edge);
        }
        // cell.srcSet = edge.thumbnail_resources.map(e => e.src + " " + e.config_width + "w").join(',');
        cell.display_resource = edge.display_resources[edge.display_resources.length - 1].src;
        if (cell.is_video) {
            cell.video_url = edge.video_url;
        }
        return cell;
    }
    parseQueryResponse = d => {
        let reuslt = { success: false };
        if (!d || !(d.data) || !(d.data.user) || !(d.data.user.edge_owner_to_timeline_media)) {
            return reuslt;
        }
        let m = d.data.user.edge_owner_to_timeline_media;
        reuslt.success = true;
        reuslt.count = m.count;
        reuslt.end_cursor = m.page_info.end_cursor;
        reuslt.has_next_page = m.page_info.has_next_page;
        reuslt.edges = [];
        m.edges.forEach(edge => {
            reuslt.edges.push(parseEdge(edge.node));
            if (edge.node.edge_sidecar_to_children) {
                for (edge_child of edge.node.edge_sidecar_to_children.edges) {
                    reuslt.edges.push(parseEdge(edge_child.node));
                }
            }
        });
        return reuslt;
    }
    displayData = result => {
        if (!result.success) {
            return;
        }
        for (let cell of result.edges) {
            let last_row = window.instagramCell.gallery.lastChild;
            if (!last_row || last_row.childNodes.length == 3) {
                last_row = cloneNode(window.instagramCell.row_template);
                window.instagramCell.gallery.appendChild(last_row);
            }
            if (cell.is_video) {
                let cell_div = cloneNode(window.instagramCell.cell_template_video);
                cell_div.setAttribute('poster', cell.thumbnail_src || cell.display_resource);
                cell_div.setAttribute('loop', true);
                cell_div.appendChild(newElement('source'));
                cell_div.firstChild.firstChild.firstChild.setAttribute('src', cell.video_url);
                last_row.appendChild(cell_div);
            } else {
                let cell_div = cloneNode(window.instagramCell.cell_template_img);
                cell_div.firstChild.firstChild.firstChild.setAttribute('src', cell.thumbnail_src || cell.display_resource);
                cell_div.firstChild.firstChild.firstChild.setAttribute('style', 'height: auto;');
                last_row.appendChild(cell_div);
            }
        }
    }
    displayDataInSlide = result => {

        if (!result.success) {
            return;
        }
        for (let cell of result.edges) {
            let cell_div = newElement('div', 'slide');
            let index_div = newElement('div', 'numbertext');
            index_div.innerHTML = (window.instagramCell.slides.length + 1) + "/" + result.count;
            cell_div.appendChild(index_div);
            if (cell.is_video) {
                let v = newElement('video');
                v.loop = true;
                v.poster = cell.display_resource;
                let vs = newElement('source');
                vs.src = cell.video_url;
                v.appendChild(vs);
                cell_div.appendChild(v);
            } else {
                let i = newElement('img');
                i.src = cell.display_resource;
                cell_div.appendChild(i);
            }
            window.instagramCell.slides.push(cell_div);
            window.instagramCell.gallery.firstChild.appendChild(cell_div);
        }
        window.instagramCell.slides[window.instagramCell.current - 1].style.display = "block";
    }
    loadMore = () => {
        if (!window.instagramCell.has_next_page || window.instagramCell.load_status == 'loading') {
            return;
        }
        window.instagramCell.load_status = 'loading';
        let d = { 'id': window.instagramCell.target_id, 'first': window.instagramCell.page_size };
        if (window.instagramCell.end_cursor && window.instagramCell.has_next_page) {
            d.after = window.instagramCell.end_cursor;
        }
        let url = 'https://www.instagram.com/graphql/query/?query_hash=' + window.instagramCell.query_hash;
        url += '&variables=' + encodeURIComponent(JSON.stringify(d));
        fetch(url).then(r => r.json()).then(data => {
            let result = parseQueryResponse(data);
            window.instagramCell.end_cursor = result.end_cursor;
            window.instagramCell.has_next_page = result.has_next_page;
            window.instagramCell.count = result.count;
            // displayData(result);
            displayDataInSlide(result);
            window.instagramCell.load_status = 'loaded';
            if (!document.body.hasChildNodes()) {
                document.body.appendChild(window.instagramCell.gallery);
            }
            window.instagramCell.gallery.style.display = 'block';
            // document.body.style.overflow = 'scroll';
            // window.instagramCell.gallery.setAttribute('style', 'overflow: "scroll";');
        });
    }
    showSlide = delta => {
        let i = window.instagramCell.current + delta;
        window.instagramCell.slides[window.instagramCell.current - 1].style.display = "none";
        if (i > window.instagramCell.slides.length) {
            i = 1;
        } else if (i < 1) {
            i = window.instagramCell.slides.length;
        }
        window.instagramCell.slides[i - 1].style.display = "block";
        window.instagramCell.current = i;
        if (i + 2 >= window.instagramCell.slides.length) {
            loadMore();
        }
    }
    initAfterLoaded = edgeRequest => {
        // let example = 'https://www.instagram.com/graphql/query/?query_hash=69cba40317214236af40e7efa697781d&variables=%7B%22id%22%3A%22364669222%22%2C%22first%22%3A12%2C%22after%22%3A%22QVFEZTV2R3diZUFhMHUxbmYtTzV1alM5NG5GUS1ZZmZrblhBaUQ2RVV4SWZTcllWS1VTekRvT2FIS0prdzFnTUs0NWZUU0I5bnpEUWFwTFhUUGJucVRjSQ%3D%3D%22%7D';
        let query_hash = edgeRequest.name.substring(52, 84);
        let variables = JSON.parse(decodeURIComponent(edgeRequest.name.substring(95)));
        let target_id = variables['id'];
        // console.log(query_hash, target_id);
        // let mainDocs = document.getElementsByTagName('article');
        // if (!mainDocs) {
        //     return;
        // }
        // let gallery = mainDocs[0].firstChild.firstChild;
        // let gallery_row = gallery.firstChild;
        // let row_class = gallery_row.getAttribute('class');
        // let gallery_cell = gallery_row.firstChild;
        // let cell_class = gallery_cell.getAttribute('class');
        // let cell_image_div = gallery_cell.firstChild.firstChild;
        // let cell_image_div_class = cell_image_div.getAttribute('class');
        // let cell_image_div_2 = cell_image_div.firstChild;
        // let cell_image_div_2_class = cell_image_div_2.getAttribute('class');
        // let cell_image = cell_image_div_2.firstChild;
        // let cell_image_class = cell_image.getAttribute('class');
        // let row_template = newElement('div', row_class);
        // let cell_template_img = newElement('div', cell_class);
        // cell_template_img.appendChild(newElement('div', cell_image_div_class));
        // cell_template_img.firstChild.appendChild(newElement('div', cell_image_div_2_class));
        // let cell_template_video = cloneNode(cell_template_img);
        // // console.log(cell_template_img, cell_template_video);
        // cell_template_img.firstChild.firstChild.appendChild(newElement('img', cell_image_class));
        // cell_template_video.firstChild.firstChild.appendChild(newElement('video', cell_image_class));
        // window.instagramCell = {
        //     "query_hash": query_hash,
        //     "target_id": target_id,
        //     "page_size": 12,
        //     "end_cursor": null,
        //     "row_template": row_template,
        //     "cell_template_img": cell_template_img,
        //     "cell_template_video": cell_template_video,
        //     "load_status": 'loading',
        //     "gallery": gallery
        // };
        // gallery.innerHTML = '';
        // document.body.style.overflow = 'hidden';
        // document.body.innerHTML='';
        // let gallery_parent = mainDocs[0].firstChild.cloneNode();
        // mainDocs[0].removeChild(mainDocs[0].firstChild);
        // mainDocs[0].appendChild(gallery_parent);
        // gallery_parent.appendChild(gallery);
        // for (let e of document.getElementsByTagName('script')) { e.parentNode.removeChild(e); }
        // for (let e of document.getElementsByTagName('link')) { e.href && e.href.indexOf('.js') > 0 && e.parentNode.removeChild(e); }
        let ss = newElement('style');
        ss.innerText = '\
            img{height:auto;width:100%;max-width:100vw;max-height:100vh}\
            video{height:auto;width:100%;max-width:100vw;max-height:100vh}\
            .modal {\
                display: none; /* Hidden by default */\
                position: fixed; /* Stay in place */\
                z-index: 1; /* Sit on top */\
                left: 0;\
                top: 0;\
                width: 100%; /* Full width */\
                height: 100%; /* Full height */\
                overflow: auto; /* Enable scroll if needed */\
                background-color: rgb(0,0,0); /* Fallback color */\
            }\
            .modal-content {\
                position: absolute;\
            }\
            /* Slideshow container */\
            .slideshow-container {\
                position: relative;\
                margin: auto;\
            }\
            .slide { display: none;}\
            /* Next & previous buttons */\
            .prev, .next {\
                cursor: pointer;\
                position: absolute;\
                top: 20%;\
                width: auto;\
                padding: 16px;\
                color: white;\
                font-weight: bold;\
                font-size: 18px;\
                transition: 0.6s ease;\
                border-radius: 0 3px 3px 0;\
                user-select: none;\
            }\
            /* Position the "next button" to the right */\
            .next {\
                right: 0;\
                border-radius: 3px 0 0 3px;\
            }\
            /* On hover, add a black background color with a little bit see-through */\
            .prev:hover, .next:hover {\
                background-color: rgba(0,0,0,0.8);\
            }\
            /* Caption text */\
            .text {\
                color: #f2f2f2;\
                font-size: 15px;\
                padding: 8px 12px;\
                position: absolute;\
                bottom: 8px;\
                width: 100%;\
                text-align: center;\
            }\
            /* Number text (1/3 etc) */\
            .numbertext {\
                color: #f2f2f2;\
                font-size: 12px;\
                padding: 8px 12px;\
                position: absolute;\
                top: 0;\
            }\
            /* Fading animation */\
            .fade {\
                animation-name: fade;\
                animation-duration: 1.5s;\
            }\
            @keyframes fade {\
                from {opacity: .4}\
                to {opacity: 1}\
            }\
            /* On smaller screens, decrease text size */\
            @media only screen and (max-width: 300px) {\
                .prev, .next,.text {font-size: 11px}\
            }\
        ';
        document.head.appendChild(ss);
        let gallery = newElement('div', 'modal');
        let gallery_content = newElement('div', 'modal-content');
        gallery.appendChild(gallery_content);
        let prev = newElement('a', 'prev');
        prev.innerHTML = '❮';
        prev.onclick = () => showSlide(-1);
        let next = newElement('a', 'next');
        next.innerHTML = '❯';
        next.onclick = () => showSlide(1);
        gallery.appendChild(prev);
        gallery.appendChild(next);
        document.body.appendChild(gallery);

        window.instagramCell = {
            "query_hash": query_hash,
            "target_id": target_id,
            "page_size": 12,
            "end_cursor": null,
            "has_next_page": true,
            "gallery": gallery,
            "count": 0,
            "load_status": null,
            "slides": [],
            "current": 1
        };
        loadMore();
    }
    dataLoaded = () => {
        let url = 'https://www.instagram.com/graphql/query/?query_hash=';
        let edgesRequests = performance.getEntries()
            .filter(e => e.name.indexOf(url) >= 0 && e.name.indexOf('after') > 0);
        if (!edgesRequests || edgesRequests.length < 1) {
            setTimeout(dataLoaded, 1000);
        } else {
            initAfterLoaded(edgesRequests[edgesRequests.length - 1]);
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
        }
    }

    dataLoaded();

})();
