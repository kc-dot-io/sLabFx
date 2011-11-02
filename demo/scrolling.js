{ 
  fx:[    
    [{ 
      element: 'container',          
      fx:[
        [{
          name:'load',
          alt_target: 'one',
          params:{
            type:'morph',
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
            type:'morph',
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
          alt_target: 'three',
          params:{
            type:'morph',
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
          alt_target: 'container',   
          params:{
            type:'morph',
            options:{
              duration: 250
            },
            args:{
            }
          },
          intercept: function(type,options,args,alt_target,evt)
          {         
            var offset = $(window).getScroll();
            
            args['background-position'] = [ '0 -'+parseInt(offset.y % 50)+'px' ];            
             
            return [ type, options, args, alt_target, evt ];            
          }          
        }],
        [{
          name:'scroll',       
          alt_target: 'one',
          params:{
            type:'morph',
            options:{
              duration: 250
            },
            args:{
            }
          },   
          intercept: function(type,options,args,alt_target,evt)
          {         
            var offset = $(window).getScroll();
            
            args['top'] = [offset.y];
            args['left'] =  [offset.y];  
             
            return [ type, options, args, alt_target, evt ];            
          }
        }],
        [{
          name:'scroll',       
          alt_target: 'two',
          params:{
            type:'morph',
            options:{
              duration: 250
            },
            args:{
              
            }
          },   
          intercept: function(type,options,args,alt_target,evt)
          {                     
            var offset = $(document).getScroll();                        
            
            args['top'] = [offset.y];
            args['right'] =  [offset.y];                        
            
            return [ type, options, args, alt_target, evt ];            
          }
        }],
        [{
          name:'scroll',       
          alt_target: 'three',
          params:{
            type:'morph',
            options:{
              duration: 250
            },
            args:{
              
            }
          },   
          intercept: function(type,options,args,alt_target,evt)
          {                     
            var offset = $(document).getScroll();                        
            
            args['top'] = [offset.y];
            //args['right'] =  [offset.y];                        
            
            return [ type, options, args, alt_target, evt ];            
          }
        }]
      ]
    }]
  ]	
}
