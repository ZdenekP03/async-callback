const clickArea = document.getElementById("main-div")


const r = new rive.Rive({
    src: "async_callback_2903_export.riv",
    canvas: document.getElementById("rive-canvas1"),
    autoplay: true,
    layout: new rive.Layout({
        fit: rive.Fit.contain,
        alignment: rive.Alignment.Center,
    }),
    artboard: "Artboard-main", // Optional. If not supplied the default is selected
    stateMachines: "StateMachine",
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();

        const artboard = r.activeArtboard;
        const viewModel = artboard.viewModel('ViewModel1');
        viewModel.step = 0;

        clickArea.addEventListener("click", () => {
            if (viewModel && viewModel.step < 13) {
                viewModel.step++;
            }
        });

        clickArea.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            if (viewModel && viewModel.step > 0) {
                viewModel.step--;
            }
        });
    }
});


window.addEventListener('resize', ()=>{
        r.resizeDrawingSurfaceToCanvas();
    })

