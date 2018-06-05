describe("String Kata", function () {
    describe("with a comma as a delimiter", function () {
        it("should return the 0 if give nothing", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("");
            //Assert
            let expected = 0;
            expect(actual).toBe(expected);
        });
        it("should return the number if given only 1 number", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("1");
            //Assert
            let expected = 1;
            expect(actual).toBe(expected);
        });
        it("should return the product of 2 numbers", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("1,2");
            //Assert
            let expected = 3;
            expect(actual).toBe(expected);
        });
        it("should return the product of 3 numbers", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("1,2,3");
            //Assert
            let expected = 6;
            expect(actual).toBe(expected);
        });
        it("should return the product of 4 numbers", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("1,2,3,4");
            //Assert
            let expected = 10;
            expect(actual).toBe(expected);
        });
        it("should return the product of an unlimited amount of numbers", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("1,2,3,4,5,6,7,8,9");
            //Assert
            let expected = 45;
            expect(actual).toBe(expected);
        });
    });
    describe("with a new line as a delimiter", function () {
        it("should return the product of an 3 numbers", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("1\n2\n3");
            //Assert
            let expected = 6;
            expect(actual).toBe(expected);
        });
    });
    describe("with a new line and commas as delimiters", function () {
        it("should return the product of an 3 numbers ", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("1\n2,3");
            //Assert
            let expected = 6;
            expect(actual).toBe(expected);
        });
    });
    describe("with mutiple delimiters", function () {
        it("should return the product of an 3 numbers ", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("//[;]\n1;2;3");
            //Assert
            let expected = 6;
            expect(actual).toBe(expected);
        });
    });
    describe("for numbers greater than 1000", function () {
        it("should return 1001 ", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("1000,1");
            //Assert
            let expected = 1001;
            expect(actual).toBe(expected);
        });
        it("should return 4", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("1001,1,2,1");
            //Assert
            let expected = 4;
            expect(actual).toBe(expected);
        });
        it("should return 1003", function () {
            //Arrange
            let kata = new stringKata();
            //Act
            let actual = kata.returnProduct("999,1,2,1");
            //Assert
            let expected = 1003;
            expect(actual).toBe(expected);
        });
    });
});