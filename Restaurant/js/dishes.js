var count = jQuery('.carte-content-1-x').length;
var curPage = 1;

jQuery('.carte-content-1-x').each(function(i) {
	jQuery(this).addClass('page' + (i + 1));
	jQuery('#carte-content-1 > .carte-container-c > .carte-num').append('<i class="pageNum pageNum' + (i + 1) + '">' + (i + 1) + '</i>' + '\n');

})
jQuery('#carte-content-1 > .carte-container-c > .carte-num').append('<i class="fa fa-chevron-right"></i>');
if(curPage == 1) {
	if(count == curPage) {
		jQuery('.carte-content-1-x').addClass('noNav');
	}
	jQuery('.fa-chevron-left').addClass('hide');
	jQuery('.pageNum1').addClass('navActive');
}

jQuery('.carte-content-1-x').not('.page' + curPage).hide();

jQuery('.fa-chevron-right').click(function() {
	if(curPage != count) {
		jQuery('.carte-content-1-x').hide();
		jQuery('.pageNum').removeClass('navActive');
		curPage++;
		jQuery('.carte-content-1-x.page' + curPage).show();
		jQuery('.pageNum' + curPage).addClass('navActive');
		//jQuery('.console').html('count = ' + count + ' - current = ' + curPage);
	}

	if(curPage == count) {
		jQuery('.fa-chevron-right').addClass('hide');
	}

	jQuery('.fa-chevron-left').removeClass('hide');

})

jQuery('.fa-chevron-left').click(function() {
	if(curPage != 1) {
		jQuery('.carte-content-1-x').hide();
		jQuery('.pageNum').removeClass('navActive');
		curPage--;
		jQuery('.carte-content-1-x.page' + curPage).show();
		jQuery('.pageNum' + curPage).addClass('navActive');
		//jQuery('.console').html('count = ' + count + ' - current = ' + curPage);
	}

	if(curPage == 1) {
		jQuery('.fa-chevron-left').addClass('hide');
	}

	jQuery('.fa-chevron-right').removeClass('hide');
})

jQuery('.pageNum').click(function() {
	var pageClick = jQuery(this).text();
	jQuery('.pageNum').removeClass('navActive');
	jQuery(this).addClass('navActive');
	curPage = jQuery(this).text();
	jQuery('.carte-content-1-x').hide();
	jQuery('.carte-content-1-x.page' + curPage).show();

	if(curPage == 1) {
		jQuery('.fa-chevron-left').addClass('hide');
		jQuery('.fa-chevron-right').removeClass('hide');
	} else if(curPage == count) {
		jQuery('.fa-chevron-left').removeClass('hide');
		jQuery('.fa-chevron-right').addClass('hide');
	} else {
		jQuery('.fa-chevron-left').removeClass('hide');
		jQuery('.fa-chevron-right').removeClass('hide');
	}
})

//jQuery('.console').append('count = ' + count + ' - current = ' + curPage);

var count2 = jQuery('.carte-content-2-x').length;
var curPage2 = 1;

jQuery('.carte-content-2-x').each(function(i) {
	jQuery(this).addClass('page' + (i + 1));
	jQuery('#carte-content-2 > .carte-container-c > .carte-num').append('<i class="pageNum pageNum' + (i + 1) + '">' + (i + 1) + '</i>' + '\n');

})
jQuery('#carte-content-2 > .carte-container-c > .carte-num').append('<i class="fa fa-chevron-right"></i>');
if(curPage2 == 1) {
	if(count2 == curPage2) {
		jQuery('.carte-content-2-x').addClass('noNav');
	}
	jQuery('.fa-chevron-left').addClass('hide');
	jQuery('.pageNum1').addClass('navActive');
}

jQuery('.carte-content-2-x').not('.page' + curPage2).hide();

jQuery('.fa-chevron-right').click(function() {
	if(curPage2 != count2) {
		jQuery('.carte-content-2-x').hide();
		jQuery('.pageNum').removeClass('navActive');
		curPage2++;
		jQuery('.carte-content-2-x.page' + curPage2).show();
		jQuery('.pageNum' + curPage2).addClass('navActive');
		//jQuery('.console').html('count2 = ' + count2 + ' - current = ' + curPage2);
	}

	if(curPage2 == count2) {
		jQuery('.fa-chevron-right').addClass('hide');
	}

	jQuery('.fa-chevron-left').removeClass('hide');

})

jQuery('.fa-chevron-left').click(function() {
	if(curPage2 != 1) {
		jQuery('.carte-content-2-x').hide();
		jQuery('.pageNum').removeClass('navActive');
		curPage2--;
		jQuery('.carte-content-2-x.page' + curPage2).show();
		jQuery('.pageNum' + curPage2).addClass('navActive');
		//jQuery('.console').html('count2 = ' + count2 + ' - current = ' + curPage2);
	}

	if(curPage2 == 1) {
		jQuery('.fa-chevron-left').addClass('hide');
	}

	jQuery('.fa-chevron-right').removeClass('hide');
})

jQuery('.pageNum').click(function() {
	var pageClick = jQuery(this).text();
	jQuery('.pageNum').removeClass('navActive');
	jQuery(this).addClass('navActive');
	curPage2 = jQuery(this).text();
	jQuery('.carte-content-2-x').hide();
	jQuery('.carte-content-2-x.page' + curPage2).show();

	if(curPage2 == 1) {
		jQuery('.fa-chevron-left').addClass('hide');
		jQuery('.fa-chevron-right').removeClass('hide');
	} else if(curPage2 == count2) {
		jQuery('.fa-chevron-left').removeClass('hide');
		jQuery('.fa-chevron-right').addClass('hide');
	} else {
		jQuery('.fa-chevron-left').removeClass('hide');
		jQuery('.fa-chevron-right').removeClass('hide');
	}
})

//jQuery('.console').append('count2 = ' + count2 + ' - current = ' + curPage2);

var count3 = jQuery('.carte-content-3-x').length;
var curPage3 = 1;

jQuery('.carte-content-3-x').each(function(i) {
	jQuery(this).addClass('page' + (i + 1));
	jQuery('#carte-content-3 > .carte-container-c > .carte-num').append('<i class="pageNum pageNum' + (i + 1) + '">' + (i + 1) + '</i>' + '\n');

})
jQuery('#carte-content-3 > .carte-container-c > .carte-num').append('<i class="fa fa-chevron-right"></i>');
if(curPage3 == 1) {
	if(count3 == curPage3) {
		jQuery('.carte-content-3-x').addClass('noNav');
	}
	jQuery('.fa-chevron-left').addClass('hide');
	jQuery('.pageNum1').addClass('navActive');
}

jQuery('.carte-content-3-x').not('.page' + curPage3).hide();

jQuery('.fa-chevron-right').click(function() {
	if(curPage3 != count3) {
		jQuery('.carte-content-3-x').hide();
		jQuery('.pageNum').removeClass('navActive');
		curPage3++;
		jQuery('.carte-content-3-x.page' + curPage3).show();
		jQuery('.pageNum' + curPage3).addClass('navActive');
		//jQuery('.console').html('count3 = ' + count3 + ' - current = ' + curPage3);
	}

	if(curPage3 == count3) {
		jQuery('.fa-chevron-right').addClass('hide');
	}

	jQuery('.fa-chevron-left').removeClass('hide');

})

jQuery('.fa-chevron-left').click(function() {
	if(curPage3 != 1) {
		jQuery('.carte-content-3-x').hide();
		jQuery('.pageNum').removeClass('navActive');
		curPage3--;
		jQuery('.carte-content-3-x.page' + curPage3).show();
		jQuery('.pageNum' + curPage3).addClass('navActive');
		//jQuery('.console').html('count3 = ' + count3 + ' - current = ' + curPage3);
	}

	if(curPage3 == 1) {
		jQuery('.fa-chevron-left').addClass('hide');
	}

	jQuery('.fa-chevron-right').removeClass('hide');
})

jQuery('.pageNum').click(function() {
	var pageClick = jQuery(this).text();
	jQuery('.pageNum').removeClass('navActive');
	jQuery(this).addClass('navActive');
	curPage3 = jQuery(this).text();
	jQuery('.carte-content-3-x').hide();
	jQuery('.carte-content-3-x.page' + curPage3).show();

	if(curPage3 == 1) {
		jQuery('.fa-chevron-left').addClass('hide');
		jQuery('.fa-chevron-right').removeClass('hide');
	} else if(curPage3 == count3) {
		jQuery('.fa-chevron-left').removeClass('hide');
		jQuery('.fa-chevron-right').addClass('hide');
	} else {
		jQuery('.fa-chevron-left').removeClass('hide');
		jQuery('.fa-chevron-right').removeClass('hide');
	}
})

//jQuery('.console').append('count3 = ' + count3 + ' - current = ' + curPage3);