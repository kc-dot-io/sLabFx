		var sLabFx;
		var sL = {options:false};

		var sLAbFx=new Class({
				Implements:[Options,Events],
				options:{
						targets: '.sLAbFx',
						config:'sL.json',
						init: true
				},
				initialize:function(options){
						this.setOptions(options);
						this.load();
						this.prepare();                
				},
				handler:function(){
						this.sLFx = new sLFx(this.options,this);	
						this.sLDom = new sLDom(this.options,this);
						this.sLUtil = new sLUtil(this.options,this);

						sL = this;
						sLabFx = sL;
				},
				prepare:function(){
						this.elements = [];
						this.fx = [];
						this.index = 0;
				},
				register:function(el,fx){
						 this.elements[this.index]=el;
						 this.fx[this.index]=fx;
						 this.index++;
				},
				load:function(){
						if(sL.options){

						 this.setOptions(sL.options);
						 this.prepare();
						 this.handler();

					 	}else{

						 new Request({url: this.options.config, 
										 onSuccess: function(rsp){
										 var data = new JSON.decode(rsp);
										 sL.options = data;
										 this.setOptions(data);
										 this.handler();
										 }.bind(this)
										 }).send({});

				 }
		 		},
				chain:function(e,fx){
						if(this.sLFx){
							var i = this.getElementIndex(e);
							this.sLFx.run(i);
							this.sLFx.fire(i,fx,true);
						}
				},
				getElements:function(id){
						if(!$empty(id)) return this.elements[id];
							else return this.elements;
				},
				getFx:function(id){
						if(!$empty(id)) return this.fx[id];
						else return this.fx;
				},
				getElementIndex:function(el){
						var index;
						this.elements.each(function(_el,i){
								if(el.id == _el.id) return index = i;
						}.bind(this));
						return index;
				}
	});		


	var sLUtil=new Class({
				Implements:[Options,Events],
				options:{ },
				initialize:function(options,os){
						this.os = os;
						this.setOptions(options);
						this.handler();
				},
				handler:function(){
						this.options.fx.each(function(opt,i){
						var opts = [];
							opt.each(function(_opt,j){

									_opt.fx.each(function(__opt,k){
											opts[k]=__opt[0].id;
									}.bind(this));
	
									this.os.register($(_opt.id),opts);
									if(this.os.options.init) this.os.sLFx.run(i);
									if(this.os.options.init) this.os.sLDom.run(i);                        
	
							}.bind(this));
						}.bind(this));
				}			
	});		

	var sLDom=new Class({
				Implements:[Options,Events],
				options:{ },
				initialize:function(options,os){
						this.os = os;
						this.setOptions(options);
				},
				run:function(i){
						this.index = i;
						this.element = this.os.getElements(i);
						this.fx = this.os.getFx(i);
						this.handler(i);
				},
				handler:function(i){
					this.fx.each(function(fx){
							switch(fx){
								case 'click': case 'mouseover': case 'mouseleave':
									this.element.addEvent(fx,function(){
										this.os.sLFx.fire(i,fx);
									}.bind(this));
								break;	
								case 'intro':
									if(this.os.options.init) this.os.sLFx.fire(i,fx);                            
								break;
							}
					}.bind(this));
					return;
				}
	});		

	var sLFx=new Class({
					Implements:[Options,Events],
					options:{ },
					initialize:function(options,os){
							this.os = os;
							this.prepare();
							this.setOptions(options);
					},
					run:function(i){
							var el = this.os.getElements(i);
							var fx = this.os.getFx(i);
							this.handler(i,el,fx);
					},
					prepare:function(){
							this._fx = [];
							this._fxOpt=[];
					},
					handler:function(i,el,fx){
							this.options.fx.each(function(_fx){
							if(el.id == _fx[0].id){
								this._fx[i]=[];
								fx.each(function(__fx){                             
									this._fx[i][__fx]=function(action,options,args,chain){
												switch(action){
													case 'morph':
														if($(el))  new Fx.Morph(el,options).start(args);
													break;
													case 'tween':
														var hash = new Hash(args);
														hash.each(function(v,k){ 
																if($(el)) new Fx.Tween(el,options).start(k,v[0],v[1]);
														}.bind(this));
													break;
													default:
														var ar = action.split(":");
														if(ar[0]=='chain') this._fx[i][__fx].attempt([ar[1],options,args],this)
													break;
												}
										}.bind(this);
								}.bind(this))
							} 
						}.bind(this));
					},
					fire:function(i,fx,chain){
				 			this.options.fx[i].each(function(_fx){
								 _fx.fx.each(function(__fx){           
										 var o = __fx[0].params; 
										 if(fx == __fx[0].id) this._fx[i][fx].attempt([o.type,o.options,o.args,chain],this)
										 }.bind(this));
								 }.bind(this));
		 			}
	});

