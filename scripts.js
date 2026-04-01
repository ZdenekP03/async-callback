const clickArea = document.getElementById("main-div")


const r = new rive.Rive({
    src: "async_callback_2903_export.riv",
    canvas: document.getElementById("rive-canvas1"),
    autoplay: true,
    autoBind: true,
    layout: new rive.Layout({
        fit: rive.Fit.contain,
        alignment: rive.Alignment.Center,
    }),
    artboard: "Artboard-main", // Optional. If not supplied the default is selected
    stateMachines: "State Machine 1",
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();

        //const artboard = r.activeArtboard;
        const viewModelInstance = r.viewModelInstance;
        viewModelInstance.number('step').value = 0;

        clickArea.addEventListener("click", () => {
            if (viewModelInstance.number('step').value < 13) {
                viewModelInstance.number('step').value++;
            }
        });

        clickArea.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            if (viewModelInstance.number('step').value > 0) {
                viewModelInstance.number('step').value--;
            }
        });
    }
});


window.addEventListener('resize', ()=>{
    r.resizeDrawingSurfaceToCanvas();
})

