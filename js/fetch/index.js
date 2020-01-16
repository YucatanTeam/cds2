
// fetch posts
fetch('http://cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6')
      .then(response => response.json())
      .then(posts => {
        posts = posts.entries
        var postsdiv = document.getElementById("posts")
        for(i = 0; i < posts.length; i++){
            if(posts[i].newsletter){
                var divRow = document.createElement("div")
                divRow.classList.add("row")
                var divColLg10 = document.createElement("div")
                divColLg10.classList.add("col-lg-10")
                var divTextRight = document.createElement("div")
                divTextRight.classList.add("text-right", "mt-1")
                postsdiv.appendChild(divTextRight)
                divTextRight.appendChild(divRow)
                var divColLg2 = document.createElement("div")
                // divColLg2.setAttribute("data-aos", "fade-up")
                divColLg2.classList.add("col-lg-2")                
                var h4 = document.createElement("h4")
                divColLg10.appendChild(h4)
                h4.setAttribute("data-aos", "fade-up")
                var aTitle = document.createElement("a")
                h4.appendChild(aTitle)
                var link = document.createTextNode(posts[i].title)
                aTitle.appendChild(link)
                aTitle.href = "http://cdsapply.com/content.html?slug="+posts[i].slug+"&id="+posts[i]._id+"&lang=fa"
                var p = document.createElement("p")
                divColLg10.appendChild(p)
                p.setAttribute("data-aos", "fade-up")
                var content = document.createTextNode('... '+posts[i].content.slice(0,80))
                p.appendChild(content)
                divRow.appendChild(divColLg10)
                divRow.appendChild(divColLg2)
                var aImg = document.createElement("a")
                divColLg2.appendChild(aImg)
                aImg.href = "http://cdsapply.com/content.html?slug="+posts[i].slug+"&id="+posts[i]._id+"&lang=fa"
                var img = document.createElement("img")
                img.setAttribute("style", "width: 100%")
                img.setAttribute("src", "http://cdsapply.com:2017"+posts[i].logo.path)
                aImg.appendChild(img)
            }

        }
      })
      .catch(error => {
            // loading gif ...
       })



// fetch article list
fetch('http://cdsapply.com:2017/api/collections/get/bestof?token=account-3eb37339b9641b90e3f0b73b7cedf6')
      .then(response => response.json())
      .then(articles => {
        articles = articles.entries
        var articlesUl = document.getElementById("articles")
        for(i = 0; i < articles.length; i++){
            var br = document.createElement("br")
            var li = document.createElement("li")
            var articleLink = document.createElement("a")
            articleLink.classList.add("btn", "btn-outline-dark", "mt-2", "mr-4")
            articleLink.setAttribute("data-aos", "fade-right")
            articleLink.setAttribute("data-aos-duration", "500")
            articleLink.href = articles[i].link
            var title = document.createTextNode(articles[i].title)
            articleLink.appendChild(title)
            articlesUl.appendChild(articleLink)
            articlesUl.appendChild(br)
        }
      })
      .catch(error => {
            // loading gif ...
       })

// fetch cando services
fetch('http://cdsapply.com:2017/api/collections/get/services?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(services => {
        services = services.entries
        document.getElementById("cs_en_title").appendChild(document.createTextNode(services[0].left_text_title))
        document.getElementById("cs_title").appendChild(document.createTextNode(services[0].title))
        document.getElementById("cs_body_text").appendChild(document.createTextNode(services[0].body_text))
        // document.getElementById("cs_btn_text").appendChild(document.createTextNode(services[0].btn_text))
        var cs_backimg_1 = document.createElement("img")
        var cs_backimg_2 = document.createElement("img")
        cs_backimg_1.setAttribute("src", "http://cdsapply.com:2017"+services[0].background_img_1.path)
        cs_backimg_2.setAttribute("src", "http://cdsapply.com:2017"+services[0].background_img_2.path)
        cs_backimg_1.setAttribute("alt", "https://unsplash.com/@fabmag")
        cs_backimg_2.setAttribute("alt", "https://unsplash.com/@fabmag")
        document.getElementById("cs_backimg1").appendChild(cs_backimg_1)
        document.getElementById("cs_backimg2").appendChild(cs_backimg_2)

    })
    .catch(error => {
        // loading gif ...
    })



// fetch mainpagemiddletext
fetch('http://cdsapply.com:2017/api/collections/get/mainpagemiddledesc?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(descriptions => {
        descriptions = descriptions.entries
        document.getElementById("main_description").appendChild(document.createTextNode(descriptions[0].mainDescription))
        document.getElementById("right_description").appendChild(document.createTextNode(descriptions[0].rightDescription))
        var cds_logo = document.createElement("img")
        document.getElementById("cds_logo").setAttribute("src", "http://cdsapply.com:2017"+descriptions[0].logo.path)
        document.getElementById("middle_page_back_img").setAttribute("style", "background-image: url(http://cdsapply.com:2017"+descriptions[0].background_img.url+")!important;")

    })
    .catch(error => {
        // loading gif ...
    })


// fetch guidances
fetch('http://cdsapply.com:2017/api/collections/get/guidance?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(guidances => {
        guidances = guidances.entries
        document.getElementById("g_en_title").appendChild(document.createTextNode(guidances[0].left_text_title))
        document.getElementById("g_title").appendChild(document.createTextNode(guidances[0].title))
        document.getElementById("g_body_text").appendChild(document.createTextNode(guidances[0].body_text))
        document.getElementById("g_btn_text").appendChild(document.createTextNode(guidances[0].btn_text))
        document.getElementById("g_backimg").setAttribute("src", "http://cdsapply.com:2017"+guidances[0].background_img.path)
        document.getElementById("g_backimg_").style.backgroundImage = "url("+"http://cdsapply.com:2017"+guidances[0].background_img.path+")";

    })
    .catch(error => {
        // loading gif
    })



// fetch footers
fetch('http://cdsapply.com:2017/api/collections/get/footer?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(footers => {
        footers = footers.entries
document.getElementById("footer_cds_name").appendChild(document.createTextNode(footers[0].cds_name))
document.getElementById("footer_middle_title").appendChild(document.createTextNode(footers[0].middle_title))
document.getElementById("contact_btn").appendChild(document.createTextNode(footers[0].contact_btn))
document.getElementById("footer_middle_text").appendChild(document.createTextNode(footers[0].middle_text))
document.getElementById("footer_right_text").appendChild(document.createTextNode(footers[0].right_text))
document.getElementById("footer_backimg").setAttribute("data-image-src", "http://cdsapply.com:2017"+footers[0].background_img.path)
    })
    .catch(error => {
        // loading gif
    })


// fetch social media
fetch('http://cdsapply.com:2017/api/collections/get/socialmedias?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(socialmedias => {
        socialmedias = socialmedias.entries
        var socialmedia = document.getElementById("social_media")
        for(i = 0; i < socialmedias.length; i++){
            var link = document.createElement("a")
            link.href = socialmedias[i].link
            link.setAttribute("style", "margin-left: 3px;")
            var socialmediaIMG = document.createElement("img")
            socialmediaIMG.setAttribute("src", "http://cdsapply.com:2017"+socialmedias[i].logo.path)
            link.appendChild(socialmediaIMG)
            socialmedia.appendChild(link)

        }
    })


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

// fetch yellow headers
fetch('http://cdsapply.com:2017/api/collections/get/yellowheaders?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(yellowheaders => {
        yellowheaders = yellowheaders.entries
        document.getElementById("yh_immigration_en").appendChild(document.createTextNode(yellowheaders[0].en_name))
        document.getElementById("yh_immigration").appendChild(document.createTextNode(yellowheaders[0].name))
        document.getElementById("yh_immigration_back_img").setAttribute("data-image-src", "http://cdsapply.com:2017"+yellowheaders[0].background_img.path)

        document.getElementById("yh_lc_en").appendChild(document.createTextNode(yellowheaders[1].en_name))
        document.getElementById("yh_lc").appendChild(document.createTextNode(yellowheaders[1].name))
        document.getElementById("yh_lc_back_img").setAttribute("data-image-src", "http://cdsapply.com:2017"+yellowheaders[1].background_img.path)
    })

// fetch countries
fetch('http://cdsapply.com:2017/api/collections/get/country?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(countries => {
        countries = countries.entries
        var countries_first_card = document.getElementById("countries_first_card")
        var countries_second_card = document.getElementById("countries_second_card")
        var countries_third_card = document.getElementById("countries_third_card")
        var main_countries = {}

        for(i = 0; i < countries.length; i++){
            
                var fdiv = document.createElement("div")
                fdiv.classList.add("carousel-item")
                var clink = document.createElement("a")
                var cimg = document.createElement("img")
                var secdiv = document.createElement("div")
                clink.href = "http://cdsapply.com/posts.html?slug="+countries[i].slug+"&id="+countries[i]._id+"&lang=fa"+"&collection=country"
                cimg.setAttribute("style", "width: 100%;padding: 5px")
                cimg.classList.add("d-block", "img-fluid", "rounded")                        
                cimg.setAttribute("src", "http://cdsapply.com:2017"+countries[i].logo.path)
                secdiv.classList.add("card-title", "text-center", "saheltitle")
                secdiv.appendChild(document.createTextNode(countries[i].name))
                clink.appendChild(cimg)
                clink.appendChild(secdiv)
                fdiv.appendChild(clink)

            if(countries[i].main && Object.keys(main_countries).length <=3 ) main_countries[countries[i]._id] = countries[i]
            if(countries[i].first_card_other_country) countries_first_card.appendChild(fdiv)
            if(countries[i].second_card_other_country) countries_second_card.appendChild(fdiv)
            if(countries[i].third_card_other_country) countries_third_card.appendChild(fdiv)
        }


        if ( $('#countries_first_card').children().length <= 0 ) {
            $('#first_arroc_left').hide()
            $('#first_arroc_right').hide()
        } else countries_first_card.firstChild.nextSibling.nextElementSibling.classList.add("active")

        if ( $('#countries_second_card').children().length <= 0 ) {
            $('#second_arroc_left').hide()
            $('#second_arroc_right').hide()
        } else countries_second_card.firstChild.nextSibling.nextElementSibling.classList.add("active")

        if ( $('#countries_third_card').children().length <= 0 ) {
            $('#third_arroc_left').hide()
            $('#third_arroc_right').hide()
        } else countries_third_card.firstChild.nextSibling.nextElementSibling.classList.add("active")


        // for (const property in main_countries) {
        //       console.log(`${property}: ${main_countries[property]._id}`);
        //     }

        document.getElementById("main_country_n1_back_img").setAttribute("src", "http://cdsapply.com:2017"+main_countries["5e204ba831643468980003c8"].logo.path)
        document.getElementById("main_country_n1_en_name").appendChild(document.createTextNode(main_countries["5e204ba831643468980003c8"].en_name))
        document.getElementById("main_country_n1_name").appendChild(document.createTextNode(main_countries["5e204ba831643468980003c8"].name))
        document.getElementById("main_country_n1_slug").href = "http://cdsapply.com/posts.html?slug="+main_countries["5e204ba831643468980003c8"].slug+"&id="+main_countries["5e204ba831643468980003c8"]._id+"&lang=fa"+"&collection=country"
        document.getElementById("main_country_n1_en_slug").href = "http://cdsapply.com/posts.html?slug="+main_countries["5e204ba831643468980003c8"].en_slug+"&id="+main_countries["5e204ba831643468980003c8"]._id+"&lang=en"+"&collection=country"

        document.getElementById("main_country_n2_back_img").setAttribute("src", "http://cdsapply.com:2017"+main_countries["5e204d5b31643403fb000224"].logo.path)
        document.getElementById("main_country_n2_en_name").appendChild(document.createTextNode(main_countries["5e204d5b31643403fb000224"].en_name))
        document.getElementById("main_country_n2_name").appendChild(document.createTextNode(main_countries["5e204d5b31643403fb000224"].name))
        document.getElementById("main_country_n2_slug").href = "http://cdsapply.com/posts.html?slug="+main_countries["5e204d5b31643403fb000224"].slug+"&id="+main_countries["5e204d5b31643403fb000224"]._id+"&lang=fa"+"&collection=country"
        document.getElementById("main_country_n2_en_slug").href = "http://cdsapply.com/posts.html?slug="+main_countries["5e204d5b31643403fb000224"].en_slug+"&id="+main_countries["5e204d5b31643403fb000224"]._id+"&lang=en"+"&collection=country"

        document.getElementById("main_country_n3_back_img").setAttribute("src", "http://cdsapply.com:2017/"+main_countries["5e204df931643403f60000d2"].logo.path)
        document.getElementById("main_country_n3_en_name").appendChild(document.createTextNode(main_countries["5e204df931643403f60000d2"].en_name))
        document.getElementById("main_country_n3_name").appendChild(document.createTextNode(main_countries["5e204df931643403f60000d2"].name))
        document.getElementById("main_country_n3_slug").href = "http://cdsapply.com/posts.html?slug="+main_countries["5e204df931643403f60000d2"].slug+"&id="+main_countries["5e204df931643403f60000d2"]._id+"&lang=fa"+"&collection=country"
        document.getElementById("main_country_n3_en_slug").href = "http://cdsapply.com/posts.html?slug="+main_countries["5e204df931643403f60000d2"].en_slug+"&id="+main_countries["5e204df931643403f60000d2"]._id+"&lang=en"+"&collection=country"

    })


    // fetch language courses
    fetch('http://cdsapply.com:2017/api/collections/get/languagecourses?token=account-3eb37339b9641b90e3f0b73b7cedf6')
        .then(response => response.json())
        .then(languagecourses => {
            languagecourses = languagecourses.entries
            var first_card_language_courses = document.getElementById("first_card_language_courses")
            var second_card_language_courses = document.getElementById("second_card_language_courses")
            var third_card_language_courses = document.getElementById("third_card_language_courses")
            var fourth_card_language_courses = document.getElementById("fourth_card_language_courses")

            for(i = 0; i < languagecourses.length; i++){

                var fdiv = document.createElement("div")
                fdiv.classList.add("carousel-item", "pt-4")
                
                var lglink = document.createElement("a")
                lglink.href = "http://cdsapply.com/posts.html?slug="+languagecourses[i].slug+"&id="+languagecourses[i]._id+"&lang=fa"+"&collection=languagecourses"
                fdiv.appendChild(lglink)

                var secdiv = document.createElement("div")
                secdiv.classList.add("blog_post")
                secdiv.setAttribute("data-aos", "fade-up")
                secdiv.setAttribute("data-aos-anchor-placement", "bottom-bottom")
                var thidiv = document.createElement("div")
                thidiv.classList.add("blog_post_image_container")
                secdiv.appendChild(thidiv)
                lglink.appendChild(secdiv)

                var fourdiv = document.createElement("div")
                fourdiv.classList.add("blog_post_image")
                var lgimg = document.createElement("img")
                lgimg.setAttribute("src", "http://cdsapply.com:2017"+languagecourses[i].logo.path)
                fourdiv.appendChild(lgimg)
                thidiv.appendChild(fourdiv)

                var fifthdiv = document.createElement("div")
                fifthdiv.classList.add("blog_post_date")
                var lglinkencontent = document.createElement("a")
                lglinkencontent.href = "http://cdsapply.com/posts.html?slug="+languagecourses[i].en_slug+"&id="+languagecourses[i]._id+"&lang=en"+"&collection=languagecourses"
                lglinkencontent.appendChild(document.createTextNode(languagecourses[i].en_name))
                fifthdiv.appendChild(lglinkencontent)
                thidiv.appendChild(fifthdiv)

                var sixdiv = document.createElement("div")
                sixdiv.classList.add("blog_post_content")
                var sevendiv = document.createElement("div")
                sevendiv.classList.add("blog_post_title", "text-center")
                var lglinkcontent = document.createElement("a")
                lglinkcontent.href = "http://cdsapply.com/posts.html?slug="+languagecourses[i].slug+"&id="+languagecourses[i]._id
                lglinkcontent.setAttribute("style", "font-size: 25px")
                lglinkcontent.appendChild(document.createTextNode(languagecourses[i].name))
                sevendiv.appendChild(lglinkcontent)
                sixdiv.appendChild(sevendiv)
                secdiv.appendChild(sixdiv)
                fdiv.appendChild(secdiv)


            if(languagecourses[i].first_card_language_courses) first_card_language_courses.appendChild(fdiv)
            if(languagecourses[i].second_card_language_courses) second_card_language_courses.appendChild(fdiv)
            if(languagecourses[i].third_card_language_courses) third_card_language_courses.appendChild(fdiv)
            if(languagecourses[i].fourth_card_language_courses) fourth_card_language_courses.appendChild(fdiv)
            

            }

        if ( $('#third_card_language_courses').children().length <= 0 ) {
            $('#third_arrlg_left').hide()
            $('#third_arrlg_right').hide()
        } else third_card_language_courses.firstChild.nextSibling.nextElementSibling.classList.add("active")

        if ( $('#fourth_card_language_courses').children().length <= 0 ) {
            $('#fourth_arrlg_left').hide()
            $('#fourth_arrlg_right').hide()
        } else fourth_card_language_courses.firstChild.nextSibling.nextElementSibling.classList.add("active")

        if ( $('#second_card_language_courses').children().length <= 0 ) {
            $('#second_arrlg_left').hide()
            $('#second_arrlg_right').hide()
        } else second_card_language_courses.firstChild.nextSibling.nextElementSibling.classList.add("active")             
        

        if ( $('#first_card_language_courses').children().length <= 0 ) {
            $('#first_arrlg_left').hide()
            $('#first_arrlg_right').hide()
        } else first_card_language_courses.firstChild.nextSibling.nextElementSibling.classList.add("active")
        })
    
