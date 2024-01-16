document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('graphContainer');
    var graph = new mxGraph(container);

    // Add a vertex
    var parent = graph.getDefaultParent();
    var vertex = graph.insertVertex(parent, null, "first test", 20, 20, 150, 30);
});
