const Employee = require('../Lib/Employee');

describe('Employee', ()=>{
    describe('constructor', ()=>{
        it('Should return an object.', ()=>{
            // Arrange // Act
            const obj = new Employee();
            // Assert
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
        it('Should set name, id, email.', ()=>{
            // Arrange
            const name = 'jimBob';
            const id = '187';
            const email = 'jimBob@Aol.com';
            // Act
            const obj = new Employee(name, id, email);
            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });
    describe('getName', () => {
        it('Should return name.', ()=>{
            // Arrange
            const name='jimBob';
            // Act
            const newName=new Employee(name,'187','jimBob@Aol.com').getName();
            // Assert
            expect(name).toEqual(newName);
        });
    });
    describe('getId', ()=>{
        it('Should return id.', ()=>{
            // Arrange
            const id='187';
            // Act
            const newId=new Employee('jimBob', id, 'jimBob@Aol.com').getId();
            // Assert
            expect(id).toEqual(newId);
        });
    });
    describe('getEmail', () => {
        it('Should return email.', ()=>{
            // Arrange
            const email='jimBob@Aol.com';
            // Act
            const newEmail=new Employee('jimBob', '187', email).getEmail();
            // Assert
            expect(email).toEqual(newEmail);
        });
    });
    describe('getRole', ()=>{
        it('Should return role.', ()=>{
            // Arrange
            const role='Employee';
            // Act
            const newRole=new Employee('jimBob','187','jimBob@Aol.com').getRole();
            // Assert
            expect(role).toEqual(newRole);
        });
    });
});