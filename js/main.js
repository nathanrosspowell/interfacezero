//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This is what executes
$(window).bind("load", function() {
    var errors = "";
    // Loop all of the file names, found in yaml_lists.js
    playerCharacters.forEach(function(yamlFile){
        $.ajax({
            url: 'yaml/' + yamlFile + '.yaml',
            async: false,
            success: function (data){
                // Try catch for each playrs yaml
                try{
                    addHtmlForYaml(yamlFile,jsyaml.load(data));
                }
                catch(err){
                    // If it's not the first error, add a horizontal rule
                    if (errors !== ""){
                        errors += '<hr/>';
                    }
                    // Write out the error and callstack
                    errors += '<h4>Javascript Error</h4>';
                    errors += '<p>File: yaml/'+ yamlFile +'.yaml</p>';
                    errors += '<p>Error description:'+err.message+'</p>';
                    errors += '<p>Call stack:</p>';
                    errors += "<p>"+err.stack.split(" at ").join("</p><p>")+"</p>";
                }
                
            }
        });
    });
    // Offset the scrolling to accomadate the fixed menu bar.
    $('body').scrollspy({offset: 70});
    // If we no errors, hide the warning box - this say "Javascript Dependency"
    if (errors == ""){
        $('#interfacezero-warning').hide();
    } 
    // If we do have errors, write them to the warning box
    else {
        $('#interfacezero-warning').html(errors);
    }
    // look for an anchor and scroll to it
    // eg 'interfacezero/#trigger_finger-skills'
    var href = window.location.hash.substring(1);
    $('html, body').animate({
        scrollTop: $( $.attr(this, href) ).offset().top
    }, 500);
    // Register hack to stop the non-mobile view closing the drop downs.
    // http://stackoverflow.com/a/20644950/66003
    // http://jsfiddle.net/yq7c4/8/
    $('.navbar-collapse a').click(function (e) {
    if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length){
        $('.navbar-collapse').collapse('toggle');
    }
});
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



