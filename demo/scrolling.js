{ 
  fx:[    
    [{ 
      element: 'container', // every element has a timeline, each element must have an id, ie: #container       
      fx:[
        [{
          name:'load', // This is the type of event as well as the name of the actual timeline event relative to that element
          alt_target: 'one',
          params:{
            type:'morph', // Choose between morph, tween, and css
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
      element: window, // you can also bind directly to window, or document body if you like
      fx:[
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
          },   // The intercept function is used to change your animation arguments based on a variable criteria like scroll.
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
        }],
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
            
            if( offset.y > 1480 )
            {
              this.chain(window,'hide'); // you could just as easily do $('container').setStyle('opacity',0); 
              this.chain(window,'show-end'); // This is just here to illustrate how to chain animations
            }
            else
            {
              this.chain(window,'show'); 
              this.chain(window,'hide-end');
            } 
            
            var pos = Math.abs( parseInt( (offset.y/25)-10) ); // to parallax, you need to come up with a variable background position
            
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
              opacity: 0
            }
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
              opacity: 1
            }
          }          
        }],
        [{
          name:'hide-end',       
          alt_target: 'end',   
          params:{
            type:'morph',
            options:{
              duration: 250
            },
            args:{
              opacity: 0
            }
          }          
        }],
        [{
          name:'show-end',       
          alt_target: 'end',   
          params:{
            type:'morph',
            options:{
              duration: 250
            },
            args:{
              opacity: 1
            }
          }        
        }],
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
        }]        
      ]
    }]
  ]	
}
