module.exports = {
	cities: "id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, name VARCHAR(64) NOT NULL UNIQUE, positionX INT NOT NULL, positionY INT NOT NULL",

	products: "id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, name VARCHAR(64) NOT NULL UNIQUE, basePrice FLOAT UNSIGNED NOT NULL",

	users: "id INT UNSIGNED PRIMARY KEY, money INT UNSIGNED NOT NULL",

	shipModels: "id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, name VARCHAR(64) NOT NULL UNIQUE, life INT UNSIGNED NOT NULL, speed FLOAT UNSIGNED NOT NULL, price INT UNSIGNED NOT NULL, cargo INT UNSIGNED NOT NULL",

	userShips: "id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,	userId INT UNSIGNED NOT NULL, name VARCHAR(64) NOT NULL, model INT UNSIGNED NOT NULL REFERENCES ship_models(id), life INT UNSIGNED NOT NULL, status VARCHAR(64) NOT NULL, city INT UNSIGNED NOT NULL REFERENCES cities(id), destiny INT UNSIGNED REFERENCES cities(id), remaining INT UNSIGNED, FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE, CONSTRAINT UNIQUE(userId,name)",

	shipProducts: "shipId INT UNSIGNED, productId INT UNSIGNED, quantity INT UNSIGNED NOT NULL, PRIMARY KEY(shipId,productId), FOREIGN KEY(shipId) REFERENCES user_ships(id) ON DELETE CASCADE, FOREIGN KEY(productId) REFERENCES products(id) ON DELETE CASCADE",

	cityProducts: "cityId INT UNSIGNED, productId INT UNSIGNED, quantity FLOAT UNSIGNED NOT NULL, production FLOAT UNSIGNED NOT NULL, consumption FLOAT UNSIGNED NOT NULL, PRIMARY KEY(cityId,productId), FOREIGN KEY(cityId) REFERENCES cities(id) ON DELETE CASCADE, FOREIGN KEY(productId) REFERENCES products(id) ON DELETE CASCADE"
};