var demoJsonString = '{"isWidgetActive":true,"Documents":[{"Name":"CampaignMemberTriggerHandler.txt","DocIcon":"txt","Author":"Deepak Geriani","Title":"CampaignMemberTriggerHandler.txt","Modified":"1-16-2020 6:17 PM","Task_Number":"","Period":"","Action_Plan_Task":"","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/CampaignMemberTriggerHandler.txt?web=1&action=edit","ContentType":"Account (NO)"},{"Name":"elements_demo.html","DocIcon":"code","Author":"Deepak Geriani","Title":"elements_demo.html","Modified":"1-13-2020 5:14 PM","Task_Number":"1,232","Period":"321","Action_Plan_Task":"Ap Task Subject","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/elements_demo.html?web=1&action=edit","ContentType":"Account (NO)"},{"Name":"AccNor.docx","DocIcon":"docx","Author":"Deepak Geriani","Title":"AccNor","Modified":"1-13-2020 4:45 PM","Task_Number":"","Period":"","Action_Plan_Task":"","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/AccNor.docx?web=1&action=edit","ContentType":"Account (NO)"},{"Name":"FileTaskNew.dotx","DocIcon":"code","Author":"Deepak Geriani","Title":"FileTaskNew","Modified":"1-13-2020 3:55 PM","Task_Number":"1,232","Period":"321","Action_Plan_Task":"Ap Task Subject","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/FileTaskNew.dotx?web=1&action=edit","ContentType":"Account (NO)"},{"Name":"version_log.html","DocIcon":"code","Author":"Deepak Geriani","Title":"version_log.html","Modified":"1-13-2020 3:53 PM","Task_Number":"","Period":"","Action_Plan_Task":"","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/version_log.html?web=1&action=edit","ContentType":"Account (NO)"},{"Name":"forms_demo.html","DocIcon":"code","Author":"Deepak Geriani","Title":"forms_demo.html","Modified":"1-13-2020 1:47 PM","Task_Number":"1,232","Period":"321","Action_Plan_Task":"Ap Task Subject","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/forms_demo.html?web=1&action=edit","ContentType":"Account (NO)"},{"Name":"TaskNoDoc.dotx","DocIcon":"code","Author":"Deepak Geriani","Title":"TaskNoDoc","Modified":"1-13-2020 1:27 PM","Task_Number":"1,232","Period":"321","Action_Plan_Task":"","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/TaskNoDoc.dotx?web=1&action=edit","ContentType":"Generic Account Document Norway"},{"Name":"colour_palette_test.css","DocIcon":"code","Author":"Deepak Geriani","Title":"colour_palette_test.css","Modified":"1-13-2020 1:21 PM","Task_Number":"","Period":"","Action_Plan_Task":"","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/colour_palette_test.css?web=1&action=edit","ContentType":"Generic Account Document Norway"},{"Name":"AccountSweden1.docx","DocIcon":"docx","Author":"Deepak Geriani","Title":"AccountSweden1","Modified":"1-10-2020 3:36 PM","Task_Number":"","Period":"","Action_Plan_Task":"","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/AccountSweden1.docx?web=1&action=edit","ContentType":"Generic Account Document Norway"},{"Name":"new web api test.docx","DocIcon":"docx","Author":"Deepak Geriani","Title":"new web api test","Modified":"1-6-2020 12:56 PM","Task_Number":"","Period":"","Action_Plan_Task":"","documentUrl":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/General/new web api test.docx?web=1&action=edit","ContentType":"Generic Account Document Norway"}],"Views":[{"viewName":"All Documents","DefaultView":true,"ViewDisplayFields":["Name","Title","Modified","Author"],"Id":"774f7ebb-e43f-45d7-b99f-b0e35a0e4c6b"},{"viewName":"Account (NO)","Id":"62e65ae0-e404-4e70-9e90-aba4569ab318"},{"viewName":"Generic Account Document Norway","Id":"48ddae16-c17d-40b7-ac58-776d0869dc8a"}],"ContentTypes":{"Account (NO)":{"Id":"0x010100671DD7693448CE46ACE9EC9AF942AA6601010100069A5274CDE936458C85DFAA3B0343E2","isUpload":"false","RequiredColumDetails":[{"Choices":["Yes","No"],"ColumnName":"Personal_Data","ColumnType":"Choice"},{"ColumnName":"Document_Classification","ColumnType":"TaxonomyFieldTypeMulti"}]},"Generic Account Document Norway":{"Id":"0x010100671DD7693448CE46ACE9EC9AF942AA66010101010077164DA8340EE34499A72DCC501E5586","isUpload":"true","RequiredColumDetails":[{"Choices":["Yes","No"],"ColumnName":"Personal_Data","ColumnType":"Choice"},{"ColumnName":"Document_Classification","ColumnType":"TaxonomyFieldTypeMulti"}]}},"sobjectid":"0012v00002Vzv1EAAR","sobjectName":"Account","SeeAll":"https://binaryrepublik516.sharepoint.com/sites/VCD-BRTestAccount/Shared%20Documents/Forms/AllItems.aspx?&id=/sites/VCD-BRTestAccount/Shared%20Documents/General"}';

var jsonObj = JSON.parse(demoJsonString);
var headerData = jsonObj.Views[0]["ViewDisplayFields"];
var objString = {};

for (item of jsonObj.Views) {
    $("<option value='" + item.viewName + "'>" + item.viewName + "</option>").insertAfter("#ddlViews option:last");
}

$.each(headerData, function (item) {
    $(".tblDisplayDataHeader").append($("<th>").append("<th>").text(headerData[item]));
});

if (jsonObj.isWidgetActive == true) {
    $("#rdoDisplayShow").prop('checked', true);
    fetchTableBody();
}

$(".rdoDisplay, #ddlViews").change(function () {
    fetchTableBody();
});

$("#txtSearch").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        var searchString = $("#txtSearch").val();
        if (searchString.length > 2) {
            filterBySearchString(searchString);
        }
        else {
            alert("Enter Minimum 3 Characters");
        }
    }
});

$("#txtSearch").keyup(function () {
    if (!$("#txtSearch").val()) {
        location.reload();
    }
});

$("#ddlSelectContentType").change(function () {
    
    if (!$("#ddlSelectContentType").val()) {
        $("#InsertNewRecordDiv").hide();
        $("#btnSubmitModal").prop("disabled", true);
    }
    else {
        $("#InsertNewRecordDiv").show();
        $("#btnSubmitModal").prop("disabled", false);
    }
});

$("#btnSubmitModal").click(function () {
    if ( !$("#txtName").val() ) {
        alert("Insert Name");
    }
    else {
        
        objString.Name = $("#txtName").val();
        objString.Author = "Vatsal Vaghela";
        objString.Title = $("#txtName").val();
        var date = new Date();
        var month = ("0"+date.getMonth()+1).slice(-2);
        var day = ("0"+date.getDate()).slice(-2);
        var year = date.getFullYear();
        if(date.getHours()==0)
        {
            var hour = 12;
            var mid = "AM";
        }
        else if(date.getHours()>12)
        {
            var hour = date.getHours() % 12;
            var mid = "PM";
        }
        else
        {
            var hour = ("0"+date.getHours()).slice(-2);
            var mid = "AM";
        }
        var minute = ("0"+date.getMinutes()).slice(-2);        
        objString.Modified = month+"-"+day+"-"+year+" "+hour+":"+minute+" "+mid;
        objString.ContentType = $("select[name='ddlSelectContentType']").val();
        $("#ddlSelectContentType option[value='']").prop("selected",true);
        $("#InsertNewRecordDiv").hide();
        $("#txtName").prop("value", "");
        var obj = JSON.stringify(objString);       
        displayNewRecord(obj);
    }
}); 

function fetchTableBody() {
    if (checkWidget()) {
        $("#ddlViews, #txtSearch, #tblDisplayData, #btnNewRecord").show();
        var contentType = $("#ddlViews").val() ? $("#ddlViews").val() : "All Documents";
        $(".tblDisplayDataBody").empty();
        var tableData = "";
        $.each(jsonObj.Documents, function (i, item) {
            if (contentType == "All Documents") {
                tableData += getTableRows(item);
            }
            else if (contentType == item.ContentType) {
                tableData += getTableRows(item);
            }
        });
        $(".tblDisplayDataBody").append(tableData);
    }
    else{
        $("#ddlViews, #txtSearch, #tblDisplayData, #btnNewRecord").hide();
    }
    bindDropDownInModal();
}

function checkWidget() {
    if ($("#rdoDisplayShow").prop('checked') == true) {
        return true;
    }
    else {       
        return false;
    }
}

function filterBySearchString(searchString) {
    var items = [];
    var found = 0;
    var selectedView = $("#ddlViews").val();
    $(".tblDisplayDataBody").empty();
    var tableData = "";
    for (item of jsonObj.Documents) {
        if (item.ContentType == selectedView || selectedView == "All Documents") {
            if (item['Name'].search(new RegExp(searchString, 'i')) >= 0 || item['Title'].search(new RegExp(searchString, 'i')) >= 0 || item['Author'].search(new RegExp(searchString, 'i')) >= 0) {
                tableData += getTableRows(item);
                found = 1;
            }
        }
    }
    $(".tblDisplayDataBody").append(tableData);
    if (found == 0) {
        $("<tr><td colspan=4 align=center>No Record Found</td></tr>").appendTo(".tblDisplayDataBody");
    }
}

function getTableRows(item) {
    var tr = "<tr>";
    $.each(headerData, function (j) {
        tr += "<td>" + item[headerData[j]] + "</td>";
    });
    tr += "</tr>";
    return tr;
}

function bindDropDownInModal() {
    var bindDdl = ""
    $.each(jsonObj.ContentTypes, function (item) {
        bindDdl += "<option value='" + item + "'>" + item + "</option>";
    });    
    $(bindDdl).insertAfter("#ddlSelectContentType option:last");
}

function displayNewRecord(obj) {
    var objString = JSON.parse(obj);
    var row = "<tr><td>"+objString["Name"]+"</td><td>"+objString["Title"]+"</td><td>"+objString["Modified"]+"</td><td>"+objString["Author"]+"</td></tr>";
    $(row).insertAfter(".tblDisplayDataBody tr:last");    
}