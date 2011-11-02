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
            
            if( offset.y > 1480 ) this.chain(window,'hide');
            else this.chain(window,'show')
            
            var pos = Math.abs( parseInt( (offset.y/25)-10) );
            
            args['background-position'] = [ '0 -'+pos+'px' ];            
            
            return [ type, options, args, alt_target, evt ];            
          }          
        }],
        [{
          name:'hide',       
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
            
            args['opacity'] = [ 0 ];            
            
            return [ type, options, args, alt_target, evt ];            
          }          
        }],
        [{
          name:'show',       
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
            
            args['opacity'] = [ 1 ];            
            
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
            
            return [ type, options, args, alt_target, evt ];            
          }
        }]
      ]
    }]
  ]	
}
