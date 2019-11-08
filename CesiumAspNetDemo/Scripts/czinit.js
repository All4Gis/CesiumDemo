// We're not using bing here. If using bing, please provide your own API key
Cesium.BingMapsApi.defaultKey = null;

function createViewer(target, scriptUrlRoot) {
    var imageryProviders = Cesium.createDefaultImageryProviderViewModels();
    var selectedImageryProviderIndex = 4;  // MapBox Street is 5th in the list.

    var viewer = new Cesium.Viewer(target, {
        imageryProviderViewModels: [],
        selectedImageryProviderViewModel: imageryProviders[selectedImageryProviderIndex],
        homeButton: false,
        geocoder : false,
        timeline: false,
        infoBox: false,
        sceneModePicker: true,
        selectionIndicator: false,
        navigationHelpButton: false,
        shadows: true,
        vrButton: false,
        animation: false,
        fullscreenButton: false,
        BaseLayerPicker : false
    });
    return viewer;
}