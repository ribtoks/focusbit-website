function isLinux() {
    return navigator.platform.indexOf('Linux x86_64') > -1
}

function isWindows() {
    return navigator.platform.indexOf('Win') > -1
}

function isMac() {
    return navigator.platform.indexOf('Mac') > -1
}

var isLinux = isLinux();
var isWin = isWindows();
var isMac = isMac();

if (isLinux) {
    var fileLink = "./download/linux.zip"
} else if (isWin) {
    var fileLink = "./download/windows.zip"
} else if (isMac) {
    var fileLink = "./download/mac.zip"
} else {
    var fileLink = "./download/windows.zip"
}


$(document).ready(function($) {
    $('#tryFree').append('href', fileLink)
        .attr('download', fileLink);
});

jQuery(document).ready(function() {
    var downloadButton = jQuery('.downloadFree');

    downloadButton.each(function(index) {
        jQuery(this).attr('href', fileLink);
    });
});