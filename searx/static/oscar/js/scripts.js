/**
 _                 _       _                  
| |__   ___   ___ | |_ ___| |_ _ __ __ ___  __
| '_ \ / _ \ / _ \| __/ __| __| '__/ _` \ \/ /
| |_) | (_) | (_) | |_\__ | |_| | | (_| |>  < 
|_.__/ \___/ \___/ \__|___/\__|_|  \__,_/_/\_\.js

*/

if(searx.autocompleter) {
    searx.searchResults = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: '/autocompleter?q=%QUERY'
    });
    searx.searchResults.initialize();
}

$(document).ready(function(){
    $('.btn-toggle .btn').click(function() {
        var btnClass = 'btn-' + $(this).data('btn-class');
        var btnLabelDefault = $(this).data('btn-label-default');
        var btnLabelToggled = $(this).data('btn-label-toggled');
        if(btnLabelToggled != '') {
            if($(this).hasClass('btn-default')) {
                
                var html = $(this).html().replace(btnLabelDefault, btnLabelToggled);
            } else {
                var html = $(this).html().replace(btnLabelToggled, btnLabelDefault);
            }
            $(this).html(html);
        }
        $(this).toggleClass(btnClass);
        $(this).toggleClass('btn-default');
    });

    $('.btn-collapse').click(function() {
        var btnTextCollapsed = $(this).data('btn-text-collapsed');
        var btnTextNotCollapsed = $(this).data('btn-text-not-collapsed');
        
        if(btnTextCollapsed != '' && btnTextNotCollapsed != '') {
            if($(this).hasClass('collapsed')) {
                var html = $(this).html().replace(btnTextCollapsed, btnTextNotCollapsed);
            } else {
                var html = $(this).html().replace(btnTextNotCollapsed, btnTextCollapsed);
            }
            $(this).html(html);
        }
    });
    
    $(".select-all-on-click").click(function () {
        $(this).select();
    });
    
    if(searx.autocompleter) {
        $('#q').typeahead(null, {
            name: 'search-results',
            displayKey: function(result) {
                return result;
            },
            source: searx.searchResults.ttAdapter()
        });
    }
});  