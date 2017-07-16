window.requireModules = [];
admixRequire(['html5api_0.0.1'],function(admixAPI){
	window.admixAPI=admixAPI
	function prevent(_event) {
		if (_event) {
			_event.returnValue = false;
			_event.cancelBubble = true;
			if (_event.preventDefault) {
				_event.preventDefault();
			}
			if (_event.stopPropagation) {
				_event.stopPropagation();
			}
		}
	}
	admixAPI.init({
		'initial' : {
			'fixed' : {
			 'vAlign' : 'center',
			 'hAlign' : 'center'
			 },
			'width' : '100%',
			'height' : '100%'
		},
		'expanded' : {
			'fixed' : {
			 'vAlign' : 'center',
			 'hAlign' : 'center'
			 },
			'width' : '100%',
			'height' : '100%',
			'overlay' : {
				'left' : '0px',
				'bottom' : '0px'
			},
			'time' : 1
		}
	});
	function $(id){
		return document.getElementById(id);
	}
	var timeline = new TimelineLite();

	var close = $('close');
	close.onclick = function(_event){
		prevent(_event);
		admixAPI.close();
	};
	document.body.onclick = function(_event){
		prevent(_event);
		admixAPI.click('');
	};
	document.body.onselectstart = function() {
		return false;
	}
});