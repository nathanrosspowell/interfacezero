
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tableForJson( myJ ) {
    var x = "";
    x += '<div class="panel panel-default">';
    x += '  <div class="panel-heading">';
    x += '    <h3 class="panel-title">'+myJ["id"]["name"]+'</h3>';
    x += '  </div>';
    x += '  <div class="panel-body">';
    x += '    <div class="row">';
    x += '      <div class="col-md6">Race:' + myJ["id"]["race"] + '</div>';
    x += '      <div class="col-md6">Occupation:' + myJ["id"]["occupation"] + '</div>';
    x += '    </div>';
    x += '  </div>';
    x += '  <div class="panel panel-default">';
    $.each(myJ["skills"],function(key,value){
        x += '<ul class="list-group">';
        x += '  <li class="list-group-item">';
        x += '    <span class="badge">' + value["value"] + '</span>';
        x +=      key;
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
    x += '</div>';
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
