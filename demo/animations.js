{ 
  fx:[
    [{ 
      element:'wrapper',
      fx:[
        [{
          name:'load',
          params:{
            type:'tween',
            options:{
              duration:1500,
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onComplete:function(e){
                sLabFx.chain($('left-item'),'load-one');
                sLabFx.chain($('right-item'),'load-one');
              }
            },
            args:{
              'opacity':[0,1],
              'left':[0,300]
            }
          }
        }]
      ]
    }],
    //
    //  element: text item
    //  effects: load, hide on click
    //
    [{  
      element:'text-item',
      fx:[
        [{
          name:'load-one',
          params:{
            type:'tween',
            options:{
              duration:515,
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onComplete: function(e){
              }
            },
            args:{
              'opacity':[0,1],
              'top':[0,40]
            }
          }
        }],
        [{
          name:'click',
          params:{
            type: 'morph',
            options:{ 
              duration: 1525,
              transition: new Fx.Transition(Fx.Transitions.Circ.easeInOut,3),
              onComplete: function(e){
              }
            },
            args:{ 
              'opacity':[0,1],
              'top':[620,50]
            }
          }
        }]
      ]
    }],
    //
    //	element: left item
    //	effects: load, hide on click
    //
    [{ 	
      element:'left-item',
      fx:[
        [{
          name:'load-one',
          params:{
            type:'morph',
            options:{
              duration:415, 
              transition: new Fx.Transition(Fx.Transitions.Quint.easeOut,2),
              onComplete: function(e){
              }
            },
            args:{
              'opacity':[0,1],
              'top':[-200,40]
            }
          }
        }],
        [{
          name:'click',
          params:{
            type: 'tween',
            options:{
              duration: 1215, link:'cancel', 
              transition: new Fx.Transition(Fx.Transitions.Back.easeIn,1),
              onStart: function(e){
                sLabFx.chain($('right-item'),'click');
              },
              onComplete: function(e){
                sLabFx.chain($('text-item'),'load-one');
                  
              }
            },
            args:{ 
              'left':[0,650],
              'top':[20]
            }
          }
        }],
         [{
          name:'mouseover',
          params:{
            type: 'tween',
            options:{
              duration: 515, link:'chain',
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onStart: function(e){
                sLabFx.chain($('right-item'),'click-taunt');
              }
            },
            args:{ 
              'top':[40,20]
            }
          }
        }],
         [{
          name:'mouseleave',
          params:{
            type: 'tween',
            options:{
              duration: 515, link:'chain',
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onStart: function(e){
                sLabFx.chain($('right-item'),'click-taunt-off');
              }
            },
            args:{ 
              'top':[20,40]
            }
          }
        }]
      ]
    }],
    //
    //	element: right-item
    //	effects: load, hide on click
    //
    [{ 
      element:'right-item',
      fx:[
        [{
          name:'load-one',
          params:{
            type:'morph',
            options:{
              duration:715,
              transition: new Fx.Transition(Fx.Transitions.Quint.easeOut,2)
            },
            args:{ 
              'opacity':[0,1],
              'top':[400,0],
              'left':[800,675]
            }
          }
        }],
        [{
          name:'click',
          params:{
            type: 'tween',
            options:{
              duration: 715,
              transition: new Fx.Transition(Fx.Transitions.Quint.easeIn,2)
            },
            args:{ 
              'opacity':[1,0],
              'top':[0,400],
              'left':[675,800]
            }
          }
        }],
        [{
          name:'click-taunt',
          params:{
            type: 'tween',
            options:{
              duration: 515, link:'chain',
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2)
            },
            args:{ 
              'left':[675,690]
            }
          }
        }],
         [{
          name:'click-taunt-off',
          params:{
            type: 'tween',
            options:{
              duration: 515, link:'chain',
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2)
            },
            args:{ 
              'left':[690,675]
            }
          }
        }]
      ]
    }]
  ]	
}
