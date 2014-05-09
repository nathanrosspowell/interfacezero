//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tableForJson( myJ ) {
    var x = "";
    x += '<div class="panel panel-default">';
    x += '  <div class="panel-heading">';
    x += '    <h3 class="panel-title"><span class="glyphicon glyphicon-user"></span>'+myJ["id"]["name"]+'</h3>';
    x += '  </div>'; // Close panel-heading
    x += '  <div class="panel-body">';
    
    
    x += '<table class="table table-bordered table-striped">';
    x += '  <colgroup><col class="col-xs-1"><col class="col-xs-7"></colgroup>';
    x += '  <thead><tr>';
    x += '    <th>XP</th>';
    x += '    <th>Race</th>';
    x += '    <th>Occupation</th>';
    x += '    <th>Streetcred</th>';
    x += '    <th>Wonded</th>';
    x += '    <th>Exhausted</th>';
    x += '    <th>Money</th>';
    x += '  </tr></thead>';
    x += '  <tbody>';
    x += '    <tr><td>' + myJ["stats"]["xp"] + '</td></tr>';
    x += '    <tr><td>' + myJ["id"]["race"] + '</td></tr>';
    x += '    <tr><td>' + myJ["id"]["occupation"] + '</td></tr>';
    x += '    <tr><td>' + myJ["stats"]["streetcreed"]["current"] + '/' + myJ["stats"]["streetcreed"]["max"] +' </td></tr>';
    x += '    <tr><td>' + myJ["stats"]["wonded"] + '</td></tr>';
    x += '    <tr><td>' + myJ["stats"]["exhausted"] + '</td></tr>';
    x += '    <tr><td>' + myJ["stats"]["money"] + '</td></tr>';
    x += '  </tbody>';
    x += '</table>';
        
    
    x += '      <div class="col-md6">Race:' + myJ["id"]["race"] + '</div>';
    x += '      <div class="col-md6">Occupation:' + myJ["id"]["occupation"] + '</div>';
    
    x += '  </div>'; // Close panel-body
    x += '  <div class="well well-small">';
    $.each(myJ["skills"],function(key,value){
        x += '<ul class="list-group">';
        x += '  <li class="list-group-item">';
        x += '    <span class="badge">' + value["value"] + '</span>';
        x += '    <span class="glyphicon glyphicon-stat"></span>' + key;
        x += '  </li>';
        x += '  <li class="list-group-item">';
        x += '  <div class="panel panel-default">';
        $.each(value["skills"],function(key,value){
            x += '<ul class="list-group">';
            x += '  <li class="list-group-item">';
            x += '    <span class="badge">' + value + '</span>';
            x +=      key;
            x += '  </li>';
            x += '</ul>';
        });
        x += '  </div>';
        x += '  </li>';
        x += '</ul>';
    });
    x += '  </div>';
    x += '</div>'; // Close Panel
    $("#interfacezero-main").append(x)
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(window).bind("load", function() {
    var yamlFiles = [
          'yaml/trigger_finger.yaml'
        , 'yaml/derp_man.yaml'
    ];
    yamlFiles.forEach( function(yamlFile){
        $.ajax({
            url: yamlFile,
            async: false,
            success: function (data){
                tableForJson(jsyaml.load(data));
            }
        });
    });
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
