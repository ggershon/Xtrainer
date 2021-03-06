﻿
(function () {

    function loadScript(url, callback) {

        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
       //jQuery loaded
        console.log('jquery loaded');
        initDemo();
     });
})();


function initDemo() {

    // get all scenarios and show them on left top side of the screen as icons
    scenarioHandler.getScenarios();
    addStylesToPage();
    
}

var scenarioHandler = {
    scenarios : null,
    getScenarios : function(){
        $.ajax({
            type: 'GET',
            url: "http://localhost:59514/api/Scenario",
            async: true,
            jsonpCallback: 'jsonCallback',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (json) {
                scenarioHandler.scenarios = json;
                scenarioHandler.showMenuBox();
            },
            error: function (e) {
                alert("ERROR ERROR ERROR");
                console.log(e.message);
            }
        });
    },
    showMenuBox : function(){
        $('body').prepend("<div id='xtScenarioMenu' class='xtTopMenu'>&nbsp;&nbsp;&nbsp;</div>");
        $("#xtScenarioMenu").hover(function () {
            scenarioHandler.showScenariosToolbar();
        },
        function () {
            $("#xtMenuLst").remove();
        }
        );
    },
    showScenariosToolbar : function(){
        // Add toolbar
        var aaa = $('body');
        var menu = "<ul id='xtMenuLst'>";
        for (var i = 0; i < scenarioHandler.scenarios.length; i++) {
            menu = menu.concat("<li><div><div onclick='alert(" + i + ")'>SC" + i + "</div></div></li>");
        }
        menu.concat("</ul>");
        $('#xtScenarioMenu').prepend(menu);
    },

    setNextStep: function (step) {
        var selector = "[" + step.bindObjectType + "=" + step.bindObject + "]";
        console.log(selector);
        var element = jQuery(selector);
        console.log(element);

        if (step.location == "buttom") {
            jQuery(selector).append("<div class='bubbleButtom'  id='bubble'>" + step.description + "</div>")
                     .show();
        }
        if (step.location == "top") {
            var element = jQuery(selector);
            var bubble = "<div class='bubbleTop'  id='bubble'>" + step.description + "</div>";
            var newHtml = bubble.concat(element.html());
            jQuery(selector).html(newHtml)
                     .show();
        }
        if (step.location == "left") {
            jQuery(selector).append("<div class='bubbleLeft'  id='bubble'>" + step.description + "</div>")
                     .show();
        }
        if (step.location == "right") {
            jQuery(selector).append("<div class='bubbleRight'  id='bubble'>" + step.description + "</div>")
                     .show();
        }
        jQuery(selector).click( function () {
            jQuery("#bubble").remove();
            scenarioHandler.setNextStep(testScenario2.currentStep);
        });

        var testScenario2 = {
            name: "aaaa", id: 2,
            currentStep: {
                name: "step 2",
                description: "step 2 description",
                bindObject: "main",
                bindObjectType: "id", // id/name...ther attributes,
                location: "top", // top/buttom/left/right
                triggerNext: "" // blur/clicked...
            }
        };
    }
}

addStylesToPage = function(){
    var css = ".bubbleTop {                                                                                                 \
    position: absolute;                                                                                      \
z-index: 9999999; \
    width: 234px;                                                                                            \
    height: 43px;                                                                                            \
    padding: 1px;                                                                                            \
    background: -webkit-linear-gradient(74deg, #8A8F08 5%, rgba(239, 247, 5, 0.59) 100%);                    \
    background: -moz-linear-gradient(74deg, #8A8F08 5%, rgba(239, 247, 5, 0.59) 100%);                       \
    background: -ms-linear-gradient(74deg, #8A8F08 5%, rgba(239, 247, 5, 0.59) 100%);                        \
    background: linear-gradient(164deg, rgba(239, 247, 5, 0.59) 5%, #8A8F08 100%);                           \
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#EFF705', endColorstr='#8A8F08');      \
    border: #000000 solid 1px;                                                                               \
    -webkit-border-radius: 1px;                                                                              \
    -moz-border-radius: 1px;                                                                                 \
    border-radius: 1px;                                                                                      \
}                                                                                                            \
                                                                                                             \
 .bubbleButtom {                                                                                                   \
    position: absolute;                                                                                      \
    width: 234px;                                                                                            \
    height: 43px;                                                                                            \
    padding: 1px;                                                                                            \
    background: -webkit-linear-gradient(262deg, #8A8F08 26%, rgba(239, 247, 5, 0.59) 100%);                  \
    background: -moz-linear-gradient(262deg, #8A8F08 26%, rgba(239, 247, 5, 0.59) 100%);                     \
    background: -ms-linear-gradient(262deg, #8A8F08 26%, rgba(239, 247, 5, 0.59) 100%);                      \
    background: linear-gradient(352deg, rgba(239, 247, 5, 0.59) 26%, #8A8F08 100%);                          \
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#EFF705', endColorstr='#8A8F08');      \
    border: #000000 solid 1px;                                                                               \
    -webkit-border-radius: 1px;                                                                              \
    -moz-border-radius: 1px;                                                                                 \
    border-radius: 1px;                                                                                      \
}\
  .bubbleLeft {                                                                                                     \
    position: absolute;                                                                                         \
    width: 234px;                                                                                               \
    height: 43px;                                                                                               \
    padding: 1px;                                                                                               \
    background: -webkit-linear-gradient(262deg, #8A8F08 26%, rgba(239, 247, 5, 0.59) 100%);                     \
    background: -moz-linear-gradient(262deg, #8A8F08 26%, rgba(239, 247, 5, 0.59) 100%);                        \
    background: -ms-linear-gradient(262deg, #8A8F08 26%, rgba(239, 247, 5, 0.59) 100%);                         \
    background: linear-gradient(352deg, rgba(239, 247, 5, 0.59) 26%, #8A8F08 100%);                             \
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#EFF705', endColorstr='#8A8F08');         \
    border: #000000 solid 1px;                                                                                  \
    -webkit-border-radius: 1px;                                                                                 \
    -moz-border-radius: 1px;                                                                                    \
    border-radius: 1px;                                                                                         \
}                                                                                                               \
  .bubbleRight {                                                                                                     \
    position: absolute;                                                                                         \
    width: 234px;                                                                                               \
    height: 43px;                                                                                               \
    padding: 1px;                                                                                               \
    background: -webkit-linear-gradient(62deg, #8A8F08 26%, rgba(239, 247, 5, 0.59) 100%);                      \
    background: -moz-linear-gradient(62deg, #8A8F08 26%, rgba(239, 247, 5, 0.59) 100%);                         \
    background: -ms-linear-gradient(62deg, #8A8F08 26%, rgba(239, 247, 5, 0.59) 100%);                          \
    background: linear-gradient(152deg, rgba(239, 247, 5, 0.59) 26%, #8A8F08 100%);                             \
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#EFF705', endColorstr='#8A8F08');         \
    border: #000000 solid 1px;                                                                                  \
    -webkit-border-radius: 1px;                                                                                 \
    -moz-border-radius: 1px;                                                                                    \
    border-radius: 1px;                                                                                         \
} \
.xtTopMenu {\
position: absolute;\
	width: 200px;\
top: 0;\
 left: 0;\
right: 0;\
 }\
.xtTopMenu ul {\
    list-style-type: none;\
    margin: 0;\
    padding: 0;\
}\
\
.xtTopMenu ul li {float: left; }\
.xtTopMenu ul li a{display: block; }\
";
    head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}

// get element 


// show bubble 






