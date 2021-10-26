(self["webpackChunkqgrid2"] = self["webpackChunkqgrid2"] || []).push([["src_index_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/qgrid.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/qgrid.css ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.q-grid-container * {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.q-grid-container {\n  position: relative;\n  overflow-x: auto;\n  width: auto;\n  height: auto;\n  border-radius: 4px;\n}\n\n.q-grid-container .hidden {\n  display: none !important;\n}\n\n.q-grid-container a {\n  color: #337ab7 !important;\n  text-decoration: none;\n  line-height: 20px;\n}\n\n.q-grid-container a:hover,\n.q-grid-container a:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\n\n.q-grid {\n  position: relative;\n  border: 1px solid #d3d3d3;\n  margin-top: 6px;\n  margin-bottom: 2px;\n  box-sizing: border-box;\n}\n\n.q-grid-toolbar {\n  margin: 4px 0\n}\n\n.q-grid-toolbar .btn {\n  background-color: #EEEEEE;\n  border-color: #E0E0E0;\n  margin-right: 6px;\n  padding: 4px 40px;\n  /* taken from bootstrap's btn class, since\n     jupyterlab doesn't include bootstrap css */\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid #E0E0E0;\n  white-space: nowrap;\n  font-size: 13px;\n  line-height: 1.42857143;\n  border-radius: 2px;\n}\n\n.q-grid-toolbar .btn:hover {\n  background-color: #DDDDDD;\n  border-color: #CCCCCC;\n}\n\n.q-grid-toolbar .btn:focus {\n  outline: none;\n}\n\n.q-grid-toolbar .close-modal-btn {\n  display: none;\n}\n\n.qgrid-modal .q-grid-toolbar .close-modal-btn {\n  display: block;\n}\n\n.qgrid-modal .full-screen-btn,\n.qgrid-modal .modal-header,\n.qgrid-modal .modal-footer {\n  display: none;\n}\n\n.qgrid-modal {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n\n.qgrid-modal .modal-dialog {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  bottom: 20px;\n  right: 20px;\n  margin: 0px;\n  width: auto;\n  height: auto;\n}\n\n.qgrid-modal .modal-content {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n}\n\n.qgrid-modal .modal-body {\n  position: absolute;\n  padding: 15px;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n\n.qgrid-modal .modal-body button.close {\n  margin-top: 7px;\n  margin-right: 14px;\n}\n\n.qgrid-modal .q-grid-container {\n  bottom: 25px;\n  left: 20px;\n  right: 20px;\n  position: absolute;\n  top: 15px;\n}\n\n.qgrid-modal .q-grid {\n  position: absolute;\n  top: 33px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: auto !important;\n}\n\n.q-grid-toolbar .full-screen-btn,\n.q-grid-toolbar .close-modal-btn {\n  height: 18px;\n  width: 12px;\n  padding: 4px 7px;\n  float: right;\n  margin-right: 0px;\n}\n\n.output_scroll .q-grid {\n  height: 315px !important;\n}\n\n.q-grid-toolbar {\n  display: none;\n}\n\n.show-toolbar .q-grid-toolbar {\n  display: block;\n}\n\n.output_scroll .show-toolbar .q-grid {\n  height: 284px !important;\n}\n\n.q-grid.force-fit-columns .slick-viewport {\n  overflow-x: hidden !important;\n}\n\n.q-grid.hide-scrollbar > .slick-header {\n  margin-bottom: -1px;\n}\n\n.q-grid.hide-scrollbar > .slick-viewport {\n  overflow-y: hidden !important;\n  height: 100%;\n}\n\n.q-grid.hide-scrollbar.force-fit-columns > .slick-viewport {\n  overflow: hidden !important;\n}\n\n.q-grid.hide-scrollbar > .slick-viewport > .grid-canvas {\n  margin-top: 1px;\n}\n\n.q-grid .slick-header {\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.q-grid .slick-header-columns,\n.text-filter-grid .slick-header-columns {\n  background: none;\n  background-color: rgb(245, 245, 245);\n  border-bottom: none;\n}\n\n.q-grid.force-fit-columns .slick-header-column:last-child .filter-button:hover,\n.q-grid.force-fit-columns .slick-header-column.active:last-child .filter-button,\n.q-grid.force-fit-columns .slick-header-column:last-child .filter-button.filter-active {\n  border-right: 1px solid #ccc;\n  margin-right: -4px;\n}\n\n.q-grid.force-fit-columns .slick-header-column:last-child .filter-button {\n  margin-right: -4px;\n  border-right: 1px solid transparent;\n}\n\n.q-qgrid.hide-scrollbar .slick-header-column:last-child .slick-resizable-handle {\n  right: -4px;\n}\n\n.q-grid.hide-scrollbar > .slick_header .slick-header-column:last-child .filter-button,\n.q-grid.hide-scrollbar > .slick-header .slick-header-column:last-child .filter-button:hover,\n.q-grid.hide-scrollbar > .slick-header .slick-header-column.active:last-child .filter-button:hover,\n.q-grid.hide-scrollbar > .slick-header .slick-header-column.active:last-child .filter-button.filter-active {\n  border-right: 1px solid transparent;\n}\n\n.q-grid .slick-header-column .filter-button.filter-active,\n.q-grid .slick-header-column .filter-button.filter-active:hover{\n  background-color: #deeaf7;\n  border-left: 1px solid #cccccc;\n}\n\n.q-grid .slick-header-column {\n  background: rgb(245, 245, 245);\n  color: #565656;\n  border-right-style: none;\n  font-size: 13px;\n  font-weight: bold;\n  padding: 6px 2px !important;\n}\n\n.q-grid .slick-header-column.active {\n  background-color: #deeaf7;\n}\n\n.q-grid .slick-header-column-sorted {\n  font-style: inherit !important;\n}\n\n.q-grid .slick-header-column:first-child .slick-column-name {\n  margin-left: 6px !important;\n}\n\n.q-grid .slick-sort-indicator {\n  height: 8px !important;\n  margin-left: 6px;\n}\n\n.q-grid .slick-sort-indicator.fa-sort-asc {\n  margin-top: 4px;\n  color: #5862ff;\n}\n\n.q-grid .slick-sort-indicator.fa-sort-desc {\n  margin-top: 1px;\n  color: #5862ff;\n}\n\n.q-grid .slick-sort-indicator.fa-spinner {\n  height: auto !important;;\n  width: auto !important;;\n  margin-top: 3px;\n}\n\n.q-grid .fa-check {\n  color: #17a700;\n}\n\n.q-grid .slick-column-name {\n  margin-bottom: 0px;\n  float: left;\n}\n\n.q-grid .slick-resizable-handle {\n  width: 1px;\n  background-color: #c5c5c5;\n  border-left: 3px solid rgb(245, 245, 245);\n  border-right: 3px solid rgb(245, 245, 245);\n}\n\n.q-grid .slick-resizable-handle.active {\n  border-right-color: #deeaf7;\n}\n\n.q-grid .slick-cell {\n  border-bottom: 1px solid #e1e8ed;\n  border-right: none;\n  border-left: 1px solid transparent;\n  font-size: 13px;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  padding-left: 0px;\n  padding-top: 4px;\n  border-top: none;\n}\n\n.q-grid.highlight-selected-row .slick-cell.selected {\n  background-color: #deeaf7;\n}\n\n.q-grid.highlight-selected-cell .slick-cell.active {\n  border: 2px solid rgb(65, 165, 245);\n  padding-top: 2px;\n  padding-bottom: 1px;\n  padding-left: 3px;\n}\n\n.q-grid .slick-cell.editable:not(.idx-col) {\n  border: 2px solid rgb(65, 165, 245);\n  padding-top: 2px;\n  padding-bottom: 1px;\n  padding-left: 3px !important;\n  background-color: #FFF;\n  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.4);\n  -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.4);\n  box-shadow: 0 2px 5px rgba(0,0,0,0.4);\n}\n\n.q-grid .slick-cell.editable .editor-select:focus {\n  outline-style: none;\n}\n\n.q-grid .slick-cell.idx-col {\n  font-weight: bold;\n  margin-right: 3px;\n}\n\n.q-grid .slick-cell.idx-col.last-idx-col {\n  border-right: 1px solid rgb(225, 232, 237);\n}\n\n.q-grid .slick-cell.idx-col:not(.first-idx-col) {\n  font-weight: bold;\n  border-left: 1px solid rgb(225, 232, 237);\n  margin-right: 3px;\n}\n\n.q-grid .idx-col.group-top {\n  border-bottom-color: transparent;\n  background-color: #FFF;\n}\n\n.q-grid .idx-col.group-middle {\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  color: transparent;\n  background-color: #FFF;\n}\n\n.q-grid .idx-col.group-bottom {\n  border-top-color: transparent;\n  color: transparent;\n  background-color: #FFF;\n}\n\n.q-grid .idx-col.group-single {\n  background-color: transparent;\n}\n\n.q-grid .slick-cell.l0.r0 {\n  border-left: none;\n  padding-left: 6px;\n  z-index: 85;\n}\n\n.q-grid .slick-cell.l1.r1 {\n  z-index: 86;\n}\n\n.q-grid .slick-cell.l2.r2 {\n  z-index: 87;\n}\n\n.q-grid .slick-cell.l3.r3 {\n  z-index: 88;\n}\n\n.q-grid .slick-cell.l4.r4 {\n  z-index: 89;\n}\n\n.q-grid .slick-cell.l5.r5 {\n  z-index: 90;\n}\n\n.q-grid .slick-cell.editable {\n  z-index: 91 !important;\n}\n\n.q-grid .slick-cell.selected {\n  background-color: transparent;\n}\n\n/* Filter button */\n\n.q-grid .slick-header-column.active .filter-button, .filter-button:hover {\n  background-color: #deeaf7;\n  border-left: 1px solid #cccccc;\n}\n\n.q-grid .slick-header-column.filter-button-disabled .filter-button {\n  color: #bababa;\n}\n\n.q-grid .filter-button {\n  position: absolute;\n  right: 4px;\n  top: 0px;\n  line-height: 29px;\n  height: 28px;\n  width: 21px;\n  text-align: center;\n  z-index: 10;\n  background-image: none;\n  margin-top: 0px;\n}\n\n.q-grid .filter-button:hover {\n  background-color: #efefef;\n  border-left: 1px solid #cccccc;\n}\n\n/* Filter dropdowns */\n\n.q-grid-container .grid-filter {\n  z-index: 1000;\n  position: absolute;\n  padding: 0px;\n  margin: 0px;\n  max-height: 400px;\n  display: block;\n  border-radius: 0px;\n  /* we previously got these style from bootstrap */\n  float: left;\n  min-width: 160px;\n  list-style: none;\n  font-size: 13px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n\n.q-grid-container .filter-error-msg {\n  padding: 8px 14px;\n  width: 160px;\n}\n\n.q-grid-container .grid-filter h3.qgrid-popover-title {\n  padding: 5px 30px 5px 11px;\n  border-bottom: 1px solid #d3d3d3;\n  border-radius: 0px;\n  /* we previously got these style from bootstrap */\n  margin: 0;\n  font-size: 13px;\n  background-color: #f7f7f7;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  display: block;\n}\n\n.q-grid-container .grid-filter .dropdown-title {\n  font-size: 13px;\n}\n\n.q-grid-container .grid-filter i.close-button {\n  position: absolute;\n  right: 11px;\n  top: 7px;\n  padding: 0;\n  color: #ababab;\n  cursor: pointer;\n  background-image: none;\n  margin-top: 0px;\n}\n\n.q-grid-container .grid-filter i.close-button:hover {\n  color: #777777;\n}\n\n.q-grid-container .grid-filter .dropdown-footer {\n  background-color: #f7f7f7;\n  border-top: 1px solid #d3d3d3;\n  padding: 4px 12px;\n  height: 19px;\n}\n\n.q-grid-container .grid-filter .dropdown-footer a.reset-link {\n  padding: 0px;\n  float: right;\n}\n\n.q-grid-container .grid-filter .dropdown-footer a.select-all-link {\n  padding: 0px;\n}\n\n.q-grid-container .date-range-filter .dropdown-body {\n  margin: 15px 11px;\n  width: 210px;\n}\n\n.q-grid-container .date-range-filter .start-date {\n  margin-right: 4px;\n  width: 80px;\n}\n\n.q-grid-container .date-range-filter .end-date {\n  margin-left: 4px;\n  width: 80px;\n}\n\n.q-grid-container .numerical-filter .dropdown-body {\n  margin: 20px 23px 10px 20px;\n  width: 207px;\n  text-align: center;\n}\n\n.q-grid-container .numerical-filter .slider-range {\n  margin-bottom: 4px;\n}\n\n\n.q-grid-container .numerical-filter .ui-slider-handle {\n  width: 18px;\n  padding: 0;\n}\n\n.q-grid-container .numerical-filter .range-separator {\n  font-size: 28px;\n  font-weight: 300;\n  padding: 0 7px;\n  color: #646a76;\n  position: relative;\n  top: 4px;\n}\n\n.text-filter-grid * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.text-filter .slick-viewport {\n  overflow-y: auto !important;\n  overflow-x: hidden !important;\n}\n\n.text-filter .input-area {\n  padding: 12px;\n}\n\n.text-filter .no-results {\n  margin-left: 12px;\n  margin-bottom: 10px;\n}\n\n.text-filter .search-input {\n  height: 30px;\n  width: 100%;\n  margin-bottom: 0px;\n  box-sizing: border-box;\n}\n\n.text-filter .text-filter-grid {\n  width: 300px;\n  height: 250px;\n  box-sizing: border-box;\n  border-top: 1px solid #d3d3d3;\n}\n\n.text-filter .slick-header {\n  border: none;\n}\n\n.text-filter .slick-header-columns {\n  height: 0px;\n}\n\n.text-filter .slick-cell {\n  line-height: 30px;\n  border-left: none;\n  border-right: none;\n  background-color: #ffffff !important;\n  border-bottom: 1px solid #e1e8ed !important;\n  padding: 0;\n  text-align: left;\n  cursor: pointer;\n}\n\n.text-filter .slick-row.odd .slick-cell {\n  background: #fafafa !important;\n}\n\n.text-filter .slick-row.active .slick-cell {\n  background-color: #deeaf7 !important;\n  border-top: 1px solid transparent !important;\n}\n\n.text-filter .check-box-cell {\n  text-align: center;\n  line-height: 28px;\n}\n\n.text-filter .check-box-cell input {\n  margin: 0;\n}\n\n/* from custom-bootstrap *****************/\n\n.q-grid-container input.datepicker {\n  padding: 4px 4px 2px 4px;\n  border: 1px solid lightgrey;\n  font-size: 13px;\n  line-height: 18px;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n/* jquery-ui overrides */\n\n.ui-widget, .ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 13px;\n}\n\n.ui-tooltip {\n  opacity: 1.0 !important;\n}\n\n/* jquery-ui datepicker style overrides */\n\n#ui-datepicker-div {\n  z-index: 9999 !important;\n}\n\n#ui-datepicker-div.ui-datepicker {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  /*@include box-shadow(0 5px 10px rgba(0, 0, 0, 0.2))*/\n  z-index: 99 !important;\n  padding: 0 !important;\n  background-color: white;\n  border: 1px solid gray;\n}\n\n#ui-datepicker-div.ui-datepicker .ui-icon {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-indent: 0px;\n  margin-left: -4px;\n  margin-top: -6px;\n  background-image: none;\n}\n\n#ui-datepicker-div.ui-datepicker .ui-icon-circle-triangle-w:before {\n    content: \"\\f053\";\n}\n\n#ui-datepicker-div.ui-datepicker .ui-icon-circle-triangle-e:before {\n    content: \"\\f054\";\n}\n\n\n/* from slickgrid editing example */\ninput.editor-text {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  margin: -1px 0 0 0;\n  background: transparent;\n  outline: 0;\n  padding: 0;\n}\n\n.ui-datepicker-trigger {\n  width: 16px;\n  height: 16px;\n  margin-top: 2px;\n  padding: 0;\n  vertical-align: top;\n  left: 4px;\n  position: relative;\n}\n\n.slick-cell.boolean {\n  text-align: center;\n}\n\n.bool-radio-wrapper {\n  width: 150px;\n  position: relative;\n  margin: 8px auto 4px auto;\n}\n\n.label-true {\n  padding: 4px 28px 4px 13px;\n}\n\n.label-false {\n  padding: 4px 28px 4px 4px;\n  margin-left: 15px;\n}\n\ninput.bool-filter-radio {\n  margin-left: -23px;\n}\n\n.slick-cell {\n  -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n     -khtml-user-select: none; /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none;\n}\n\n.slick-row .slick-cell:not(:first-child) {\n  padding-left: 5px;\n  margin-left: -4px;\n}\n\n.q-grid .slick-sort-indicator-desc,\n.q-grid .slick-sort-indicator-asc {\n  background-image: none;\n}\n\n.jupyter-widgets {\n  overflow: auto !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/qgrid.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/qgrid.css ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./qgrid.css */ "./node_modules/css-loader/dist/cjs.js!./src/qgrid.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./src/qgrid.css":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./src/qgrid.css ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/style-loader/dist/cjs.js!../node_modules/css-loader/dist/cjs.js!./qgrid.css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/qgrid.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Entry point for the notebook bundle containing custom model definitions.
// Export widget models and views, and the npm package version number.
module.exports = __webpack_require__(/*! ./qgrid.widget.js */ "./src/qgrid.widget.js");
module.exports.version = __webpack_require__(/*! ../package.json */ "./package.json").version;


/***/ }),

/***/ "./src/qgrid.booleanfilter.js":
/*!************************************!*\
  !*** ./src/qgrid.booleanfilter.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! jquery */ "webpack/sharing/consume/default/jquery/jquery?9ff1");
var filter_base = __webpack_require__(/*! ./qgrid.filterbase.js */ "./src/qgrid.filterbase.js");

class BooleanFilter extends filter_base.FilterBase {

  get_filter_html() {
    return `
      <div class='boolean-filter grid-filter qgrid-dropdown-menu'>
        <h3 class='qgrid-popover-title'>
          <div class='dropdown-title'>Filter by ${this.field}</div>
          <i class='fa fa-times icon-remove close-button'/>
        </h3>
        <div class='dropdown-body'>
          <form>
            <div class="bool-radio-wrapper">
              <label class="radio-label label-true" for="radio-true">True</label>
              <input type="radio" name="bool-filter-radio"
                class="bool-filter-radio" id="radio-true" value="true">
              <label class="radio-label label-false" for="radio-false">False</label>
              <input type="radio" name="bool-filter-radio"
                class="bool-filter-radio" id="radio-false" value="false">
            </div>
          </form>
          <div class='no-results hidden'>No results found.</div>
        </div>
        <div class='dropdown-footer'>
          <a class='reset-link' href='#'>Reset</a>
        </div>
      </div>
    `;
  }

  update_min_max(col_info, has_active_filter) {
    this.values = col_info.values;
    this.length = col_info.length;
    if('filter_info' in col_info){
      this.selected = col_info.filter_info.selected;
    } else {
      this.selected = null;
    }
    this.show_filter();
  }

  initialize_controls() {
    super.initialize_controls();
    this.radio_buttons = this.filter_elem.find('.bool-filter-radio');

    this.filter_elem.find('label').click((e) => {
      var radio_id = $(e.currentTarget).attr('for');
      this.radio_buttons.filter(`#${radio_id}`).click();
    });

    if (this.selected == null) {
      this.radio_buttons.prop('checked', false);
    } else {
      this.radio_buttons.filter(
          `#radio-${this.selected}`
      ).prop('checked', true);
    }

    this.radio_buttons.change(() => {
      var checked_radio = this.radio_buttons.filter(':checked');
      var old_selected_value = this.selected;
      if (checked_radio.length == 0) {
        this.selected = null;
      } else {
        this.selected = checked_radio.val() == 'true';
      }
      if (this.selected != old_selected_value) {
        this.send_filter_changed();
      }
    });
  }

  is_active() {
    return this.selected != null;
  }

  reset_filter() {
    this.radio_buttons.prop('checked', false);
    this.selected = null;
    this.send_filter_changed();
  }

  get_filter_info() {
    return {
      "field": this.field,
      "type": "boolean",
      "selected": this.selected
    };
  }
}

module.exports = {'BooleanFilter': BooleanFilter};


/***/ }),

/***/ "./src/qgrid.datefilter.js":
/*!*********************************!*\
  !*** ./src/qgrid.datefilter.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! jquery */ "webpack/sharing/consume/default/jquery/jquery?9ff1");
var filter_base = __webpack_require__(/*! ./qgrid.filterbase.js */ "./src/qgrid.filterbase.js");

class DateFilter extends filter_base.FilterBase {

  get_filter_html() {
    return `
      <div class='date-range-filter grid-filter qgrid-dropdown-menu'>
        <h3 class='qgrid-popover-title'>
          <div class='dropdown-title'>Filter by ${this.field}</div>
          <i class='fa fa-times icon-remove close-button'/>
        </h3>
        <div class='dropdown-body'>
          <input class='datepicker ignore start-date'/>
          <span class='to'>to</span>
          <input class='datepicker ignore end-date'/>
        </div>
        <div class='dropdown-footer'>
          <a class='reset-link' href='#'>Reset</a>
        </div>
      </div>
    `;
  }

  update_min_max(col_info, has_active_filter) {
    this.min_value = col_info.filter_min;
    this.max_value = col_info.filter_max;

    var filter_info = col_info.filter_info;
    if (filter_info) {
      this.filter_start_date = filter_info.min || this.min_value;
      this.filter_end_date = filter_info.max || this.max_value;
    } else {
      this.filter_start_date = this.min_value;
      this.filter_end_date = this.max_value;
    }

    this.has_multiple_values = this.min_value != this.max_value;
    this.show_filter();
    if (has_active_filter) {
      this.update_filter_button_disabled();
    }
  }

  reset_filter() {
    this.start_date_control.datepicker("setDate", this.min_date);
    this.end_date_control.datepicker("setDate", this.max_date);

    this.start_date_control.datepicker("option", "maxDate", this.max_date);
    this.end_date_control.datepicker("option", "minDate", this.min_date);

    this.filter_start_date = null;
    this.filter_end_date = null;
    this.send_filter_changed();
  }

  initialize_controls() {
    super.initialize_controls();
    this.min_date = new Date(this.min_value);
    this.max_date = new Date(this.max_value);

    this.start_date_control = this.filter_elem.find(".start-date");
    this.end_date_control = this.filter_elem.find(".end-date");

    var date_options = {
      "dayNamesMin": ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      "prevText": "",
      "nextText": "",
      minDate: this.min_date,
      maxDate: this.max_date,
      beforeShow: (input, inst) => {
        // align the datepicker with the right edge of the input it drops down from
        var clicked_elem = $(inst);
        clicked_elem.closest(".qgrid-dropdown-menu").addClass("calendar-open");

        var widget = clicked_elem.datepicker('widget');
        widget.css('margin-left', $(input).outerWidth() - widget.outerWidth());
        widget.addClass("stay-open-on-click filter-child-elem");
      },
      onSelect: (dateText, instance) => {
        // pull the values from the datepickers
        var start_date_string = this.start_date_control.val();
        var end_date_string = this.end_date_control.val();

        var start_date = new Date(start_date_string);
        var end_date = new Date(end_date_string);

        start_date = Date.UTC(start_date.getUTCFullYear(), start_date.getUTCMonth(), start_date.getUTCDate());
        end_date = Date.UTC(end_date.getUTCFullYear(), end_date.getUTCMonth(), end_date.getUTCDate());
        end_date += (1000 * 60 * 60 * 24) - 1;

        this.filter_start_date = start_date;
        this.filter_end_date = end_date;

        this.send_filter_changed();

        var datepicker = $(instance.input);
        setTimeout((function () {
          datepicker.blur();
        }), 100);

        if (datepicker.hasClass("start-date")) {
          // update the end date's min
          this.end_date_control.datepicker("option", "minDate", start_date);
        }
        if (datepicker.hasClass("end-date")) {
          // update the start date's max
          this.start_date_control.datepicker("option", "maxDate", new Date(end_date_string));
        }
      }
    };

    this.filter_elem.find(".datepicker").datepicker(date_options);

    if (this.filter_start_date != null){
      this.start_date_control.datepicker("setDate", this.get_utc_date(this.filter_start_date));
    } else {
      this.start_date_control.datepicker("setDate", this.min_date);
    }

    if (this.filter_end_date != null){
      this.end_date_control.datepicker("setDate", this.get_utc_date(this.filter_end_date));
    } else {
      this.end_date_control.datepicker("setDate", this.max_date);
    }
  }

  get_utc_date(date_ms) {
    var date = new Date(date_ms);
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }

  get_filter_info() {
    return {
      "field": this.field,
      "type": "date",
      "min": this.filter_start_date,
      "max": this.filter_end_date
    };
  }

  is_active() {
    return this.filter_start_date || this.filter_end_date;
  }
}

module.exports = {'DateFilter': DateFilter};


/***/ }),

/***/ "./src/qgrid.editors.js":
/*!******************************!*\
  !*** ./src/qgrid.editors.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Input handlers
 *
 * Adapted from https://github.com/mleibman/SlickGrid/blob/master/slick.editors.js
 * MIT License, Copyright (c) 2010 Michael Leibman
 */
var $ = __webpack_require__(/*! jquery */ "webpack/sharing/consume/default/jquery/jquery?9ff1");
__webpack_require__(/*! slickgrid-qgrid/slick.editors.js */ "./node_modules/slickgrid-qgrid/slick.editors.js");

class IndexEditor {
  constructor(args){
    this.column_info = args.column;
    this.$cell = $(args.container);
    this.$cell.attr('title',
      'Editing index columns is not supported');
    this.$cell.tooltip();
    this.$cell.tooltip('enable');
    this.$cell.tooltip("open");
    // automatically hide it after 4 seconds
    setTimeout((event, ui) => {
      this.$cell.tooltip('destroy');
      args.cancelChanges();
    }, 3000);
  }

  destroy() {}

  focus() {}

  loadValue(item) {
    this.$cell.text(
        this.column_info.formatter(
            null, null, item[this.column_info.field], this.column_info, null
        )
    );
  }

  serializeValue() {}

  applyValue(item, state) {}

  isValueChanged() {
    return false;
  }

  validate() {
    return {
      valid: true,
      msg: null
    };
  }
}

//  http://stackoverflow.com/a/22118349
class SelectEditor {
  constructor(args) {
    this.column_info = args.column;
    this.options = [];
    if (this.column_info.editorOptions.options) {
      this.options = this.column_info.editorOptions.options;
    } else {
      this.options = ["yes", "no"];
    }
    
    var option_str = "";

    this.elem = $("<SELECT tabIndex='0' class='editor-select'>");

    for (var i in this.options) {
      var opt = $.trim(this.options[i]); // remove any white space including spaces after comma
      var opt_elem = $("<OPTION>");
      opt_elem.val(opt);
      opt_elem.text(opt);
      opt_elem.appendTo(this.elem);
    }

    this.elem.appendTo(args.container);
    this.elem.focus();
  }

  destroy() {
    this.elem.remove();
  }

  focus() {
    this.elem.focus();
  }

  loadValue(item) {
    this.defaultValue = item[this.column_info.field];
    this.elem.val(this.defaultValue);
  }

  serializeValue() {
    if (this.options[0] == "yes") {
      return (this.elem.val() == "yes");
    } else {
      return this.elem.val();
    }
  }

  applyValue(item, state) {
    item[this.column_info.field] = state;
  }

  isValueChanged() {
    return (this.elem.val() != this.defaultValue);
  }

  validate() {
    return {
      valid: true,
      msg: null
    };
  }
}

/**
 * Validator for numeric cells.
 */
var validateNumber = (value) => {
  if (isNaN(value)) {
    return {
      valid: false,
      msg: "Please enter a valid integer"
    };
  }
  return {
    valid: true,
    msg: null
  };
};

module.exports = {
  'validateNumber': validateNumber,
  'SelectEditor': SelectEditor,
  'IndexEditor': IndexEditor
};


/***/ }),

/***/ "./src/qgrid.filterbase.js":
/*!*********************************!*\
  !*** ./src/qgrid.filterbase.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! jquery */ "webpack/sharing/consume/default/jquery/jquery?9ff1");

class FilterBase {
  constructor(field, column_type, qgrid) {
    this.field = field;
    this.column_type = column_type;
    this.qgrid = qgrid;
    this.widget_model = qgrid.model;
    if (this.widget_model) {
      this.precision = this.widget_model.get('precision');
    }
    this.has_multiple_values = true;
  }

  handle_msg(msg) {
    var column_info = msg.col_info;
    if (msg.type == 'column_min_max_updated'){
      this.update_min_max(column_info, this.qgrid.has_active_filter());
    }
  }

  update_min_max(column_info, has_active_filter) {
    throw new Error("not implemented!");
  }

  render_filter_button(column_header_elem, slick_grid) {
    if (this.filter_btn)
      this.filter_btn.off();

    this.column_header_elem = column_header_elem;
    this.slick_grid = slick_grid;
    this.filter_btn = $(`
      <div class='filter-button'>
        <div class='fa fa-filter filter-icon'/>
      </div>
    `);
    this.filter_icon = this.filter_btn.find('.filter-icon');
    this.filter_btn.appendTo(this.column_header_elem);
    this.filter_btn.click((e) => this.handle_filter_button_clicked(e));
  }

  create_filter_elem() {
    this.filter_elem = $(this.get_filter_html());
    this.initialize_controls();
    return this.filter_elem;
  }

  create_error_msg() {
    var error_html = `
      <div class='filter-error-msg grid-filter'>
        All values in the column are the same.  Nothing to filter.
      </div>
    `;
    this.filter_elem = $(error_html);
    this.initialize_controls();
    this.disabled_tooltip_showing = true;
  }

  get_filter_html() {
    throw new Error("not implemented!");
  }

  // If all the values in this column are the same, the filters would accomplish nothing,
  // so we gray out the filter button.  If the button is clicked we show a tooltip explaining
  // why the filter is disabled.
  update_filter_button_disabled() {
    if (this.column_header_elem) {
      if (this.has_multiple_values || this.is_active()) {
        this.column_header_elem.removeClass("filter-button-disabled");
      } else {
        this.column_header_elem.addClass("filter-button-disabled");
      }
    }
  }

  is_active() {
    throw new Error("not implemented!");
  }

  handle_filter_button_clicked(e) {
    if (this.filter_btn.hasClass('active')){
      this.hide_filter();
      e.stopPropagation();
      return false;
    }

    this.filter_icon.removeClass('fa-filter');
    this.filter_icon.addClass('fa-spinner fa-spin');
    this.filter_btn.addClass('disabled');

    var msg = {
        'type': 'show_filter_dropdown',
        'field': this.field,
        'search_val': null
    };
    this.widget_model.send(msg);
    return false;
  }

  show_filter() {
    this.column_header_elem.addClass("active");

    this.prev_column_separator = this.column_header_elem.prev(".slick-header-column").find(".slick-resizable-handle");
    this.prev_column_separator.addClass("active");

    this.filter_btn.removeClass('disabled');
    this.filter_btn.addClass("active");

    this.filter_icon.removeClass('fa-spinner fa-spin');
    this.filter_icon.addClass('fa-filter');

    if (this.has_multiple_values || this.is_active()) {
      this.create_filter_elem();
    } else {
      this.create_error_msg();
    }

    this.filter_elem.appendTo(this.column_header_elem.closest(".q-grid-container")).show();

    // position the dropdown
    var top = this.filter_btn.offset().top + this.filter_btn.height();
    var left = this.filter_btn.offset().left;

    var filter_width = this.filter_elem.width();
    this.filter_elem.width(filter_width);
    var elem_right = left + filter_width;

    var qgrid_area = this.filter_elem.closest('.q-grid-container');
    if (elem_right > qgrid_area.offset().left + qgrid_area.width()) {
      left = (this.filter_btn.offset().left + this.filter_btn.width()) - filter_width;
    }

    this.filter_elem.offset({top: 0, left: 0});
    this.filter_elem.offset({top: top, left: left});
  }

  hide_filter() {
    if (!this.filter_elem)
      return;
    if (this.disabled_tooltip_showing) {
      this.filter_elem.remove();
      this.filter_elem = null;
      this.disabled_tooltip_showing = false;
    } else if (!this.filter_elem.hasClass("hidden")) {
      this.filter_elem.remove();
      this.filter_elem = null;
    }
    this.filter_btn.removeClass("active");
    this.column_header_elem.removeClass("active");
    this.prev_column_separator.removeClass("active");
  }

  initialize_controls() {
    this.filter_elem.find("a.reset-link").click(
        (e) => this.reset_filter()
    );
    this.filter_elem.find("i.close-button").click(
        (e) => this.hide_filter()
    );
    $(document.body).bind("mousedown",
        (e) => this.handle_body_mouse_down(e)
    );
    $(document.body).bind("keyup",
        (e) => this.handle_body_key_up(e)
    );
  }

  send_filter_changed() {
    if (this.is_active()){
      this.filter_btn.addClass("filter-active");
    } else {
      this.filter_btn.removeClass("filter-active");
    }

    var msg = {
      'type': 'change_filter',
      'field': this.field,
      'filter_info': this.get_filter_info()
    };
    this.widget_model.send(msg);
  }

  handle_body_mouse_down(e) {
    if (this.filter_elem && this.filter_elem[0] != e.target && !$.contains(this.filter_elem[0], e.target) &&
        !$.contains(this.filter_btn[0], e.target) &&
        $(e.target).closest(".filter-child-elem").length == 0) {
      this.hide_filter();
    }
    return true;
  }

  handle_body_key_up(e) {
    if (e.keyCode == 27) { // esc key
      this.hide_filter();
    }
  }

  reset_filter() {
    throw new Error("not implemented!");
  }

  get_filter_info() {
    throw new Error("not implemented!");
  }
}

module.exports = {'FilterBase': FilterBase};


/***/ }),

/***/ "./src/qgrid.sliderfilter.js":
/*!***********************************!*\
  !*** ./src/qgrid.sliderfilter.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var filter_base = __webpack_require__(/*! ./qgrid.filterbase.js */ "./src/qgrid.filterbase.js");

class SliderFilter extends filter_base.FilterBase {

  get_filter_html() {
    return `
      <div class='numerical-filter grid-filter qgrid-dropdown-menu'>
        <h3 class='qgrid-popover-title'>
          <div class='dropdown-title'>Filter by ${this.field}</div>
          <i class='fa fa-times icon-remove close-button'/>
        </h3>
        <div class='dropdown-body'>
          <div class='slider-range'/>
          <span class='slider-label'>
            <span class='min-value'>0</span>
            <span class='range-separator'>-</span>
            <span class='max-value'>100</span>
          </span>
        </div>
        <div class='dropdown-footer'>
          <a class='reset-link' href='#'>Reset</a>
        </div>
      </div>
    `;
  }

  initialize_controls() {
    super.initialize_controls();
    this.slider_elem = this.filter_elem.find(".slider-range");

    var values_to_set = [
      this.filter_value_min || this.min_value,
      this.filter_value_max || this.max_value
    ];

    this.set_value(values_to_set[0], values_to_set[1]);

    this.slider_elem.slider({
      range: true,
      min: this.min_value,
      max: this.max_value,
      values: values_to_set,
      step: this.get_slider_step(),
      slide: (event, ui) => {
        if (this.slide_timeout) {
          clearTimeout(this.slide_timeout);
        }
        this.slide_timeout = setTimeout(() => {
          var slider_values = this.slider_elem.slider("option", "values");
          this.filter_value_min = slider_values[0];
          this.filter_value_max = slider_values[1];
          this.set_value(this.filter_value_min, this.filter_value_max);

          if (this.filter_value_min == this.min_value) {
            this.filter_value_min = null;
          }

          if (this.filter_value_max == this.max_value) {
            this.filter_value_max = null;
          }

          this.send_filter_changed();
          this.slide_timeout = null;
        }, 100);
      }
    });
  }

  set_value(min_val, max_val) {
    var min_val_rounded, max_val_rounded;
    if (this.column_type == 'integer') {
      min_val_rounded = min_val.toFixed(0);
      max_val_rounded = max_val.toFixed(0);
    } else {
      min_val_rounded = min_val.toFixed(this.precision);
      max_val_rounded = max_val.toFixed(this.precision);
    }
    this.filter_elem.find(".min-value").html(min_val_rounded);
    this.filter_elem.find(".max-value").html(max_val_rounded);
  }

  get_slider_step() {
    if (this.column_type == "integer") {
      return 1;
    } else {
      return (this.max_value - this.min_value) / 200;
    }
  }

  reset_filter() {
    this.filter_value_min = null;
    this.filter_value_max = null;
    if (this.slider_elem) {
      var step = this.get_slider_step();
      this.slider_elem.slider({
        min: this.min_value,
        max: this.max_value,
        values: [this.min_value, this.max_value],
        step: step
      });
      this.set_value(this.min_value, this.max_value);
    }
    this.send_filter_changed();
  }

  is_active() {
    return this.filter_value_min != null || this.filter_value_max != null;
  }

  update_min_max(col_info, has_active_filter) {
    this.min_value = col_info.slider_min;
    this.max_value = col_info.slider_max;

    var filter_info = col_info.filter_info;
    if (filter_info) {
      this.filter_value_min = filter_info.min || this.min_value;
      this.filter_value_max = filter_info.max || this.max_value;
    } else {
      this.filter_value_min = null;
      this.filter_value_max = null;
    }
    this.has_multiple_values = this.min_value != this.max_value;

    this.show_filter();

    if (!has_active_filter) {
      this.update_filter_button_disabled();
    }
  }

  get_filter_info() {
    return {
      "field": this.field,
      "type": "slider",
      "min": this.filter_value_min,
      "max": this.filter_value_max
    };
  }
}

module.exports = {'SliderFilter': SliderFilter};


/***/ }),

/***/ "./src/qgrid.textfilter.js":
/*!*********************************!*\
  !*** ./src/qgrid.textfilter.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! jquery */ "webpack/sharing/consume/default/jquery/jquery?9ff1");
var _ = __webpack_require__(/*! underscore */ "webpack/sharing/consume/default/underscore/underscore?27de");
var filter_base = __webpack_require__(/*! ./qgrid.filterbase.js */ "./src/qgrid.filterbase.js");

class TextFilter extends filter_base.FilterBase {

  get_filter_html() {
    return `
      <div class='text-filter grid-filter qgrid-dropdown-menu'>
        <h3 class='qgrid-popover-title'>
          <div class='dropdown-title'>Filter by ${this.field}</div>
          <i class='fa fa-times icon-remove close-button'/>
        </h3>
        <div class='dropdown-body'>
          <div class='input-area'>
            <input class='search-input' type='text'/>
          </div>
          <div class='text-filter-grid'/>
          <div class='no-results hidden'>No results found.</div>
        </div>
        <div class='dropdown-footer'>
          <a class='select-all-link' href='#'>Select All</a>
          <a class='reset-link' href='#'>Reset</a>
        </div>
      </div>
    `;
  }

  handle_msg(msg) {
    var column_info = msg.col_info;
    if (msg.type == 'update_data_view_filter'){
      this.update_data_view(column_info);
    }
    super.handle_msg(msg);
  }

  update_min_max(col_info, has_active_filter) {
    this.values = col_info.values;
    this.length = col_info.length;
    this.value_range = col_info.value_range;
    this.selected_rows = [];
    for (var i = 0; i < col_info.selected_length; i++) {
      this.selected_rows.push(i);
    }
    this.ignore_selection_changed = true;
    this.show_filter();
    this.ignore_selection_changed = false;
  }

  update_data_view(col_info) {
    if (this.update_timeout) {
      clearTimeout(this.update_timeout);
    }

    this.update_timeout = setTimeout(() => {
      this.values = col_info.values;
      this.length = col_info.length;
      this.value_range = col_info.value_range;

      if (this.length === 0) {
        this.filter_elem.find('.no-results').removeClass('hidden');
        this.filter_grid_elem.addClass('hidden');
        return;
      }

      this.filter_elem.find('.no-results').addClass('hidden');
      this.filter_grid_elem.removeClass('hidden');
      this.ignore_selection_changed = true;
      this.update_slick_grid_data();
      this.filter_grid.setData(this.data_view);
      this.selected_rows = [];
      for (var i = 0; i < col_info.selected_length; i++) {
        this.selected_rows.push(i);
        this.row_selection_model.setSelectedRows(this.selected_rows);
      }
      this.filter_grid.render();
      this.ignore_selection_changed = false;
    }, 100);
  }

  update_slick_grid_data() {
    this.grid_items = this.values.map(function (value, index) {
      return {
        id: value,
        value: value
      };
    });

    this.data_view = {
      getLength: () => {
        return this.length;
      },
      getItem: (i) => {
        var default_row = {
          id: 'row' + i,
          value: ''
        };
        if (i >= this.value_range[0] && i < this.value_range[1]) {
          return this.grid_items[i - this.value_range[0]] || default_row;
        } else {
          return default_row;
        }
      }
    };
  }

  initialize_controls() {
    super.initialize_controls();
    this.filter_grid_elem = this.filter_elem.find(".text-filter-grid");
    this.search_string = "";

    this.update_slick_grid_data();

    this.sort_comparer = (x, y) => {
      var x_value = x.value;
      var y_value = y.value;

      // selected row should be sorted to the top
      if (x.selected != y.selected) {
        return x.selected ? -1 : 1;
      }

      return x_value > y_value ? 1 : -1;
    };

    var text_filter = (item, args) => {
      if (this.search_string) {
        if (item.value.toLowerCase().indexOf(this.search_string.toLowerCase()) == -1) {
          return false;
        }
      }
      return true;
    };

    var row_formatter = function (row, cell, value, columnDef, dataContext) {
      return "<span class='text-filter-value'>" + dataContext.value + "</span>";
    };

    var checkboxSelector = new Slick.CheckboxSelectColumn({
      cssClass: "check-box-cell"
    });

    var columns = [
      checkboxSelector.getColumnDefinition(),
      {
        id: "name",
        name: "Name",
        field: "name",
        formatter: row_formatter,
        sortable: true
      }];

    var options = {
      enableCellNavigation: true,
      fullWidthRows: true,
      syncColumnCellResize: true,
      rowHeight: 32,
      forceFitColumns: true,
      enableColumnReorder: false
    };

    var max_height = options.rowHeight * 8;
    // Subtract 110 from viewport height to account for the height of the header + search box + footer
    // of the filter control.  This value can't be calculated dynamically because the filter control
    // hasn't been shown yet.
    var qgrid_viewport_height = this.column_header_elem.closest('.slick-header').siblings('.slick-viewport').height() - 115;
    if (qgrid_viewport_height < max_height) {
      max_height = qgrid_viewport_height;
    }

    var grid_height = max_height;
    // totalRowHeight is how tall the grid would have to be to fit all of the rows in the dataframe.
    var total_row_height = (this.grid_items.length) * options.rowHeight;

    if (total_row_height <= max_height) {
      grid_height = total_row_height;
      this.filter_grid_elem.addClass('hide-scrollbar');
    }
    this.filter_grid_elem.height(grid_height);

    this.filter_grid = new Slick.Grid(
        this.filter_grid_elem, this.data_view, columns, options
    );
    this.filter_grid.registerPlugin(checkboxSelector);

    this.row_selection_model = new Slick.RowSelectionModel({
      selectActiveRow: false
    });
    this.row_selection_model.onSelectedRangesChanged.subscribe(
        (e, args) => this.handle_selection_changed(e, args)
    );

    this.filter_grid.setSelectionModel(this.row_selection_model);
    this.row_selection_model.setSelectedRows(this.selected_rows);

    if (this.column_type != 'any') {
      this.filter_grid.onViewportChanged.subscribe((e, args) => {
        if (this.viewport_timeout) {
          clearTimeout(this.viewport_timeout);
        }
        this.viewport_timeout = setTimeout(() => {
          var vp = args.grid.getViewport();
          var msg = {
            'type': 'change_filter_viewport',
            'field': this.field,
            'top': vp.top,
            'bottom': vp.bottom
          };
          this.widget_model.send(msg);
          this.viewport_timeout = null;
        }, 100);
      });
    }

    this.filter_grid.render();

    this.security_search = this.filter_elem.find(".search-input");
    this.security_search.keyup((e) => this.handle_text_input_key_up(e));
    this.security_search.click((e) => this.handle_text_input_click(e));

    this.filter_grid.onClick.subscribe(
        (e, args) => this.handle_grid_clicked(e, args)
    );
    this.filter_grid.onKeyDown.subscribe(
        (e, args) => this.handle_grid_key_down(e, args)
    );

    this.filter_elem.find("a.select-all-link").click((e) => {
      this.ignore_selection_changed = true;
      this.reset_filter();
      this.filter_list = "all";
      var all_row_indices = [];
      for (var i = 0; i < this.length; i++) {
        all_row_indices.push(i);
      }
      this.row_selection_model.setSelectedRows(all_row_indices);
      this.ignore_selection_changed = false;
      this.send_filter_changed();
      return false;
    });

    setTimeout(() => {
      this.filter_grid.setColumns(this.filter_grid.getColumns());
      this.filter_grid.resizeCanvas();
    }, 10);
  }

  toggle_row_selected(row_index) {
    var old_selected_rows = this.row_selection_model.getSelectedRows();
    // if the row is already selected, remove it from the selected rows array.
    var selected_rows = old_selected_rows.filter(function (word) {
      return word !== row_index;
    });
    // otherwise add it to the selected rows array so it gets selected
    if (selected_rows.length == old_selected_rows.length) {
      selected_rows.push(row_index);
    }
    this.row_selection_model.setSelectedRows(selected_rows);
  }

  handle_grid_clicked(e, args) {
    this.toggle_row_selected(args.row);
    var active_cell = this.filter_grid.getActiveCell();
    if (!active_cell) {
      e.stopImmediatePropagation();
    }
  }

  handle_grid_key_down(e, args) {
    var active_cell = this.filter_grid.getActiveCell();
    if (active_cell) {
      if (e.keyCode == 13) { // enter key
        this.toggle_row_selected(active_cell.row);
        return;
      }

      // focus on the search box for any key other than the up/down arrows
      if (e.keyCode != 40 && e.keyCode != 38) {
        this.focus_on_search_box();
        return;
      }

      // also focus on the search box if we're at the top of the grid and this is the up arrow
      else if (active_cell.row == 0 && e.keyCode == 38) {
        this.focus_on_search_box();
        e.preventDefault();
        return;
      }
    }
  }

  focus_on_search_box() {
    this.security_search.focus().val(this.search_string);
    this.filter_grid.resetActiveCell();
  }

  handle_text_input_key_up(e) {
    var old_search_string = this.search_string;
    if (e.keyCode == 40) { // down arrow
      this.filter_grid.focus();
      this.filter_grid.setActiveCell(0, 0);
      return;
    }
    if (e.keyCode == 13) { // enter key
      if (this.security_grid.getDataLength() > 0) {
        this.toggle_row_selected(0);
        this.security_search.val("");
      }
    }

    this.search_string = this.security_search.val();
    if (old_search_string != this.search_string) {
      var msg = {
        'type': 'show_filter_dropdown',
        'field': this.field,
        'search_val': this.search_string
      };
      this.widget_model.send(msg);
    }
  }

  handle_text_input_click(e) {
    this.filter_grid.resetActiveCell();
  }

  handle_selection_changed(e, args) {
    if (this.ignore_selection_changed) {
      return false;
    }

    var rows = this.row_selection_model.getSelectedRows();
    rows = _.sortBy(rows, function (i) {
      return i;
    });
    this.excluded_rows = [];
    if (this.filter_list == 'all') {
      var j = 0;
      for (var i = 0; i < this.data_view.getLength(); i++) {
        if (rows[j] == i) {
          j += 1;
          continue;
        } else {
          this.excluded_rows.push(i);
        }
      }
    } else {
      this.filter_list = rows.length > 0 ? rows : null;
    }

    this.send_filter_changed();
  }

  is_active() {
    return this.filter_list != null;
  }

  reset_filter() {
    this.ignore_selection_changed = true;
    this.search_string = "";
    this.excluded_rows = null;
    this.security_search.val("");
    this.row_selection_model.setSelectedRows([]);
    this.filter_list = null;
    this.send_filter_changed();
    var msg = {
      'type': 'show_filter_dropdown',
      'field': this.field,
      'search_val': this.search_string
    };
    this.widget_model.send(msg);
    this.ignore_selection_changed = false;
  }

  get_filter_info() {
    return {
      "field": this.field,
      "type": "text",
      "selected": this.filter_list,
      "excluded": this.excluded_rows
    };
  }
}

module.exports = {'TextFilter': TextFilter};


/***/ }),

/***/ "./src/qgrid.widget.js":
/*!*****************************!*\
  !*** ./src/qgrid.widget.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var widgets = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base/@jupyter-widgets/base");
var _ = __webpack_require__(/*! underscore */ "webpack/sharing/consume/default/underscore/underscore?27de");
var moment = __webpack_require__(/*! moment */ "webpack/sharing/consume/default/moment/moment");
window.$ = window.jQuery = __webpack_require__(/*! jquery */ "webpack/sharing/consume/default/jquery/jquery?9ff1");
var date_filter = __webpack_require__(/*! ./qgrid.datefilter.js */ "./src/qgrid.datefilter.js");
var slider_filter = __webpack_require__(/*! ./qgrid.sliderfilter.js */ "./src/qgrid.sliderfilter.js");
var text_filter = __webpack_require__(/*! ./qgrid.textfilter.js */ "./src/qgrid.textfilter.js");
var boolean_filter = __webpack_require__(/*! ./qgrid.booleanfilter.js */ "./src/qgrid.booleanfilter.js");
var editors = __webpack_require__(/*! ./qgrid.editors.js */ "./src/qgrid.editors.js");
var dialog = null;

//try {
//  dialog = require('base/js/dialog');
//} catch (e) {
//  console.warn("Qgrid was unable to load base/js/dialog. " +
//               "Full screen button won't be available");
//}

var jquery_ui = __webpack_require__(/*! jquery-ui-dist/jquery-ui.min.js */ "./node_modules/jquery-ui-dist/jquery-ui.min.js");

__webpack_require__(/*! slickgrid-qgrid/slick.core.js */ "./node_modules/slickgrid-qgrid/slick.core.js");
__webpack_require__(/*! slickgrid-qgrid/lib/jquery.event.drag-2.3.0.js */ "./node_modules/slickgrid-qgrid/lib/jquery.event.drag-2.3.0.js");
__webpack_require__(/*! slickgrid-qgrid/plugins/slick.rowselectionmodel.js */ "./node_modules/slickgrid-qgrid/plugins/slick.rowselectionmodel.js");
__webpack_require__(/*! slickgrid-qgrid/plugins/slick.checkboxselectcolumn.js */ "./node_modules/slickgrid-qgrid/plugins/slick.checkboxselectcolumn.js");
__webpack_require__(/*! slickgrid-qgrid/slick.dataview.js */ "./node_modules/slickgrid-qgrid/slick.dataview.js");
__webpack_require__(/*! slickgrid-qgrid/slick.grid.js */ "./node_modules/slickgrid-qgrid/slick.grid.js");
__webpack_require__(/*! slickgrid-qgrid/slick.editors.js */ "./node_modules/slickgrid-qgrid/slick.editors.js");
__webpack_require__(/*! style-loader!slickgrid-qgrid/slick.grid.css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/slickgrid-qgrid/slick.grid.css");
__webpack_require__(/*! style-loader!slickgrid-qgrid/slick-default-theme.css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/slickgrid-qgrid/slick-default-theme.css");
__webpack_require__(/*! style-loader!jquery-ui-dist/jquery-ui.min.css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/jquery-ui-dist/jquery-ui.min.css");
__webpack_require__(/*! style-loader!./qgrid.css */ "./node_modules/style-loader/dist/cjs.js!./src/qgrid.css");

// Model for the qgrid widget
class QgridModel extends widgets.DOMWidgetModel {
  defaults() {
    return _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
      _model_name : 'QgridModel',
      _view_name : 'QgridView',
      _model_module : 'qgrid',
      _view_module : 'qgrid',
      _model_module_version : '^1.1.3',
      _view_module_version : '^1.1.3',
      _df_json: '',
      _columns: {}
    });
  }
}


// View for the qgrid widget
class QgridView extends widgets.DOMWidgetView {
  render() {
    // subscribe to incoming messages from the QGridWidget
    this.model.on('msg:custom', this.handle_msg, this);
    this.initialize_qgrid();
  }

  /**
   * Main entry point for drawing the widget,
   * including toolbar buttons if necessary.
   */
  initialize_qgrid() {
    this.$el.empty();
    if (!this.$el.hasClass('q-grid-container')){
      this.$el.addClass('q-grid-container');
    }
    this.initialize_toolbar();
    this.initialize_slick_grid();
  }

  initialize_toolbar() {
    if (!this.model.get('show_toolbar')){
      this.$el.removeClass('show-toolbar');
    } else {
      this.$el.addClass('show-toolbar');
    }

    if (this.toolbar){
      return;
    }

    this.toolbar = $("<div class='q-grid-toolbar'>").appendTo(this.$el);

    let append_btn = (btn_info) => {
      return $(`
        <button
        class='btn btn-default'
        data-loading-text='${btn_info.loading_text}'
        data-event-type='${btn_info.event_type}'
        data-btn-text='${btn_info.text}'>
            ${btn_info.text}
        </button>
      `).appendTo(this.toolbar);
    };

    append_btn({
      loading_text: 'Adding...',
      event_type: 'add_row',
      text: 'Add Row'
    });

    append_btn({
      loading_text: 'Removing...',
      event_type: 'remove_row',
      text: 'Remove Row'
    });

    this.buttons = this.toolbar.find('.btn');
    this.buttons.attr('title',
        'Not available while there is an active filter');
    this.buttons.tooltip();
    this.buttons.tooltip({
      show: {delay: 300}
    });
    this.buttons.tooltip({
      hide: {delay: 100, 'duration': 0}
    });
    this.buttons.tooltip('disable');

    this.full_screen_btn = null;
    if (dialog) {
      this.full_screen_modal = $('body').find('.qgrid-modal');
      if (this.full_screen_modal.length == 0) {
        this.full_screen_modal = $(`
          <div class="modal qgrid-modal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body"></div>
              </div>
            </div>
          </div>
        `).appendTo($('body'));
      }
      this.full_screen_btn = $(`
        <button
          class='btn btn-default fa fa-arrows-alt full-screen-btn'/>
      `).appendTo(this.toolbar);
      this.close_modal_btn = $(`
        <button
          class='btn btn-default fa fa-times close-modal-btn'
          data-dismiss="modal"/>
      `).appendTo(this.toolbar);

    }
    this.bind_toolbar_events();
  }

  bind_toolbar_events() {
    this.buttons.off('click');
    this.buttons.click((e) => {
      let clicked = $(e.target);
      if (clicked.hasClass('disabled')){
        return;
      }
      if (this.in_progress_btn){
        alert(`
          Adding/removing row is not available yet because the
          previous operation is still in progress.
        `);
      }
      this.in_progress_btn = clicked;
      clicked.text(clicked.attr('data-loading-text'));
      clicked.addClass('disabled');
      this.send({'type': clicked.attr('data-event-type')});
    });
    if (!this.full_screen_btn) {
      return;
    }
    this.full_screen_btn.off('click');
    this.full_screen_btn.click((e) => {
      this.$el_wrapper = this.$el.parent();
      this.$el_wrapper.height(this.$el_wrapper.height());
      this.$el.detach();
      var modal_options = {
        body: this.$el[0],
        show: false
      };
      if (IPython && IPython.keyboard_manager) {
        modal_options.keyboard_manager = IPython.keyboard_manager;
      }
      var qgrid_modal = dialog.modal(modal_options);

      qgrid_modal.removeClass('fade');
      qgrid_modal.addClass('qgrid-modal');
      qgrid_modal.on('shown.bs.modal', (e) => {
        this.slick_grid.resizeCanvas();
      });
      qgrid_modal.on('hidden.bs.modal', (e) => {
        this.$el.detach();
        this.$el_wrapper.height('auto');
        this.$el_wrapper.append(this.$el);
        this.update_size();
        this.slick_grid.bindAllEvents();
        this.bind_toolbar_events();
      });
      qgrid_modal.modal('show');
    });
  }

  /**
   * Create the grid portion of the widget, which is an instance of
   * SlickGrid, plus automatically created filter controls based on the
   * type of data in the columns of the DataFrame provided by the user.
   */
  initialize_slick_grid() {

    if (!this.grid_elem) {
      this.grid_elem = $("<div class='q-grid'>").appendTo(this.$el);
    }

    // create the table
    var df_json = JSON.parse(this.model.get('_df_json'));
    var columns = this.model.get('_columns');
    this.data_view = this.create_data_view(df_json.data);
    this.grid_options = this.model.get('grid_options');
    this.index_col_name = this.model.get("_index_col_name");
    this.row_styles = this.model.get("_row_styles");

    this.columns = [];
    this.index_columns = [];
    this.filters = {};
    this.filter_list = [];
    this.date_formats = {};
    this.last_vp = null;
    this.sort_in_progress = false;
    this.sort_indicator = null;
    this.resizing_column = false;
    this.ignore_selection_changed = false;
    this.vp_response_expected = false;
    this.next_viewport_msg = null;

    var number_type_info = {
      filter: slider_filter.SliderFilter,
      validator: editors.validateNumber,
      formatter: this.format_number
    };

    var self = this;

    this.type_infos = {
      integer: Object.assign(
        { editor: Slick.Editors.Integer },
        number_type_info
      ),
      number: Object.assign(
        { editor: Slick.Editors.Float },
        number_type_info
      ),
      string: {
        filter: text_filter.TextFilter,
        editor: Slick.Editors.Text,
        formatter: this.format_string
      },
      datetime: {
        filter: date_filter.DateFilter,
        editor: class DateEditor extends Slick.Editors.Date {
          constructor(args) {
            super(args);

            this.loadValue = (item) => {
              this.date_value = item[args.column.field];
              var formatted_val = self.format_date(
                  this.date_value, args.column.field
              );
              this.input = $(args.container).find('.editor-text');
              this.input.val(formatted_val);
              this.input[0].defaultValue = formatted_val;
              this.input.select();
              this.input.on("keydown.nav", function (e) {
                if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
                  e.stopImmediatePropagation();
                }
              });
            };

            this.isValueChanged = () => {
              return this.input.val() != this.date_value;
            };

            this.serializeValue = () => {
              if (this.input.val() === "") {
                  return null;
              }
              var parsed_date = moment.parseZone(
                  this.input.val(), "YYYY-MM-DD HH:mm:ss.SSS"
              );
              return parsed_date.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            };
          }
        },
        formatter: (row, cell, value, columnDef, dataContext) => {
          if (value === null){
            return "NaT";
          }
          return this.format_date(value, columnDef.name);
        }
      },
      any: {
        filter: text_filter.TextFilter,
        editor: editors.SelectEditor,
        formatter: this.format_string
      },
      interval: {
        formatter: this.format_string
      },
      boolean: {
        filter: boolean_filter.BooleanFilter,
        editor: Slick.Editors.Checkbox,
        formatter: (row, cell, value, columngDef, dataContext) => {
          return value ? `<span class="fa fa-check"/>` : "";
        }
      }
    };

    $.datepicker.setDefaults({
      gotoCurrent: true,
      dateFormat: $.datepicker.ISO_8601,
      constrainInput: false,
      "prevText": "",
      "nextText": ""
    });

    var sorted_columns = Object.values(columns).sort(
        (a, b) => a.position - b.position
    );

    for(let cur_column of sorted_columns){
      if (cur_column.name == this.index_col_name){
        continue;
      }

      var type_info = this.type_infos[cur_column.type] || {};

      var slick_column = cur_column;

      Object.assign(slick_column, type_info);

      if (cur_column.type == 'any'){
        slick_column.editorOptions = {
          options: cur_column.constraints.enum
        };
      }

      if (slick_column.filter) {
        var cur_filter = new slick_column.filter(
            slick_column.field,
            cur_column.type,
            this
        );
        this.filters[slick_column.id] = cur_filter;
        this.filter_list.push(cur_filter);
      }

      if (cur_column.width == null){
        delete slick_column.width;
      }

      if (cur_column.maxWidth == null){
        delete slick_column.maxWidth;
      }

      // don't allow editing index columns
      if (cur_column.is_index) {
        slick_column.editor = editors.IndexEditor;
        
        if (cur_column.first_index){
          slick_column.cssClass += ' first-idx-col';
        }
        if (cur_column.last_index){
          slick_column.cssClass += ' last-idx-col';
        }

        slick_column.name = cur_column.index_display_text;
        slick_column.level = cur_column.level;

        if (this.grid_options.boldIndex) {
            slick_column.cssClass += ' idx-col';
        }

        this.index_columns.push(slick_column);
        continue;
      }

      if (cur_column.editable == false) {
        slick_column.editor = null;
      }

      this.columns.push(slick_column);
    }

    if (this.index_columns.length > 0) {
      this.columns = this.index_columns.concat(this.columns);
    }

    var row_count = 0;

    // set window.slick_grid for easy troubleshooting in the js console
    window.slick_grid = this.slick_grid = new Slick.Grid(
      this.grid_elem,
      this.data_view,
      this.columns,
      this.grid_options
    );
    this.grid_elem.data('slickgrid', this.slick_grid);

    if (this.grid_options.forceFitColumns){
      this.grid_elem.addClass('force-fit-columns');
    }

    if (this.grid_options.highlightSelectedCell) {
      this.grid_elem.addClass('highlight-selected-cell');
    }

    // compare to false since we still want to show row
    // selection if this option is excluded entirely
    if (this.grid_options.highlightSelectedRow != false) {
      this.grid_elem.addClass('highlight-selected-row');
    }

    setTimeout(() => {
      this.slick_grid.init();
      this.update_size();
    }, 1);

    this.slick_grid.setSelectionModel(new Slick.RowSelectionModel());
    this.slick_grid.setCellCssStyles("grouping", this.row_styles);
    this.slick_grid.render();
    
    this.update_size();

    var render_header_cell = (e, args) => {
      var cur_filter = this.filters[args.column.id];
        if (cur_filter) {
          cur_filter.render_filter_button($(args.node), this.slick_grid);
        }
    };

    if (this.grid_options.filterable != false) {
      this.slick_grid.onHeaderCellRendered.subscribe(render_header_cell);
    }

    // Force the grid to re-render the column headers so the
    // onHeaderCellRendered event is triggered.
    this.slick_grid.setColumns(this.slick_grid.getColumns());

    $(window).resize(() => {
      this.slick_grid.resizeCanvas();
    });

    this.slick_grid.setSortColumns([]);

    this.grid_header = this.$el.find('.slick-header-columns');
    var handle_header_click = (e) => {
      if (this.resizing_column) {
        return;
      }

      if (this.sort_in_progress){
        return;
      }

      var col_header = $(e.target).closest(".slick-header-column");
      if (!col_header.length) {
        return;
      }

      var column = col_header.data("column");
      if (column.sortable == false){
        return;
      }

      this.sort_in_progress = true;

      if (this.sorted_column == column){
        this.sort_ascending = !this.sort_ascending;
      } else {
        this.sorted_column = column;
        if ('defaultSortAsc' in column) {
          this.sort_ascending = column.defaultSortAsc;
        } else{
          this.sort_ascending = true;
        }
      }

      var all_classes = 'fa-sort-asc fa-sort-desc fa fa-spin fa-spinner';
      var clicked_column_sort_indicator = col_header.find('.slick-sort-indicator');
      if (clicked_column_sort_indicator.length == 0){
        clicked_column_sort_indicator =
            $("<span class='slick-sort-indicator'/>").appendTo(col_header);
      }

      this.sort_indicator = clicked_column_sort_indicator;
      this.sort_indicator.removeClass(all_classes);
      this.grid_elem.find('.slick-sort-indicator').removeClass(all_classes);
      this.sort_indicator.addClass(`fa fa-spinner fa-spin`);
      var msg = {
        'type': 'change_sort',
        'sort_field': this.sorted_column.field,
        'sort_ascending': this.sort_ascending
      };
      this.send(msg);
    };

    if (this.grid_options.sortable != false) {
      this.grid_header.click(handle_header_click)
    }

    this.slick_grid.onViewportChanged.subscribe((e) => {
      if (this.viewport_timeout){
        clearTimeout(this.viewport_timeout);
      }
      this.viewport_timeout = setTimeout(() => {
        this.last_vp = this.slick_grid.getViewport();
        var cur_range = this.model.get('_viewport_range');

        if (this.last_vp.top != cur_range[0] || this.last_vp.bottom != cur_range[1]) {
          var msg = {
            'type': 'change_viewport',
            'top': this.last_vp.top,
            'bottom': this.last_vp.bottom
          };
          if (this.vp_response_expected){
            this.next_viewport_msg = msg
          } else {
            this.vp_response_expected = true;
            this.send(msg);
          }
        }
        this.viewport_timeout = null;
      }, 100);
    });

    // set up callbacks
    let editable_rows = this.model.get('_editable_rows');
    if (editable_rows && Object.keys(editable_rows).length > 0) {
      this.slick_grid.onBeforeEditCell.subscribe((e, args) => {
        editable_rows = this.model.get('_editable_rows');
        return editable_rows[args.item[this.index_col_name]]
      });
    }

    this.slick_grid.onCellChange.subscribe((e, args) => {
      var column = this.columns[args.cell].name;
      var data_item = this.slick_grid.getDataItem(args.row);
      var msg = {'row_index': data_item.row_index, 'column': column,
                 'unfiltered_index': data_item[this.index_col_name],
                 'value': args.item[column], 'type': 'edit_cell'};
      this.send(msg);
    });

    this.slick_grid.onSelectedRowsChanged.subscribe((e, args) => {
      if (!this.ignore_selection_changed) {
        var msg = {'rows': args.rows, 'type': 'change_selection'};
        this.send(msg);
      }
    });

    setTimeout(() => {
      this.$el.closest('.output_wrapper')
          .find('.out_prompt_overlay,.output_collapsed').click(() => {
        setTimeout(() => {
          this.slick_grid.resizeCanvas();
        }, 1);
      });

      this.resize_handles = this.grid_header.find('.slick-resizable-handle');
      this.resize_handles.mousedown((e) => {
        this.resizing_column = true;
      });
      $(document).mouseup(() => {
        // wait for the column header click handler to run before
        // setting the resizing_column flag back to false
        setTimeout(() => {
          this.resizing_column = false;
        }, 1);
      });
    }, 1);
  }

  processPhosphorMessage(msg) {
    super.processPhosphorMessage(msg)
    switch (msg.type) {
    case 'resize':
    case 'after-show':
      if (this.slick_grid){
        this.slick_grid.resizeCanvas();
      }
      break;
    }
  }

  has_active_filter() {
    for (var i=0; i < this.filter_list.length; i++){
      var cur_filter = this.filter_list[i];
      if (cur_filter.is_active()){
        return true;
      }
    }
    return false;
  }

  /**
   * Main entry point for drawing the widget,
   * including toolbar buttons if necessary.
   */
  create_data_view(df) {
    let df_range = this.df_range = this.model.get("_df_range");
    let df_length = this.df_length = this.model.get("_row_count");
    return {
      getLength: () => {
        return df_length;
      },
      getItem: (i) => {
        if (i >= df_range[0] && i < df_range[1]){
          var row = df[i - df_range[0]] || {};
          row.row_index = i;
          return row;
        } else {
          return { row_index: i };
        }
      }
    };
  }

  set_data_view(data_view) {
    this.data_view = data_view;
    this.slick_grid.setData(data_view);
  }

  format_date(date_string, col_name) {
    if (!date_string) {
      return "";
    }
    var parsed_date = moment.parseZone(date_string, "YYYY-MM-DDTHH:mm:ss.SSSZ");
    var date_format = null;
    if (parsed_date.millisecond() != 0){
       date_format = `YYYY-MM-DD HH:mm:ss.SSS`;
    } else if (parsed_date.second() != 0){
      date_format = "YYYY-MM-DD HH:mm:ss";
    } else if (parsed_date.hour() != 0 || parsed_date.minute() != 0) {
      date_format = "YYYY-MM-DD HH:mm";
    } else {
      date_format = "YYYY-MM-DD";
    }

    if (col_name in this.date_formats){
      var old_format = this.date_formats[col_name];
      if (date_format.length > old_format.length){
        this.date_formats[col_name] = date_format;
        setTimeout(() => {
          this.slick_grid.invalidateAllRows();
          this.slick_grid.render();
        }, 1);
      } else {
        date_format = this.date_formats[col_name];
      }
    } else {
      this.date_formats[col_name] = date_format;
    }

    return parsed_date.format(date_format);
  }

  format_string(row, cell, value, columnDef, dataContext) {
    return value;
  }

  format_number(row, cell, value, columnDef, dataContext) {
    if (value === null){
      return 'NaN';
    }
    return value;
  }

  /**
   * Handle messages from the QGridWidget.
   */
  handle_msg(msg) {
    if (msg.type === 'draw_table') {
      this.initialize_slick_grid();
    } else if (msg.type == 'show_error') {
      alert(msg.error_msg);
      if (msg.triggered_by == 'add_row' ||
        msg.triggered_by == 'remove_row'){
        this.reset_in_progress_button();
      }
    } else if (msg.type == 'update_data_view') {
      if (this.buttons) {
        if (this.has_active_filter()) {
          this.buttons.addClass('disabled');
          this.buttons.tooltip('enable');
        } else if (this.buttons.hasClass('disabled')) {
          this.buttons.removeClass('disabled');
          this.buttons.tooltip('disable');
        }
      }
      if (this.update_timeout) {
        clearTimeout(this.update_timeout);
      }
      this.update_timeout = setTimeout(() => {
        var df_json = JSON.parse(this.model.get('_df_json'));
        this.row_styles = this.model.get("_row_styles");
        this.multi_index = this.model.get("_multi_index");
        var data_view = this.create_data_view(df_json.data);

        if (msg.triggered_by === 'change_viewport') {
          if (this.next_viewport_msg) {
            this.send(this.next_viewport_msg);
            this.next_viewport_msg = null;
            return;
          } else {
            this.vp_response_expected = false;
          }
        }

        if (msg.triggered_by == 'change_sort' && this.sort_indicator) {
          var asc = this.model.get('_sort_ascending');
          this.sort_indicator.removeClass(
              'fa-spinner fa-spin fa-sort-asc fa-sort-desc'
          );
          var fa_class = asc ? 'fa-sort-asc' : 'fa-sort-desc';
          this.sort_indicator.addClass(fa_class);
          this.sort_in_progress = false;
        }

        let top_row = null;
        if (msg.triggered_by === 'remove_row') {
          top_row = this.slick_grid.getViewport().top;
        }

        this.set_data_view(data_view);

        var skip_grouping = false;
        if (this.multi_index) {
          for (var i = 1; i < this.filter_list.length; i++) {
            var cur_filter = this.filter_list[i];
            if (cur_filter.is_active()) {
              skip_grouping = true;
            }
          }
        }

        if (skip_grouping) {
          this.slick_grid.removeCellCssStyles("grouping");
        } else {
          this.slick_grid.setCellCssStyles("grouping", this.row_styles);
        }

        this.slick_grid.render();

        if ((msg.triggered_by == 'add_row' ||
            msg.triggered_by == 'remove_row') && !this.has_active_filter()) {
          this.update_size();
        }
        this.update_timeout = null;
        this.reset_in_progress_button();
        if (top_row) {
          this.slick_grid.scrollRowIntoView(top_row);
        } else if (msg.triggered_by === 'add_row') {
          this.slick_grid.scrollRowIntoView(msg.scroll_to_row);
          this.slick_grid.setSelectedRows([msg.scroll_to_row]);
        } else if (msg.triggered_by === 'change_viewport' &&
            this.last_vp.bottom >= this.df_length) {
          this.slick_grid.scrollRowIntoView(this.last_vp.bottom);
        }

        var selected_rows = this.slick_grid.getSelectedRows().filter((row) => {
          return row < Math.min(this.df_length, this.df_range[1]);
        });
        this.send({
          'rows': selected_rows,
          'type': 'change_selection'
        });
      }, 100);
    } else if (msg.type == 'change_grid_option') {
      var opt_name = msg.option_name;
      var opt_val = msg.option_value;
      if (this.slick_grid.getOptions()[opt_name] != opt_val) {
        this.slick_grid.setOptions({[opt_name]: opt_val});
        this.slick_grid.resizeCanvas();
      }
    } else if (msg.type == 'change_selection') {
      this.ignore_selection_changed = true;
      this.slick_grid.setSelectedRows(msg.rows);
      if (msg.rows && msg.rows.length > 0) {
        this.slick_grid.scrollRowIntoView(msg.rows[0]);
      }
      this.ignore_selection_changed = false;
    } else if (msg.type == 'change_show_toolbar') {
      this.initialize_toolbar();
    } else if (msg.col_info) {
      var filter = this.filters[msg.col_info.name];
      filter.handle_msg(msg);
    }
  }

  reset_in_progress_button() {
    if (this.in_progress_btn){
      this.in_progress_btn.removeClass('disabled');
      this.in_progress_btn.text(
        this.in_progress_btn.attr('data-btn-text')
      );
      this.in_progress_btn = null;
    }
  }

  /**
   * Update the size of the dataframe.
   */
  update_size() {
    var row_height = this.grid_options.rowHeight;
    var min_visible = 'minVisibleRows' in this.grid_options ?
        this.grid_options.minVisibleRows : 8;
    var max_visible = 'maxVisibleRows' in this.grid_options ?
        this.grid_options.maxVisibleRows : 15;

    var min_height = row_height * min_visible;
    // add 2 to maxVisibleRows to account for the header row and padding
    var max_height = 'height' in this.grid_options ? this.grid_options.height :
      row_height * (max_visible + 2);
    var grid_height = max_height;
    var total_row_height = (this.data_view.getLength() + 1) * row_height + 1;
    if (total_row_height <= max_height){
      grid_height = Math.max(min_height, total_row_height);
      this.grid_elem.addClass('hide-scrollbar');
    } else {
      this.grid_elem.removeClass('hide-scrollbar');
    }
    this.grid_elem.height(grid_height);
    this.slick_grid.render();
    this.slick_grid.resizeCanvas();
  }
}

module.exports = {
  QgridModel : QgridModel,
  QgridView : QgridView
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"qgrid2","version":"1.1.3","description":"An Interactive Grid for Sorting and Filtering DataFrames in Jupyter Notebook","author":{"name":"Quantopian Inc.","email":"some@some.com"},"main":"src/index.js","homepage":"Doesnot exist","repository":{"type":"git","url":"https://github.com/Quantopian/qgrid.git"},"keywords":["jupyter","widgets","ipython","ipywidgets"],"license":"BSD-3","scripts":{"build":"jlpm run build:lib && jlpm run build:labextension:dev","build:labextension":"jupyter labextension build .","build:labextension:dev":"jupyter labextension build --development True .","build:lib":"tsc","build:prod":"jlpm run clean && jlpm run build:lib && jlpm run build:labextension","clean":"jlpm run clean:lib","clean:all":"jlpm run clean:lib && jlpm run clean:labextension","clean:labextension":"rimraf qgrid2/labextension","clean:lib":"rimraf lib tsconfig.tsbuildinfo","eslint":"eslint . --ext .ts,.tsx --fix","eslint:check":"eslint . --ext .ts,.tsx","install:extension":"jlpm run build","prepare":"webpack","test":"echo \\"Error: no test specified\\" && exit 1","watch":"run-p watch:src watch:labextension","watch:labextension":"jupyter labextension watch .","watch:src":"tsc -w"},"devDependencies":{"@jupyterlab/builder":"^3.1.0","@typescript-eslint/eslint-plugin":"^4.8.1","@typescript-eslint/parser":"^4.8.1","css-loader":"^3.4.2","eslint":"^7.14.0","eslint-config-prettier":"^6.15.0","eslint-plugin-prettier":"^3.1.4","expose-loader":"^0.7.5","file-loader":"^6.0.0","jshint":"^2.11.0","json-loader":"^0.5.7","npm-run-all":"^4.1.5","prettier":"^2.1.1","rimraf":"^3.0.2","style-loader":"^1.1.3","typescript":"~4.1.3","webpack":"^4.42.0","webpack-cli":"^3.3.11"},"dependencies":{"@jupyter-widgets/base":"^1.1 || ^2 || ^3 || ^4","@jupyter-widgets/controls":"^1 || ^2 || ^3","@jupyterlab/application":"^3.2.1","@jupyterlab/apputils":"^3.2.1","clean":"^4.0.2","jquery":"^3.2.1","jquery-ui-dist":"^1.12.1","moment":"^2.24.0","slickgrid-qgrid":"0.0.5","underscore":"^1.9.2"},"jshintConfig":{"esversion":6},"files":["dist/","src/","style/index.js"],"jupyterlab":{"extension":"src/jupyterlab-plugin","outputDir":"qgrid2/labextension"},"styleModule":"style/index.js"}');

/***/ })

}]);
//# sourceMappingURL=src_index_js.3e779b61d3b798174684.js.map