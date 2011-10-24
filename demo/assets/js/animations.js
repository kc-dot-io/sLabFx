{ 
  fx:[
    [{ 
      id:'wrapper',
      fx:[
        [{
          name:'intro',
          params:{
            type:'tween',
            options:{	duration:1500,
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onComplete:function(e){
                sLabFx.chain($('left-item'),'intro-one');
                sLabFx.chain($('right-item'),'intro-one');
              }
            },
            args:{'opacity':[0,1],'left':[0,300]
            }
          }
        }],
        [{
          name:'click',
          params:{
            type: 'tween',
            options:{ 	duration: 125, link:'cancel',
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onComplete:function(e){
                sLabFx.chain($('left-item'),'click-hide');
                sLabFx.chain($('right-item'),'click-hide');

                e.removeEvents();
                $('left-item').removeEvents();
                $('right-item').removeEvents();
              }
            },
            args:{ 'opacity':[1]
            }
          }
        }]
      ]
    }],
    //
    //  id: text item
    //  effects: intro, hide on click
    //
    [{  
      id:'text-item',
      fx:[
        [{
          name:'intro-one',
          params:{
            type:'tween',
            options:{	duration:515,
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onComplete: function(e){
              }
            },
            args:{'opacity':[0,1],'top':[0,40]
            }
          }
        }],
        [{
          name:'click-show',
          params:{
            type: 'morph',
            options:{ 	duration: 1525,
              transition: new Fx.Transition(Fx.Transitions.Circ.easeInOut,3),
              onComplete: function(e){
              }
            },
            args:{ 'opacity':[0,1],'top':[620,50]
            }
          }
        }]
      ]
    }],
    //
    //	id: left item
    //	effects: intro, hide on click
    //
    [{ 	
      id:'left-item',
      fx:[
        [{
          name:'intro-one',
          params:{
            type:'morph',
            options:{	duration:415, 
              transition: new Fx.Transition(Fx.Transitions.Quint.easeOut,2),
              onComplete: function(e){
              }
            },
            args:{'opacity':[0,1],'top':[-200,40]
            }
          }
        }],
        [{
          name:'click-hide',
          params:{
            type: 'tween',
            options:{ 	duration: 1215, link:'cancel', 
              transition: new Fx.Transition(Fx.Transitions.Back.easeIn,1),
              onComplete: function(e){
                  sLabFx.chain($('text-item'),'intro-one');
              }
            },
            args:{ 'left':[0,650],'top':[20]
            }
          }
        }],
         [{
          name:'mouseover',
          params:{
            type: 'tween',
            options:{ 	duration: 515, link:'chain',
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onStart: function(e){
                sLabFx.chain($('right-item'),'click-taunt');
              }
            },
            args:{ 'top':[40,20]
            }
          }
        }],
         [{
          name:'mouseout',
          params:{
            type: 'tween',
            options:{ 	duration: 515, link:'chain',
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onStart: function(e){
                sLabFx.chain($('right-item'),'click-taunt-off');
              }
            },
            args:{ 'top':[20,40]
            }
          }
        }]
      ]
    }],
    //
    //	id: right-item
    //	effects: intro, hide on click
    //
    [{ 
      id:'right-item',
      fx:[
        [{
          name:'intro-one',
          params:{
            type:'morph',
            options:{	duration:715,
              transition: new Fx.Transition(Fx.Transitions.Quint.easeOut,2)
            },
            args:{ 'opacity':[0,1],'top':[400,0],'left':[800,675]
            }
          }
        }],
        [{
          name:'click-hide',
          params:{
            type: 'tween',
            options:{	duration: 715,
              transition: new Fx.Transition(Fx.Transitions.Quint.easeIn,2)
            },
            args:{ 'opacity':[1,0],'top':[0,400],'left':[675,800]
            }
          }
        }],
        [{
          name:'click-taunt',
          params:{
            type: 'tween',
            options:{ 	duration: 515, link:'chain',
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2)
            },
            args:{ 'left':[675,690]
            }
          }
        }],
         [{
          name:'click-taunt-off',
          params:{
            type: 'tween',
            options:{ 	duration: 515, link:'chain',
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2)
            },
            args:{ 'left':[690,675]
            }
          }
        }]
      ]
    }]
  ]	
}