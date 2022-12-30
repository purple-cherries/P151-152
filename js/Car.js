AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" },
    clickerCounter: {type:'number', default:'0'}
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute('gltf-model', this.data.modelRef)
    this.el.setAttribute("position", {x:0, y:50, z:80})
    this.el.setAttribute('rotation', {x:0, y:-100, z:0})

    
  },
  update: function(){
    window.addEventListener('click', e=>{
      this.data.clickerCounter = this.data.clickerCounter+1;
      if(this.data.clickerCounter===1){
        const rotation={x:0, y:20, z:0};
        this.el.setAttribute('rotation', rotation);
      } else if(this.data.clickerCounter===2){
        const rotation={x:0, y:100, z:0}
        this.el.setAttribute('rotation', rotation)
      }
    })
  }
});