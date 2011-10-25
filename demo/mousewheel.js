{ 
  fx:[
    [{ 
      element:'mousewheel',
      fx:[
        [{
          name:'load',
          params:{
            type:'tween',
            options:{
              duration: 1500,
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onStart:function(e)
              {  

              }
            },
            args:{
              'opacity':[0,1],
              'left': [0,500]
            }
          }
        }],
        [{
          name:'click',
          intercept: function(type,options,args,evt)
          {
            console.log(type,options,args,evt);
            return [ type, options, args ];
          },
          params:{
            type:'tween',
            options:{
              duration: 1500,
              transition: new Fx.Transition(Fx.Transitions.Expo.easeOut,2),
              onComplete:function(e)
              {                
                
              }
            },
            args:{
              'opacity':[0,1],
              'left': [0,500]
            }
          }
        }]
      ]
    }]
  ]	
}
