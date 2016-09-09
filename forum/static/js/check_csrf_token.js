/**
 * Created by arran on 06/09/16.
 */
var csrftoken = $.cookie('csrftoken')
function csrfSafeMethod(method){
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
    }
});