//for informasjon-slides
$(document).on('click', '#moveData', function(){
$.fn.fullpage.moveTo('informasjon', "data");
});

$(document).on('click', '#moveAnalyse', function(){
$.fn.fullpage.moveTo('informasjon', "analyse");
});

$(document).on('click', '#moveOmOss', function(){
$.fn.fullpage.moveTo('informasjon', "om_oss");
});




//For medarbeiderpresentasjon

$(document).on('click', '#moveDag', function(){
$.fn.fullpage.moveTo('medarbeidere', "dag");
});

$(document).on('click', '#moveTom', function(){
$.fn.fullpage.moveTo('medarbeidere', "tom");
});

$(document).on('click', '#moveIngrid', function(){
$.fn.fullpage.moveTo('medarbeidere', "ingrid");
});

$(document).on('click', '#moveStian', function(){
$.fn.fullpage.moveTo('medarbeidere', "stian");
});

$(document).on('click', '#moveMarius', function(){
$.fn.fullpage.moveTo('medarbeidere', "marius");
});

$(document).on('click', '#moveDengjun', function(){
$.fn.fullpage.moveTo('medarbeidere', "dengjun");
});

$(document).on('click', '#moveOystein', function(){
$.fn.fullpage.moveTo('medarbeidere', "oystein");
});

$(document).on('click', '.tilbakeAlle', function(){
$.fn.fullpage.moveTo('medarbeidere', "alle");
});

