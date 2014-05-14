//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This is what executes
$(window).bind("load", function() {
    var errors = "";
    playerCharacters.forEach(function(yamlFile){
        $.ajax({
            url: 'yaml/' + yamlFile + '.yaml',
            async: false,
            success: function (data){
                try{
                    addHtmlForYaml(yamlFile,jsyaml.load(data));
                }
                catch(err){
                    if (errors !== ""){
                        errors += '<hr/>';
                    }
                    errors += '<h4>Javascript Error</h4>';
                    errors += '<p>File: yaml/'+ yamlFile +'.yaml</p>';
                    errors += '<p>Error description:'+err.message+'</p>';
                    errors += '<p>Call stack:</p>';
                    errors += "<p>"+err.stack.split(" at ").join("</p><p>")+"</p>";
                }
                
            }
        });
    });
    $('body').scrollspy({offset: 60});
    if (errors == ""){
        $('#interfacezero-warning').hide();
    } else {
        $('#interfacezero-warning').html(errors);
    }
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
