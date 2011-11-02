{ 
  fx:[    
    [{ 
      element: 'container',          
      fx:[
        [{
          name:'load',
          alt_target: 'one',
          params:{
            type:'tween',
            options:{
              duration: 1500
            },
            args:{
              'opacity':[0,.7]
            }
          }
        }],
        [{
          name:'load',
          alt_target: 'two',
          params:{
            type:'tween',
            options:{
              duration: 1500
            },
            args:{
              'opacity':[0,.7]
            }
          }
        }]                
      ]
    }],
    [{
      element: window,
      fx:[
        [{
          name:'scroll',       
          alt_target: 'one',   
          intercept: function(type,options,args,alt_target,evt)
          {         
            var offset = $(window).getScroll();
            
            args['top'] = [offset.y];
            args['left'] =  [offset.y];  
             
            return [ type, options, args, alt_target, evt ];
            
          },
          params:{
            type:'tween',
            options:{
              duration: 250
            },
            args:{
              'margin-top': 0
            }
          }
        }],
        [{
          name:'scroll',       
          alt_target: 'two',   
          intercept: function(type,options,args,alt_target,evt)
          {                     
            var offset = $(document).getScroll();                        
            
            args['top'] = [offset.y];
            args['right'] =  [offset.y];                        
            
            return [ type, options, args, alt_target, evt ];
            
          },
          params:{
            type:'tween',
            options:{
              duration: 250
            },
            args:{
              
            }
          }
        }]
      ]
    }]
  ]	
}
