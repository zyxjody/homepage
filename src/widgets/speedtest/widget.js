import genericProxyHandler from "utils/proxy/handlers/generic";

const widget = {
  api: "{url}/api/{endpoint}",
  proxyHandler: genericProxyHandler,

  mappings: {
    "speedtest/latest": {
      endpoint: "speedtest/latest",
      validate: ["data"],
    },
  },
};

export default widget;
