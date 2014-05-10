//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createCharacterPanel( name, myJ ){
    var x = "";
    x += '<div class="panel panel-default">';
    x += '  <div class="panel-heading">';
    x += '    <h3 class="panel-title">';
    x += '      <span class="glyphicon glyphicon-user"></span>';
    x +=        myJ["id"]["name"];
    x += '    </h3>';
    x += '  </div>'; // Close panel-heading
    x += '  <div class="panel-body">';
    x += '    <div class="well well-small">';
    x +=        idTable( name, myJ );
    x +=        statsAccordion( name, myJ );
    x += '    </div>';
    x += '  </div>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function idTable( name, myJ ){
    var x = "";
    x += '<div class="table-responsive">';
    x += '  <table class="table table-condensed">';
    //x += '    <colgroup><col class="col-xs-1"><col class="col-xs-7"></colgroup>';
    x += '    <thead>';
    x += '      <tr>';
    x += '        <th>XP</th>';
    x += '        <th>Race</th>';
    x += '        <th>Occupation</th>';
    x += '        <th>Streetcred</th>';
    x += '        <th>Wonded</th>';
    x += '        <th>Exhausted</th>';
    x += '        <th>Money</th>';
    x += '      </tr>';
    x += '    </thead>';
    x += '    <tbody>';
    x += '      <tr>';
    x += '        <td>' + myJ["stats"]["xp"] + '</td>';
    x += '        <td>' + myJ["id"]["race"] + '</td>';
    x += '        <td>' + myJ["id"]["occupation"] + '</td>';
    x += '        <td>' + myJ["stats"]["streetcreed"]["current"] + '/' + myJ["stats"]["streetcreed"]["max"] +' </td>';
    x += '        <td>' + myJ["stats"]["wonded"] + '</td>';
    x += '        <td>' + myJ["stats"]["exhausted"] + '</td>';
    x += '        <td>' + myJ["stats"]["money"] + '</td>';
    x += '    </tr>';
    x += '    </tbody>';
    x += '  </table>';
    x += '</div>';
    return x;
}
function accordionName( name ){
    return name + "-accordion";
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function statsAccordion( name, myJ ){
    var accordion = accordionName( name )
    var x = "";
    x += '<div class="panel-group" id="' + accordion + '">';
    $.each(myJ["skills"],function(key,value){
        var anchor = name + "-" + key;
        x += statEntry( key, value, accordion, anchor );
    });
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function statEntry( key, value, accordion, anchor ){
    var x = "";
    x += '<div class="panel-group" id="' + accordion + '">';
    x += '  <div class="panel panel-default">';
    x += '    <div class="panel-heading">';
    x += '      <h4 class="panel-title">';
    x += '        <a data-toggle="collapse" data-parent="#"' + accordion + '"" href="#' + anchor + '">';
    x += '          <span class="badge">' + value["value"] + '</span>';
    x += '          <span class="glyphicon glyphicon-stat"></span>' + key;
    x += '        </a>';
    x += '      </h4>';
    x += '    </div>';
    x += '    <div id="' + anchor + '" class="panel-collapse collapse">';
    x += '      <div class="panel-body">';
    x +=            attributeItems( value );
    x += '      </div>';
    x += '    </div>';
    x += '  </div>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function attributeItems( value ){
    var x = "";
    $.each(value["skills"],function(key,value){
        x += '<ul class="list-group">';
        x += '  <li class="list-group-item">';
        x += '    <span class="badge">' + value + '</span>';
        x +=      key;
        x += '  </li>';
        x += '</ul>';
    });
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tableForJson( name, myJ ) {
    var x = createCharacterPanel( name, myJ );
    $("#interfacezero-main").append(x)
    $('#'+accordionName(name)).collapse("hide"); // Close that accordion
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
