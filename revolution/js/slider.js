/*slider1*/
 
var    tpj = jQuery;

var revapi1;

if(window.RS_MODULES === undefined) window.RS_MODULES = {};
if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {init:function() {
    window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
    if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
    window.revapi1 = jQuery(window.revapi1);
    if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
    revapi1.revolutionInit({
            revapi:"revapi1",
            DPR:"dpr",
            sliderLayout:"fullwidth",
            visibilityLevels:"1240,1240,778,480",
            gridwidth:"1920,1920,778,480",
            gridheight:"755,755,400,340",
            lazyType:"smart",
            perspective:600,
            perspectiveType:"global",
            editorheight:"755,768,400,370",
            responsiveLevels:"1240,1240,778,480",
            progressBar:{disableProgressBar:true},
            navigation: {
                wheelCallDelay:1000,
                onHoverStop:false,
                arrows: {
                    enable:true,
                    style:"hesperiden",
                    hide_onmobile:true,
                    hide_under:778,
                    hide_onleave:true,
                    left: {
                        h_offset:30
                    },
                    right: {
                        h_offset:30
                    }
                }
            },
            viewPort: {
                global:true,
                globalDist:"-200px",
                enable:false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
    });
    
}} // End of RevInitScript

if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};