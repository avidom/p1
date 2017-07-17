(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 480,
	height: 854,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bokal.png", id:"bokal"},
		{src:"images/bottleBig.png", id:"bottleBig"},
		{src:"images/bottleBlurred.png", id:"bottleBlurred"},
		{src:"images/bottleReg.png", id:"bottleReg"},
		{src:"images/cover1.png", id:"cover1"},
		{src:"images/cover2.png", id:"cover2"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bokal = function() {
	this.initialize(img.bokal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,572);


(lib.bottleBig = function() {
	this.initialize(img.bottleBig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,644);


(lib.bottleBlurred = function() {
	this.initialize(img.bottleBlurred);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,654);


(lib.bottleReg = function() {
	this.initialize(img.bottleReg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,645);


(lib.cover1 = function() {
	this.initialize(img.cover1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,10);


(lib.cover2 = function() {
	this.initialize(img.cover2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,41);


(lib.warn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHFYQgLABAAgsIAAkgIgcAAIAAFLIgOAAIAAqwIAOAAIAAFRIAcAAIAAknQAAgqARAAIAOAAQATAAAAAqIAAJbQAAAsgNgBgAAHkuIAAJPQAAAgAJABIAIAAQAJgBAAggIAApPQAAgSgGgBIgOAAQgGABAAASg");
	this.shape.setTransform(225.7,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXF+IAAgXIAHAAQAIAAAAgUIgfqFIAOAAIAZIqIAYoqIAPAAIgjKJQgCAngJAAgAgUlZQgIgPAAgVIAOAAQABAKAEAIQAEAHAFAAQAFAAAFgHQAEgIAAgKIAPAAQAAAVgIAPQgJAPgMAAQgKAAgKgPg");
	this.shape_1.setTransform(213.5,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLFYQgOABAAgsIAApbQAAgqAUAAIAMAAQATAAAAAqIAAJbQAAAsgNgBgAgLkuIAAJPQAAAgAJABIAGAAQAIgBABggIAApPQgBgSgFgBIgMAAQgHABABASg");
	this.shape_2.setTransform(203.3,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagHAIQgHAJgIgBIgRAAIAAFLgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_3.setTransform(194.4,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgPAAIAlqwIAIAAIAhKwgAgKBcIAZAAIgNkug");
	this.shape_4.setTransform(184.2,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYF4IAAhAIgvAAIAABAIgOAAIAAhWIAHAAQAKgBAAggIAAp5IAzAAIAAKaIAHAAIAABWgAgHENQAAAMgCAJIAbAAIAAqDIgZAAg");
	this.shape_5.setTransform(172.8,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMFYQgOABAAgsIAAi0IAOAAIAACoQAAAgAJABIAHAAQAJgBAAggIAAkAQAAgTgIgBIgXAAIAAgUIAXAAQAIgBAAgYIAAkOQAAgSgGgBIgNAAQgGABAAASIAAC1IgOAAIAAi1QAAgqAUAAIANAAQAUAAAAAqIAAERQAAAagJADIAEADQAFADAAAWIAAERQAAAsgOgBg");
	this.shape_6.setTransform(162.7,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXFYIAAgWIAGAAQAJgBAAgUIgfqFIAOAAIAZIqIAYoqIAQAAIgkKJQgCAngKAAg");
	this.shape_7.setTransform(146.2,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaFYIAAl3IgTF3IgNAAIgTl3IAAF3IgNAAIAAqwIANAAIAZIvIAaovIANAAIAAKwg");
	this.shape_8.setTransform(134.7,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgQAAIAmqwIAIAAIAhKwgAgLBcIAaAAIgMkug");
	this.shape_9.setTransform(123.3,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguFYIAAqwIANAAIAAKaIAcAAIAAqaIAMAAIAAKaIAbAAIAAqaIANAAIAAKwg");
	this.shape_10.setTransform(111,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaFYIgJjlIgdAAIgLDlIgQAAIAmqwIAIAAIAgKwgAgLBcIAaAAIgNkug");
	this.shape_11.setTransform(98.7,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagJADIAEADQAFADAAAWIAAEnQAAAWgHgBgAgMFCIAVAAQAEAAAAgQIAAkRQAAgTgIgBIgRAAgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_12.setTransform(88.5,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIAOAAIAAFRIARAAQAIgBAHAIQAHAIAAAbIAAEhQAAAVgKgBgAgMFCIAWAAQADAAAAgKIAAkTQAAgYgIAAIgRAAg");
	this.shape_13.setTransform(73.2,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUF4IAAhAIg1AAIAAqwIAOAAIAAKaIAZAAIAAqaIAOAAIAAKaIANAAIAABWg");
	this.shape_14.setTransform(63.7,5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFFYIAAqwIALAAIAAKwg");
	this.shape_15.setTransform(56,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMFYQgOABAAgsIAAi0IAOAAIAACoQAAAgAJABIAHAAQAJgBAAggIAAkAQAAgTgIgBIgXAAIAAgUIAXAAQAIgBAAgYIAAkOQAAgSgGgBIgNAAQgGABAAASIAAC1IgOAAIAAi1QAAgqAUAAIANAAQAUAAAAAqIAAERQAAAagJADIAEADQAFADAAAWIAAERQAAAsgOgBg");
	this.shape_16.setTransform(49.1,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYF4IAAhAIgvAAIAABAIgOAAIAAhWIAHAAQAKgBAAggIAAp5IA0AAIAAKaIAGAAIAABWgAgHENQAAAMgCAJIAbAAIAAqDIgZAAg");
	this.shape_17.setTransform(39,5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLFYQgOABAAgsIAApbQAAgqAUAAIAMAAQATAAAAAqIAAJbQAAAsgOgBgAgMkuIAAJPQAAAgAKABIAFAAQAKgBgBggIAApPQAAgSgFgBIgMAAQgHABAAASg");
	this.shape_18.setTransform(29,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANFYIgZlLIAAFLIgOAAIAAqwIAOAAIAAFRIAZlRIAOAAIgbFWIAbFag");
	this.shape_19.setTransform(20.1,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguFYIAAqwIAOAAIAAKaIAbAAIAAqaIALAAIAAKaIAbAAIAAqaIAOAAIAAKwg");
	this.shape_20.setTransform(9.1,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgQAAIAmqwIAIAAIAgKwgAgLBcIAaAAIgMkug");
	this.shape_21.setTransform(-9.4,2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagJADIAEADQAFADAAAWIAAEnQAAAWgHgBgAgMFCIAVAAQAEAAAAgQIAAkRQAAgTgIgBIgRAAgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_22.setTransform(-19.7,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFFYIAAqwIALAAIAAKwg");
	this.shape_23.setTransform(-26.6,2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AANFYIAAqZIgZAAIAAKZIgOAAIAAqwIA1AAIAAKwg");
	this.shape_24.setTransform(-33.5,2.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVFYIAAqwIAsAAIAAAXIgfAAIAAE6IAfAAIAAAUIgfAAIAAE1IAfAAIAAAWg");
	this.shape_25.setTransform(-48.3,2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANFYIAAlLIgZAAIAAFLIgOAAIAAqwIAOAAIAAFRIAZAAIAAlRIAOAAIAAKwg");
	this.shape_26.setTransform(-56.8,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AANFYIAAlLIgZAAIAAFLIgOAAIAAqwIAOAAIAAFRIAZAAIAAlRIAOAAIAAKwg");
	this.shape_27.setTransform(-65.8,2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAaFYIgJjlIgdAAIgLDlIgPAAIAlqwIAIAAIAgKwgAgKBcIAZAAIgNkug");
	this.shape_28.setTransform(-76,2.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagJADIAEADQAFADAAAWIAAEnQAAAWgHgBgAgMFCIAVAAQAEAAAAgQIAAkRQAAgTgIgBIgRAAgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_29.setTransform(-86.3,2.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAiFYIAAqwIANAAIAAKwgAguFYIAAqwIANAAIAAFRIATAAQAJgBAFAIQAGAIABAbIAAEhQgBAVgHgBgAghFCIAZAAQADAAAAgKIAAkTQAAgYgJAAIgTAAg");
	this.shape_30.setTransform(-97.3,2.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhFYIgblLIAAFLIgLAAIAAlLIgbFLIgOAAIAdlaIgdlWIAOAAIAbFRIAAlRIALAAIAAFRIAblRIAOAAIgdFWIAdFag");
	this.shape_31.setTransform(-110.3,2.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgXF+IAAgXIAGAAQAJAAAAgUIgeqFIANAAIAZIqIAYoqIAQAAIgkKJQgCAngKAAgAgUlZQgIgPAAgVIAPAAQgBAKAFAIQAEAHAFAAQAFAAAEgHQAFgIAAgKIAPAAQAAAVgIAPQgJAPgMAAQgLAAgJgPg");
	this.shape_32.setTransform(-122.5,-1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWFYIAAqwIAtAAIAAAXIgfAAIAAE6IAfAAIAAAUIgfAAIAAE1IAfAAIAAAWg");
	this.shape_33.setTransform(-138.6,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgPAAIAlqwIAIAAIAhKwgAgKBcIAZAAIgNkug");
	this.shape_34.setTransform(-148.4,2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AANFYIAAlLIgZAAIAAFLIgOAAIAAqwIAOAAIAAFRIAZAAIAAlRIAOAAIAAKwg");
	this.shape_35.setTransform(-158.6,2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagHAIQgHAJgIgBIgRAAIAAFLgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_36.setTransform(-167.6,2.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWFYIAAqwIAsAAIAAAXIgeAAIAAE6IAeAAIAAAUIgeAAIAAE1IAeAAIAAAWg");
	this.shape_37.setTransform(-176.1,2.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAaFYIAAl3IgTF3IgNAAIgTl3IAAF3IgNAAIAAqwIANAAIAZIvIAaovIANAAIAAKwg");
	this.shape_38.setTransform(-185.9,2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMFYQgOABAAgsIAAi0IAOAAIAACoQAAAgAJABIAHAAQAJgBAAggIAAkAQAAgTgIgBIgXAAIAAgUIAXAAQAIgBAAgYIAAkOQAAgSgGgBIgNAAQgGABAAASIAAC1IgOAAIAAi1QAAgqAUAAIANAAQAUAAAAAqIAAERQAAAagJADIAEADQAFADAAAWIAAERQAAAsgOgBg");
	this.shape_39.setTransform(-196.1,2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgPAAIAlqwIAIAAIAhKwgAgKBcIAZAAIgMkug");
	this.shape_40.setTransform(-206.3,2.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagHAIQgHAJgIgBIgRAAIAAFLgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_41.setTransform(-216.6,2.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AANFYIAAqZIgZAAIAAKZIgOAAIAAqwIA1AAIAAKwg");
	this.shape_42.setTransform(-225.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.2,-49.7,466.5,110.5);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABsFPIgaiHIioAAIgbCHIhFAAICBqeIBrAAICAKegAhNCIICVAAIhLmCg");
	this.shape.setTransform(54.2,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkFPIAApZIh8AAIAAhFIFBAAIAABFIh8AAIAAJZg");
	this.shape_1.setTransform(15.1,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwEoQglguAAhNIAAhJIBGAAIAABNQAAAuATAaQATAZAoAAQAnAAATgZQAUgaAAguIAAicIh0AAIAAhAIB0AAIAAiFQAAgugUgaQgTgagnAAQgoAAgTAaQgTAaAAAuIAAA2IhFAAIAAgyQAAgnAJgfQAJggASgVQATgXAcgLQAcgMAlAAQAmAAAcAMQAdALASAXQATAVAJAgQAJAfAAAnIAAFZQABBNgmAuQglAuhMAAQhMAAgkgug");
	this.shape_2.setTransform(-22.2,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiEFPIAAqeIEJAAIAABFIi/AAIAAJZg");
	this.shape_3.setTransform(-58.1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1 copy
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4092B8").s().p("ABsFPIgbiHIinAAIgbCHIhEAAICAqdIBrAAICAKdgAhNCIICVAAIhLmCg");
	this.shape_4.setTransform(56.2,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4092B8").s().p("AgkFPIAApZIh8AAIAAhEIFBAAIAABEIh8AAIAAJZg");
	this.shape_5.setTransform(17.1,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4092B8").s().p("AhwEoQgmguABhNIAAhJIBGAAIAABNQAAAuATAaQAUAZAnAAQAnAAATgZQAUgagBguIAAicIhzAAIAAhAIBzAAIAAiFQABgugUgaQgTgagnAAQgnAAgUAaQgTAaAAAuIAAA1IhFAAIAAgxQAAgmAJggQAJgfASgWQATgWAcgMQAcgMAlAAQAmAAAcAMQAdAMASAWQATAWAJAfQAJAgAAAmIAAFZQAABNglAuQglAuhMAAQhLAAglgug");
	this.shape_6.setTransform(-20.2,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4092B8").s().p("AiEFPIAAqdIEJAAIAABEIi/AAIAAJZg");
	this.shape_7.setTransform(-56.1,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-51.6,157.1,105.4);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AieGCQgcAAgTgTQgTgUAAgbIAAp/QAAgcATgTQATgTAcAAIE9AAQAcAAATATQATATAAAcIAAJ/QAAAbgTAUQgUATgbAAgAixlSQgIAIAAALIAAJ/QAAALAIAIQAIAHALAAIE9AAQALAAAIgHQAIgIAAgLIAAp/QAAgLgIgIQgIgIgLAAIk9AAQgLAAgIAIgAgVE9QgJgJAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANQAAAOgJAJQgJAJgNAAQgMAAgJgJgAgNEYQgFAGAAAIQAAAJAFAFQAGAGAHAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgFgIAAQgHAAgGAFgAibDyIAAnsIE3AAIAAHsgAgokbQgEAAgDgDQgCgDAAgDQAAgEACgDQADgDAEAAIBRAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-38.7,45.2,77.4);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bokal();
	this.instance.setTransform(-157,-286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-286,314,572);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cover2();
	this.instance.setTransform(-21,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-20,42,41);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cover1();
	this.instance.setTransform(-17,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-5,34,10);


(lib.Symbol16copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// нарэшце
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2CXIAAglIhrAAIAAAlIgdAAIAAg/IARAAQAIgIABgJQADgKABgMIAKjHIBpAAIAADuIAUAAIAAA/gAgXAxQgBAOgDAKQgDAJgGAGIBEAAIAAjTIgvAAg");
	this.shape.setTransform(46.9,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArCEIgLg1IhBAAIgKA1IgcAAIAzkHIApAAIAzEHgAgeA2IA6AAIgciYg");
	this.shape_1.setTransform(28.6,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5CEIAAkHIA5AAQAeAAAOARQAOARABAeIAAAhQgBAggPAOQgPAQgeAAIgaAAIAABogAgcABIAaAAQAQAAAHgGQAIgIAAgTIAAgkQAAgTgHgIQgHgKgPABIgcAAg");
	this.shape_2.setTransform(12.9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1CEIAAkHIBrAAIAAAbIhNAAIAABaIA/AAIAAAZIg/AAIAABeIBNAAIAAAbg");
	this.shape_3.setTransform(-2.2,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgCEIAAjsIg/AAIAADsIgeAAIAAkHIB7AAIAAEHg");
	this.shape_4.setTransform(-17.9,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArCEIgLg1IhBAAIgKA1IgcAAIAzkHIApAAIAzEHgAgeA2IA6AAIgciYg");
	this.shape_5.setTransform(-34.7,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgCEIAAh3Ig/AAIAAB3IgeAAIAAkHIAeAAIAAB3IA/AAIAAh3IAeAAIAAEHg");
	this.shape_6.setTransform(-51.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// нарэшце
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4092B8").s().p("AA1CXIAAglIhqAAIAAAlIgdAAIAAg/IASAAQAGgIADgJQACgKAAgMIAKjHIBpAAIAADuIAUAAIAAA/gAgYAxQgBAOgCAKQgDAJgGAGIBFAAIAAjTIgwAAg");
	this.shape_7.setTransform(48.4,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4092B8").s().p("AAqCEIgKg1IhBAAIgLA1IgbAAIAzkIIApAAIAzEIgAgeA1IA6AAIgciXg");
	this.shape_8.setTransform(30.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4092B8").s().p("Ag6CEIAAkIIA6AAQAfABANARQAPARAAAfIAAAfQAAAggPAPQgPAPgeAAIgaAAIAABpgAgbABIAaAAQAOAAAIgGQAIgJAAgTIAAgjQAAgSgHgKQgHgIgPgBIgbAAg");
	this.shape_9.setTransform(14.4,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4092B8").s().p("Ag1CEIAAkIIBrAAIAAAbIhNAAIAABbIA/AAIAAAZIg/AAIAABeIBNAAIAAAbg");
	this.shape_10.setTransform(-0.7,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4092B8").s().p("AAgCEIAAjtIg/AAIAADtIgeAAIAAkIIB7AAIAAEIg");
	this.shape_11.setTransform(-16.4,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4092B8").s().p("AAqCEIgKg1IhBAAIgKA1IgcAAIAzkIIApAAIAzEIgAgeA1IA6AAIgciXg");
	this.shape_12.setTransform(-33.2,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4092B8").s().p("AAgCEIAAh3Ig/AAIAAB3IgeAAIAAkIIAeAAIAAB5IA/AAIAAh5IAeAAIAAEIg");
	this.shape_13.setTransform(-50,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.3,-22.6,122.2,44.8);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// нарэшце
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABnFBIhokVIhsEVIhFAAICDlKIh6k4IBKAAIBiECIBkkCIBDAAIh4E4ICBFKg");
	this.shape.setTransform(33.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiFFCIAAhBQAqACAUgOQAVgPAJgkIAPgrIiUnYIBIAAIBBDfIAqCgIAmigIA6jfIBKAAIiKH0QgIAkgMAcQgLAbgSASQgTATgdAIQgYAHgjAAIgOAAg");
	this.shape_1.setTransform(-6.4,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiNFBIAAqCICMAAQBLAAAiAqQAiAqAABKIAABOQAABNglAkQgjAnhMABIg/AAIAAD9gAhFADIA/AAQAmAAAUgSQATgUAAguIAAhWQAAgsgRgWQgRgWgmAAIhEAAg");
	this.shape_2.setTransform(-42.8,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// нарэшце
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4092B8").s().p("ABnFBIhokVIhsEVIhFAAICDlKIh6k3IBLAAIBhEBIBkkBIBDAAIh4E3ICAFKg");
	this.shape_3.setTransform(35.8,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4092B8").s().p("AiFFCIAAhBQAqACAUgOQAVgPAJgkIAPgrIiUnYIBIAAIBBDfIAqCgIAmigIA6jfIBKAAIiKH0QgIAkgMAcQgLAbgSASQgTATgdAIQgYAHgjAAIgOAAg");
	this.shape_4.setTransform(-4.4,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4092B8").s().p("AiNFBIAAqBICMAAQBLAAAiApQAiAqAABKIAABOQAABMglAmQgjAnhMgBIg/AAIAAD+gAhFADIA/AAQAnAAATgSQATgTAAgvIAAhWQAAgsgRgWQgRgWgmAAIhEAAg");
	this.shape_5.setTransform(-40.8,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-48.1,121.7,101.3);


(lib.Symbol7copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,9.4).s().p("AhHBFQgbgeAAgpQAAgoAbgdQAdgbAoAAQApAAAeAbQAeAdAAAoQAAApgeAeQgeAegpAAQgoAAgdgeg");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10.1,20,20);


(lib.Symbol7copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAmQgQgRABgVQgBgWAQgRQAPgPAXABQAWgBAQAPQAQARAAAWQAAAVgQARQgQARgWAAQgXAAgPgRg");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.6,11,11);


(lib.Symbol7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.157)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.9).s().p("AhrBmQgngrAAg/QAAg7AngrQAsgpA7AAQA/AAArApQAuArgBA7QABA/guArQgrAug/gBQg7ABgsgug");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,5.8).s().p("AgrAqQgRgSAAgYQAAgZARgSQASgRAZAAQAYAAASARQATASAAAZQAAAYgTASQgSASgYABQgZgBgSgSg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-14.9,29.6,29.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlMC2IAAgfIgBgfIi9AAIgLA+IgdAAIgCgwIgCgwIAhAAQAJgJAIgPQAIgQAEgSQAFgQADgTIAFglIACghIABgYIAAgYIAAgPIgCgPIgCgWICuAAIgCBRIgBBLIAAA1IAEA2IAmAAIgIAeIgSBCgAnGhwIgBApQgBAbgDAaQgFAZgGAdQgHAdgLAVIBsAAIAAjlIhKAAgAjKB3QgagMgPgWQgQgVgIgdQgGgdgBgeQABgiAIgdQAJgdARgVQATgUAagNQAcgLAkAAIAcABQAMABAJADQAKADAJADIAWAJIgZAoQgMgLgPgIQgQgHgWAAQgXAAgPAMQgOALgIATQgIATgEAVQgCAXAAASQAAAXACAUQAEAXAIARQAIARAQALQAQALAaAAQAXgBAUgKQAUgLAOgPIATAgQgOALgLAFQgMAIgNAFQgNAFgPACQgPADgTAAQgkAAgagNgAvYBVIALABQAPAAAKgLQALgLAGgQQAIgSAEgUQADgSACgVIADgpIABggIAAgXIgBgPIgEglIC0AAIgCBRIgBBJIABBDQABAkAHAoIhFAAIAAkHIhOAAIgBAzIgBAvQAAAWgDAWQgDAVgFARIgJAcQgHAQgJAMQgJANgOAKQgOAJgTAAIgKAAIgEAAgAOSB4IgRg8QgHgYgHgQIhkAAIgiBkIgsAAQAGgIAJgVQAJgUAKgdIAXg8IAWg/IAhhgIBAAAIALAkIARA2IATA+IAWA8IAUA0QAIAXAHAKgAMagMIBPAAIAAABIAAAAIgQgyIgVhEIgCAAgAIvB4IAAizIgCg4QgCgdgGghIDHAAIgHAUIgHAWIgqgHQgTgCgRAAIgjABIgCBGQgBAiABAsIABAcQAAAiAFA1gAG8B4IgQg8IgOgoIhkAAIgiBkIhfAAQgMgLgKgOIgVgfIgUgfIgWgeIgSgRIgTgRIAAgBQARgJAQgRQASgSANgVQAPgVALgWQAKgVADgQIA0AAQgIARgKASQgKATgMASQgNATgNAPQgOAPgOAMIAAAAIAAAAQAQAMASAVQASAUASAZIAjAwIAQAWIAGgNIATgxIAXg8IAWg/IAhhgIBAAAIAKAkIASA2IATA+IAVA8QALAgAJAUQAJAXAHAKgAFFgMIBPAAIAAABIAAAAIgQgyIgWhEIgBAAgAAAB4IAAizQAAgdgBgeQgDgfgFgcIBHAAIgCBOIgBBMIABBHQABAkAGAkgAqSB4IAAizQAAgbgCgdQgCgdgGghIBJAAIgDBYIgBBRIABA8QACAfAGAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-18.2,197.1,36.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4092B8").s().p("AlMC2IAAgfIgBgfIi9AAIgLA+IgdAAIgCgwIgCgwIAhAAQAJgJAIgPQAIgQAEgSQAFgQADgTIAFglIACghIABgYIAAgYIAAgPIgCgPIgCgWICuAAIgCBRIgBBLIAAA1IAEA2IAmAAIgIAeIgSBCgAnGhwIgBApQgBAbgDAaQgFAZgGAdQgHAdgLAVIBsAAIAAjlIhKAAgAjKB3QgagMgPgWQgQgVgIgdQgGgdgBgeQABgiAIgdQAJgdARgVQATgUAagNQAcgLAkAAIAcABQAMABAJADQAKADAJADIAWAJIgZAoQgMgLgPgIQgQgHgWAAQgXAAgPAMQgOALgIATQgIATgEAVQgCAXAAASQAAAXACAUQAEAXAIARQAIARAQALQAQALAaAAQAXgBAUgKQAUgLAOgPIATAgQgOALgLAFQgMAIgNAFQgNAFgPACQgPADgTAAQgkAAgagNgAvYBVIALABQAPAAAKgLQALgLAGgQQAIgSAEgUQADgSACgVIADgpIABggIAAgXIgBgPIgEglIC0AAIgCBRIgBBJIABBDQABAkAHAoIhFAAIAAkHIhOAAIgBAzIgBAvQAAAWgDAWQgDAVgFARIgJAcQgHAQgJAMQgJANgOAKQgOAJgTAAIgKAAIgEAAgAOSB4IgRg8QgHgYgHgQIhkAAIgiBkIgsAAQAGgIAJgVQAJgUAKgdIAXg8IAWg/IAhhgIBAAAIALAkIARA2IATA+IAWA8IAUA0QAIAXAHAKgAMagMIBPAAIAAABIAAAAIgQgyIgVhEIgCAAgAIvB4IAAizIgCg4QgCgdgGghIDHAAIgHAUIgHAWIgqgHQgTgCgRAAIgjABIgCBGQgBAiABAsIABAcQAAAiAFA1gAG8B4IgQg8IgOgoIhkAAIgiBkIhfAAQgMgLgKgOIgVgfIgUgfIgWgeIgSgRIgTgRIAAgBQARgJAQgRQASgSANgVQAPgVALgWQAKgVADgQIA0AAQgIARgKASQgKATgMASQgNATgNAPQgOAPgOAMIAAAAIAAAAQAQAMASAVQASAUASAZIAjAwIAQAWIAGgNIATgxIAXg8IAWg/IAhhgIBAAAIAKAkIASA2IATA+IAVA8QALAgAJAUQAJAXAHAKgAFFgMIBPAAIAAABIAAAAIgQgyIgWhEIgBAAgAAAB4IAAizQAAgdgBgeQgDgfgFgcIBHAAIgCBOIgBBMIABBHQABAkAGAkgAqSB4IAAizQAAgbgCgdQgCgdgGghIBJAAIgDBYIgBBRIABA8QACAfAGAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-18.2,197.1,36.5);


(lib.bot3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bottleReg();
	this.instance.setTransform(-91,-322.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-322.5,182,645);


(lib.bot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottleBig();
	this.instance.setTransform(-91,-322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-322,182,644);


(lib.bot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottleBlurred();
	this.instance.setTransform(-72.8,-261.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,-261.6,145.6,523.2);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol16copy();
	this.t2.setTransform(0,2.7);

	this.t1 = new lib.Symbol16();
	this.t1.setTransform(0,-52.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-100.8,123.7,125.8);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.setTransform(-0.2,0.4,1,1,-146.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-28.7,57.7,57.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc1
	this.mc1 = new lib.Symbol19();
	this.mc1.setTransform(19.1,0);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

	// mc2
	this.mc2 = new lib.Symbol21();
	this.mc2.setTransform(19.3,-0.4,1,0.188);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-5.8,57.7,10.9);


(lib.Symbol6copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7copy2();
	this.instance.setTransform(52.8,113.5,1.97,1.97,0,180,0);

	this.instance_1 = new lib.Symbol7copy2();
	this.instance_1.setTransform(23.7,113.5,1.97,1.97,0,180,0);

	this.instance_2 = new lib.Symbol7copy2();
	this.instance_2.setTransform(-5.5,113.5,1.97,1.97,0,180,0);

	this.instance_3 = new lib.Symbol7copy2();
	this.instance_3.setTransform(43.5,140.4,1.97,1.97,0,180,0);

	this.instance_4 = new lib.Symbol7copy2();
	this.instance_4.setTransform(14.3,140.4,1.97,1.97,0,180,0);

	this.instance_5 = new lib.Symbol7copy2();
	this.instance_5.setTransform(-14.8,140.4,1.97,1.97,0,180,0);

	this.instance_6 = new lib.Symbol7copy2();
	this.instance_6.setTransform(34.1,167.3,1.97,1.97,0,180,0);

	this.instance_7 = new lib.Symbol7copy2();
	this.instance_7.setTransform(5,167.3,1.97,1.97,0,180,0);

	this.instance_8 = new lib.Symbol7copy2();
	this.instance_8.setTransform(-24.2,167.3,1.97,1.97,0,180,0);

	this.instance_9 = new lib.Symbol7copy2();
	this.instance_9.setTransform(24.8,194.2,1.97,1.97,0,180,0);

	this.instance_10 = new lib.Symbol7copy2();
	this.instance_10.setTransform(-4.4,194.2,1.97,1.97,0,180,0);

	this.instance_11 = new lib.Symbol7copy2();
	this.instance_11.setTransform(-33.5,194.2,1.97,1.97,0,180,0);

	this.instance_12 = new lib.Symbol7copy2();
	this.instance_12.setTransform(15.4,221.1,1.97,1.97,0,180,0);

	this.instance_13 = new lib.Symbol7copy2();
	this.instance_13.setTransform(-13.7,221.1,1.97,1.97,0,180,0);

	this.instance_14 = new lib.Symbol7copy2();
	this.instance_14.setTransform(-42.9,221.1,1.97,1.97,0,180,0);

	this.instance_15 = new lib.Symbol7copy2();
	this.instance_15.setTransform(6.1,248.2,1.97,1.97,0,180,0);

	this.instance_16 = new lib.Symbol7copy2();
	this.instance_16.setTransform(-23.1,248.2,1.97,1.97,0,180,0);

	this.instance_17 = new lib.Symbol7copy2();
	this.instance_17.setTransform(-52.2,248.2,1.97,1.97,0,180,0);

	this.instance_18 = new lib.Symbol7copy2();
	this.instance_18.setTransform(62.4,87,1.97,1.97);

	this.instance_19 = new lib.Symbol7copy2();
	this.instance_19.setTransform(33.3,87,1.97,1.97);

	this.instance_20 = new lib.Symbol7copy2();
	this.instance_20.setTransform(4.1,87,1.97,1.97);

	this.instance_21 = new lib.Symbol7copy2();
	this.instance_21.setTransform(52.8,60.2,1.97,1.97);

	this.instance_22 = new lib.Symbol7copy2();
	this.instance_22.setTransform(23.6,60.2,1.97,1.97);

	this.instance_23 = new lib.Symbol7copy2();
	this.instance_23.setTransform(-5.5,60.2,1.97,1.97);

	this.instance_24 = new lib.Symbol7copy2();
	this.instance_24.setTransform(43.2,33.4,1.97,1.97);

	this.instance_25 = new lib.Symbol7copy2();
	this.instance_25.setTransform(14.1,33.4,1.97,1.97);

	this.instance_26 = new lib.Symbol7copy2();
	this.instance_26.setTransform(-15.1,33.4,1.97,1.97);

	this.instance_27 = new lib.Symbol7copy2();
	this.instance_27.setTransform(33.7,6.6,1.97,1.97);

	this.instance_28 = new lib.Symbol7copy2();
	this.instance_28.setTransform(4.5,6.6,1.97,1.97);

	this.instance_29 = new lib.Symbol7copy2();
	this.instance_29.setTransform(-24.6,6.6,1.97,1.97);

	this.instance_30 = new lib.Symbol7copy2();
	this.instance_30.setTransform(24.1,-20.2,1.97,1.97);

	this.instance_31 = new lib.Symbol7copy2();
	this.instance_31.setTransform(-5,-20.2,1.97,1.97);

	this.instance_32 = new lib.Symbol7copy2();
	this.instance_32.setTransform(-34.2,-20.2,1.97,1.97);

	this.instance_33 = new lib.Symbol7copy2();
	this.instance_33.setTransform(14.6,-47,1.97,1.97);

	this.instance_34 = new lib.Symbol7copy2();
	this.instance_34.setTransform(-14.6,-47,1.97,1.97);

	this.instance_35 = new lib.Symbol7copy2();
	this.instance_35.setTransform(-43.7,-47,1.97,1.97);

	this.instance_36 = new lib.Symbol7copy2();
	this.instance_36.setTransform(5,-73.8,1.97,1.97);

	this.instance_37 = new lib.Symbol7copy2();
	this.instance_37.setTransform(-24.1,-73.8,1.97,1.97);

	this.instance_38 = new lib.Symbol7copy2();
	this.instance_38.setTransform(-53.3,-73.8,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-93.7,155.1,361.8);


(lib.Symbol6copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.setTransform(29,8.5);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(22.4,8.5);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(26.5,14.9);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(19.1,14.6);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(22.6,20.5);

	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(14.4,19.5);

	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(17.6,25.2);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(11.7,28.6);

	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(8.4,22.9);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(5.1,30.5);

	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(1.6,24.3);

	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(-1.7,30.7);

	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(-5.2,23.6);

	this.instance_13 = new lib.Symbol7();
	this.instance_13.setTransform(-8.4,29.4);

	this.instance_14 = new lib.Symbol7();
	this.instance_14.setTransform(-14.6,26.5);

	this.instance_15 = new lib.Symbol7();
	this.instance_15.setTransform(-11.5,20.9);

	this.instance_16 = new lib.Symbol7();
	this.instance_16.setTransform(-20,22.2);

	this.instance_17 = new lib.Symbol7();
	this.instance_17.setTransform(-16.8,16.4);

	this.instance_18 = new lib.Symbol7();
	this.instance_18.setTransform(-24.3,16.8);

	this.instance_19 = new lib.Symbol7();
	this.instance_19.setTransform(-20.6,10.7);

	this.instance_20 = new lib.Symbol7();
	this.instance_20.setTransform(-27.3,10.7);

	this.instance_21 = new lib.Symbol7();
	this.instance_21.setTransform(-22.6,4.1);

	this.instance_22 = new lib.Symbol7();
	this.instance_22.setTransform(-28.8,4);

	this.instance_23 = new lib.Symbol7();
	this.instance_23.setTransform(-22.8,-2.8);

	this.instance_24 = new lib.Symbol7();
	this.instance_24.setTransform(-29,-2.8);

	this.instance_25 = new lib.Symbol7();
	this.instance_25.setTransform(-27.6,-9.6);

	this.instance_26 = new lib.Symbol7();
	this.instance_26.setTransform(-24.9,-15.8);

	this.instance_27 = new lib.Symbol7();
	this.instance_27.setTransform(-21.1,-9.5);

	this.instance_28 = new lib.Symbol7();
	this.instance_28.setTransform(-6.5,-23.3);

	this.instance_29 = new lib.Symbol7();
	this.instance_29.setTransform(-12.7,-20.2);

	this.instance_30 = new lib.Symbol7();
	this.instance_30.setTransform(-17.7,-15.4);

	this.instance_31 = new lib.Symbol7();
	this.instance_31.setTransform(-20.8,-21.4);

	this.instance_32 = new lib.Symbol7();
	this.instance_32.setTransform(-15.7,-25.8);

	this.instance_33 = new lib.Symbol7();
	this.instance_33.setTransform(-9.6,-29);

	this.instance_34 = new lib.Symbol7();
	this.instance_34.setTransform(-2.9,-30.7);

	this.instance_35 = new lib.Symbol7();
	this.instance_35.setTransform(0.3,-24.4);

	this.instance_36 = new lib.Symbol7();
	this.instance_36.setTransform(7.1,-23.4);

	this.instance_37 = new lib.Symbol7();
	this.instance_37.setTransform(3.9,-30.7);

	this.instance_38 = new lib.Symbol7();
	this.instance_38.setTransform(10.5,-29.1);

	this.instance_39 = new lib.Symbol7();
	this.instance_39.setTransform(21.9,-9.8);

	this.instance_40 = new lib.Symbol7();
	this.instance_40.setTransform(13.3,-20.4);

	this.instance_41 = new lib.Symbol7();
	this.instance_41.setTransform(28.7,-9.7);

	this.instance_42 = new lib.Symbol7();
	this.instance_42.setTransform(25.9,-16);

	this.instance_43 = new lib.Symbol7();
	this.instance_43.setTransform(18.3,-15.7);

	this.instance_44 = new lib.Symbol7();
	this.instance_44.setTransform(21.8,-21.5);

	this.instance_45 = new lib.Symbol7();
	this.instance_45.setTransform(16.6,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-45.6,87.6,91);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.setTransform(9,18.3);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(3.3,18.3);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(6.3,12.2);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(0,12.2);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(-2.8,18.3);

	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(-8.9,18.4);

	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(-6.3,12.2);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(-27,30.5);

	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(-19.6,30.5);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(-24.6,24.4);

	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(-17.3,24.4);

	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(-22.3,18.3);

	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(-14.9,18.3);

	this.instance_13 = new lib.Symbol7();
	this.instance_13.setTransform(-20,12.2);

	this.instance_14 = new lib.Symbol7();
	this.instance_14.setTransform(-12.6,12.2);

	this.instance_15 = new lib.Symbol7();
	this.instance_15.setTransform(-17.6,6.1);

	this.instance_16 = new lib.Symbol7();
	this.instance_16.setTransform(-10.3,6.1);

	this.instance_17 = new lib.Symbol7();
	this.instance_17.setTransform(19.6,30.5);

	this.instance_18 = new lib.Symbol7();
	this.instance_18.setTransform(27,30.5);

	this.instance_19 = new lib.Symbol7();
	this.instance_19.setTransform(17.3,24.4);

	this.instance_20 = new lib.Symbol7();
	this.instance_20.setTransform(24.6,24.4);

	this.instance_21 = new lib.Symbol7();
	this.instance_21.setTransform(14.9,18.3);

	this.instance_22 = new lib.Symbol7();
	this.instance_22.setTransform(22.3,18.4);

	this.instance_23 = new lib.Symbol7();
	this.instance_23.setTransform(12.6,12.2);

	this.instance_24 = new lib.Symbol7();
	this.instance_24.setTransform(20,12.2);

	this.instance_25 = new lib.Symbol7();
	this.instance_25.setTransform(10.3,6.1);

	this.instance_26 = new lib.Symbol7();
	this.instance_26.setTransform(17.6,6.1);

	this.instance_27 = new lib.Symbol7();
	this.instance_27.setTransform(-15.3,0);

	this.instance_28 = new lib.Symbol7();
	this.instance_28.setTransform(-7.9,0);

	this.instance_29 = new lib.Symbol7();
	this.instance_29.setTransform(8,0);

	this.instance_30 = new lib.Symbol7();
	this.instance_30.setTransform(15.3,0);

	this.instance_31 = new lib.Symbol7();
	this.instance_31.setTransform(-13,-6.1);

	this.instance_32 = new lib.Symbol7();
	this.instance_32.setTransform(-5.6,-6.1);

	this.instance_33 = new lib.Symbol7();
	this.instance_33.setTransform(5.6,-6.1);

	this.instance_34 = new lib.Symbol7();
	this.instance_34.setTransform(13,-6.1);

	this.instance_35 = new lib.Symbol7();
	this.instance_35.setTransform(-10.6,-12.2);

	this.instance_36 = new lib.Symbol7();
	this.instance_36.setTransform(-3.3,-12.2);

	this.instance_37 = new lib.Symbol7();
	this.instance_37.setTransform(3.3,-12.2);

	this.instance_38 = new lib.Symbol7();
	this.instance_38.setTransform(10.7,-12.2);

	this.instance_39 = new lib.Symbol7();
	this.instance_39.setTransform(-8.3,-18.3);

	this.instance_40 = new lib.Symbol7();
	this.instance_40.setTransform(-0.1,-18.3);

	this.instance_41 = new lib.Symbol7();
	this.instance_41.setTransform(-6,-24.4);

	this.instance_42 = new lib.Symbol7();
	this.instance_42.setTransform(8.3,-18.3);

	this.instance_43 = new lib.Symbol7();
	this.instance_43.setTransform(6,-24.4);

	this.instance_44 = new lib.Symbol7();
	this.instance_44.setTransform(0,-24.4);

	this.instance_45 = new lib.Symbol7();
	this.instance_45.setTransform(3.7,-30.5);

	this.instance_46 = new lib.Symbol7();
	this.instance_46.setTransform(-3.7,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.8,-45.4,83.6,90.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.setTransform(19.2,30.5);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(11.8,30.5);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(19.2,23.8);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(11.8,23.8);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(19.2,17);

	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(11.8,17);

	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(19.2,10.2);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(11.8,10.2);

	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(19.2,3.4);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(11.8,3.4);

	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(19.2,-3.3);

	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(11.8,-3.3);

	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(19.2,-10.1);

	this.instance_13 = new lib.Symbol7();
	this.instance_13.setTransform(11.8,-10.1);

	this.instance_14 = new lib.Symbol7();
	this.instance_14.setTransform(19.2,-16.9);

	this.instance_15 = new lib.Symbol7();
	this.instance_15.setTransform(11.8,-16.9);

	this.instance_16 = new lib.Symbol7();
	this.instance_16.setTransform(19.2,-23.7);

	this.instance_17 = new lib.Symbol7();
	this.instance_17.setTransform(11.8,-23.7);

	this.instance_18 = new lib.Symbol7();
	this.instance_18.setTransform(19.2,-30.4);

	this.instance_19 = new lib.Symbol7();
	this.instance_19.setTransform(11.8,-30.4);

	this.instance_20 = new lib.Symbol7();
	this.instance_20.setTransform(5.4,10.7);

	this.instance_21 = new lib.Symbol7();
	this.instance_21.setTransform(5.3,3.8);

	this.instance_22 = new lib.Symbol7();
	this.instance_22.setTransform(-7.2,9.1);

	this.instance_23 = new lib.Symbol7();
	this.instance_23.setTransform(-0.9,10.5);

	this.instance_24 = new lib.Symbol7();
	this.instance_24.setTransform(-1.2,3.2);

	this.instance_25 = new lib.Symbol7();
	this.instance_25.setTransform(-7.2,0.8);

	this.instance_26 = new lib.Symbol7();
	this.instance_26.setTransform(-12.8,6.1);

	this.instance_27 = new lib.Symbol7();
	this.instance_27.setTransform(-16.8,1.2);

	this.instance_28 = new lib.Symbol7();
	this.instance_28.setTransform(-11.1,-4.3);

	this.instance_29 = new lib.Symbol7();
	this.instance_29.setTransform(-18.7,-4.9);

	this.instance_30 = new lib.Symbol7();
	this.instance_30.setTransform(-11.7,-10.8);

	this.instance_31 = new lib.Symbol7();
	this.instance_31.setTransform(-19.1,-11.3);

	this.instance_32 = new lib.Symbol7();
	this.instance_32.setTransform(-11.8,-17.4);

	this.instance_33 = new lib.Symbol7();
	this.instance_33.setTransform(-19.1,-17.6);

	this.instance_34 = new lib.Symbol7();
	this.instance_34.setTransform(-11.8,-23.9);

	this.instance_35 = new lib.Symbol7();
	this.instance_35.setTransform(-19.1,-24);

	this.instance_36 = new lib.Symbol7();
	this.instance_36.setTransform(-11.9,-30.4);

	this.instance_37 = new lib.Symbol7();
	this.instance_37.setTransform(-19.1,-30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-45.3,67.9,90.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.glow = new lib.Symbol6copy2();
	this.glow.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglFHQgJgIAAgMQAAgMAJgJQAIgJAMAAQANAAAGAJQAJAJAAAMQAAAMgJAIQgGAJgNAAQgMAAgIgJgAAdFFQgJgJAAgMQAAgMAJgJQAJgJAMABQANgBAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAhpE6QgIgIAAgNQAAgMAIgJQAKgJAMAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgKgJgABfEyQgJgJABgLQgBgNAJgJQAJgIAMgBQAMABAJAIQAIAJAAANQAAALgIAJQgJAJgMAAQgMAAgJgJgAinEdQgIgIAAgNQAAgMAIgJQAKgJAMAAQAMAAAIAJQAKAJgBAMQABANgKAIQgIAJgMAAQgMAAgKgJgACaEQQgIgIAAgNQAAgMAIgIQAJgJANAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgNAAgJgJgAgEEHQgIgIAAgNQAAgMAIgIQAHgJANAAQALAAAJAJQAJAIAAAMQAAANgJAIQgJAJgLAAQgNAAgHgJgAhIEBQgIgJAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIgBAMQABANgJAJQgJAIgMAAQgMAAgJgIgAA+D6QgIgKAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAKQgJAIgMAAQgMAAgJgIgAjcDyQgJgIAAgMQAAgNAJgJQAJgIAMgBQAMABAJAIQAIAJAAANQAAAMgIAIQgJAJgMAAQgMAAgJgJgAiHDlQgJgJAAgMQAAgMAJgIQAIgKAMABQANgBAIAKQAJAIAAAMQAAAMgJAJQgIAJgNAAQgMAAgIgJgADNDhQgJgIAAgMQAAgMAJgKQAIgIAMAAQANAAAIAIQAJAKAAAMQAAAMgJAIQgIAKgNgBQgMABgIgKgAB6DYQgJgJABgMQgBgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAIgMABQgMgBgJgIgAkGC8QgJgIAAgMQAAgMAJgJQAIgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAIQgIAKgNgBQgMABgIgKgAi8C5QgIgJgBgNQABgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAJQgJAIgMABQgMgBgJgIgADzCpQgJgIAAgNQAAgMAJgJQAJgJAMAAQAMAAAKAJQAIAJAAAMQAAANgIAIQgKAJgMAAQgMAAgJgJgACqCmQgJgJAAgMQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAjhB/QgJgJAAgMQAAgMAJgJQAIgJAMABQANgBAIAJQAJAJAAAMQAAAMgJAJQgIAIgNAAQgMAAgIgIgAklB/QgIgJAAgMQAAgMAIgJQAKgJAMABQAMgBAIAJQAJAJAAAMQAAAMgJAJQgIAIgMAAQgMAAgKgIgAENBqQgJgKAAgMQAAgMAJgJQAJgJALAAQANAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgNAAQgLAAgJgIgADKBpQgJgIABgNQgBgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgAj2A+QgJgKABgMQgBgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAk0A9QgJgKAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAj4gGQgIgIgBgMQABgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAHgMAAQgMAAgJgHgAk2gHQgIgIAAgMQAAgMAIgJQAJgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAIQgIAIgMgBQgNABgJgIgAjnhIQgJgJAAgNQAAgMAJgJQAIgIANAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNAAQgNAAgIgIgAkohJQgJgJAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAIAJABAMQgBANgIAJQgJAIgMAAQgMAAgJgIgAEJhLQgJgJABgMQgBgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgADFhMQgIgJgBgMQABgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAjFiEQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJAAAMQAAAMgIAJQgJAIgNAAQgMAAgJgIgAChiHQgIgIAAgNQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBANgIAIQgJAJgNAAQgMAAgJgJgAkNiIQgIgJgBgNQABgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAJQgJAJgMAAQgMAAgJgJgADtiJQgIgKAAgMQAAgMAIgIQAJgJANAAQALAAAJAJQAJAIAAAMQAAAMgJAKQgJAIgLAAQgNAAgJgIgAiSizQgJgKAAgLQAAgNAJgJQAIgIANgBQAMABAIAIQAJAJAAANQAAALgJAKQgIAIgMAAQgNAAgIgIgABvi1QgJgKAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAjki/QgJgJAAgNQAAgLAJgJQAJgJAMAAQAMAAAIAJQAKAJgBALQABANgKAJQgIAIgMAAQgMAAgJgIgADFjBQgJgIAAgNQAAgMAJgIQAJgKALABQANgBAJAKQAIAIABAMQgBANgIAIQgJAJgNAAQgLAAgJgJgAhVjTQgJgIAAgNQAAgMAJgIQAJgJAMAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgAAxjUQgJgIABgNQgBgMAJgIQAJgJAMAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgAgRjeQgIgIgBgMQABgNAIgIQAJgJAKAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAJgMAAQgKAAgJgJgAixjsQgIgJAAgNQAAgLAIgJQAJgJANAAQAMAAAJAJQAIAJAAALQAAANgIAJQgJAIgMABQgNgBgJgIgACQjtQgIgJAAgMQAAgMAIgJQAKgJALAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNgBQgLABgKgJgAh0kMQgIgJgBgMQABgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAIgMAAQgMAAgJgIgABUkNQgJgJAAgLQAAgNAJgJQAJgIAMAAQAMAAAIAIQAKAJAAANQAAALgKAJQgIAJgMAAQgMAAgJgJgAARkdQgIgIgBgMQABgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAJgMAAQgMAAgJgJgAgxkdQgJgIAAgMQAAgNAJgIQAJgJAMAAQAMAAAIAJQAIAIAAANQAAAMgIAIQgIAJgMAAQgMAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4092B8").s().p("AglFIQgJgJAAgMQAAgNAJgIQAJgJALAAQANAAAHAJQAIAIABANQgBAMgIAJQgHAIgNABQgLgBgJgIgAAdFFQgJgJABgMQgBgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAhpE6QgIgJAAgMQAAgMAIgJQAKgJAMABQAMgBAIAJQAKAJgBAMQABAMgKAJQgIAJgMAAQgMAAgKgJgABfEyQgIgIAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIgBANQABAMgJAIQgJAJgMAAQgMAAgJgJgAimEdQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAIAJQAKAJgBAMQABANgKAIQgIAJgMAAQgNAAgIgJgACaERQgIgKAAgMQAAgMAIgIQAJgKANABQAMgBAIAKQAJAIAAAMQAAAMgJAKQgIAIgMAAQgNAAgJgIgAgDEIQgJgKAAgMQAAgMAJgIQAGgJAMAAQANAAAIAJQAJAIAAAMQAAAMgJAKQgIAIgNAAQgMAAgGgIgAhIEBQgJgJAAgNQAAgMAJgJQAIgIANAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNAAQgNAAgIgIgAA+D6QgJgKAAgLQAAgNAJgJQAIgIANgBQAMABAJAIQAJAJAAANQAAALgJAKQgJAIgMAAQgNAAgIgIgAjcDyQgJgIABgMQgBgNAJgIQAJgJAMAAQAMAAAJAJQAIAIAAANQAAAMgIAIQgJAJgMAAQgMAAgJgJgAiHDlQgJgIAAgNQAAgMAJgJQAIgJAMAAQANAAAJAJQAIAJABAMQgBANgIAIQgJAJgNAAQgMAAgIgJgADNDhQgJgIAAgMQAAgNAJgIQAIgJAMAAQANAAAJAJQAIAIABANQgBAMgIAIQgJAJgNAAQgMAAgIgJgAB6DYQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJgBAMQABAMgJAJQgJAIgMAAQgMAAgJgIgAkGC8QgJgIAAgMQAAgMAJgJQAIgJAMAAQAMAAAKAJQAIAJAAAMQAAAMgIAIQgKAKgMgBQgMABgIgKgAi8C5QgJgJAAgNQAAgLAJgJQAJgJAMAAQANAAAIAJQAJAJAAALQAAANgJAJQgIAIgNABQgMgBgJgIgADzCpQgIgJgBgMQABgMAIgJQAJgJANAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMAAQgNAAgJgJgACqCmQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAjiB/QgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAKAIQAIAJAAAMQAAAMgIAJQgKAJgMgBQgMABgJgJgAkkB/QgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAAMgJAJQgIAJgMgBQgNABgIgJgAEMBpQgIgJAAgLQAAgNAIgJQAKgIALgBQANABAJAIQAIAJAAANQAAALgIAJQgJAJgNAAQgLAAgKgJgADKBpQgIgIAAgMQAAgNAIgJQAJgIAMgBQAMABAJAIQAJAJgBANQABAMgJAIQgJAJgMAAQgMAAgJgJgAj2A9QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJgBAMQABAMgJAJQgJAJgMAAQgMAAgJgJgAk0A8QgJgIAAgMQAAgNAJgJQAJgIAMgBQAMABAJAIQAJAJgBANQABAMgJAIQgJAJgMAAQgMAAgJgJgAj3gGQgJgIAAgNQAAgMAJgIQAIgKAMABQANgBAIAKQAJAIAAAMQAAANgJAIQgIAHgNAAQgMAAgIgHgAk1gHQgJgIAAgMQAAgMAJgJQAIgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAIQgIAHgNAAQgMAAgIgHgAjnhJQgJgIAAgMQAAgNAJgJQAJgIAMAAQAMAAAJAIQAIAJAAANQAAAMgIAIQgJAJgMAAQgMAAgJgJgAkohJQgJgJAAgMQAAgMAJgKQAIgIANAAQAMAAAJAIQAIAKABAMQgBAMgIAJQgJAIgMAAQgNAAgIgIgAEJhLQgIgIAAgNQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgADFhMQgJgJAAgMQAAgMAJgJQAJgIAMgBQANABAIAIQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAjFiEQgIgJAAgMQAAgMAIgJQAJgJANAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMgBQgNABgJgJgAChiHQgIgJAAgMQAAgMAIgJQAKgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAIgMAAQgMAAgKgIgAkNiIQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAIAJQAJAIAAANQAAAMgJAJQgIAJgNAAQgMAAgJgJgADuiJQgJgKAAgMQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAAMgJAKQgIAIgNAAQgMAAgIgIgAiSi0QgKgJABgLQgBgNAKgJQAIgIAMgBQANABAIAIQAJAJAAANQAAALgJAJQgIAJgNAAQgMAAgIgJgABvi1QgJgKABgLQgBgNAJgJQAJgIAMgBQAMABAJAIQAIAJAAANQAAALgIAKQgJAIgMAAQgMAAgJgIgAjki/QgJgJAAgNQAAgLAJgKQAJgIALAAQANAAAIAIQAJAKAAALQAAANgJAJQgIAIgNAAQgLAAgJgIgADEjAQgIgKAAgMQAAgMAIgJQAKgJALAAQANAAAJAJQAIAJABAMQgBAMgIAKQgJAIgNAAQgLAAgKgIgAhVjSQgJgKAAgMQAAgMAJgJQAJgIAMAAQAMAAAJAIQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAAxjTQgIgKAAgMQAAgMAIgIQAJgKAMABQAMgBAJAKQAJAIgBAMQABAMgJAKQgJAIgMAAQgMAAgJgIgAgRjeQgJgIAAgNQAAgMAJgIQAIgJALAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgLAAgIgJgAixjsQgIgJAAgNQAAgLAIgKQAJgIANAAQAMAAAIAIQAJAKAAALQAAANgJAJQgIAIgMABQgNgBgJgIgACQjtQgIgJAAgMQAAgNAIgIQAKgJAMAAQAMAAAIAJQAKAIAAANQAAAMgKAJQgIAJgMAAQgMAAgKgJgAh0kMQgJgJAAgMQAAgMAJgJQAJgJAMABQANgBAIAJQAJAJAAAMQAAAMgJAJQgIAIgNAAQgMAAgJgIgABUkNQgJgIAAgMQAAgNAJgIQAJgJAMAAQAMAAAIAJQAKAIgBANQABAMgKAIQgIAJgMAAQgMAAgJgJgAARkdQgJgIAAgNQAAgMAJgIQAJgKAMABQANgBAIAKQAJAIAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAgxkdQgJgIAAgNQAAgMAJgIQAJgJAMAAQAMAAAIAJQAIAIAAAMQAAANgIAIQgIAJgMAAQgMAAgJgJg");
	this.shape_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-45.6,87.6,91);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.glow = new lib.Symbol6copy();
	this.glow.setTransform(0,0.1);
	this.glow.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD4FFQgJgIABgMQgBgNAJgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAKgMgBQgMABgJgKgACuFFQgIgIAAgMQAAgNAIgIQAKgJAMAAQAMAAAIAJQAJAIAAANQAAAMgJAIQgIAKgMgBQgMABgKgKgAjYFFQgIgIAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAKgMgBQgMABgJgKgAkhFFQgJgIAAgMQAAgNAJgIQAIgJAMAAQANAAAIAJQAJAIAAANQAAAMgJAIQgIAKgNgBQgMABgIgKgADhEIQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgACXEIQgIgIAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgAjBEIQgIgIgBgNQABgMAIgIQAJgJANAAQALAAAJAJQAJAIAAAMQAAANgJAIQgJAJgLAAQgNAAgJgJgAkKEIQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgADJDMQgIgJAAgNQAAgMAIgJQAJgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAJQgIAIgMAAQgNAAgJgIgACADMQgJgJAAgNQAAgMAJgJQAIgIANAAQAMAAAJAIQAJAJAAAMQAAANgJAJQgJAIgMAAQgNAAgIgIgABEDMQgGgHgCgHQgCAHgGAHQgIAIgNAAQgNAAgIgIQgJgJAAgNQAAgMAJgJQAIgIANAAQANAAAIAIQAGAGACAJQACgJAGgGQAJgIAMAAQAMAAAIAIQAKAJgBAMQABANgKAJQgIAIgMAAQgMAAgJgIgAgvDMQgJgJAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAHAJAAAMQAAANgHAJQgIAIgMAAQgNAAgIgIgAhsDMQgKgJABgNQgBgMAKgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNAAQgMAAgIgIgAiqDMQgIgJAAgNQAAgMAIgJQAJgIAMAAQANAAAJAIQAIAJABAMQgBANgIAJQgJAIgNAAQgMAAgJgIgAjzDMQgIgJAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAJQgJAIgMAAQgMAAgJgIgACyCPQgIgKAAgLQAAgNAIgJQAJgIAMAAQAMAAAJAIQAJAJAAANQAAALgJAKQgJAIgMAAQgMAAgJgIgABpCPQgJgKAAgLQAAgNAJgJQAIgIAMAAQANAAAIAIQAJAJAAANQAAALgJAKQgIAIgNAAQgMAAgIgIgAAqCPQgJgKAAgLQAAgNAJgJQAJgIAMAAQAMAAAJAIQAJAJgBANQABALgJAKQgJAIgMAAQgMAAgJgIgAgTCPQgJgKAAgLQAAgNAJgJQAIgIALAAQAMAAAIAIQAJAJAAANQAAALgJAKQgIAIgMAAQgLAAgIgIgAhTCPQgJgKAAgLQAAgNAJgJQAJgIAMAAQAMAAAIAIQAKAJgBANQABALgKAKQgIAIgMAAQgMAAgJgIgAiSCPQgJgKABgLQgBgNAJgJQAJgIAMAAQAMAAAJAIQAIAJAAANQAAALgIAKQgJAIgMAAQgMAAgJgIgAjcCPQgIgKgBgLQABgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAKQgJAIgLAAQgNAAgJgIgACbBRQgJgJAAgLQAAgNAJgJQAIgIANAAQAMAAAJAIQAJAJAAANQAAALgJAJQgJAJgMAAQgNAAgIgJgABRBRQgJgJAAgLQAAgNAJgJQAJgIAMAAQAMAAAKAIQAIAJAAANQAAALgIAJQgKAJgMAAQgMAAgJgJgAh7BRQgIgJgBgLQABgNAIgJQAJgIANAAQALAAAKAIQAIAJAAANQAAALgIAJQgKAJgLAAQgNAAgJgJgAjFBRQgIgJAAgLQAAgNAIgJQAJgIAMAAQANAAAJAIQAIAJABANQgBALgIAJQgJAJgNAAQgMAAgJgJgACEAUQgJgIAAgMQAAgLAJgIQAIgJANAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgNAAgIgJgAA6AUQgJgIABgMQgBgLAJgIQAJgJAMAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgMAAgJgJgAhjAUQgJgIAAgMQAAgLAJgIQAIgJAMAAQANAAAIAJQAJAIAAALQAAAMgJAIQgIAJgNAAQgMAAgIgJgAitAUQgJgIABgMQgBgLAJgIQAJgJAMAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgMAAgJgJgABsgmQgJgKAAgMQAAgMAJgIQAJgKAMABQAMgBAKAKQAIAIAAAMQAAAMgIAKQgKAIgMAAQgMAAgJgIgAAjgmQgJgKAAgMQAAgMAJgIQAJgKALABQANgBAJAKQAIAIABAMQgBAMgIAKQgJAIgNAAQgLAAgJgIgAhMgmQgJgKAAgMQAAgMAJgIQAJgKAMABQAMgBAJAKQAIAIAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAiWgmQgIgKgBgMQABgMAIgIQAJgKANABQALgBAKAKQAIAIAAAMQAAAMgIAKQgKAIgLAAQgNAAgJgIgABVhjQgJgKABgMQgBgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAALhjQgIgKgBgMQABgMAIgJQAJgJANAAQALAAAKAJQAIAJAAAMQAAAMgIAKQgKAIgLAAQgNAAgJgIgAg1hjQgIgKgBgMQABgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAKQgJAIgMAAQgMAAgJgIgAh+hjQgJgKAAgMQAAgMAJgJQAIgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAKQgIAIgNAAQgMAAgIgIgAA+ihQgJgJAAgMQAAgMAJgJQAJgJALAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgLAAgJgJgAgUihQgJgJAAgMQAAgMAJgJQAIgJAMAAQALAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgLAAQgMAAgIgJgAhnihQgJgJAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMAAQgMAAgJgJgAAmjeQgIgJgBgMQABgMAIgJQAJgJANABQAMgBAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgJgJgAhQjeQgIgJgBgMQABgMAIgJQAJgJAMABQAMgBAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAgSjfQgJgIAAgMQAAgMAJgHQAIgJAKABQALgBAHAJQAJAHAAAMQAAAMgJAIQgHAIgLAAQgKAAgIgIgAAPkbQgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAg4kbQgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4092B8").s().p("AD4FFQgIgIAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACvFFQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAIAJQAJAIAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAjYFFQgJgIAAgNQAAgMAJgIQAJgJAMAAQANAAAIAJQAJAIAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAkhFFQgJgIAAgNQAAgMAJgIQAJgJALAAQAMAAAKAJQAIAIAAAMQAAANgIAIQgKAJgMAAQgLAAgJgJgADhEJQgJgJAAgNQAAgMAJgJQAIgIANAAQAMAAAJAIQAJAJAAAMQAAANgJAJQgJAIgMABQgNgBgIgIgACXEJQgJgJAAgNQAAgMAJgJQAJgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNABQgMgBgJgIgAjAEJQgJgJAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNABQgMgBgIgIgAkKEJQgJgJAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAIAJAAAMQAAANgIAJQgJAIgMABQgMgBgJgIgADKDMQgJgJAAgMQAAgMAJgKQAIgIAMAAQANAAAIAIQAJAKAAAMQAAAMgJAJQgIAIgNAAQgMAAgIgIgACADMQgJgJAAgMQAAgMAJgKQAJgIAMAAQAMAAAJAIQAIAKAAAMQAAAMgIAJQgJAIgMAAQgMAAgJgIgABEDMQgGgHgCgHQgCAHgGAHQgJAIgMAAQgMAAgJgIQgJgJAAgMQAAgMAJgKQAJgIAMAAQAMAAAJAIQAGAHACAIQACgIAGgHQAIgIAMAAQANAAAIAIQAJAKAAAMQAAAMgJAJQgIAIgNAAQgMAAgIgIgAgvDMQgKgJABgMQgBgMAKgKQAIgIAMAAQANAAAIAIQAHAKAAAMQAAAMgHAJQgIAIgNAAQgMAAgIgIgAhtDMQgJgJAAgMQAAgMAJgKQAJgIAMAAQAMAAAKAIQAIAKAAAMQAAAMgIAJQgKAIgMAAQgMAAgJgIgAiqDMQgIgJAAgMQAAgMAIgKQAKgIAMAAQAMAAAJAIQAJAKAAAMQAAAMgJAJQgJAIgMAAQgMAAgKgIgAjzDMQgJgJAAgMQAAgMAJgKQAJgIAMAAQANAAAIAIQAJAKAAAMQAAAMgJAJQgIAIgNAAQgMAAgJgIgACyCOQgJgJAAgLQAAgNAJgJQAJgIAMAAQANAAAIAIQAJAJAAANQAAALgJAJQgIAJgNAAQgMAAgJgJgABpCOQgJgJAAgLQAAgNAJgJQAJgIALAAQANAAAJAIQAIAJABANQgBALgIAJQgJAJgNAAQgLAAgJgJgAAqCOQgJgJAAgLQAAgNAJgJQAJgIAMAAQAMAAAJAIQAJAJAAANQAAALgJAJQgJAJgMAAQgMAAgJgJgAgTCOQgJgJAAgLQAAgNAJgJQAIgIALAAQAMAAAJAIQAIAJABANQgBALgIAJQgJAJgMAAQgLAAgIgJgAhTCOQgJgJAAgLQAAgNAJgJQAJgIAMAAQAMAAAIAIQAJAJAAANQAAALgJAJQgIAJgMAAQgMAAgJgJgAiSCOQgIgJAAgLQAAgNAIgJQAJgIAMAAQAMAAAJAIQAJAJgBANQABALgJAJQgJAJgMAAQgMAAgJgJgAjbCOQgJgJAAgLQAAgNAJgJQAIgIAMAAQANAAAIAIQAJAJAAANQAAALgJAJQgIAJgNAAQgMAAgIgJgACbBRQgJgIAAgNQAAgMAJgIQAJgJAMAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgABRBRQgIgIgBgNQABgMAIgIQAJgJANAAQAMAAAIAJQAJAIAAAMQAAANgJAIQgIAJgMAAQgNAAgJgJgAh7BRQgIgIgBgNQABgMAIgIQAJgJANAAQALAAAJAJQAJAIAAAMQAAANgJAIQgJAJgLAAQgNAAgJgJgAjFBRQgIgIAAgNQAAgMAIgIQAKgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgKgJgACEAVQgJgKAAgLQAAgLAJgIQAJgJALAAQANAAAJAJQAIAIABALQgBALgIAKQgJAIgNAAQgLAAgJgIgAA6AVQgIgKAAgLQAAgLAIgIQAJgJAMAAQAMAAAJAJQAJAIgBALQABALgJAKQgJAIgMAAQgMAAgJgIgAhkAVQgIgKAAgLQAAgLAIgIQAJgJAMAAQANAAAJAJQAIAIABALQgBALgIAKQgJAIgNAAQgMAAgJgIgAitAVQgIgKAAgLQAAgLAIgIQAJgJAMAAQAMAAAJAJQAJAIgBALQABALgJAKQgJAIgMAAQgMAAgJgIgABsgmQgIgKgBgMQABgMAIgJQAJgJANAAQALAAAKAJQAIAJAAAMQAAAMgIAKQgKAIgLAAQgNAAgJgIgAAigmQgIgKAAgMQAAgMAIgJQAKgJALAAQANAAAJAJQAIAJABAMQgBAMgIAKQgJAIgNAAQgLAAgKgIgAhMgmQgJgKAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAiWgmQgIgKgBgMQABgMAIgJQAJgJANAAQALAAAJAJQAJAJAAAMQAAAMgJAKQgJAIgLAAQgNAAgJgIgABVhkQgIgJAAgLQAAgNAIgJQAJgIAMgBQAMABAJAIQAJAJgBANQABALgJAJQgJAJgMAAQgMAAgJgJgAAMhkQgJgJAAgLQAAgNAJgJQAIgIANgBQAMABAIAIQAJAJAAANQAAALgJAJQgIAJgMAAQgNAAgIgJgAg1hkQgJgJAAgLQAAgNAJgJQAJgIAMgBQANABAIAIQAJAJAAANQAAALgJAJQgIAJgNAAQgMAAgJgJgAh/hkQgIgJAAgLQAAgNAIgJQAJgIAMgBQANABAJAIQAIAJABANQgBALgIAJQgJAJgNAAQgMAAgJgJgAA9ihQgIgIAAgNQAAgMAIgJQAKgJALABQANgBAJAJQAIAJABAMQgBANgIAIQgJAJgNAAQgLAAgKgJgAgUihQgKgIABgNQgBgMAKgJQAIgJAMABQALgBAIAJQAJAJAAAMQAAANgJAIQgIAJgLAAQgMAAgIgJgAhnihQgJgIAAgNQAAgMAJgJQAJgJAMABQAMgBAJAJQAIAJAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgAAnjeQgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAhQjeQgJgJAAgMQAAgMAJgJQAJgIAMAAQANAAAIAIQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAgTjfQgIgIAAgMQAAgMAIgHQAJgJAKAAQALAAAHAJQAJAHAAAMQAAAMgJAIQgHAIgLAAQgKAAgJgIgAAPkbQgIgJAAgMQAAgMAIgJQAJgIAMgBQAMABAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAg4kbQgJgJAAgMQAAgMAJgJQAIgIAMgBQANABAIAIQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgIgJg");
	this.shape_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.8,-45.3,83.6,90.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.glow = new lib.Symbol6();
	this.glow.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACqFFQgIgIAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhFFQgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgACqECQgIgJAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgABhECQgJgJAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAJQgIAIgMAAQgNAAgIgIgACqC+QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhC+QgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAAhB/QgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgNAAgIgJgAgdB9QgJgJAAgMQAAgMAJgJQAJgJAMAAQAKAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgKAAQgMAAgJgJgACqB6QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhB6QgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAhbBvQgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAJAIQAIAJAAAMQAAANgIAIQgJAJgMAAQgNAAgIgJgAiTBRQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMAAQgNAAgIgJgAAfA6QgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgACqA2QgIgIAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhA2QgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAggA0QgIgJAAgMQAAgMAIgJQAJgJAMAAQALAAAIAJQAJAJAAAMQAAAMgJAJQgIAIgLAAQgMAAgJgIgAi7AgQgJgJAAgMQAAgLAJgIQAIgJANAAQAMAAAJAJQAIAIAAALQAAAMgIAJQgJAIgMAAQgNAAgIgIgAhcAcQgJgJAAgMQAAgLAJgIQAJgJAMAAQAMAAAJAJQAJAIAAALQAAAMgJAJQgJAIgMAAQgMAAgJgIgACqgMQgIgIAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAJgMAAQgMAAgJgJgABhgMQgJgIAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAIQgIAJgMAAQgNAAgIgJgAiDgWQgIgIAAgNQAAgMAIgJQAJgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAjPgbQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgACqhPQgIgJAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgABhhPQgJgJAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAJQgIAIgMAAQgNAAgIgIgAiJhWQgJgJAAgMQAAgNAJgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgAjThbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqiTQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhiTQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAiJiYQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgIgJgAjTibQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqjXQgIgIAAgNQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhjXQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAiKjZQgJgJAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAjTjbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqkbQgIgIAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhkbQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAIAJQAJAIAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAiKkbQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgNAAgIgJgAjTkbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4092B8").s().p("ACqFFQgIgIAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhFFQgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgACqECQgIgJAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgABhECQgJgJAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAJQgIAIgMAAQgNAAgIgIgACqC+QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhC+QgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAAhB/QgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgNAAgIgJgAgdB9QgJgJAAgMQAAgMAJgJQAJgJAMAAQAKAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgKAAQgMAAgJgJgACqB6QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhB6QgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAhbBvQgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAJAIQAIAJAAAMQAAANgIAIQgJAJgMAAQgNAAgIgJgAiTBRQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMAAQgNAAgIgJgAAfA6QgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgACqA2QgIgIAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhA2QgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAggA0QgIgJAAgMQAAgMAIgJQAJgJAMAAQALAAAIAJQAJAJAAAMQAAAMgJAJQgIAIgLAAQgMAAgJgIgAi7AgQgJgJAAgMQAAgLAJgIQAIgJANAAQAMAAAJAJQAIAIAAALQAAAMgIAJQgJAIgMAAQgNAAgIgIgAhcAcQgJgJAAgMQAAgLAJgIQAJgJAMAAQAMAAAJAJQAJAIAAALQAAAMgJAJQgJAIgMAAQgMAAgJgIgACqgMQgIgIAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAJgMAAQgMAAgJgJgABhgMQgJgIAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAIQgIAJgMAAQgNAAgIgJgAiDgWQgIgIAAgNQAAgMAIgJQAJgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAjPgbQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgACqhPQgIgJAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgABhhPQgJgJAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAJQgIAIgMAAQgNAAgIgIgAiJhWQgJgJAAgMQAAgNAJgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgAjThbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqiTQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhiTQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAiJiYQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgIgJgAjTibQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqjXQgIgIAAgNQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhjXQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAiKjZQgJgJAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAjTjbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqkbQgIgIAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhkbQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAIAJQAJAIAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAiKkbQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgNAAgIgJgAjTkbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-45.3,67.9,90.6);


(lib.lid1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(2,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-11.2,199.1,38.5);


(lib.Symbol16_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.mc = new lib.Symbol37();
	this.mc.setTransform(0.3,97.3,1,1,0,0,0,0,98.3);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-39.7,45.2,77.4);


(lib.chas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.l3 = new lib.Symbol5();
	this.l3.setTransform(65.3,0);

	this.l2 = new lib.Symbol4();
	this.l2.setTransform(-8.1,-0.2);

	this.l1 = new lib.Symbol3();
	this.l1.setTransform(-75.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-45.6,218.2,91);


(lib.Symbol24 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.glow = new lib.Symbol6copy3();
	this.glow.setTransform(3.2,-87.2);
	this.glow.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

	// Layer 8
	this.instance = new lib.Symbol7copy();
	this.instance.setTransform(36.9,-80.6,1.97,1.97);

	this.instance_1 = new lib.Symbol7copy();
	this.instance_1.setTransform(7.7,-80.6,1.97,1.97);

	this.instance_2 = new lib.Symbol7copy();
	this.instance_2.setTransform(-21.4,-80.6,1.97,1.97);

	this.instance_3 = new lib.Symbol7copy();
	this.instance_3.setTransform(56,26.3,1.97,1.97,0,180,0);

	this.instance_4 = new lib.Symbol7copy();
	this.instance_4.setTransform(26.9,26.3,1.97,1.97,0,180,0);

	this.instance_5 = new lib.Symbol7copy();
	this.instance_5.setTransform(-2.3,26.3,1.97,1.97,0,180,0);

	this.instance_6 = new lib.Symbol7copy();
	this.instance_6.setTransform(46.7,53.2,1.97,1.97,0,180,0);

	this.instance_7 = new lib.Symbol7copy();
	this.instance_7.setTransform(17.5,53.2,1.97,1.97,0,180,0);

	this.instance_8 = new lib.Symbol7copy();
	this.instance_8.setTransform(-11.6,53.2,1.97,1.97,0,180,0);

	this.instance_9 = new lib.Symbol7copy();
	this.instance_9.setTransform(37.3,80.1,1.97,1.97,0,180,0);

	this.instance_10 = new lib.Symbol7copy();
	this.instance_10.setTransform(8.2,80.1,1.97,1.97,0,180,0);

	this.instance_11 = new lib.Symbol7copy();
	this.instance_11.setTransform(-21,80.1,1.97,1.97,0,180,0);

	this.instance_12 = new lib.Symbol7copy();
	this.instance_12.setTransform(28,107,1.97,1.97,0,180,0);

	this.instance_13 = new lib.Symbol7copy();
	this.instance_13.setTransform(-1.2,107,1.97,1.97,0,180,0);

	this.instance_14 = new lib.Symbol7copy();
	this.instance_14.setTransform(-30.3,107,1.97,1.97,0,180,0);

	this.instance_15 = new lib.Symbol7copy();
	this.instance_15.setTransform(18.6,133.9,1.97,1.97,0,180,0);

	this.instance_16 = new lib.Symbol7copy();
	this.instance_16.setTransform(-10.5,133.9,1.97,1.97,0,180,0);

	this.instance_17 = new lib.Symbol7copy();
	this.instance_17.setTransform(-39.7,133.9,1.97,1.97,0,180,0);

	this.instance_18 = new lib.Symbol7copy();
	this.instance_18.setTransform(9.3,160.9,1.97,1.97,0,180,0);

	this.instance_19 = new lib.Symbol7copy();
	this.instance_19.setTransform(-19.9,160.9,1.97,1.97,0,180,0);

	this.instance_20 = new lib.Symbol7copy();
	this.instance_20.setTransform(-49,160.9,1.97,1.97,0,180,0);

	this.instance_21 = new lib.Symbol7copy();
	this.instance_21.setTransform(65.6,-0.2,1.97,1.97);

	this.instance_22 = new lib.Symbol7copy();
	this.instance_22.setTransform(36.5,-0.2,1.97,1.97);

	this.instance_23 = new lib.Symbol7copy();
	this.instance_23.setTransform(7.3,-0.2,1.97,1.97);

	this.instance_24 = new lib.Symbol7copy();
	this.instance_24.setTransform(56,-27,1.97,1.97);

	this.instance_25 = new lib.Symbol7copy();
	this.instance_25.setTransform(26.8,-27,1.97,1.97);

	this.instance_26 = new lib.Symbol7copy();
	this.instance_26.setTransform(-2.3,-27,1.97,1.97);

	this.instance_27 = new lib.Symbol7copy();
	this.instance_27.setTransform(46.4,-53.8,1.97,1.97);

	this.instance_28 = new lib.Symbol7copy();
	this.instance_28.setTransform(17.3,-53.8,1.97,1.97);

	this.instance_29 = new lib.Symbol7copy();
	this.instance_29.setTransform(-11.9,-53.8,1.97,1.97);

	this.instance_30 = new lib.Symbol7copy();
	this.instance_30.setTransform(27.3,-107.4,1.97,1.97);

	this.instance_31 = new lib.Symbol7copy();
	this.instance_31.setTransform(-1.8,-107.4,1.97,1.97);

	this.instance_32 = new lib.Symbol7copy();
	this.instance_32.setTransform(-31,-107.4,1.97,1.97);

	this.instance_33 = new lib.Symbol7copy();
	this.instance_33.setTransform(17.8,-134.2,1.97,1.97);

	this.instance_34 = new lib.Symbol7copy();
	this.instance_34.setTransform(-11.4,-134.2,1.97,1.97);

	this.instance_35 = new lib.Symbol7copy();
	this.instance_35.setTransform(-40.5,-134.2,1.97,1.97);

	this.instance_36 = new lib.Symbol7copy();
	this.instance_36.setTransform(8.2,-161,1.97,1.97);

	this.instance_37 = new lib.Symbol7copy();
	this.instance_37.setTransform(-20.9,-161,1.97,1.97);

	this.instance_38 = new lib.Symbol7copy();
	this.instance_38.setTransform(-50.1,-161,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#689FE3","#5FA1ED"],[0,1],47.8,220.2,47.8,-220.2).s().p("AlabpIJ07pIp07oIBBAAIJ0boIp0bpg");
	this.shape.setTransform(57.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#22436B","#3065A1"],[0,1],47.8,220.2,47.8,-220.2).s().p("AlabpIJ07pIp07oIBBAAIJ0boIp0bpg");
	this.shape_1.setTransform(55.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#689FE3","#5FA1ED"],[0,1],47.8,220.2,47.8,-220.2).s().p("AlabpIJ07pIp07oIBBAAIJ0boIp0bpg");
	this.shape_2.setTransform(-44.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#22436B","#3065A1"],[0,1],47.8,220.2,47.8,-220.2).s().p("AlabpIJ07pIp07oIBBAAIJ0boIp0bpg");
	this.shape_3.setTransform(-46.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9AC1FE","#99BEEF"],[0,1],0,220.2,0,-220.2).s().p("As4bpIJ27pIp27oIP6AAIJ2boIp2bpg");
	this.shape_4.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(104,159,227,0.137)","rgba(95,161,237,0.459)"],[0,1],31.5,220.2,31.5,-220.2).s().p("An8bpIJ07pIp07oIGFAAIJ0boIp0bpg");
	this.shape_5.setTransform(-40.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,-180.9,183.9,361.8);


(lib.cheaps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.arr4 = new lib.Symbol24();
	this.arr4.setTransform(-942,-130.4,2,2);

	this.arr3 = new lib.Symbol24();
	this.arr3.setTransform(-595.3,-130.4,2,2);

	this.arr2 = new lib.Symbol24();
	this.arr2.setTransform(-248.6,-130.4,2,2);

	this.arr1 = new lib.Symbol24();
	this.arr1.setTransform(98.1,-130.4,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arr1},{t:this.arr2},{t:this.arr3},{t:this.arr4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1125.8,-492.3,1407.8,723.5);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var count = 1;
		var repeat = 20;
		var time2 = 4.0;
		var time3 = time2 + 4.0;
		var time4 = time3 + 3.0;
		
		var tl = new TimelineMax();
		tl.fromTo(r.blk, 0.7, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.bot1, 1.0, {scaleX:6.0, scaleY:6.0, alpha:0, ease:Expo.easeOut}, 0.0)
		  .from(r.chas1.l1, 1.0, {x:"-=180", scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.3)
		  .from(r.chas1.l2, 1.0, {x:"-=0", scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.5)
		  .from(r.chas1.l3, 1.0, {x:"+=180", scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.7)
		  .from(r.lid1, 1.0, {scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.8)
		  .from(r.t1, 1.0, {y:"+=200", scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.9)
		  
		  .from(r.shakeIcon, 0.5, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 1.0)
		  .from(r.shakeIcon, 1.0, {rotation:"-=70", ease:Elastic.easeOut}, 1.0)
		  //.call(glowArrs)
		  
		  .call(shakeIconFn)
		  .call(checkShake)
		  
		  
		  
		  //2
		  .to(r.blk, 0.1, {alpha:1, ease:Power0.easeNone}, time2+0.0)
		  .to(r.blk, 0.9, {alpha:0, ease:Power0.easeNone}, time2+0.1)
		  .call(glowArrs, this, time2+0)
		  
		  .staggerTo([r.shakeIcon, r.chas1.l3, r.chas1.l2, r.chas1.l1, r.lid1, r.t1, r.bot1], 0.7, {x:"+=450", ease:Expo.easeIn}, 0.05, time2+0.00)
		  .to(r.cheaps, 4.0, {x:"+=650", ease:Power0.easeNone}, time2+0.70)
		  .staggerFrom([r.cheaps.arr1, r.cheaps.arr2, r.cheaps.arr3, r.cheaps.arr4], 1.2, {x:"-=600", ease:Expo.easeOut}, 0.10, time2+0.70)
		  
		  .from(r.b1, 1.5, {x:"+=450", /*y:"+=600", rotation:"+=40", */ease:Expo.easeOut}, time2+0.70)
		  //.from(r.b2, 1.5, {x:"+=250", y:"+=500", rotation:"-=40", ease:Expo.easeOut}, time2+0.70)
		  .staggerFrom([r.t2.t1, r.t2.t2], 1.2, {x:"+=150", alpha:0, ease:Expo.easeOut}, 0.10, time2+1.20)
		  
		  //3
		  .staggerTo([r.cheaps.arr1, r.cheaps.arr2, r.cheaps.arr3, r.cheaps.arr4], 0.6, {x:"+=800", ease:Expo.easeIn}, 0.05, time3+0.00)
		  .staggerTo([/*r.cheaps, */r.b1, r.t2.t1, r.t2.t2], 0.6, {x:"-=350", ease:Expo.easeIn}, 0.05, time3+0.00)
		  .call(glowChas2)
		  .staggerTo([r.chas1.l1, r.chas1.l2, r.chas1.l3, r.lid1], 0.7, {x:"-=450", ease:Expo.easeOut}, 0.05, time3+0.70)
		  .staggerTo([r.bot2, r.cover], 0.7, {x:-84, ease:Expo.easeOut}, 0.00, time3+1.00)
		  
		  .to(r.cover, 0.2, {x:"+=100", y:"-=2", rotation:"+=90", ease:Power3.easeOut}, time3+2.00)
		  .to(r.cover.mc1, 0.1, {alpha:0, ease:Power0.easeNone}, time3+2.20)
		  .from(r.cover.mc2, 0.1, {alpha:0, ease:Power0.easeNone}, time3+2.20)
		  .to(r.cover.mc2, 0.3, {scaleY:1, ease:Power3.easeIn}, time3+2.20)
		  .to(r.cover, 0.6, {x:"+=150", y:"+=250", rotation:"+=60", ease:Power3.easeIn}, time3+2.20)
		  
		  
		  //4
		  .to(r.chas1, 1.3, {x:71, y:-231, scaleX:0.9, scaleY:0.9, ease:Expo.easeInOut}, time4+0.00)
		  .to(r.lid1, 1.3, {x:71, y:-176, scaleX:0.9, scaleY:0.9, ease:Expo.easeInOut}, time4+0.07)
		  .from(r.bokal, 1.3, {x:"+=450", ease:Expo.easeOut}, time4+0.60)
		  
		  
		  .call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 18)
		  ;
		
		
		
		function replay() {
		  if (count == repeat){
			  tl.kill();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			killglowChas2();
			glowChas2();
			tl.play(0);
		}
		
		
		
		//1st chas
		var z1 = this.chas1.l1.glow;
		function chas1Glowl1() {
			var i = 0;
			for (currObj in z1) {
			  if(z1[currObj] && typeof z1[currObj] == "object" && i>=56){
				  TweenMax.set(z1[currObj], {alpha:0});
				  del=Math.random()*8+0.6;
				  TweenMax.to(z1[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(z1[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  TweenMax.to(z1[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+6});
				  TweenMax.to(z1[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+6.1});
				  }
			i++;
			 }
		}
		chas1Glowl1();
		
		var z2 = this.chas1.l2.glow;
		function chas1Glowl2() {
			var i = 0;
			for (currObj in z2) {
			  if(z2[currObj] && typeof z2[currObj] == "object" && i>=56){
				  TweenMax.set(z2[currObj], {alpha:0});
				  del=Math.random()*8+0.6;
				  TweenMax.to(z2[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(z2[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  TweenMax.to(z2[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+6});
				  TweenMax.to(z2[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+6.1});
				  }
			i++;
			 }
		}
		chas1Glowl2();
		
		var z3 = this.chas1.l3.glow;
		function chas1Glowl3() {
			var i = 0;
			for (currObj in z3) {
			  if(z3[currObj] && typeof z3[currObj] == "object" && i>=56){
				  TweenMax.set(z3[currObj], {alpha:0});
				  del=Math.random()*8+0.6;
				  TweenMax.to(z3[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(z3[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  TweenMax.to(z3[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+6});
				  TweenMax.to(z3[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+6.1});
				  }
			i++;
			 }
		}
		chas1Glowl3();
		
		
		function glowChas2() {
			chas1Glowl1();
			chas1Glowl2();
			chas1Glowl3();
		}
		
		
		//1st chas
		var m = this.chas1.l1.glow;
		function killchas1Glowl1() {
			var i = 0;
			for (currObj in m) {
			  if(m[currObj] && typeof m[currObj] == "object" && i>=56){
				  TweenMax.killTweensOf(m[currObj])
				  }
			i++;
			 }
		}
		
		var mm = this.chas1.l2.glow;
		function killchas1Glowl2() {
			var i = 0;
			for (currObj in mm) {
			  if(mm[currObj] && typeof mm[currObj] == "object" && i>=56){
				  TweenMax.killTweensOf(mm[currObj])
				  }
			i++;
			 }
		}
		
		var mmm = this.chas1.l3.glow;
		function killchas1Glowl3() {
			var i = 0;
			for (currObj in mmm) {
			  if(mmm[currObj] && typeof mmm[currObj] == "object" && i>=56){
				  TweenMax.killTweensOf(mmm[currObj])
				  }
			i++;
			 }
		}
		
		
		function killglowChas2() {
			killchas1Glowl1();
			killchas1Glowl2();
			killchas1Glowl3();
		}
		
		var w = this.cheaps.arr1.glow;
		function arr1Glow() {
			var i = 0;
			for (currObj in w) {
			  if(w[currObj] && typeof w[currObj] == "object" && i>=56){
				  TweenMax.set(w[currObj], {alpha:0});
				  del=Math.random()*5+0.6;
				  TweenMax.to(w[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(w[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  //TweenMax.to(w[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+2});
				  //TweenMax.to(w[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+2.1});
				  }
			i++;
			 }
		}
		
		
		var ww = this.cheaps.arr2.glow;
		function arr2Glow() {
			var i = 0;
			for (currObj in ww) {
			  if(ww[currObj] && typeof ww[currObj] == "object" && i>=56){
				  TweenMax.set(ww[currObj], {alpha:0});
				  del=Math.random()*5+0.6;
				  TweenMax.to(ww[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(ww[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  //TweenMax.to(ww[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+2});
				  //TweenMax.to(ww[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+2.1});
				  }
			i++;
			 }
		}
		
		
		var www = this.cheaps.arr3.glow;
		function arr3Glow() {
			var i = 0;
			for (currObj in www) {
			  if(www[currObj] && typeof www[currObj] == "object" && i>=56){
				  TweenMax.set(www[currObj], {alpha:0});
				  del=Math.random()*5+0.6;
				  TweenMax.to(www[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(www[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  //TweenMax.to(www[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+2});
				  //TweenMax.to(www[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+2.1});
				  }
			i++;
			 }
		}
		
		
		var wwww = this.cheaps.arr4.glow;
		function arr4Glow() {
			var i = 0;
			for (currObj in wwww) {
			  if(wwww[currObj] && typeof wwww[currObj] == "object" && i>=56){
				  TweenMax.set(wwww[currObj], {alpha:0});
				  del=Math.random()*5+0.6;
				  TweenMax.to(wwww[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(wwww[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  //TweenMax.to(wwww[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+2});
				  //TweenMax.to(wwww[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+2.1});
				  }
			i++;
			 }
		}
		
		
		function glowArrs() {
			arr1Glow();
			arr2Glow();
			arr3Glow();
			arr4Glow();
		}
		
		
		function moveon() {
			TweenMax.killTweensOf(r.shakeIcon.mc);
			TweenMax.killTweensOf(r.warn);
			window.removeEventListener('devicemotion', YaoYiYao, false);
			tl.play();
		}
		
		
		function shakeIconFn() {
			TweenMax.to(r.shakeIcon.mc, 0.12, {rotation:"-=7", ease:Power0.easeNone}, 0.0)
			TweenMax.to(r.shakeIcon.mc, 0.12, {rotation:"+=15", yoyo:true, repeat:4, repeatDelay:0.0, delay:0.12, ease:Power0.easeNone}/*, 0.12*/)
			TweenMax.to(r.shakeIcon.mc, 0.12, {rotation:0, delay:0.60, ease:Power0.easeNone}/*, 0.60*/)
			TweenMax.to(r.shakeIcon.mc, 1.0, {delay:1.00, onComplete:shakeIconFn})
		}
		
		
		
		function checkShake() {
			tl.pause();
			TweenMax.to(r.warn, 1.0, {delay:5.00, onComplete:moveon})
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', YaoYiYao, false);
				//console.log(window.DeviceMotionEvent);
			}
		}
		
		var speed = 10; //speed
		var x = y = z = lastX = lastY = lastZ = 0;
		function YaoYiYao(eventData) {
			var acceleration = eventData.accelerationIncludingGravity;
			x = acceleration.x;
			y = acceleration.y;
			z = acceleration.z;
			
			if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ) > speed) {
				moveon();
				var x = y = z = lastX = lastY = lastZ = 0;
			}
			
			lastX = x;
			lastY = y;
			lastZ = z;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,2,2.135);
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// warn
	this.warn = new lib.warn();
	this.warn.setTransform(0,291);

	this.timeline.addTween(cjs.Tween.get(this.warn).wait(1));

	// shakeIcon
	this.shakeIcon = new lib.Symbol16_1();
	this.shakeIcon.setTransform(0,283.2,0.8,0.8,0,0,0,0,91.2);

	this.timeline.addTween(cjs.Tween.get(this.shakeIcon).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(88.1,18,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// b1
	this.b1 = new lib.bot2();
	this.b1.setTransform(-109,-14.5,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

	// cheaps
	this.cheaps = new lib.cheaps();

	this.timeline.addTween(cjs.Tween.get(this.cheaps).wait(1));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AK/asQhThTAAh2QAAgcAFgZIjqgDI73gYQiXgDhLgEQh9gIhjgVQi0gnhOheQgjgrgXhAQgRgtgPhKQg8knACkvQABkvBAklQAlirA0iBQAnhjBAhxQAuhQBOh5QB+jDBehvQCHifCShXQCEhOC6gtQBzgcDhggQJAhTEqghQHmg3GJgJQECgFCpAjQDnAwCMCDQBUBRBdCjQCUEIAvDMQAaB2AHCYQADBagDC3IgUSJQgCBogIA3QgPBXgkA8Qg/BkieBFQiPA+i2AgQiNAZjHAMIhhAFQAGAdAAAgQAAB2hUBTQhTBUh2AAQh2AAhUhUg");
	mask.setTransform(9,-250.4);

	// cover
	this.cover = new lib.Symbol17();
	this.cover.setTransform(383.2,-258.2,1.5,1.5,0,0,0,17,0);

	this.cover.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

	// chas1
	this.chas1 = new lib.chas();
	this.chas1.setTransform(0,-100.3,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.chas1).wait(1));

	// lid1
	this.lid1 = new lib.lid1();
	this.lid1.setTransform(0,-2.8,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.lid1).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(0,99.2,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// bot1
	this.bot1 = new lib.bot1();
	this.bot1.setTransform(0,-8);

	this.timeline.addTween(cjs.Tween.get(this.bot1).wait(1));

	// bot2
	this.bot2 = new lib.bot3();
	this.bot2.setTransform(353.5,-6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.bot2).wait(1));

	// bokal
	this.bokal = new lib.Symbol22();
	this.bokal.setTransform(4.3,98.3,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.bokal).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#84B9FF","#96D1EA","#84B9FF"],[0,0.502,1],0,429.2,0,-429.1).s().p("EglfBCtMAAAiFZMBK/AAAMAAACFZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1125.8,-492.3,1552.1,919.3);


// stage content:
(lib.pilsner_shakeBanner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#3C0600";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight < widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(240,427);

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-645.8,361.7,1555.8,919.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;