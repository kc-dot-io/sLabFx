  var sLabFx;
  var sL = {options:false};

  var sLAbFx=new Class({
    Implements:[Options,Events],
    options:{
      config:'animations.js',
      init: true
    },
    initialize:function(options){
      this.setOptions(options);
      this.load();
      this.prepare();                
    },
    handler:function(){
      this.sLFx = new sLFx(this.options,this);	
      this.sLEvents = new sLEvents(this.options,this);
      this.sLRegister = new sLRegister(this.options,this);

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
        this.sLFx.load(i);
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
      var _index;
      this.elements.each(function(_el,i){
          if(el.id == _el.id) return _index = i;
      }.bind(this));
      return _index;
    }
  });		
  
  var sLEvents=new Class({
    Implements:[Options,Events],
    options:{ },
    initialize:function(options,os){
      this.os = os;
      this.setOptions(options);
    },
    attach:function(i){
      this.index = i;
      this.element = this.os.getElements(i);
      this.fx = this.os.getFx(i);
      this.handler(i);
    },
    handler:function(i){
      this.fx.each(function(fx){
        switch(fx){
          case 'click': case 'mouseover': case 'mouseleave': case 'mouseout':
            this.element.addEvent(fx,function(){
              this.os.sLFx.fire(i,fx);
            }.bind(this));
          break;	
          case 'intro':
            if(this.os.options.init) this.os.sLFx.fire(i,fx);                            
          break;
          default: return; break;
        }
      }.bind(this));
      return;
    }
  });

  var sLRegister=new Class({
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
              opts[k]=__opt[0].name;
          }.bind(this));

          this.os.register($(_opt.id),opts);
          if(this.os.options.init) this.os.sLFx.load(i);
          if(this.os.options.init) this.os.sLEvents.attach(i);                        

        }.bind(this));
      }.bind(this));
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
    load:function(i){
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
            this._fx[i][__fx]=function(type,options,args){					
              switch(type){
                case 'morph':
                
                  if($(el))  new Fx.Morph(el,options).start(args);
                  
                break;
                case 'tween':
                
                  var hash = new Hash(args);
                  hash.each(function(v,k){ 
                      if($(el)) new Fx.Tween(el,options).start(k,v[0],v[1]);
                  }.bind(this));
                  
                break;
                default: return;	break;
              }
            }.bind(this);
          }.bind(this))
        } 
      }.bind(this));
    },
    fire:function(i,fx){// Need to add deep level chaining (arg3)				
      this.options.fx[i].each(function(_fx){
       _fx.fx.each(function(__fx){           
         var o = __fx[0].params; 
         if(fx == __fx[0].name) this._fx[i][fx].attempt([o.type,o.options,o.args],this)
         }.bind(this));
       }.bind(this));
    }
  });

