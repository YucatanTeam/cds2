// fetch header
fetch('http://cdsapply.com:2017/api/collections/get/header?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(header => {
        header = header.entries
        document.getElementById("main_logo").setAttribute("src", "http://cdsapply.com:2017"+headers[0].logo.path)
        document.getElementById("main_backimg").setAttribute("data-image-src", "http://cdsapply.com:2017"+headers[0].background_img.path)
        document.getElementById("main_first_line").appendChild(document.createTextNode(headers[0].first_line))
        document.getElementById("main_second_line").appendChild(document.createTextNode(headers[0].second_line))
        document.getElementById("main_third_line").appendChild(document.createTextNode(headers[0].third_line))
    })

fetch('http://cdsapply.com:2017/api/collections/get/contactUS?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(contactUS => {
        contactUS = contactUS.entries
        document.getElementById("contactus").appendChild(document.createTextNode(contactus[0].content))
    })