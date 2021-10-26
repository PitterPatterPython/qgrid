(self["webpackChunkqgrid2"] = self["webpackChunkqgrid2"] || []).push([["src_jupyterlab-plugin_js"],{

/***/ "./src/jupyterlab-plugin.js":
/*!**********************************!*\
  !*** ./src/jupyterlab-plugin.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var qgrid = __webpack_require__(/*! ./index */ "./src/index.js");

var base = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base/@jupyter-widgets/base");

/**
 * The widget manager provider.
 */
module.exports = {
  id: 'qgrid',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'qgrid',
          version: qgrid.version,
          exports: qgrid
      });
    },
  autoStart: true
};


/***/ })

}]);
//# sourceMappingURL=src_jupyterlab-plugin_js.f79d7a7bd37bb8db69b6.js.map