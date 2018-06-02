/* eslint-disable */
import d3SankeyCircular from './components/d3SankeyCircular';
import d3Timelion from './components/d3Timelion';
import d3Timeline from './components/d3Timeline';
import d3Pie from './components/d3Pie';
import d3Line from './components/d3Line';
import d3ProgressArc from './components/d3ProgressArc';
import d3Metric from './components/d3Metric';
import d3Circle from './components/d3Circle';
import d3MultiLine from './components/d3MultiLine';
import d3HorizontalBar from './components/d3HorizontalBar';
import d3VerticalBar from './components/d3VerticalBar';
import d3Area from './components/d3Area';
import d3Tracker from './components/d3Tracker';
import d3Slider from './components/d3Slider';
import d3ICicle from './components/d3ICicle';
import d3Sunburst from './components/d3Sunburst';

const install = (Vue, options = {}) => {
    if (options.store) {
        // register store
    }
    Vue.component(d3SankeyCircular.name, d3SankeyCircular);
    Vue.component(d3Timelion.name, d3Timelion);
    Vue.component(d3Timeline.name, d3Timeline);
    Vue.component(d3ProgressArc.name, d3ProgressArc);
    Vue.component(d3Pie.name, d3Pie);
    Vue.component(d3Line.name, d3Line);
    Vue.component(d3Metric.name, d3Metric);
    Vue.component(d3Circle.name, d3Circle);
    Vue.component(d3MultiLine.name, d3MultiLine);
    Vue.component(d3HorizontalBar.name, d3HorizontalBar);
    Vue.component(d3VerticalBar.name, d3VerticalBar);
    Vue.component(d3Area.name, d3Area);
    Vue.component(d3Tracker.name, d3Tracker);
    Vue.component(d3Slider.name, d3Slider);
    Vue.component(d3ICicle.name, d3ICicle);
    Vue.component(d3Sunburst.name, d3Sunburst);
};

export default {
    // global install
    install,
};

export {
    // local install
    d3SankeyCircular,
    d3Timelion,
    d3ProgressArc,
    d3Timeline,
    d3Pie,
    d3Line,
    d3Metric,
    d3MultiLine,
    d3Circle,
    d3HorizontalBar,
    d3VerticalBar,
    d3Area,
    d3Tracker,
    d3Slider,
    d3ICicle,
    d3Sunburst
};

