//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This is what executes
$(window).bind("load", function() {
    try{
        playerCharacters.forEach(function(errorlololololol){
            $.ajax({
                url: 'yaml/' + yamlFile + '.yaml',
                async: false,
                success: function (data){
                    addHtmlForYaml(yamlFile,jsyaml.load(data));
                }
            });
        });
        $('body').scrollspy({offset: 60});
        $('#interfacezero-warning').hide();
    }
    catch(err){
        var x = "";
        x += '<h4>Javascript Error</h4>';
        x += '<p>Error description:</p>';
        x += '<p>' + err.message + '</p>';
        $('#interfacezero-warning').html(x);
    }
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
