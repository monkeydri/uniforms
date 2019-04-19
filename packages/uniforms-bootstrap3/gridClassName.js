"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gridClassName;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

_filterDOMProps.default.register('grid');

function gridClassNamePart(size, value, side) {
  return side === 'label' ? "col-".concat(size, "-").concat(value) : "col-".concat(size, "-").concat(12 - value);
}

function gridClassName(grid, side) {
  // Example: 6
  if (typeof grid === 'number') {
    return gridClassNamePart('sm', grid, side);
  } // Example: '6'


  if (typeof grid === 'string' && !isNaN(parseInt(grid))) {
    return gridClassNamePart('sm', parseInt(grid), side);
  } // Example: 'col-md-6'


  if (typeof grid === 'string') {
    return grid;
  } // Example: {xs: 6, sm: 4, md: 3}


  if ((0, _typeof2.default)(grid) === 'object') {
    return Object.keys(grid).map(function (size) {
      return gridClassNamePart(size, grid[size], side);
    }).join(' ');
  }

  return '';
}