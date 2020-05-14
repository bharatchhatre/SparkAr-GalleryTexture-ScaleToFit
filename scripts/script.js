/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const D = require('Diagnostics');
const Textures = require('Textures');
const TextureBase  = require('TextureBase');
const TouchGestures = require('TouchGestures');
const Patches = require('Patches');


	
	

Promise.all([
    Textures.findFirst('galleryTexture0'),
	    Scene.root.findFirst('height'),
	    Scene.root.findFirst('Width'),
	    Scene.root.findFirst('text'),

]).then(function (results) {
	
const galleryTexture = results[0];

    galleryTexture.width.monitor({fireOnInitialValue: true}).subscribe(function(val) {

        // Once we know the width, pass it to the patch editor
				Patches.inputs.setScalar('height', results[0].height);
				Patches.inputs.setScalar('weight', results[0].width);
				results[1].text=results[0].height.toString();
				results[2].text=results[0].width.toString();
    });



Patches.inputs.setScalar('height', results[0].height);
Patches.inputs.setScalar('weight', results[0].width);




});

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
