(function($){

// 创建sweetPages jQuery插件：
$.fn.sweetPages = function(opts){
	
	// 如果没有选项被传递，创建一个空的选择对象
	if(!opts) opts = {};
	
	var resultsPerPage = opts.perPage || 3;
	
	// 该插件最适合无序列表，尽管旧版也可以：
	var ul = this;
	var li = ul.find('li');
	
	li.each(function(){
		// 计算每个li元素的高度，并使用数据方法存储它：
		var el = $(this);
		el.data('height',el.outerHeight(true));
	});
	
	// 计算总页数：
	var pagesNumber = Math.ceil(li.length/resultsPerPage);
	
	// 如果页面少于两个，则不执行任何操作：
	if(pagesNumber<2) return this;

	// 创建控件div：
	var swControls = $('<div class="swControls">');
	
	for(var i=0;i<pagesNumber;i++)
	{
		// 切片lis的一部分，并将其包装在swPage div中：
		li.slice(i*resultsPerPage,(i+1)*resultsPerPage).wrapAll('<div class="swPage" />');
		
		// 添加一个链接到swControls div：
		swControls.append('<a href="" class="swShowPage">'+(i+1)+'</a>');
	}

	ul.append(swControls);
	
	var maxHeight = 0;
	var totalWidth = 0;
	
	var swPage = ul.find('.swPage');
	swPage.each(function(){
		
		// 遍历所有新创建的页面：
		
		var elem = $(this);

		var tmpHeight = 0;
		elem.find('li').each(function(){tmpHeight+=$(this).data('height');});

		if(tmpHeight>maxHeight)
			maxHeight = tmpHeight;

		totalWidth+=elem.outerWidth();
		
		elem.css('float','left').width(ul.width());
	});
	
	swPage.wrapAll('<div class="swSlider" />');
	
	// 将ul的高度设置为最高页面的高度：
	ul.height(maxHeight);
	
	var swSlider = ul.find('.swSlider');
	swSlider.append('<div class="clear" />').width(totalWidth);

	var hyperLinks = ul.find('a.swShowPage');
	
	hyperLinks.click(function(e){
		
		// 如果单击某个控制链接，请滑动swSlider div
		//（其中包含所有页面）并将其标记为活动：

		$(this).addClass('active').siblings().removeClass('active');
		
		swSlider.stop().animate({'margin-left':-(parseInt($(this).text())-1)*ul.width()},'slow');
		e.preventDefault();
	});
	
	// 首次将此代码运行时将第一个链接标记为活动：
	hyperLinks.eq(0).addClass('active');
	
	// 中心控制区：
	swControls.css({
		'left':'50%',
		'margin-left':-swControls.width()/2
	});
	
	return this;
	
}})(jQuery);


$(document).ready(function(){
	/* 一旦DOM加载，就执行以下代码 */
	
	// 调用jQuery插件并拆分
	// #holder UL转换成3 LI的页面：
	
	$('#holder').sweetPages({perPage:3});
	
	// 插件的默认行为是插入
	// 在ul中的页面链接，但是我们需要它们在主容器中：

	var controls = $('.swControls').detach();
	controls.appendTo('#main');
	
});
