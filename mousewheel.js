{ 
  fx:[
    [{ 
      element:'effects-page',          
      fx:[
        [{
          name:'mousewheel',       
          alt_target: 'mousewheel',   
          intercept: function(type,options,args,alt_target,evt)
          {         
               
            var left = parseInt($(alt_target).getStyle('text-indent'));                      
            
            if(evt.wheel != -1 ) // this is how you overwrite an animation based on event value
              args['text-indent'] = [ left + 20 ]; 
            else args['text-indent'] = [ left - 20 ];  
                
            options.duration = 500; // overwrite duration
            
            return [ type, options, args, alt_target, evt ];
            
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
              'text-indent': [0,500]
            }
          }
        }]
      ]
    }],
    //
    //
    //
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
              'text-indent': [0,500]
            }
          }
        }]
      ]
    }]
  ]	
}
