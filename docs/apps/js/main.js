$(function(){
    var jingpin_tab = -1;
    function activeJingpin(ele, active) {
        var target_id = $(ele).attr("data-target");
        if(active) {
            $(ele).css("background-color","yellow");
            $("#" + target_id).slideDown();
        } else {
            $(ele).css("background-color","");
            $("#" + target_id).slideUp();
        }
    }
    $("#jingpin-tab > div").hover(function() {
        var self = this;
        $("#jingpin-tab > div").each(function(){
            activeJingpin(this, this == self);
        });
    });
    activeJingpin($("#jingpin-tab > div").eq(0), true);
});
    