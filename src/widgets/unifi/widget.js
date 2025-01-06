import unifiProxyHandler from "./proxy";

const widget = {
  api: "{url}{prefix}/api/{endpoint}",
  proxyHandler: unifiProxyHandler,

  mappings: {
    "stat/sites": {
      endpoint: "stat/sites",
    },
  },
};

export default widget;
