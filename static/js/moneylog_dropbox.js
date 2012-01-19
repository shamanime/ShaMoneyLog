function initDropbox() {
    $("#report").html('<p style=\'font-size: 18px; text-align: left; line-height: 20px;\'> ' + i18n.msgLoading.replace('%s', '<Dropbox home>/Apps/MoneyLog Cloud/moneylog_data.txt')   + '</p>');
    $("#charts").hide();
    
    $.get('/', { reloading: true }, function(data) {
        $("#editordata").val(data);
        $("#editoropen").css('display', 'inline');
        
        resetData();
        rawData = data;

        parseData();
        showReport();
    });
}

function editorSave() {
    $("#editor").prepend("<div id='saving' style='right: 130px; position: absolute; color: #F44; line-height: 24px;'>" + i18n.msgSaving + "</div>");
    $.post('/update', { data: $("#editordata").val() }, function(data) {
        $("#saving").hide();
        //readFromDropBox();
        rawData = $("#editordata").val();
        parseData();
        showReport();
        editorOff();
    });
}

function loadSelectedFile() {
    initDropbox();
}

