import React from 'react';
import swift from '../assets/images/lang/swift.png';
import objc from '../assets/images/lang/objc.png';
import js from '../assets/images/lang/js.png';
import node from '../assets/images/lang/nodejsgreen.png';
import reactIcon from '../assets/images/lang/react.png';
import amazonAWS from '../assets/images/lang/amazonaws.png';
import mongodb from '../assets/images/lang/mongodb.png';
import babel from '../assets/images/lang/babel.png';
import backbone from '../assets/images/lang/backbonejs.png';
import cocoapods from '../assets/images/lang/cocoapods.png';
import express from '../assets/images/lang/express.png';
import ghost from '../assets/images/lang/ghostio.png';
import git from '../assets/images/lang/github.png';
import grunt from '../assets/images/lang/grunt.png';
import gulp from '../assets/images/lang/gulp.png';
import hbs from '../assets/images/lang/handlebars.png';
import keystone from '../assets/images/lang/keystone.png';
import neat from '../assets/images/lang/neat.png';
import npm from '../assets/images/lang/npm.png';
import patternlab from '../assets/images/lang/patternlab.png';
import sass from '../assets/images/lang/sass.png';
import ps from '../assets/images/lang/ps.jpg';
import illustrator from '../assets/images/lang/illustrator.jpg';
import sketch from '../assets/images/lang/sketch.png';

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <ul className="skills-table">
        <li><img src={objc} className="skills-img" alt="Objective-C"/></li>
        <li><img src={swift} className="skills-img" alt="Swift"/></li>
        <li><img src={js} className="skills-img" alt="Javascript"/></li>
        <li><img src={node} className="skills-sm" alt="Node JS"/></li>
        <li><img src={reactIcon} className="skills-img" alt="React JSX"/></li>
        <li><img src={amazonAWS} className="skills-img" alt="Amazon AWS"/></li>
        <li><img src={mongodb} className="skills-sm" alt="Mongo DB"/></li>
        <li><img src={babel} className="skills-img" alt="Babel"/></li>
        <li><img src={backbone} className="skills-img" alt="Backbone JS"/></li>
        <li><img src={cocoapods} className="skills-sm" alt="Cocoapods"/></li>
        <li><img src={express} className="skills-sm" alt="Express"/></li>
        <li><img src={ghost} className="skills-img" alt="Ghost IO"/></li>
        <li><img src={git} className="skills-img" alt="Git"/></li>
        <li><img src={grunt} className="skills-img" alt="Grunt"/></li>
        <li><img src={gulp} className="skills-img" alt="Gulp"/></li>
        <li><img src={hbs} className="skills-sm" alt="Handlebars"/></li>
        <li><img src={keystone} className="skills-img" alt="Keystone JS"/></li>
        <li><img src={neat} className="skills-img" alt="Bourbon Neat"/></li>
        <li><img src={npm} className="skills-sm" alt="npm"/></li>
        <li><img src={patternlab} className="skills-img" alt="patternlab"/></li>
        <li><img src={sass} className="skills-sm" alt="sass"/></li>
        <li><img src={ps} className="skills-img" alt="photoshop"/></li>
        <li><img src={illustrator} className="skills-img" alt="illustrator"/></li>
        <li><img src={sketch} className="skills-img" alt="sketch"/></li>
      </ul>
    </div>
  );
};

export default Skills;