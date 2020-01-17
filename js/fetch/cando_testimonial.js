// fetch header
fetch('http://cdsapply.com:2017/api/collections/get/header?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(header => {
        header = header.entries
        document.getElementById("main_logo").setAttribute("src", "http://cdsapply.com:2017"+header[0].logo.path)
        document.getElementById("main_backimg").setAttribute("data-image-src", "http://cdsapply.com:2017"+header[0].background_img.path)
        document.getElementById("main_first_line").appendChild(document.createTextNode(header[0].first_line))
        document.getElementById("main_second_line").appendChild(document.createTextNode(header[0].second_line))
        document.getElementById("main_third_line").appendChild(document.createTextNode(header[0].third_line))
    })


// fetch testimonial
fetch('http://cdsapply.com:2017/api/collections/get/testimonial?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(testimonial => {
        testimonial = testimonial.entries
        console.log(testimonial)
        var div = document.createElement("div")
        div.appendChild(document.createTextNode(testimonial[0].content))
        div.setAttribute("style", "font-size:18px")
        div.setAttribute("data-aos", "fade-left")
        document.getElementById("candocertificates").appendChild(div)
    })

// fetch seo
fetch('http://cdsapply.com:2017/api/collections/get/seo?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[page]=cando-testimonial')
    .then(response => response.json())
    .then(seo => {
        seo = seo.entries
        $('meta[name=description]').remove();
        $('head').append(`<meta name="description" content=${seo[0].tags.join()}>`);
        for(i = 0; i < seo[0].tags.length; i++){
            $('head').append(`<meta name="description" content=${seo[0].tags[i]}>`);
        }
    })