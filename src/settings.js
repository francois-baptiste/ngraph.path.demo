module.exports = getSettings

function getSettings(qs) {
  const graphSettings = getAvailableGraphs(qs);
  const pathFinderSettings = getAvailablePathfinders(qs);

  return {
    graphSettings,
    pathFinderSettings
  };
}


function getAvailableGraphs(qs) {
  let graphs = [{
    value: 'h3_face_uk',
    name: 'Delhi (82K edges, 3.9 MB)'
  },
  // Commenting this out, as on mobile devices it may crash the browser.
  //  {
  //   value: 'tokyo-roads',
  //   name: 'Tokyo (879K edges, 12.3 MB)'
  // }
];

  return {
    selected: qs.get('graph'),
    graphs
  };
}

function getAvailablePathfinders(qs) {
  return {
    selected: qs.get('finder') || 'dijkstra',
    algorithms: [{
      value: 'a-greedy-star',
      name: 'Greedy A* (suboptimal)'
    }, {
      value: 'nba',
      name: 'NBA*'
    }, {
      value: 'astar-uni',
      name: 'Unidirectional A*'
    }, {
      value: 'dijkstra',
      name: 'Dijkstra'
    }]
  };
}
