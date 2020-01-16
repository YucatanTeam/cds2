


const urlParams = new URLSearchParams(window.location.search)
const slug = urlParams.get("slug")
const id = urlParams.get("id")
const lang = urlParams.get("lang")


// fetch header
fetch('http://cdsapply.com:2017/api/collections/get/header?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(header => {
        header = header.entries
        document.getElementById("main_logo").setAttribute("src", "http://cdsapply.com:2017"+header[0].logo.path)
        document.getElementById("main_first_line").appendChild(document.createTextNode(header[0].first_line))
        document.getElementById("main_second_line").appendChild(document.createTextNode(header[0].second_line))
        document.getElementById("main_third_line").appendChild(document.createTextNode(header[0].third_line))
    })

fetch(`http://cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[_id]=${id}`)
    .then(response => response.json())
    .then(posts => {
        posts = posts.entries
        	 $('meta[name=description]').remove();
        	 $('title').remove();
    		 $('head').append(`<meta name="description" content=${posts[0].tags.join()}>`);
        if(lang == "fa"){
    		$('head').append(`<title>موسسه اعزام دانشجو کندو  | ${posts[0].title}</title>`);
        	document.getElementById('content').appendChild(document.createTextNode(posts[0].content))
        }
        if (lang == "en"){
        	$('head').append(`<title>CANDO Study Abroad Agency | ${posts[0].en_title}</title>`);
        	document.getElementById('content').appendChild(document.createTextNode(posts[0].en_content))

        }

        document.getElementById("main_backimg").setAttribute("data-image-src", "http://cdsapply.com:2017"+posts[0].logo.path)
    })

