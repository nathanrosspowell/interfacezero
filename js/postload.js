$(window).bind("load", function() {
    var myJson = "NOOOO";
    $.ajax({
        url: 'yaml/trigger_finger.yaml',
        async: false,
        success: function (data){
            myJson = jsyaml.load(data);
        }
    });
    for(json in myJson){
        for(objs in myJson[json]){
            $("#interfacezero-main").append(objs + " : " + myJson[json][objs]);
        }
    }
});