/*
Name: Map
Project: Maelström - World
Author: demiurgosoft <demiurgosoft@hotmail.com>
Description: 
*/

var utils = require('./utils');

var map = {
	cities: {},
	addCity: function(city) {
		if (city && city.slug) {
			this.cities[city.slug] = city;
		}
	},
	getCity: function(name, done) {
		var c = this.cities[name];
		if (!c) return done(new Error("No city found"));
		return done(null, c);
	},
	getAllCities: function(done) {
		return done(null, Object.keys(this.cities));
	},
	isCity: function(name) {
		if (this.cities[name]) return true;
		else return false;
	},
	updateCities: function(done) {
		for (var i in this.cities) {
			this.cities[i].update();
		}
		done(null);
	},
	getDistance: function(city1, city2, done) {
		var pos1 = this.cities[city1].position;
		var pos2 = this.cities[city2].position;
		if (!pos1 || !pos2) return done(new Error("Invalid positions"));
		var dx = pos1[0] - pos2[0];
		var dy = pos1[1] - pos2[1];

		var distance = Math.sqrt(dx * dx + dy * dy);
		if (distace >= 0) return done(null, distance);
		else return done(new Error("Error in distance"));

	},
	clear: function() {
		this.cities = {};
	}
};

module.exports = map;