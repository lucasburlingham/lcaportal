$(function () {
    $('iframe').each(function (index, elem) {
        $(elem).attr('onerror', "'srcdoc','<p>You need to be online to view this content.</p>');").attr('onload', "if(navigator.onLine===false) eval(this.getAttribute('onerror'));");
    });
});


var $buoop = {
    required: {
        e: 12,
        f: 79,
        o: 67,
        s: 14,
        c: 82
    },
    style: "corner",
    api: 2021.06
};

function $buo_f() {
    var e = document.createElement("script");
    e.src = "/assets/js/update.min.js";
    document.body.appendChild(e);
};
try {
    document.addEventListener("DOMContentLoaded", $buo_f, false);
} catch (e) {
    window.attachEvent("onload", $buo_f);
}


