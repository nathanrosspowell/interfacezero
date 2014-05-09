//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tableForJson( name, myJ ) {
    var x = "";
    x += '<div class="panel panel-default">';
    x += '  <div class="panel-heading">';
    x += '    <h3 class="panel-title"><span class="glyphicon glyphicon-user"></span>'+myJ["id"]["name"]+'</h3>';
    x += '  </div>'; // Close panel-heading
    x += '  <div class="panel-body">';
    
    
    x += '<div class="table-responsive"><table class="table table-condensed">';
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
    x += '    <tr>';
    x += '      <td>' + myJ["stats"]["xp"] + '</td>';
    x += '      <td>' + myJ["id"]["race"] + '</td>';
    x += '      <td>' + myJ["id"]["occupation"] + '</td>';
    x += '      <td>' + myJ["stats"]["streetcreed"]["current"] + '/' + myJ["stats"]["streetcreed"]["max"] +' </td>';
    x += '      <td>' + myJ["stats"]["wonded"] + '</td>';
    x += '      <td>' + myJ["stats"]["exhausted"] + '</td>';
    x += '      <td>' + myJ["stats"]["money"] + '</td>';
    x += '    </tr>';
    x += '  </tbody>';
    x += '</table></div>';
    
    x += '  </div>'; // Close panel-body
    x += '  <div class="well well-small">';
    var accordion = name + "-accordion";
    x += '    <div class="panel-group" id="' + accordion + '">';
    $.each(myJ["skills"],function(key,value){
        var accordionAnchor = name + "-" + key;
        x += '<div class="panel-group" id="' + accordion + '">';
        x += '  <div class="panel panel-default">';
        x += '    <div class="panel-heading">';
        x += '      <h4 class="panel-title">';
        x += '        <a data-toggle="collapse" data-parent="#"' + accordion + '"" href="#' + accordionAnchor + '">';
        x += '          <span class="badge">' + value["value"] + '</span>';
        x += '          <span class="glyphicon glyphicon-stat"></span>' + key;
        x += '        </a>';
        x += '      </h4>';
        x += '    </div>';
        x += '    <div id="' + accordionAnchor + '" class="panel-collapse collapse in">';
        x += '      <div class="panel-body">';
        
        $.each(value["skills"],function(key,value){
            x += '<ul class="list-group">';
            x += '  <li class="list-group-item">';
            x += '    <span class="badge">' + value + '</span>';
            x +=      key;
            x += '  </li>';
            x += '</ul>';
        });
        
        x += '      </div>';
        x += '    </div>';
        x += '  </div>';
        x += '</div>';
    });
    x += '    </div>'; // Accordian
    x += '  </div>'; // Well
    x += '</div>'; // Close Panel
    $("#interfacezero-main").append(x)
    $('#'+accordion).collapse("hide"); // Close that accordion
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(window).bind("load", function() {
    var yamlFiles = [
          'trigger_finger'
        , 'derp_man'
    ];
    yamlFiles.forEach( function(yamlFile){
        $.ajax({
            url: 'yaml/' + yamlFile + '.yaml',
            async: false,
            success: function (data){
                tableForJson(yamlFile,jsyaml.load(data));
            }
        });
    });
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
