it('should throw an error when a non string is passed', function() {//12
    const inputName = 1234;
    const expectedOutput = Error;
    assert.throws(() => {nameInverter(inputName); }, Error);
  });
