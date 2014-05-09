//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tableForJson( myJ ) {
    var x = [];
    x.push('<div class="panel panel-default">');
    x.push('  <div class="panel-heading">');
    x.push('    <h3 class="panel-title">'+myJ["id"]["name"]+'</h3>');
    x.push('  </div>');
    x.push('  <div class="panel-body">');
    x.push("     Race: " + myJ["id"]["race"] + "<br/>" );
    x.push("     Occupation: " + myJ["id"]["occupation"] + "<br/>" );
    x.push('   </div>');
    x.push('</div>');
    $.each(myJ["skills"],function(key,value){
        x.push('<ul class="list-group">')
        x.push('  <li class="list-group-item">');
        x.push('    <span class="badge">' + value["value"] + '</span>');
        x.push(     key );
        x.push('  </li>');
        x.push('  <li class="list-group-item">');
        $.each(value["skills"],function(key,value){
            x.push('<ul class="list-group">')
            x.push('  <li class="list-group-item">');
            x.push('    <span class="badge">' + value + '</span>');
            x.push(     key );
            x.push('  </li>');
            x.push('</ul>');
        });
        x.push('  </li>');
        x.push('</ul>');
    });
    x.forEach(function(line){
        $("#interfacezero-main").append(line)
    });

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
    
    function newWin(){ 
win= window.open('','_blank'); 

var results =document.documentElement.innerHTML; 
var match = "<"; 

var re = new RegExp("<", "g"); 

var newresults = results.replace(re, "&lt;"); 

win.document.write(newresults ); 
} 
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
