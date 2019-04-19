"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gridClassName;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _filterDOMProps = _interopRequireDefault(require("uniforms/filterDOMProps"));

_filterDOMProps.default.register('grid');

function gridClassNamePart(size, value, side) {
  var sizeInfix = size === 'xs' ? '' : "".concat(size, "-");
  return side === 'label' ? "col-".concat(sizeInfix).concat(value) : "col-".concat(sizeInfix).concat(12 - value);
}

var gridOrder = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};

function compareSizeClass(a, b) {
  return gridOrder[a] - gridOrder[b];
}

function gridClassName(grid, side) {
  // Example: 6
  if (typeof grid === 'number') {
    return gridClassNamePart('xs', grid, side);
  } // Example: '6'


  if (typeof grid === 'string' && !isNaN(parseInt(grid))) {
    return gridClassNamePart('xs', parseInt(grid), side);
  } // Example: 'col-md-6'


  if (typeof grid === 'string') {
    return grid;
  } // Example: {xs: 6, sm: 4, md: 3}


  if ((0, _typeof2.default)(grid) === 'object') {
    if (!grid.xs) {
      grid = (0, _objectSpread2.default)({
        xs: grid.sm || grid.md || grid.lg || grid.xl
      }, grid);
    }

    return Object.keys(grid).sort(compareSizeClass).map(function (size) {
      return gridClassNamePart(size, grid[size], side);
    }).join(' ');
  }

  return '';
}